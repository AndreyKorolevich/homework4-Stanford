class GifDisplay {
  constructor() {
    this.gifPath = 'https://api.giphy.com/v1/gifs/translate?api_key=yCb3a2vGu9hxzySF74WnYQ9PgHS1ufbV&s=';
    this.onJsonReady = this.onJsonReady.bind(this);
    this.arrUrls = [];
    this.topic;
    
  }

  viewGif(topic) {
    this.topic = topic;
    const query = encodeURIComponent(this.topic);
    this.arrUrls = [];
    fetch(this.gifPath + query)
      .then(this.onResponse)
      .then(this.onJsonReady);
  }

  onResponse(response) {
    return response.json();
  }

  onJsonReady(json) {
     if (!json.data.images) {
       return;
    }
      const url = json.data.images.downsized.url;
      this.arrUrls.push(url);
    this.renderGif();
 }

  renderGif() {
    const gifContainer = document.querySelector('#audio-player .gif');
    console.log(this.arrUrls[0]);
    gifContainer.style.backgroundImage = `url(${this.arrUrls[0]})`;
    console.log(gifContainer);
  }
}
