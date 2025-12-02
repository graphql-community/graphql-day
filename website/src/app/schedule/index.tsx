import clsx from "clsx";
import Link from "next/link";

import { SCHEDULE } from "./data";

export function ScheduleSection() {
  return (
    <section className="gql-section xl:py-12" id="schedule">
      <div className="gql-container">
        <header className="mb-8">
          <h3 className="typography-menu mb-4">Schedule</h3>
          <div className="flex flex-col gap-2">
            <div className="typography-h2">December 11</div>
            <div className="typography-body-lg text-neu-700">
              Room: Aubepine 3/4
            </div>
          </div>
        </header>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {SCHEDULE.map((item, index) => (
              <ScheduleListItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ScheduleListItemProps {
  item: (typeof SCHEDULE)[number];
  index: number;
}

function ScheduleListItem({ item, index }: ScheduleListItemProps) {
  const content = (
    <>
      <div className="typography-menu min-w-[160px] text-neu-700 whitespace-nowrap">
        {item.time}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="typography-h3 text-xl text-neu-900">{item.title}</h4>
        {item.description && (
          <p className="typography-body-md text-neu-700">{item.description}</p>
        )}
        {item.speakers && (
          <div className="flex flex-col gap-1 mt-1">
            {item.speakers.map((speaker, i) => (
              <div key={i} className="typography-body-md text-neu-800">
                <span className="font-bold">{speaker.name}</span>
                {speaker.role && <span>, {speaker.role}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (item.type === "break") {
    return (
      <div className="flex flex-col gap-4 border-b border-neu-200 p-6 md:flex-row md:gap-12 bg-neu-100">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/schedule/${index}`}
      className="flex flex-col gap-4 border-b border-neu-200 p-6 md:flex-row md:gap-12 hover:bg-neu-50 transition-colors ease-linear hover:duration-[50ms]"
    >
      {content}
    </Link>
  );
}
