const WhitelistFilter = require("wlistfilter");

const args = process.argv[2];

let wlFilter = new WhitelistFilter();

(async () => {
  try {
    await wlFilter.fetchWhitelist(args);
  } catch (err) {
    console.error("Error:", err);
  }

  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", (line) => {
    if (wlFilter.isWhitelisted(line.trim())) {
      console.log(`✅ ${line.trim()}`);
    } else {
        console.log('❌ Not Whitelisted')
    }
  });

})();
