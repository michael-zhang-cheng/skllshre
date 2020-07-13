const URLService = require('../services/url.js');
const service = new URLService();

module.exports = {
  createURLs: function (req, res) {
    const {
      urls = []
    } = req.body;
    res.json(urls.map(url => ({
      shortened: `${req.get('host')}/${service.shortenURL(url)}`,
      original: url
    })));
  },
  redirectURL: function (req, res) {
    const dest = service.getRedirect(req.params.hash);
    console.log(dest)
    res.redirect(301, `${dest}`)
  },
};
