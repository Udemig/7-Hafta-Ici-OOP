/*
    ! Access Modifier (erişim belirteci)

    * Class elemanları hassas bilgi tutacapı zaman bu elemanları class'ın dışından
    * erişilip erişilmeyeceğini belirten ifadelerdir.
    * Örn:Kredi kartı bilgileri,
    
    ! Dört adet erişim belirteci vardır:
    * 1.public: Hem class dışında hem de class'ı extend(miras alan) diğer classların erişebilmesi için kullanılır.
    * 2.protected: Sadece classın kendisi ve onu extend eden classlardan erişilebilen değerlerdir.
    * 3.private: Sadece tanımladığımız class tarafından erişilebilir,extend eden classlardan ve dışarıdan erişilemez
    * 4.readonly: Tanımlandıktan sonra değeri değiştirilemeyecek özellikler atanır.(const gibi)
  

*/

class Car {
  public marka: string;
  constructor(marka: string) {
    this.marka = marka;
  }
}
const car = new Car("ford");
// console.log(car.marka);

class EvcilHayvan {
  protected name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  saglik() {
    console.log("sağlıklı");
  }
}

class Kopek extends EvcilHayvan {
  havla() {
    console.log(this.age);
    console.log(this.name + " " + "havlıyor");
    this.saglik();
    console.log(this.name);
  }
}

const kopek = new Kopek("Karabaş", 3);
kopek.havla();
// const animalName = kopek.name;
/* Classlar arasında mirass alma */
class Vehicle {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  start(): void {
    console.log(`${this.brand} ${this.model} starting`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} stopped`);
  }
}

class Car1 extends Vehicle {
  numDoors: number;
  constructor(brand: string, model: string, numDoors: number) {
    // alt sınıfın contructor'ında üst sınıfın contructor'ını çağırma
    super(brand, model);
    // alt sınıfa ait özellik
    this.numDoors = numDoors;
  }
  start(): void {
    console.log(`${this.brand} ${this.model} start`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} stop `);
  }
  // yeni bir method ekleme
  drive(): void {
    console.log(`${this.brand} ${this.model} çalıştı`);
  }
}

const myCar = new Car1("BMW", "m3", 4);
// myCar.start();
// myCar.drive();
// myCar.stop();

class Personal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

const personal = new Personal("example");
console.log(personal.getName());
// console.log(personal.name);

/*
            * Kendi içerisi     * Extend Edilen     * Dışarı

? public        evet                  evet              evet
? protected     evet                  evet              
? private       evet

*/

// const name1 = ["ali", 12, true, { job: "test" }];
// var name2 = "mehmet";
// let name3 = "test";

// name3 = "asdasdd";
// name2 = "ssdfsdf";
// name1.push("asd");
// console.log(name1);

class Kitap {
  readonly name: string;
  public sayfa: number;
  constructor(name: string, sayfa: number) {
    this.name = name;
    this.sayfa = sayfa;
  }
  setYeniAd(yeniAd: string) {
    // this.name = yeniAd; hata verir
    this.sayfa = 40;
  }
}
const hobbit = new Kitap("Hobbit", 54);
// console.log(hobbit.name);
// c;
console.log(hobbit.sayfa);

// hobbit.name = "asdasd"; hata verir çünkü readonly propertysi(özellik)
