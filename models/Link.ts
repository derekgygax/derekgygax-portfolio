export class Link {
  public label: string;
  public tooltip: string;

  constructor(
    { label, tooltip, }: { label: string; tooltip: string; }
  ) {
    this.label = label;
    this.tooltip = tooltip;
  }
}