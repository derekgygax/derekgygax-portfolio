export class MetaData {
  public title: string;
  public description: string;
  public keywords: string;

  constructor(
    {
      title,
      description,
      keywords
    }:
      {
        title: string;
        description: string;
        keywords: string;
      }
  ) {
    this.title = title;
    this.description = description;
    this.keywords = keywords;
  }
}