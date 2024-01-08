export class Technology {
  public name: string;
  public tooltip: string | null;
  public alt: string | null;
  constructor({
    name,
    tooltip,
    alt
  }: {
    name: string;
    tooltip?: string;
    alt?: string;
  }) {
    this.name = name;
    this.tooltip = tooltip || null;
    this.alt = alt || null
  }
}