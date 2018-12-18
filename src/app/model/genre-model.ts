export class GenreModel {
  public Name: string = undefined;
  public ID: number = undefined;

  constructor(source?: any) {
    if (source) {
      for (const key in this) {
        if (key in source) {
          this[key] = source[key];
        }
      }
    }
  }
}
