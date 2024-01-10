type ApiResponseType<DataType> = {
  status: "success" | "error";
  data: DataType;
};
const apiResult: ApiResponseType<object> = {
  status: "success",
  data: { id: 1 },
};
type AuthResponseType = {
  id: number;
  firstname: string;
  lastname: string;
};
const authApiResult: ApiResponseType<AuthResponseType | null> = {
  status: "success",
  data: {
    id: 1,
    firstname: "test",
    lastname: "example",
  },
};
type ExampleType<Generic1> = string | number | Generic1;
let test1: ExampleType<boolean> = true;
test1 = "tesst";
test1 = 43;
test1 = false;
let test2: ExampleType<null> = null;
test2 = "string";
test2 = 1231124;

enum DaysEnum {
  Mon,
  Tue,
  Wed,
}
let test3: ExampleType<object | null | DaysEnum> = DaysEnum.Mon;
test3 = null;
test3 = { id: 123, name: "asdasd" };

//
type Pair<FirstType, SecondType> = {
  first: FirstType;
  second: SecondType;
};
const numberAndString: Pair<number, string> = {
  first: 32,
  second: "selam",
};
const booleanAndDate: Pair<boolean, Date> = {
  first: true,
  second: new Date(),
};

type ReverseArray<T> = {
  original: T[];
  reversed: T[];
};

function reverseArray<T>(array: T[]): ReverseArray<T> {
  const reversedArray = [...array].reverse();
  return { original: array, reversed: reversedArray };
}

const numbers = [1, 2, 3, 4, 5, 6];
const reversedNumbers: ReverseArray<number> = reverseArray(numbers);
console.log(reversedNumbers.original + "     " + reversedNumbers.reversed);

const strings = ["apple", "samsung", "lg"];
const reversedStrings: ReverseArray<string> = reverseArray(strings);
console.log(reversedStrings.original, reversedStrings.reversed);
