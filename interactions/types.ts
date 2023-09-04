interface SelectorProps {
  selector: string | HTMLElement;
  childSelectors: {
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

type ChildElements = {
  [x: string]: HTMLElement[];
};

type ObjectStringMap = { [x: string]: Object };
