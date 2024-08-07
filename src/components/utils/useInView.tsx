import { useState, useEffect } from "react";

type UseInViewOptions = IntersectionObserverInit;

const useInView = () => {
  const [inViewId, setInViewId] = useState<string | null>(null);
  const options: UseInViewOptions = {
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewId(entry.target.id);
        }
      });
    }, options);

    const elements = document.querySelectorAll(".observed-element");
    elements.forEach((element) => observer.observe(element as Element));

    return () => {
      elements.forEach((element) => observer.unobserve(element as Element));
    };
  }, [options]);

  return inViewId;
};

export default useInView;
