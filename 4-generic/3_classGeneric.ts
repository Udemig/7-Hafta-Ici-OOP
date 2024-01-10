/*
    ! Classlarda generic kulanımı
*/
class ExampleClass<Generic1, Generic2> {
  prop1: Generic1;
  prop2: Generic2;
  prop3: string;
  constructor(param1: Generic1, param2: Generic2, param3: string) {
    this.prop1 = param1;
    this.prop2 = param2;
    this.prop3 = param3;
  }
  setProp1(param1: Generic1): ExampleClass<Generic1, Generic2> {
    this.prop1 = param1;
    return this;
  }
  getProp1(): Generic1 {
    return this.prop1;
  }
}
const obj = new ExampleClass<number, string>(12, "test", "test1");
console.log(obj);
const obj1 = new ExampleClass<string | number | null | object, boolean>(
  { id: 1 },
  true,
  "test"
);
console.log(obj1);
obj1.setProp1(54);
console.log(obj1);
// !!!!!!!!!!!!!!!!!!
class ExampleClass1 {
  prop1: string = "class1";
}
class ExampleClass2 extends ExampleClass1 {
  prop2: string = "class2";
}
class ExampleClass3 extends ExampleClass1 {
  prop3: string = "class3";
}
class ExampleClass4 extends ExampleClass2 {
  prop4: string = "class4";
}
class ExampleClass5<Generic1 extends ExampleClass1> {
  prop1: Generic1;
  constructor(param1: Generic1) {
    this.prop1 = param1;
  }
}
const test = new ExampleClass5(new ExampleClass2());
console.log(test.prop1);
// !!!!!!!!!!!!!!!!!!
class DataCollection<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
  getItem(index: number): T | undefined {
    return this.data[index];
  }
  removeItem(item: T): void {
    this.data = this.data.filter((existingItem) => existingItem !== item);
  }
}

// örnek kullanım
const numberCollection = new DataCollection<number>();
numberCollection.add(1);
numberCollection.add(2);
numberCollection.add(3);
numberCollection.add(4);
numberCollection.add(4);

console.log(numberCollection.getAll());
console.log(numberCollection.getItem(2));

const stringCollection = new DataCollection<string>();
stringCollection.add("apple");
stringCollection.add("lg");
stringCollection.add("safasf");
console.log(stringCollection.getAll());
stringCollection.removeItem("safasf");
console.log(stringCollection.getAll());
//!!!!!!!!!!!!!!!!!!

class Repository<T> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  getById(id: number): T | undefined {
    return this.data.find((item) => (item as any).id === id);
  }
  getAll(): T[] {
    return this.data;
  }
}
interface User {
  id: number;
  name: string;
  age: number;
}
const userRepository = new Repository<User>();
const user1: User = { id: 1, name: "test", age: 23 };
const user2: User = { id: 2, name: "example", age: 44 };
userRepository.add(user1);
userRepository.add(user2);
console.log(userRepository.getAll());
console.log(userRepository.getById(2));
//!!!!!!!!!!!!!!!!!!
// zamanlayıcı
/*
    callback:planlanacak işlev,belirli bir türde veriyi almalıdır.
    delay:işlemin gecikme süresi
    data:planlanacak işlevin çağrılacağı veri

*/
class Scheduler<T> {
  private schedularTasks: { callback: (data: T) => void; delay: number }[] = [];

  schedule(callback: (data: T) => void, delay: number, data: T): void {
    this.schedularTasks.push({ callback, delay });
    setTimeout(() => {
      const task = this.schedularTasks.shift();
      if (task) {
        task.callback(data);
      }
    }, delay);
  }
}

const stringSchedular = new Scheduler<string>();
stringSchedular.schedule(
  (data) => {
    console.log(`${data}`);
  },
  2000,
  "selam"
);
console.log(stringSchedular);
const numberScheduler = new Scheduler<number>();
numberScheduler.schedule((data) => console.log(`${data}`), 4000, 4234234);
