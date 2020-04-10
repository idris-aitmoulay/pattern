class Iterator<T> {
  private _count = 0;
  private readonly _lists: Array<T>;

  constructor(lists: Array<T> = null) {
    this._lists = lists;
  }

  public hasNext(): boolean {
    return this._count < this._lists.length;
  }

  public next(): T {
    let result: T;
    if (this.hasNext()) {
      result = this._lists[this._count++];
      return result;
    }
    return null;
  }

  public remove(): void {
    this._lists.splice(this._count - 1, 1);
    this._count = (this._count - 1);
  }

  public getArray(): Array<T> {
    return this._lists;
  }

  public toString(): string {
    let result: string = '';
    for (let s of this._lists) {

      result += String(s);
      result += ', ';
    }
    return result;
  }

  public equals(iterator: Iterator<T>): boolean {
    let iteratorArray: Array<T> = iterator.getArray();
    return this._lists.every(function (el, index, arr): boolean {

      if (iteratorArray[index] == el) {

        return true;
      } else {

        return false;
      }
    });
  }
}
const array = [1, 2, 3, 5];
const iteratorsArry = new Iterator(array);

while (iteratorsArry.hasNext()) {
  const item = iteratorsArry.next();
  console.log(item);
}
