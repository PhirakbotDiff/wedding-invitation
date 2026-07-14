import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const MINI_APP_SHORT_NAME = process.env.TELEGRAM_MINI_APP_SHORT_NAME!;
const BOT_USERNAME = process.env.TELEGRAM_BOT_USERNAME!;

async function sendMessage(chatId: number, text: string, replyMarkup?: object) {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      reply_markup: replyMarkup,
    }),
  });
  const data = await res.json();
  if (!data.ok) {
    console.error("Telegram sendMessage failed:", JSON.stringify(data));
  }
}

export async function POST(req: Request) {
  try {
    const update = await req.json();
    const message = update?.message;

    if (!message?.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId: number = message.chat.id;
    const text: string = message.text;

    if (text.startsWith("/start")) {
      const inviteCode = text.split(" ")[1]?.trim().toUpperCase() || null;

      const buttonUrl = inviteCode
        ? `https://t.me/${BOT_USERNAME}/${MINI_APP_SHORT_NAME}?startapp=${inviteCode}`
        : `https://t.me/${BOT_USERNAME}/${MINI_APP_SHORT_NAME}`;

      const messageText = inviteCode
        ? "🎊 សូមអានការអញ្ជើញរបស់អ្នក!\nYou have a wedding invitation waiting."
        : "🎊 Welcome! Open the wedding invitation below.";

      await sendMessage(chatId, messageText, {
        inline_keyboard: [
          [{ text: "💌 Open Invitation", web_app: { url: buttonUrl } }],
        ],
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Telegram webhook error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
