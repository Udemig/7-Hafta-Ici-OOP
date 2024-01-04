/*
    ! Interface(ara yüz) :
    * Interface bir objenin yapısının ve bu yapının 
    * hangi özelliklere sahip olması gerektiğini belirler.
    * Abstract class ve type ile görevi aynıdır.
    
    * Farklılıkları:
    ? Class'lar sadece bir class'ı miras alabilir.
    ? Interfaceler birden farklı farklı interfaceleri miras alabilir.
    ? Interfacelerde erişim belirteçleri yoktur.



*/

// isimlendirme
interface IProp {}
interface PropInterface {}

interface IShape {
  width: number;
  height: number;
  radius?: number;

  calculateArea(): number | string; // methodun görevini sonra implement edeceğiz
}
// geometril şekil interfaceni bir kare objesi implement etme
const square: IShape = {
  height: 50,
  width: 50,
  calculateArea() {
    return this.height * this.width;
  },
};
console.log(square.calculateArea());

const circle: IShape = {
  height: 1,
  width: 50,
  radius: 25,
  calculateArea() {
    return this.radius
      ? Math.PI * this.radius * this.radius
      : "Lütfen yarı çap giriniz";
  },
};
console.log(circle.calculateArea());
