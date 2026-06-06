const makeWASocket = require("@whiskeysockets/baileys").default;
const { useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const readline = require("readline");

async function startBot() {

    const { state, saveCreds } = await useMultiFileAuthState("./auth_info");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        browser: ["Luna", "Chrome", "9.0"],
        connectTimeoutMs: 60000,
        keepAliveIntervalMs: 20000,
        markOnlineOnConnect: true
    });

    // Save session safely
    sock.ev.on("creds.update", saveCreds);

    // CONNECTION HANDLER (VERY IMPORTANT FIX)
    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        console.log("STATUS:", connection);

        if (connection === "open") {
            console.log("🌙 Luna Connected Successfully");
        }

        if (connection === "close") {
            const reason = lastDisconnect?.error?.output?.statusCode;

            console.log("❌ Connection closed. Reason:", reason);

            // SAFE RECONNECT LOGIC (prevents loops)
            if (reason !== DisconnectReason.loggedOut) {
                console.log("🔁 Reconnecting in 5 seconds...");
                setTimeout(startBot, 5000);
            } else {
                console.log("⚠️ Logged out. Delete auth_info and re-pair.");
            }
        }
    });

    // PAIRING ONLY IF NOT REGISTERED
    if (!state.creds.registered) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter WhatsApp number (2567XXXXXXX): ", async (number) => {

            try {
                console.log("\n⏳ Requesting pairing code...\n");

                const code = await sock.requestPairingCode(number.trim());

                console.log("\n📌 PAIRING CODE:");
                console.log("====================");
                console.log(code);
                console.log("====================");

            } catch (err) {
                console.log("❌ Pairing failed:");
                console.dir(err, { depth: null });
            }

            rl.close();
        });
    }

}

startBot();
