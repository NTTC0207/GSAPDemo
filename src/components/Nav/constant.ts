const tweenItems = [
  { route: "/tween", name: "Tween" },
  { route: "/tween/tween-to", name: "Tween To" },
  { route: "/tween/tween-from", name: "Tween From" },
  { route: "/tween/tween-fromto", name: "Tween From To" },
];

const timelineItems = [
  { route: "/timeline", name: "Timeline" },
  { route: "/timeline/with-timeline", name: "With Timeline" },
  { route: "/timeline/without-timeline", name: "Timeline with useEffect" },
];

const scrollTriggerItems = [
  { route: "/scrolltrigger", name: "Scroll Trigger" },
  { route: "/scrolltrigger/basic", name: "Basic" },
];

const StaggerItems = [
  { route: "/stagger", name: "Stagger" },
  { route: "/stagger/text", name: "Text" },
];

export const mainList = [
  { name: "Tween", items: tweenItems },
  { name: "Stagger", items: StaggerItems },
  { name: "Timeline", items: timelineItems },
  { name: "ScrollTrigger", items: scrollTriggerItems },
];
