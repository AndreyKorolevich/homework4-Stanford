class GifDisplay {
  constructor() {
    this.onJsonReady = this.onJsonReady.bind(this);
    this.arrUrls = [];
    this.topic;
  }

  viewGif(topic) {
    this.topic = topic;
    this.query = encodeURIComponent(this.topic);
    this.gifPath = `https://api.giphy.com/v1/gifs/search?api_key=yCb3a2vGu9hxzySF74WnYQ9PgHS1ufbV&q=${this.query}&limit=25&offset=0&rating=G&lang=en`;

    this.arrUrls = [];
    fetch(this.gifPath)
      .then(this.onResponse)
      .then(this.onJsonReady);
  }

  onResponse(response) {
    return response.json();
  }

  onJsonReady(json) {
     if (!json.data) {
       return;
    }
    for (let i = 0; i < json.data.length; i++) {
      const url = json.data[i].images.downsized.url;
      this.arrUrls.push(url);
    }
    this.renderGif();
 }

  renderGif() {
    const gifContainer = document.querySelector('#audio-player .gif');
    gifContainer.style.backgroundImage = `url(${this.arrUrls[Math.floor(Math.random() * 25)]})`;
  }
}
