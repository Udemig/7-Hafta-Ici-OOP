class Car {
  private battery_power: number = 80;
  private starter_motor_running: boolean = false;
  private engine_started: boolean = false;
  private key_status: 0 | 1 | 2 = 0;
  // mevcut bir property değerini return eden methoda getter method denir
  getEngineStatus() {
    return this.engine_started;
  }
  // herhangi bir return işlemi yoksa setter methodu denir
  startEngine() {
    if (this.battery_power <= 0) {
      throw new Error("Batarya arızalı veya boş");
    }
    if (this.starter_motor_running === false) {
      throw new Error("Marş motoru arızalı");
    }
    if (this.key_status != 2) {
      throw new Error("Önce anahtarı ikinci konuma getiriniz");
    }
    this.engine_started = true;
  }
  insertKey() {
    this.key_status = 0;
    return this;
  }
}

/*
    Not:Yukardaki yöntem global olarak hem typescriptte hem diğer diller kullanılan bir yöntemdir.
    * Bu yöntemde fonksiyonların propertlerle olan ilişkisine göre kavramsal olarak getter veya setter olarak
    * isimlendirilmesdir.

*/

class ExampleClass {
  private _username: string = "";

  // Bu fonksiyondan mutlaka herhangi bir değer döndermek mecburiyetindeyiz.
  get username() {
    console.log("username getter fonksiyon çalıştı");

    return this._username;
  }

  // Bir setter method tanımlandığında bu methodun mutlaka bir adet parametresi olmalıdır
  // Bir değer döndermemelidir aksi halde hata verir
  set username(param1: string) {
    console.log(
      "username setter fonksiyonu invoke(çalıştı) edildi,param1:",
      param1
    );
    this._username = param1;
  }
}
const obj1 = new ExampleClass();
// username aslında bir method olarak tanımladık ama kullanırken ts bunu property olarak algıladı
// setter fonksiyonu
obj1.username = "test";

const result = obj1.username;
console.log(result);
// burada yine get işlemi yapmış oluyoruz.Yapılan işlemi okuma işlemi oluyorsa getterdır
console.log(obj1.username);
