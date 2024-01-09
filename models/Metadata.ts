export class Metadata {
  public title: string;
  public description: string;
  public keywords: string;
  public openGraph: {
    title: string;
    description: string;
  };

  constructor(
    {
      title,
      description,
      keywords,
      openGraph = {
        title: '',
        description: ''
      }
    }:
      {
        title: string;
        description: string;
        keywords: string;
        openGraph?: {
          title: string;
          description: string;
        }
      }
  ) {
    this.title = title;
    this.description = description;
    this.keywords = keywords;
    this.openGraph = openGraph;
  }
}