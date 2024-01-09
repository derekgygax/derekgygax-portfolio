export class Bio {
  public type: string;
  public text: string;

  constructor({
    type,
    text
  }: {
    type: string,
    text: string
  }) {
    this.type = type;
    this.text = text;
  }
}