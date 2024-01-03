/*
    ! OOP(Object Oriented Programming) Nesne Tabanlı Programlama

    * OOP, etrafımızda bulunan nesnelerin özelliklerini(property) ve davranışlarını(method) modelleyerel yapılan
    * programlama yöntemidir.
    
    - OOP yaklaşımının içerisinde en önemli iki adet tür vardır.Bunlar classlar ve interfacelerdir.
*/

/*
    * Class:
    - Bir objenin özelliklerinin ve davranışlarının bir bütün halinde tutulduğu yapıdır.
*/
class Ev {
  // propert(özellikler)
  _odasayisi: number = 0;
  _pencereSayisi: number = 0;
  _kat: number = 0;
  // method(davranış)
  constructor(odasayisi: number, pencereSayisi: number, kat: number) {
    this._kat = kat;
    this._odasayisi = odasayisi;
    this._pencereSayisi = pencereSayisi;
  }
  yemekYe() {
    console.log("yemek");
  }
}
/*
  ! this kullanımı
  * Bir classın birden fazla kopyası oluşturulabilir ve her classın kendine ait
  * property ve methodları bulunur.Bu methodlar içerisinden classın kendisine erişebilmesi 
  * için "this" keywordünü kullanırız.
  * this keywordünü sadece methodlar içierisinde kullanılır.

*/
let ev = new Ev(2, 3, 4);
console.log(ev);

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Person sınıfından bir örnek oluşturulması
const person1 = new Person("Müberra", "Özkaya");

// Örneğin metotlarına erişim
console.log(person1.getFullName());

class RotaryDialPhone {
  handset_type?: "integreted" | "sepereted";
  dialpad_type: "rotay" | "santral" = "rotay";
  body: "horizantal" | "vertical" = "vertical";
  cable_socket_model: "usa_standart" | "europe_standart" | "asia_standart" =
    "asia_standart";

  openHandset() {
    console.log("open handset");
  }
  /*
    Method yazmak için doğrudan method ismini yazıyoruz, sonra parantezler ve bu parantezlerin
    içine parametre yazıyoruz, sonra opsiyonel olarak dönüş türünü yazıyoruz
  
  */
  dialTheNumber(targetPhoneNumber: string): boolean {
    console.log("numarayı girsin", targetPhoneNumber);
    console.log("telefon çalıyor");
    return true;
  }
  closeHandset() {
    console.log("closing handset");
  }
}

const person2 = new RotaryDialPhone();
person2.body = "horizantal";
console.log(person2.body);
person2.cable_socket_model = "europe_standart";
person2.dialpad_type = "santral";
person2.handset_type = "integreted";

person2.openHandset();
const dialResult = person2.dialTheNumber("12123131");
if (dialResult) {
  console.log("Karşı taraf telefonu açtı");
} else {
  console.log("telefon açılmadı");
}

person2.closeHandset();
/*
  ! Json objeleri ile class objejeleri arasındaki farklar ve benzerlikler

  - Her ikiside objedir.Fakat "new" keywordünü kullanrak oluşturduğumuz objenin 
  bir ismi vardır ama JSON objelerinin bir ismi yoktur.

  - Json objeleri için type yazılabilir ama classlar için type yazmaya gerek yoktur.
  Çünkü classlar kendisi zaten başlı başına bir typedır.


*/
type ExampleJsonObjectType = {
  prop1: string;
  prop2: string;
  prop3: () => void;
};

const exampleObject: ExampleJsonObjectType = {
  prop1: "test",
  prop2: "example",
  prop3() {
    console.log("prop3");
  },
};

console.log(exampleObject);
console.log("------------------------------------");
console.log(person2);

class ExampleClass {
  prop1: string = "";
  prop2: number = 0;
  prop3: boolean = false;
  method1(param1: string) {
    this.prop1 = param1;
    console.log(this.prop1);
  }
  method2() {
    this.prop2++;
    console.log(this.prop2);
    this.prop3 = true;
    console.log(this.prop3);
  }
}

const obj_1 = new ExampleClass();
const obj_2 = new ExampleClass();

obj_1.method1("test");
obj_2.method2();
