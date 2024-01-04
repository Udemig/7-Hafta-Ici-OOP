/*
    ! constructor(yapıcı,inşa eden) methodu:
    * Bir objenin propertylerini initialize(başlatmak) etmek için kullanılır.
    * contructor methodu "new" operatörü tarafından bir kez çağrılır ve sonra asla çağrılmaz.

    Özellikler:

    * Classlarda constructor olması opsiyoneldir. Constructor var new operatörü tarafından otomatik olarak
    * invoke edilir,yoksa hiçbir şey olmaz.
    
    * contructorın amacı class propertylerini dinamik veya sabit şeklinde çalıştırmaktır.


*/

class ExampleClass1 {
  prop1: string;
  prop2: number;
  age: number = 0;
  constructor() {
    // sabit kod
    this.prop1 = "test";
    this.prop2 = 0;
  }
  getAge() {}
}
const exClass = new ExampleClass1();

class Monitor {
  model: string;
  refresh_rate: 60 | 120 | 144 | 165 | 240; // union type
  resolution: [number, number];
  screen_size: number;
  price: number;
  currency: "dolar" | "euro" | "tl";
}
