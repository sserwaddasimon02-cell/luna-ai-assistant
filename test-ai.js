const { askAI } = require("./ai");

(async () => {
  const reply = await askAI("Who are you?");
  console.log(reply);
})();
