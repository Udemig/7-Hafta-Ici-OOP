/*
    Oluşturacapımı bütün araçlar için ortak noktaları bu classta tutacağız.
    Daha sonra alt classlar oluşturup o sınıflar abstract fonksiyonlar farklı şekillerde implement edilir.
    classların typelarını belirtiyoruz şeklinde düşünebiliriz
*/

abstract class Vehicle1 {
  constructor(make: string, model: string) {}
  abstract move(km: number): void;
}

class Car2 extends Vehicle1 {
  move(km: number): void {
    console.log("Araba için kontağı çevir");
    console.log("El frenini indir");
    console.log(`Gaza bas ve ${km} ilerle`);
  }
}
// const toyota = new Car2("toyota", "corolla");
// toyota.move(20);

class Plane extends Vehicle1 {
  move(km: number): void {
    console.log("Kuleye haber ver");
    console.log("Gerekli kontrolleri yap.");
    console.log(`Kalkış pistine git ve ${km} km uçuş yap`);
  }
  closeLandingGears() {
    console.log("İniş takımları kapatılıyor");
  }
}
class MotorBike extends Vehicle1 {
  move(km: number): void {
    console.log("Kaskı tak");
    console.log("Ayakları kaldır.");
    console.log(`${km} km boyunca ilerle`);
  }
}
const motor = new MotorBike("honda", "cb250");
motor.move(20);

const plane = new Plane("Boing", "A380");
plane.move(9000);
plane.closeLandingGears();
