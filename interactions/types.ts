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
  parallax: ScrollTrigger.Vars & ScrollAnimationSettings;
}

type SecondaryElements = {
  [x: string]: HTMLElement[];
};
