// müzik çaların interfaci
interface IMusicPlayer {
  api: string;
  play(song: string): void;
  pause(): void;
}

const Spotify: IMusicPlayer = {
  api: "www.spotify.com/api",
  play(song) {
    console.log("spotify açılıyor");
    console.log("spotify veritabanına istek atıldı");
    console.log(song + " " + "çalıyor...");
  },
  pause() {
    console.log("oynatılan müzik durduruldu");
  },
};
Spotify.play("test");
Spotify.pause();
//* classlarda interface ile tip tanımlayacaksak implements kullanılır
class AppleMusic implements IMusicPlayer {
  api: string;
  constructor() {
    this.api = "www.apple.music";
  }
  play(song: string): void {
    console.log("apple music açılıyor");
    console.log("apple music veritabanına istek atıldı");
    console.log(song + " " + "çalıyor...");
  }
  pause(): void {
    console.log("oynatılan müzik durduruldu");
  }
}
const music = new AppleMusic();
music.pause();
