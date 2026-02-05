export default {
  async fetch(request, env) {

    if (request.method === "POST") {
      const data = await request.json();
      const text = data.msg || "Empty message";

      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text
        })
      });

      return new Response("Sent");
    }

    return new Response(`
      <html>
        <body>
          <h3>Telegram Alert Form</h3>
          <form id="myForm">
            <input name="msg" placeholder="Message likh" required />
            <button type="submit">Send</button>
          </form>

          <script>
            document.getElementById("myForm").addEventListener("submit", async (e) => {
              e.preventDefault();
              const msg = e.target.msg.value;
              await fetch("/", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({msg})
              });
              alert("Sent");
            });
          </script>
        </body>
      </html>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
