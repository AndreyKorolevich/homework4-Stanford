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

   return fetch(this.gifPath)
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
        const url = json.data[i].images.original.url;
        this.arrUrls.push(url);
      }
      this.renderGif();
  }

  renderGif() {
    const randomGifFirst = Math.floor(Math.random() * 25);
    let randomGifSecond = randomGifFirst + 1;
    if (randomGifSecond >= this.arrUrls.length) {
      randomGifSecond = randomGifFirst - 1;
    }

    const gifContainerFirst = document.querySelector('#audio-player .first');
    const gifContainerSecond = document.querySelector('#audio-player .second');
    gifContainerFirst.style.backgroundImage = `url(${this.arrUrls[randomGifFirst]})`;
    gifContainerSecond.style.backgroundImage = `url(${this.arrUrls[randomGifSecond]})`;
  }

  bufferGif() {
    const container = document.getElementsByClassName('gif');
    const gifShowed = document.querySelector('#audio-player .show');
    const randomGif = Math.floor(Math.random() * 25);
    for (const gif of container) {
      if (!gif.classList.contains('show')) {
        gif.classList.add('show');
      }
    }
    gifShowed.classList.remove('show');
    gifShowed.style.backgroundImage = `url(${this.arrUrls[randomGif]})`;
  }
}
