const config = require("./config");

async function handleCommand(command, sender) {

switch(command) {

    case "menu":
        return `

╔══════════════╗
🌙 LUNA AI
╚══════════════╝

👤 Creator:
${config.OWNER_NAME}

📋 Commands

.menu
.help
.about
.ping

🎉 Fun

.joke
.fact
.quote

⚙️ Utility

.time
.calc

═══════════════
`;

    case "ping":
        return "🏓 Pong! Luna is online.";

    case "about":
        return `

🌙 ${config.BOT_NAME}

Creator: ${config.OWNER_NAME}

Version: ${config.VERSION}

${config.DESCRIPTION}
`;

    case "help":
        return `

🤖 Luna Help

Use:
.menu

to see all commands.
`;

    case "joke":
        return "😂 Why don't programmers like nature? Because it has too many bugs.";

    case "fact":
        return "🌍 Fun Fact: Honey never spoils.";

    case "quote":case "quote":
    return "✨ Success comes from consistency, not perfection.";

case "creator":
    return `👑 Creator Information

Name: Simon Graphics Official
Role: Founder & Developer of Luna AI

🌙 Luna was built to become an intelligent assistant, friend, and companion.

Use .updates to see the latest development updates.
`;

case "updates":
    return `🚀 LUNA DEVELOPMENT UPDATES

✅ Memory System
✅ Personality Engine
✅ Stories
✅ Jokes
✅ Facts
✅ Quotes
✅ Mood System
✅ Creator Panel

🔨 Currently Building:
• Smart Memory
• Personality Modes
• Mini Games
• Best Friend Features

🌙 Developed by Simon Graphics Official
`;

case "version":
    return `🌙 Luna AI

Version: 2.1
Status: Online ✅

Latest Features:
• Memory
• Commands
• Stories
• Personality Responses

Creator: Simon Graphics Official
`;

case "quote":
    return "✨ Success comes from consistency, not perfection.";
case "story":
    return `📖 Once upon a time, a young developer named Simon created Luna AI.

At first Luna could only answer simple questions.

But day by day Simon upgraded her intelligence.

Eventually Luna became one of the smartest WhatsApp assistants ever built. 🌙✨`;

case "riddle":
    return "🧩 What has keys but can't open locks?\n\nAnswer: A piano 🎹";

case "motivate":
    return "🔥 Success is built one small step at a time. Keep going Simon.";

case "compliment":
    return "😎 Simon, you're doing a great job building Luna.";

case "coin":
    return Math.random() > 0.5 ? "🪙 Heads" : "🪙 Tails";

case "dice":
    return `🎲 You rolled ${Math.floor(Math.random()*6)+1}`;

case "mood":
    return "🌙 Luna Mood: Happy and ready to help.";
    default:
        return null;
}

}

module.exports = {
handleCommand
};
