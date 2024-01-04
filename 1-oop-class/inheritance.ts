/*
    ! Inheritance(Kalıtım)

    * Inheritance(Miras Alma),bir sınıftan(class) başka bir sınıftan özelliklerini ve davranışlarını devralması anlamı gelir.
    * Typescript, nesne tabanlı programlamayı deskteklediği için, sınıflar arasında miras alma mekanizmasını sağlar.
    
    * OOP'de iki classtan birinin diğerinin özelliklerine sahip olabilmesi için onu genişletmesi gerekir.
    * Bunu sağlamak içi extends keywordü kullanılır.

    ! oopde bir class sadece bir classı extend edebilir bu sadece ts'e özeldir
*/

class ExampleClass1 {
  prop1?: string;
  prop2?: number;

  method1() {
    console.log("method1 çalıştırıldı");
  }
  method2() {
    console.log("method2 çalıştırıldı");
  }
}

class ChildrenClass extends ExampleClass1 {
  /*
    * ExampleClass1 içerisindeki tüm property ve methodlar buraya otomatik olarak kopyalanır
    * Mevcut bir property'i veya methodu değiştirmek istersek bu işleme override denir.
    
    */
  method1(): string {
    console.log("string olarak değiştirildi");
    return "test";
  }
}

const obj2 = new ExampleClass1();
obj2.method1();
obj2.method2();

const obj3 = new ChildrenClass();
obj3.method1();
obj3.method2();

class Human {
  hair_color: string;

  running() {
    console.log("koşuyor");
  }
}

class Father extends Human {
  hair_color: "brown";
}
class Mother extends Human {
  hair_color: "black";
}

class Son extends Father {}
const ferhat = new Son();
ferhat.hair_color;
