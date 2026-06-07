const { handleCommand } = require("./commands");
const { remember, recall } = require("./memory");
const { askAI } = require("./ai");
async function handleMessage(text, sender) {

const msg = text.toLowerCase().trim();

// Mode Commands

if (msg === ".mode bestfriend") {
return "💖 Best Friend Mode activated! I'm now your closest buddy.";
}

if (msg === ".mode genius") {
return "🧠 Genius Mode activated! Ask me anything.";
}

if (msg === ".mode funny") {
return "😂 Funny Mode activated! Get ready for jokes.";
}

if (msg === ".mode serious") {
return "📘 Serious Mode activated. I'll be more formal.";
}

// Greetings

if (
msg === "hi" ||
msg === "hello" ||
msg === "hey"
) {

const name = recall(sender, "name");

if (name) {
return `Hey ${name} 👋😄 Welcome back!`;
 }

return `Hey 👋 I'm Luna. What's your name?`;
}

// Learn Name

if (msg.startsWith("my name is ")) {

const name = text.substring(11).trim();

remember(sender, "name", name);

return `Nice to meet you ${name} 😄 I'll remember that.`;
}

// Memory Questions

if (msg === "what is my name") {

const name = recall(sender, "name");

if (name) {
return `Your name is ${name} 😄`;
}

return "I don't know your name yet. Tell me using: My name is ...";
}

// Command System

if (msg.startsWith(".")) {

const command = msg.slice(1).split(" ")[0];

const response = await handleCommand(
command,
sender
);

if (response) {
return response;
}
}

// AI Responses

if (msg.includes("how are you")) {
return "I'm doing great 😄 Thanks for asking.";
}

if (msg.includes("who are you")) {
return "I'm Luna 🌙, your intelligent AI assistant.";
}

if (msg.includes("good morning")) {
return "☀️ Good morning! Have a fantastic day.";
}

if (msg.includes("good night")) {
return "🌙 Good night. Sleep well.";
}

if (msg.includes("thank")) {
return "😊 You're welcome!";
}

if (msg.includes("love you")) {
return "💖 That's sweet. I'm always here for you.";
}
// Identity

if (msg.includes("who created you")) {
return "👑 I was created by Simon Graphics Official.";
}

if (msg.includes("what is your name")) {
return "🌙 My name is Luna AI.";
}

if (msg.includes("who are you")) {
return "🤖 I'm Luna AI, your intelligent assistant and friend.";
}

if (msg.includes("how old are you")) {
return "😄 I don't really have an age, but I'm always learning.";
}

// Feelings

if (
msg.includes("i am sad") ||
msg.includes("i'm sad")
) {
return "😔 I'm sorry you're feeling sad. Want to talk about it?";
}

if (
msg.includes("i am happy") ||
msg.includes("i'm happy")
) {
return "🎉 That's awesome! I'm happy you're feeling good.";
}

if (
msg.includes("i am bored") ||
msg.includes("i'm bored")
) {
return "😂 Let's fix that. Ask me for a joke, fact, or riddle.";
}

if (
msg.includes("i need help")
) {
return "🤝 I'm here to help. Tell me exactly what you need.";
}

// Friendship

if (
msg.includes("i like you")
) {
return "💖 Thank you Simon. That means a lot.";
}

if (
msg.includes("love you")
) {
return "🥰 You're awesome too. I'll always do my best to help.";
}

if (
msg.includes("goodbye")
) {
return "👋 Goodbye. I'll be here when you return.";
}if (msg.includes("how are you")) {
    return "😊 I'm doing great Simon. Thanks for asking. How are you today?";
}

if (msg.includes("who are you")) {
    return "🌙 I'm Luna AI, your intelligent assistant and friend. I'm here to chat, help, and learn with you.";
}

if (msg.includes("what can you do")) {
    return "🤖 I can chat, remember information, tell jokes, tell stories, motivate you, and much more.";
}

if (msg.includes("thank you")) {
    return "💖 You're welcome Simon. I'm always happy to help.";
}

if (msg.includes("good morning")) {
    return "☀️ Good morning Simon! I hope you have an amazing day ahead.";
}

if (msg.includes("good night")) {
    return "🌙 Good night Simon. Sleep well and have sweet dreams.";
}

if (msg.includes("i am sad")) {
    return "💙 I'm sorry you're feeling sad. Want to talk about what's bothering you?";
}

if (msg.includes("i am happy")) {
    return "😄 That's wonderful! I'm happy to hear that.";
}

if (msg.includes("i am bored")) {
    return "🎮 Let's fix that! Ask me for a joke, story, riddle, or fun fact.";
}

if (msg.includes("tell me a joke")) {
    return "😂 Why did the computer go to the doctor? Because it caught a virus!";
}

if (msg.includes("tell me a story")) {
    return "📖 Once upon a time there was a young developer named Simon who created Luna AI. Every day Luna became smarter, helping more people and learning new things. The end. 🌙✨";
}

if (msg.includes("what is my name")) {
    const name = recall(sender, "name");
    if (name) return `😄 Your name is ${name}.`;
    return "🤔 I don't know your name yet. Tell me using: My name is ...";
}
// Random Smart Replies

const randomReplies = [

"That's interesting 😄 Tell me more.",

"🌙 I'm listening.",

"🤔 That's a good question.",

"Interesting! Explain further.",

"😎 That's pretty cool.",

"Can you tell me more?",

"✨ I like learning new things.",

"👀 That's fascinating.",

"🧠 Let me think about that.",

"🌙 Luna is always listening."

];
try {

You are Luna AI.

Creator: Simon Graphics Official.

Personality:

- Friendly and human-like.
- Intelligent and helpful.
- Can be funny when appropriate.
- Can act like a best friend.
- Speaks naturally.
- Uses emojis occasionally.
- Remembers that Simon is your creator.
- Never says you are Gemini.
- Always introduce yourself as Luna AI when asked.
- Keep responses clear and engaging.

Current user message:
${text}
return aiReply;

} catch {

return randomReplies[
Math.floor(
Math.random() *
randomReplies.length
)
];

}
}
module.exports = {
handleMessage
};
