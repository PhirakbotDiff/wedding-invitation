import guestsData from "@/app/data/guests.json";

export interface Guest {
  id: string;
  name: string;
  allowed: number;
}

const guestsById: Record<string, Guest> = guestsData.reduce((acc, guest) => {
  acc[guest.id.toUpperCase()] = guest;
  return acc;
}, {} as Record<string, Guest>);

export function getGuestByInviteId(rawId: string): Guest | null {
  const inviteId = decodeURIComponent(rawId).trim().toUpperCase();

  if (!inviteId) return null;

  const exactMatch = guestsById[inviteId];
  if (exactMatch) return exactMatch;

  // Telegram Mini App start parameters are sometimes wrapped in prefixes,
  // separators, or payloads (e.g. invite_HCF01, code=HCF01).
  const tokenCandidates = inviteId
    .split(/[^A-Z0-9]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  for (const token of tokenCandidates) {
    const guest = guestsById[token];
    if (guest) return guest;
  }

  return null;
}
