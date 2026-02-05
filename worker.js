export default {
  async fetch(request, env) {

    const text = "Bhai alert aa gaya 🔔";

    const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text: text
      })
    });

    return new Response("OK");
  }
};
