import clsx from "clsx";

import { Anchor } from "../../components/design-system/anchor";
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
              Room: Aubepine 1/2
            </div>
          </div>
        </header>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {SCHEDULE.map((item, index) => (
              <ScheduleListItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ScheduleListItemProps {
  item: (typeof SCHEDULE)[number];
}

function ScheduleListItem({ item }: ScheduleListItemProps) {
  return (
    <Anchor
      href={`#schedule?id=${item.title.replace(/\s+/g, "-").toLowerCase()}`}
      className={clsx(
        "flex flex-col gap-4 border-b border-neu-200 p-6 md:flex-row md:gap-12",
        item.type === "break" && "bg-neu-100"
      )}
    >
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
              <div key={i} className="typography-body-md text-neu-700">
                {speaker.link ? (
                  <Anchor href={speaker.link} className="typography-link">
                    {speaker.name}
                  </Anchor>
                ) : (
                  <span>{speaker.name}</span>
                )}
                {speaker.role && (
                  <span className="text-neu-700">, {speaker.role}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
