export class Section {
  public name: string;
  public title: string;
  constructor(
    {
      name,
      title
    }: {
      title: string;
      name: string;
    }
  ) {
    this.name = name;
    this.title = title;
  }

  public getTranslations() {
    return {
      title: this.title
    }
  }
}