/*
    ! Intersection Types
    * Intersection types(kesişim türleri) iki veya daha fazla türü birleştirmek için
    * kullanılan bir özelliktir.

*/
// union type
type typeA = {
  propA: string;
};
type typeB = {
  propB: number;
};

type unionType = typeA | typeB;

let varName: unionType;
varName = {
  propA: "selam",
};
varName = {
  propB: 42,
};
varName = {
  propA: "selam",
  propB: 22,
};

// intersection types
/*
 * Intersection type,iki veya daha fazla türün özelliklerin birleştiren bir türdür.
 * Yani, hem typeC'nin hem de typeD'nin özelliklerini içermelidir
 */
type typeC = {
  propC: string;
  ortakProp: number;
};
type typeD = {
  propD: boolean;
  ortakProp: number;
};
type intersectionType = typeC & typeD;
let varName1: intersectionType;
// varName1 = { propC: "selam", ortakProp: 20 };
// varName1 = { propD: true, ortakProp: 90 };
varName1 = { propC: "selam", propD: true, ortakProp: 42 };

/*
    ! Farklar:
    - Union Type:
    * "veya" ilişkisini temsil eder.
    * en az bir türü içerir.
    * tipler arasında ortak özellikler üzerine bir zorunluluk yoktur.
    - intersection Type:
    * "ve" ilişkisini temsil eder.
    * tüm belirtilen tiplerin özelliklerini birleştirir.
*/

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: "test",
  email: "test@gmail.com",
  phone: "1231231231",
};

let c: Customer = {
  name: "ABC ınc.",
  credit: 1000000,
  email: "test@gmail.com",
  phone: "12312",
};
console.log(c.email);

// Sürücünün ve arabanın özelliklerini içeren bir type oluşturun.
// interface Driver {
//   name: string;
//   age: number;
// }
// interface Car {
//   marka: string;
//   model: string;
// }
// type Yeni = Driver & Car;

// let y: Yeni = {
//   name: "Ayş",
//   age: 23,
//   marka: "“Honda”",
//   model: "“Jazz”",
// };
interface Car {
  brand: string;
  model: string;
  year: number;
}

interface Driver {
  age: number;
  name: string;
  licenseNumber: string;
}
// intersection type kullanarak car ve driverın özelliklerini birleştirme
type CarAndDriver = Car & Driver;

const carAndDrive: CarAndDriver = {
  brand: "BMW",
  model: "m3",
  year: 2020,
  licenseNumber: "ABC123",
  age: 20,
  name: "test",
};
console.log(carAndDrive.age);
console.log(carAndDrive.brand);
console.log(carAndDrive.licenseNumber);
console.log(carAndDrive.name);

// interface Mycar {
//     marka:string;
//     model:number;
//   }
//   interface Driver {
//     name: String;
//     age: Number;
//   }

//   type new = Mycar & Driver;

//   let n :new ={
//     marka: "bmw",
//     model: 2024,
//     name: "murat",
//     age: 33,

//   }
