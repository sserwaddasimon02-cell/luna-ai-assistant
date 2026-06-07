const fs = require("fs");

const MEMORY_FILE = "./memory.json";

function loadMemory() {
try {
if (!fs.existsSync(MEMORY_FILE)) {
fs.writeFileSync(
MEMORY_FILE,
JSON.stringify({}, null, 2)
);
}

    return JSON.parse(
        fs.readFileSync(MEMORY_FILE)
    );
} catch (err) {
    console.log("Memory load error:", err);
    return {};
}

}

function saveMemory(data) {
fs.writeFileSync(
MEMORY_FILE,
JSON.stringify(data, null, 2)
);
}

function remember(userId, key, value) {
const memory = loadMemory();

if (!memory[userId]) {
    memory[userId] = {};
}

memory[userId][key] = value;

saveMemory(memory);

}

function recall(userId, key) {
const memory = loadMemory();

if (
    memory[userId] &&
    memory[userId][key]
) {
    return memory[userId][key];
}

return null;

}

module.exports = {
remember,
recall,
loadMemory,
saveMemory
};
