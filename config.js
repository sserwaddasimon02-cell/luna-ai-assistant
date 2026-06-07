module.exports = {

BOT_NAME: "Luna",

OWNER_NAME: "Simon Graphics Official",

OWNER_NUMBER: "256XXXXXXXXX",

PREFIX: ".",

VERSION: "1.0.0",

MODE: "friendly",

DESCRIPTION:
    "Luna is a friendly AI assistant created by Simon Graphics Official.",

EMOJIS: {
    success: "✅",
    error: "❌",
    loading: "⏳",
    moon: "🌙",
    robot: "🤖",
    star: "✨",
    laugh: "😂",
    warning: "⚠️"
},

PERSONALITY: {

    friendly: {
        emojis: true,
        humor: true,
        longReplies: true
    },

    professional: {
        emojis: false,
        humor: false,
        longReplies: false
    },

    genius: {
        emojis: false,
        humor: false,
        longReplies: true
    },

    bestfriend: {
        emojis: true,
        humor: true,
        longReplies: true
    }

}

};
