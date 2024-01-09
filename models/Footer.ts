export class Footer {
  name: string;
  text: string;

  constructor(
    {
      name,
      text
    }: {
      name: string,
      text: string
    }
  ) {
    this.name = name;
    this.text = text;
  }

  public getTranslations() {
    return { text: this.text };
  }
}