const fs = require("fs").promises;

const whitelist = new Set();

class WhitelistFilter {
  constructor() {
  }

  async fetchWhitelist(path) {
    try {
      const data = await fs.readFile(path, { encoding: 'utf8' });

      data.split("\n").forEach((line) => {
        whitelist.add(line.trim());
      });

      return whitelist;
    } catch (error) {
      throw error;
    }
  }

  isWhitelisted(ip) {
    return whitelist.has(ip)
  }

  readWhitelist() {
    return whitelist;
  }
}

module.exports = WhitelistFilter;