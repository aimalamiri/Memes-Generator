import axios from './axios.js';

export default class Memes {
  constructor() {
    this.data = [];
  }

  async fetchApi() {
    let data;
    await axios.get('/get_memes').then((response) => {
      data = response.data.data.memes;
    });
    this.data = data;
  }
}
