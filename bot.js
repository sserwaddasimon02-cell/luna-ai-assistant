const { handleMessage } = require("./messages");

async function testLuna() {

console.log("🌙 Luna AI Started");
console.log("Type messages below.\n");

process.stdin.on(
    "data",
    async (data) => {

        const text =
            data.toString().trim();

        const response =
            await handleMessage(
                text,
                "test-user"
            );

        console.log(
            "\nLuna:",
            response,
            "\n"
        );
    }
);

}

testLuna();
