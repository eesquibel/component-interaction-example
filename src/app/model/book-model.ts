export class BookModel {
  public Title: string = undefined;
  public Author: string = undefined;
  public ISBN: string = undefined;
  public ISBN13: string = undefined;
  public Cover: string = undefined;

  constructor(source?: any) {
    if (source) {
      for (const key in this) {
        if (key in source) {
          this[key] = source[key];
        }
      }
    }
  }

  public GetURL(): string {
    return this.Title.replace(/[^\w\s\d]/g, '').replace(/[\s]+/g, '-');
  }
}
