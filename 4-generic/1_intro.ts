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
const example = exampleFn("test", 43);
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
const [counter, setCounter] = useState("test");
console.log(">>> counter:", counter);
