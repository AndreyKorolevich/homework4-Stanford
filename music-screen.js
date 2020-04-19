class MusicScreen {
  constructor() {
    this.containerElement = document.getElementById('audio-player');
    this.topic;
    this.gifDisplay = new GifDisplay ();
    this.audioPlayer = new AudioPlayer();
    this.playButton = new PlayButton();
  }
   
  show(event) {
    this.topic = event;
    this.containerElement.classList.remove('inactive');
  }

  showGif(topic){
    this.gifDisplay.viewGif(topic);
  }
}
