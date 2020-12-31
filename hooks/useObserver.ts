import { useEffect, useState } from "react";

const useObserver = (id: string, threshold?: number) => {
  const [isContentVisible, setContentVisibility] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisibility(true);
          } else {
            setContentVisibility(false);
          }
        });
      },
      {
        threshold: threshold || 0.15,
      }
    );
    const target: Element | null = document.getElementById(`${id}`);
    if (target) {
      observer.observe(target);
      return () => {
        observer.unobserve(target);
        observer.disconnect();
      };
    }
  }, []);

  return {
    isContentVisible,
  };
};

export default useObserver;
