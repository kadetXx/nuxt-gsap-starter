export const getElements = ({ selector, childSelectors }: SelectorProps) => {
  const isEl = selector instanceof window.HTMLElement;
  const dummyDiv = document.createElement("div");

  const element: HTMLElement = isEl
    ? selector
    : document.querySelector(selector) ?? dummyDiv;

  const children: ChildElements = {};

  Object.entries(childSelectors).forEach(([key, item]) => {
    const isEl = item instanceof window.HTMLElement;
    children[key] = isEl ? [item] : Array.from(document.querySelectorAll(item));
  });

  return { element, children };
};

export const getDistanceFromMidViewport = (element: HTMLElement) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const { x, y, width, height }: DOMRect = element.getBoundingClientRect();

  const yCenter = y + height / 2;
  const xCenter = x + width / 2;

  const distY = vh / 2 - yCenter;
  const distX = vw / 2 - xCenter;

  return { x: distX, y: distY };
};

export const preloadMedia = (media: HTMLImageElement, callback: () => void) => {
  const src = media.getAttribute("data-src");

  if (!src) return;

  const fakeImage: HTMLImageElement = new Image();
  fakeImage.src = src;

  fakeImage.onload = () => {
    media.src = src;
    callback();
  };
};
