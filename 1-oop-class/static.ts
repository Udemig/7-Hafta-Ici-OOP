/*
    ! Static:
    * Özetle, static özellikler ve methodlar, bir sınıfa ait olup sınıfın örneği oluşturulmadan doğrudan
    * sınıf üzerinden erişilebilen özelliktir
    * Bu, genellikle genel durumları tutmak veya değiştirmek için kullanılır ve sınıfın genel davranışını temsil eder.
*/

class KahveDukkani {
  static toplamDukkanSayisi: number = 0;

  constructor() {
    // Her yerni örnek oluşturduğunda toplam dükkan sayısı bir artar
    KahveDukkani.toplamDukkanSayisi++;
  }
}
// iki farklı kahve dükkanı örneği oluşturduk
const KahveDukkani1 = new KahveDukkani();
const KahveDukkani2 = new KahveDukkani();

console.log(KahveDukkani.toplamDukkanSayisi);

class Indirim {
  static indirimOrani: number = 0;
  /*
   * Static methodlar, sınıfın örneği oluşturulmadan doğrudan sınıf üzerinden çağrılabilen methodlardır.
   * Bu, genellikle sınıf düzeyinde genel işlevselliği temsil etmek için kullanılır.
   */
  static setIndirimOrani(yeniOran: number) {
    // static metod,, sınıfın örneği oluşturulmadan çağrılabilir
    Indirim.indirimOrani = yeniOran;
  }
}
// indirim oranını belirledik
Indirim.setIndirimOrani(0.15);
console.log(Indirim.indirimOrani);
