import { google } from "googleapis";

export async function getGuest(id: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A2:D100",
  });

  const rows = response.data.values;

  const guest = rows?.find((row) => row[0] === id);

  if (!guest) return null;

  return {
    name: guest[1],
    allowed: guest[2],
    rsvp: guest[3],
  };
}
