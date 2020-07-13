const sh = require('short-hash');

module.exports = class URLService {
  // we will do all of this in-memory for now
  // TODO: migrate to a persistent document db
  constructor() {
    this.db = new Map();
  }
  generateHash(string) {
    return sh(string);
  }
  getRedirect(hash) {
    return this.db.get(hash);
  }
  setRedirect(hash, url) {
    this.db.set(hash, url);
  }
  shortenURL(url) {
    const hash = this.generateHash(url);
    this.setRedirect(hash, url);
    return hash;
  }
}
