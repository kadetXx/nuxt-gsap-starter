import gsap from "gsap";
import { Dom } from "../classes/dom";
import { ScrollAnimation } from "../classes/scroll-animation";

export class Hello extends Dom {
  timeline: GSAPTimeline;
  animations: ScrollAnimation[] = [];

  constructor() {
    super({
      selector: ".hello",
      childSelectors: {
        dash: ".hello__dash",
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  init() {
    this.animations.push(
      new ScrollAnimation({
        element: this.children.dash[0],
        parallax: {
          pin: true,
          trigger: this.element,
          start: "top top",

          function: tl => {
            tl.to(this.children.dash[0], {
              width: "40vw",
            });
          },
        },
      })
    );
  }
}
