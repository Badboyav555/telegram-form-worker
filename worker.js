export default {
  async fetch(req, env) {

    if (req.method !== "POST")
      return new Response("OK");

    const data = await req.json();

    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text: data.message
      })
    });

    return new Response("sent");
  }
}
