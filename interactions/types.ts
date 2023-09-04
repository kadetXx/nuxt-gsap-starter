interface SelectorProps {
  selector: string | HTMLElement;
  secondarySelectors: {
    [x: string]: string | HTMLElement;
  };
}

interface ScrollAnimationSettings {
  initialState?: gsap.TweenVars;
  function?: (tl: GSAPTimeline) => void;
}

interface ScrollAnimationProps {
  element: string | HTMLElement;
  animationProps: ScrollTrigger.Vars & ScrollAnimationSettings;
}

type SecondaryElements = {
  [x: string]: HTMLElement[];
};

interface ObserverAnimationProps
  extends Omit<SelectorProps, "secondarySelectors"> {
  initialState?: gsap.TweenVars;
  target?: HTMLElement | null;
  animation?: IntersectionObserverInit & {
    tween?: gsap.TweenVars;
    resetOnExit?: boolean;
  };
}
