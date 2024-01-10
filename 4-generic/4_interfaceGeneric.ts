interface Pair1<K, V> {
  key: K;
  value: V;
}
const keyAndValue: Pair1<number, string> = { key: 12, value: "safas" };

interface ArrayFunctions<T> {
  addItem: (item: T) => void;
  getItemAtIndex: (index: number) => T | undefined;
}
class StringArray implements ArrayFunctions<string> {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }
  getItemAtIndex(index: number): string | undefined {
    return this.items[index];
  }
}
const stringArrayOps = new StringArray();
stringArrayOps.addItem("elma");
stringArrayOps.addItem("asasd");
stringArrayOps.addItem("asasdasdas");
stringArrayOps.addItem("123123");
stringArrayOps.addItem("asa1231432sd");
console.log(stringArrayOps);
console.log(stringArrayOps.getItemAtIndex(3));
