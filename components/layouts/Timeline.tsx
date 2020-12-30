import React, { useEffect, useRef, useState } from "react";
import { Circle } from "react-feather";
import useDebounce from "../../hooks/useDebouce";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
  entries: {
    title: string;
    content: React.ReactNode;
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
              className="my-8 mr-8 absolute hidden md:block"
              style={{
                top:
                  el.getBoundingClientRect().top -
                  ref.current.getBoundingClientRect().top,
              }}
            >
              <h3>{_entry.title}</h3>
              <Circle
                size={16}
                className="my-8 absolute top-0 timeline-circle"
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
      <div className="col-span-1 border-l-4 md:border-r-4 md:border-l-0 border-gray-300 relative">
        {width >= 768 ? (
          timestamps
        ) : (
          <div className="md:hidden">
            {entries.map((_entry, i) => {
              return (
                <div
                  key={i}
                  id={`${i}`}
                  className="relative mx-8 md:mx-16 flex justify-center flex-col"
                >
                  <h3>{_entry.title}</h3>
                  {_entry.content}
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
      <div className="col-span-2 hidden md:block">
        {entries.map((_entry, i) => {
          return (
            <div
              key={i}
              id={`${i}`}
              className="mx-8 md:mx-16 flex justify-center"
            >
              {_entry.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
