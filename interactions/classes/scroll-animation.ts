import gsap from "gsap";
import { Dom } from "./dom";

export class ScrollAnimation extends Dom {
  timeline: GSAPTimeline;

  constructor({ element, parallax }: ScrollAnimationProps) {
    super({ selector: element, secondarySelectors: {} });
    this.animate(parallax);
  }

  animate(props: ScrollAnimationProps["parallax"]) {
    const { scrub, trigger, ...rest } = props;

    gsap.set(this.element, {
      ...props.initialState,
    });

    this.timeline = gsap.timeline({
      scrollTrigger: {
        ...rest,
        scrub: scrub || 0.7,
        trigger: trigger ?? this.element,
      },
    });

    props.function && props.function(this.timeline);
  }

  async kill() {
    await this.timeline?.kill();
    return Promise.resolve();
  }
}
