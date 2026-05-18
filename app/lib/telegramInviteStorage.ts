const INVITE_STORAGE_KEY = "wedding_invite_code";

type MaybePromise<T> = T | Promise<T>;

type TelegramStorageLike = {
  getItem?: (key: string) => MaybePromise<string | null | undefined>;
  setItem?: (key: string, value: string) => MaybePromise<unknown>;
};

type TelegramWebAppLike = {
  deviceStorage?: TelegramStorageLike;
  DeviceStorage?: TelegramStorageLike;
  CloudStorage?: TelegramStorageLike;
};

function normalize(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const cleaned = decodeURIComponent(value).trim().toUpperCase();
    return cleaned || null;
  } catch {
    const cleaned = value.trim().toUpperCase();
    return cleaned || null;
  }
}

function getStorageCandidates(webApp?: TelegramWebAppLike): TelegramStorageLike[] {
  const candidates: TelegramStorageLike[] = [];
  if (webApp?.deviceStorage) candidates.push(webApp.deviceStorage);
  if (webApp?.DeviceStorage) candidates.push(webApp.DeviceStorage);
  if (webApp?.CloudStorage) candidates.push(webApp.CloudStorage);
  return candidates;
}

async function readFromTelegramStorage(webApp?: TelegramWebAppLike): Promise<string | null> {
  for (const storage of getStorageCandidates(webApp)) {
    if (!storage.getItem) continue;
    try {
      const value = await storage.getItem(INVITE_STORAGE_KEY);
      const normalized = normalize(value ?? null);
      if (normalized) return normalized;
    } catch {
      // ignore
    }
  }

  return null;
}

async function writeToTelegramStorage(code: string, webApp?: TelegramWebAppLike): Promise<void> {
  for (const storage of getStorageCandidates(webApp)) {
    if (!storage.setItem) continue;
    try {
      await storage.setItem(INVITE_STORAGE_KEY, code);
      return;
    } catch {
      // ignore and continue to next fallback
    }
  }
}

function readBrowserStorage(): string | null {
  try {
    const localValue = normalize(window.localStorage.getItem(INVITE_STORAGE_KEY));
    if (localValue) return localValue;
  } catch {
    // ignore storage access issues in restricted webviews
  }

  try {
    return normalize(window.sessionStorage.getItem(INVITE_STORAGE_KEY));
  } catch {
    return null;
  }
}

function writeBrowserStorage(code: string): void {
  try {
    window.localStorage.setItem(INVITE_STORAGE_KEY, code);
  } catch {
    // ignore storage access issues in restricted webviews
  }

  try {
    window.sessionStorage.setItem(INVITE_STORAGE_KEY, code);
  } catch {
    // ignore storage access issues in restricted webviews
  }
}

export async function persistInviteCode(code: string, webApp?: TelegramWebAppLike): Promise<void> {
  const normalized = normalize(code);
  if (!normalized) return;

  await writeToTelegramStorage(normalized, webApp);
  writeBrowserStorage(normalized);
}

export async function readPersistedInviteCode(webApp?: TelegramWebAppLike): Promise<string | null> {
  const telegramStored = await readFromTelegramStorage(webApp);
  if (telegramStored) return telegramStored;

  return readBrowserStorage();
}

export { INVITE_STORAGE_KEY };
