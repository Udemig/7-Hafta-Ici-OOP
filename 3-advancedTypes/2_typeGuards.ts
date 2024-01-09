/*
    ! Type Guards(Tür Muhafızları)
    * Amaç:Type Guard'ın amacı tip hakkında bilgi almak ve doğru tipe ulaşmak için kullanırız.
    * type of,intanceof
*/

//! type of
/*
    Bir değişkenin türünü kontrol etmek için kullanılır.
*/
function logValue(input: string | number): void {
  console.log(typeof input);
  if (typeof input === "string") {
    console.log(`Girilen değer bir string: ${input.toUpperCase()}`);
  } else {
    console.log(`Girilen değğer bir sayı:${input}`);
  }
}
// logValue("selam");
logValue(10);

//* instanceof
/*
    instanceof bir nesnenin belirli bir sınıfın örneği olup olmadığını kontrol etmek için kullanılır.
    nesne tabanlı programlamada kullanılır.
*/

class Rabbit {}
let rabbit = new Rabbit();
rabbit = 10;
console.log(rabbit instanceof Rabbit);

class Animal {
  sound(): void {
    console.log("ses çıkarma");
  }
}
class Dog extends Animal {
  bark(): void {
    console.log("havlıyor");
  }
}
function makeSound(animal: Animal): void {
  // eğer animal bir dog sınıfı örneği ise
  if (animal instanceof Dog) {
    animal.bark(); // dog sınıfına özgü methodu çağır
  } else {
    animal.sound();
  }
}
const myAnimal = new Dog();
makeSound(myAnimal);

//! in
type User = {
  id: number;
  name: string;
  age: number;
};

function processUser(user: string | number | User): void {
  // "name" özelliğine sahip olup olmadığını  kontrol eder
  if (typeof user === "object" && "name" in user) {
    console.log(`Kullanıcı adı: ${user.name}`);
  } else if (typeof user === "string") {
    console.log(`Girilen isim :${user}`);
  } else {
    console.log("geçersiz kullanıcı");
  }
}
// processUser("test");
// processUser({ name: "example", age: 20, id: 1221 });
// processUser(23);
//!!!!!!!!!!!!!!!!!!!!!!!
// ürünleri temsil eden genel sınıf
class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ElectronicProduct extends Product {
  brand: string;
  constructor(name: string, price: number, brand: string) {
    super(name, price);
    this.brand = brand;
  }
  charge(): void {
    console.log(`${this.brand} ürünü şarj ediliyor ${this.price}`);
  }
}

class ApparelProduct extends Product {
  size: string;

  constructor(name: string, price: number, size: string) {
    super(name, price);
    this.size = size;
  }
  tryOn(): void {
    console.log(`Bu giyim ürünü ${this.size} beden denenebilir.`);
  }
}

// is Anahtar Kelimesi
// bir "Product" nesnesinin gerçekten bir "ElectronicProduct" türüne ait olup olmadığını kontrol eder
function isElectronicProduct(product: Product): product is ElectronicProduct {
  return (product as ElectronicProduct).charge !== undefined;
}
function isApparelProduct(product: Product): product is ApparelProduct {
  return (product as ApparelProduct).tryOn !== undefined;
}

const products: Product[] = [
  new ElectronicProduct("Laptop", 2000, "Asus"),
  new ApparelProduct("T-shirt", 300, "M"),
  new ElectronicProduct("Phone", 800, "samsung"),
];
// her bir ürünü kontrol ederek özelliklere erişim
for (const product of products) {
  console.log(`Ürün adı:${product.name}, Fiyat:${product.price}`);
  if (isApparelProduct(product)) {
    // eğer ürün bir giyim ürünüyse,özel metotlara erişim sağlar
    product.tryOn();
    console.log(product.name);
  } else if (isElectronicProduct(product)) {
    // eğer ürün bir elektronik ürünüyse,özel metotlara erişim sağlar
    product.brand = "test";
    product.price = 100000;
    product.charge();
  }
}

// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// for (const number of numbers) {
//   console.log(number, "sayısı");
// }
