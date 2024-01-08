export class Technology {
  public name: string;
  public tooltip: string | null;
  public altText: string | null;
  constructor({
    name,
    tooltip,
    altText
  }: {
    name: string;
    tooltip?: string;
    altText?: string;
  }) {
    this.name = name;
    this.tooltip = tooltip || null;
    this.altText = altText || null
  }
}