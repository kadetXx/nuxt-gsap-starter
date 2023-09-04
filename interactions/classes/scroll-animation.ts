import gsap from "gsap";
import { Dom } from "./dom";

export class ScrollAnimation extends Dom {
  timeline: GSAPTimeline;

  constructor({ element, animationProps }: ScrollAnimationProps) {
    super({ selector: element, secondarySelectors: {} });
    this.animate(animationProps);
  }

  animate(props: ScrollAnimationProps["animationProps"]) {
    const { scrub, trigger, start, ...rest } = props;

    gsap.set(this.element, {
      ...props.initialState,
    });

    this.timeline = gsap.timeline({
      scrollTrigger: {
        ...rest,
        start: start ?? "top bottom",
        scrub: scrub ?? 0.7,
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
