/*
    * Interface'lerde typeda olduğu gibi farklı bir interface'in özelliklerini miras alabiliyoruz.
    * Bunu "extends" anahtar kelimesi ile yaparız.
    * İstersek birden fazla interface özelliklerini miras alabiliriz

*/

interface EvEsyasi {
  name: string;
  price: number;
}
// Tanımladığımız bu mobilya interfacei EvEsyasi interfaceni miras alacak
interface Mobilya extends EvEsyasi {
  color: string;
}
// interfacedeki tiplere göre nesne oluşturduk
const masa: Mobilya = {
  name: "Yemek Masası",
  price: 3000,
  color: "black",
};

interface Electronic {
  marka: string;
  garantiSuresi: number;
}
// birden fazla interface miras alma
interface Urun extends Electronic, EvEsyasi {}
//
const tv: Urun = {
  name: "Akıllı Televizyon",
  price: 5000,
  marka: "Samsung",
  garantiSuresi: 2,
};
const esyaCalistir = (esya: Urun): void => {
  console.log(esya.name, "temizleniyor...");
};
