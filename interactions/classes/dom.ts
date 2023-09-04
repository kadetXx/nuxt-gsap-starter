import { getElements } from "../utils";

export class Dom {
  element: HTMLElement;
  children: ChildElements;

  constructor({ selector, childSelectors }: SelectorProps) {
    const { element, children } = getElements({ selector, childSelectors });

    this.element = element;
    this.children = children;
  }
}
