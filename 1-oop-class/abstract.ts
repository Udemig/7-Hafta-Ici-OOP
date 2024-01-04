/*
    ! Abstract Class (Soyut Sınıf)
    * Abstract Class'lar alt sınıflar için bir şema görevi görür.
    * Doğrudan örnekleri oluşturamayız.
    * Alt sınıfların ortak davranışlarını tanımlamak için kullanılır.


*/
// soyutlama yaptık içerisinde herhangi bir değer atamadık ya da işlevsellik kazandırmadık
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}
  abstract share(): void;
}
// Abstract classların doğrudan örneğini oluşturamayız
//const photo = new TakePhoto()

/*
    Abstract class'ın özelliklerini methodlarını miras alan yeni class oluşturalım.
    Oluşturduğumuz bu class içerisinde soyut sınıftaki eksik kalan = implement edilmeyen
    methodları tamamlayıp onun bir örneğini

*/
class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, zoom: number) {
    super(cameraMode, filter);
  }
  share(): void {
    console.log("çekilen fotoğraf hikayede paylaşıldı");
  }
}

const instagram = new Instagram("Front", "Sun", 1.2);
instagram.share();

class Twitter extends TakePhoto {
  constructor(cameraMode: string, filter: string) {
    super(cameraMode, filter);
  }
  share(): void {
    console.log("Çekilen fotoğraf tweet olarak paylaşıldı");
  }
}
const tweet = new Twitter("back", "night");
tweet.share();
