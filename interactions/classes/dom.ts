import { EventEmitter } from "events";
import { getElements } from "../utils";

export class Dom extends EventEmitter {
  element: HTMLElement;
  children: ChildElements;

  constructor({ selector, childSelectors }: SelectorProps) {
    super();
    const { element, children } = getElements({ selector, childSelectors });

    this.element = element;
    this.children = children;
  }
}
