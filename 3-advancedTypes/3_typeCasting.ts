/*
    ! Type Casting (Tür Dönüşümü)
    * Bir değişkenin türünü bir başka türe dönüştürme işlemidir.

*/

let value: any = "123";
// değişkenin türünü stringe çevirme
let numberValue: string = value as string;
console.log(numberValue.length);

// let numberValue:string

/*
    Bu örnekte API'den gelen productFromAPI nesnesindeki price özeliiği bir string olarak tanımlanmış
    Biz bu değeri bir sayı olarak kullanmak istediğimizden, parseFloat fonksiyonunu kullanarak bu değeri 
    bir ondalıklı sayıya dönüştürdük.Daha sonra, bu dönüştürülmüş değeri as number kullanarak bir sayı türüne dönüştürdük
*/
let productFromAPI: any = {
  name: "laptop",
  price: "1500.010",
};
// fiyatı bir string olarak aldık ancak biz bu değeri bir sayı olarak kullanmak istiyoruz
let productPrice: number = parseFloat(productFromAPI.price) as number;
console.log(typeof productPrice, productPrice);

const mixedData: any = {
  name: "test",
  age: 20,
  isStudent: false,
  courses: ["math", "english"],
};
// console.log(typeof mixedData);
if (typeof mixedData === "object" && mixedData !== null) {
  const personData: {
    name: string;
    age: number;
    isStudent: boolean;
    id: number;
  } = mixedData as {
    name: string;
    age: number;
    isStudent: boolean;
    id: number;
  };
  // personData nesnesi üzerinde sadece belirli tiplerin özelliklerine erişim sağlanabilir.
  personData.id = 100;
  console.log(personData.age);
  console.log(personData.id);
}
