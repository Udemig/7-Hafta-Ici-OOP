/*
    ! Generic:

    * Bir fonksiyonun,type'ın,class'ın veya interface'in içerisindeki bazı türlerin dinamik olarak değişebilmesini sağlayan yapıdır.

    Genericler farklı yapılarda kullanılır:
    * 1.Fonksiyonlar
    * 2.Typelar
    * 3.Classlarda ve Interfacelerde kullanılır.

*/

// const [sayac, setSayac] = useState(0);
// const [title, setTitle] = useState("");

// function foo(param1: string): number {
//   return 0;
// }

function exampleFn<ExampleGenericType>(
  param1: string,
  param2: ExampleGenericType
): ExampleGenericType {
  return param2;
}
const example = exampleFn("test", true);
console.log(example, typeof example);

function exampleFn_2<Generic1, Generic2, Generic3>(
  param1: Generic1,
  param2: Generic2,
  param3: Generic3
): Generic1 {
  console.log("param1:", param1, typeof param1);
  console.log("param2:", param2, typeof param2);
  console.log("param3:", param3, typeof param3);
  return param1;
}
const fn1 = exampleFn_2("test", 321, true);
console.log(typeof fn1);
// const fn = exampleFn_2({ id: 1, name: "test" }, false, null);
// console.log(fn.id);
//! useState() fonksiyonunu generic kullanarak yazalım
/*
    * useState() fonksiyonunu ele alalım.Bu fonksiyonun parametresine string bir değer 
    * yazdığımızda değişkenin türüde string oluyor.Aynı şekilde number verdiğimizde state değişkeninin
    * türü number oluyor.
    * Normal şartlarda bir fonksiyonun parametresinin türüyle dönüş değerinin türü farklı olur ve değişmez ve birbirine bağlı değildir.
    * Fakat bu bağlantıyı kurmak gerektiğinde generic type kullanılır.

*/
function useState<StateType>(
  initialState: StateType
): [StateType, (newValue: StateType) => void] {
  return [
    initialState,
    (newValue: StateType) => {
      console.log("set state fonk. çağrıldı", newValue);
    },
  ];
}
const [counter, setCounter] = useState(0);
console.log(">>> counter:", counter);
setCounter(54);
// generic type'ın türünü burada spesifik olarak belirleriz
const [counter1, setCounter_1] = useState<number>(54);
// Burada ise generic type'ın türünü otamatik olarak set edilmesini istemiş oluruz
const [counter_2, setCounter_2] = useState("test");
/*
  ! Not:
  * Normalde generic type'ın türünü tanımlamak zorunda değiliz fakat özellikle uniyon typlerda
  * (yani birden fazla tür almasını istiyorsak) o zaman bu generic typeın türünü set etmeliyiz.

*/
const [day, setDay] = useState<number | string | null>("pazartes,");
setDay(3);
setDay(null);
setDay("pazartesi");

//
// 1.T(Type): Genellikle genel tür parametresini ifade etmek için kullanılr
function idendity<T>(arg: T): T {
  return arg;
}
// 2.V(Value):Genellik bir değeri temsil etmek için kullanılır.
// 3.K(Key):Genellikle nesne özelliklerini temsil etmek için kullanılır.
function createKeyValue<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}

// 4.S(State):
class StateManager<S> {
  private currentState: S;
  constructor(initialState: S) {
    this.currentState = initialState;
  }
  getState(): S {
    return this.currentState;
  }
  setState(newState: S): void {
    this.currentState = newState;
  }
}

//

function createTuple<T, X>(first: T, second: X): [T, X] {
  return [first, second];
}
const stringAndNumberTuple = createTuple<string, number>("test", 22);
console.log(stringAndNumberTuple);
const booleanAndObjectTuple = createTuple<boolean, { key: string }>(true, {
  key: "234234",
});
console.log(booleanAndObjectTuple);

interface Person {
  name: string;
  age: number;
}
const people: Person[] = [
  { name: "test", age: 20 },
  { name: "ahmet", age: 29 },
  { name: "evliya", age: 35 },
  { name: "hilal", age: 26 },
];

/*
  - Fonksiyon için şu iki parametre tanımlanmıştır:
  * 1:list:T[] >>> 
  * 2.condition: (item: T) => boolean >>> 

*/
function filterList<T>(list: T[], condition: (item: T) => boolean): T[] {
  return list.filter((item) => condition(item));
}

const youngPeople = filterList(people, (person) => person.age < 30);
console.log(youngPeople);
