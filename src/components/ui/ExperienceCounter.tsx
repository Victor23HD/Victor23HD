"use client";

import { useEffect, useState } from "react";

export interface ExperienceCounterLabels {
  year: string;
  years: string;
  month: string;
  months: string;
  and: string;
  almost: string;
  suffix: string;
}

interface ExperienceCounterProps {
  /** ISO date (YYYY-MM-DD) when the career started */
  start: string;
  labels: ExperienceCounterLabels;
}

function elapsedSince(start: Date, now: Date) {
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 0) months = 0;
  return { years: Math.floor(months / 12), months: months % 12 };
}

export function ExperienceCounter({ start, labels }: ExperienceCounterProps) {
  const [elapsed, setElapsed] = useState<{ years: number; months: number } | null>(
    null,
  );

  useEffect(() => {
    setElapsed(elapsedSince(new Date(start), new Date()));
  }, [start]);

  if (!elapsed) {
    return <p className="experience-story__counter" aria-hidden />;
  }

  const { years, months } = elapsed;
  const yearsLabel = years === 1 ? labels.year : labels.years;
  const monthsLabel = months === 1 ? labels.month : labels.months;

  return (
    <p className="experience-story__counter">
      <span className="experience-story__counter-num">{years}</span> {yearsLabel}
      {months > 0 ? (
        <>
          {" "}
          {labels.and}{" "}
          <span className="experience-story__counter-num">{months}</span>{" "}
          {monthsLabel}
        </>
      ) : null}
      <span className="experience-story__counter-sep" aria-hidden>
        {" "}
        •{" "}
      </span>
      {labels.suffix}
    </p>
  );
}
