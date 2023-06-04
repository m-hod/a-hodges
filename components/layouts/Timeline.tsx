import React, { useEffect, useRef, useState } from "react";

import { Circle } from "react-feather";
import parser from "html-react-parser";
import useDebounce from "../../hooks/useDebouce";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
  entries: {
    title: string;
    content: string;
  }[];
};

export default function Timeline({ entries }: Props) {
  const [timestamps, setTimestamps] = useState<React.ReactNode[]>([]);
  const ref = useRef<null | HTMLDivElement>(null);
  const { width } = useWindowSize();
  const debouncedWidth = useDebounce(width, 50);

  useEffect(() => {
    setTimestamps(
      entries.map((_entry, i) => {
        const el = document.getElementById(`${i}`);
        if (el && ref.current) {
          return (
            <div
              key={i}
              className="absolute hidden my-8 mr-8 md:block"
              style={{
                top:
                  el.getBoundingClientRect().top -
                  ref.current.getBoundingClientRect().top,
              }}
            >
              <h3>{_entry.title}</h3>
              <Circle
                size={16}
                className="absolute top-0 my-8 timeline-circle"
                style={{
                  right: "calc(-2rem - 10px)",
                }}
              />
            </div>
          );
        } else return null;
      })
    );
  }, [debouncedWidth]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative col-span-1 border-l-4 border-gray-300 md:border-r-4 md:border-l-0">
        {width >= 768 ? (
          timestamps
        ) : (
          <div className="md:hidden">
            {entries.map((_entry, i) => {
              return (
                <div
                  key={i}
                  id={`${i}`}
                  className="relative flex flex-col justify-center mx-8 md:mx-16"
                >
                  <h3>{_entry.title}</h3>
                  {parser(_entry.content)}
                  <Circle
                    size={16}
                    className="absolute timeline-circle"
                    style={{
                      top: 10,
                      left: "calc(-2rem - 10px)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="hidden col-span-2 md:block">
        {entries.map((_entry, i) => {
          return (
            <div
              key={i}
              id={`${i}`}
              className="flex flex-col justify-center mx-8 md:mx-16"
            >
              {parser(_entry.content)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
