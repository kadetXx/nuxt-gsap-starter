import { Dom } from "./dom";
import gsap from "gsap";

export class ObserverAnimation extends Dom {
  timeline: gsap.core.Timeline;
  observer: IntersectionObserver;
  target: ObserverAnimationProps["target"];
  animation: ObserverAnimationProps["animation"];

  constructor({
    selector,
    target,
    animation,
    initialState,
  }: ObserverAnimationProps) {
    super({
      selector,
      secondarySelectors: {},
    });

    initialState && this.initialize(initialState);

    this.timeline = gsap.timeline();
    this.animation = animation;
    this.target = target;

    this.createObserver();
  }

  createObserver() {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        entry.isIntersecting ? this.animateIn() : this.animateOut();
      });
    };

    this.observer = new window.IntersectionObserver(callback, {
      threshold: this.animation?.threshold ?? 0.5,
      rootMargin: this.animation?.rootMargin,
      root: this.animation?.root,
    });

    this.observer.observe(this.target ?? this.element);
  }

  initialize(tween: gsap.TweenVars) {
    gsap.set(this.element, {
      ...tween,
    });
  }

  animateIn() {
    return new Promise(resolve => {
      this.timeline.to(this.element, {
        ...this.animation?.tween,
      });

      this.timeline.call(resolve);
    });
  }

  animateOut() {
    return new Promise(resolve => {
      if (this.animation?.resetOnExit) {
        this.timeline.reverse();
      }

      this.timeline.call(resolve);
    });
  }
}
