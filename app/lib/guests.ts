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
  return guestsById[inviteId] ?? null;
}
