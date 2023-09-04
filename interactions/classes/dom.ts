import { EventEmitter } from "events";
import { getElements } from "../utils";

export class Dom extends EventEmitter {
  element: HTMLElement;
  secondaryElements: SecondaryElements;

  constructor({ selector, secondarySelectors }: SelectorProps) {
    super();

    const { element, secondaryElements } = getElements({
      selector,
      secondarySelectors,
    });

    this.element = element;
    this.secondaryElements = secondaryElements;
  }
}
