class MusicScreen {
  constructor() {
    this.gifDisplay = new GifDisplay (); 
    this.playButton = new PlayButton();
    this.audioPlayer;
    this.containerElement = document.getElementById('audio-player');

    this.showNewGif = this.showNewGif.bind(this);
    this.audioPlay = this.audioPlay.bind(this);
    this.audioPause = this.audioPause.bind(this);
    document.addEventListener('show-new-gif', this.showNewGif);
    document.addEventListener('audio-pause', this.audioPause);
    document.addEventListener('audio-play', this.audioPlay);
  }
   
  show(gifAndSong) {
    this.audioPlayer = new AudioPlayer();
    this.containerElement.classList.remove('inactive');
    this.gifDisplay.viewGif(gifAndSong.gif);
    this.audioPlayer.setSong(gifAndSong.song);
    this.audioPlayer.play();
    this.audioPlayer.setKickCallback(this.kick);
  }

  kick() {
    document.dispatchEvent(new CustomEvent('show-new-gif'));
  }

  showNewGif() {
    this.gifDisplay.renderGif();
  }

  audioPlay() {
    this.audioPlayer.play();
  }

  audioPause() {
    this.audioPlayer.pause();
  }
}
