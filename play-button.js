class PlayButton {
  constructor() {
    this.button = document.querySelector('.button');
    this.playStop = this.playStop.bind(this);
    this.button.addEventListener('click', this.playStop);
  }

  playStop() {
    const srcPause = 'file:///D:/IT/Stedfort/hw4-music-box-AndreyKorolevich/images/pause.png'
    const srcPlay = 'file:///D:/IT/Stedfort/hw4-music-box-AndreyKorolevich/images/play.png'
    if (this.button.src === srcPause) {
      this.button.src = srcPlay;
      document.dispatchEvent(new CustomEvent('audio-play'));
    } else if (this.button.src === srcPlay) {
      this.button.src = srcPause;
      document.dispatchEvent(new CustomEvent('audio-pause'));
    }
  }
}
