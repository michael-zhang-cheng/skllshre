import config from '../config';
import axios from 'axios';

export default class URLService {
  constructor() {
    this.endpoint = `http://${window.location.hostname}:${config.server_port}`;
  }
  async getShortenedURLs(urls) {
    try {
      const response = await axios.post(this.endpoint, {
        urls
      });
      return response;
    } catch (err) {
      throw new Error(err)
    }
  }
};
