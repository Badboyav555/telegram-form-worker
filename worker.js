export default {
  async fetch(request, env) {

    if (request.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    const data = await request.json();

    const text = `🧪 New Form Data

👤 Name: ${data.name}
💬 Message: ${data.message}`;

    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
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
