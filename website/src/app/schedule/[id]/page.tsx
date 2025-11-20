import Link from "next/link";
import { notFound } from "next/navigation";

import { Anchor } from "../../../components/design-system/anchor";
import { ArrowDownIcon } from "../../../components/design-system/pixelarticons/arrow-down-icon";
import { MicroMarkdown } from "../../../components/micro-markdown";
import { SCHEDULE } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TalkPage({ params }: PageProps) {
  const { id } = await params;
  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= SCHEDULE.length) {
    notFound();
  }

  const item = SCHEDULE[index];

  if (item.type === "break") {
    notFound();
  }

  return (
    <section className="gql-section xl:py-12">
      <div className="gql-container">
        <Link
          href="/#schedule"
          className="typography-menu inline-flex items-center gap-2 mb-8 hover:underline p-4 -m-4"
        >
          <ArrowDownIcon className="rotate-90 size-4" />
          Back to Schedule
        </Link>

        <article>
          <header className="mb-8">
            <div className="typography-menu text-xl text-pri-base dark:text-pri-light mb-2 font-black tracking-wide tabular-nums">
              {item.time}
            </div>
            <h1 className="typography-h1 mb-6">{item.title}</h1>
          </header>

          {item.abstract && (
            <section className="mb-12">
              <h2 className="typography-menu mb-4 text-sec-dark dark:text-sec-light">
                Abstract
              </h2>
              <MicroMarkdown
                text={item.abstract}
                className="typography-body-lg max-w-[80ch] text-pretty text-neu-800"
              />
            </section>
          )}

          {item.speakers && (
            <section>
              <h2 className="typography-menu text-sec-dark dark:text-sec-light mb-4">
                {item.speakers.length > 1 ? "Speakers" : "Speaker"}
              </h2>
              <div className="flex flex-col gap-6">
                {item.speakers.map((speaker, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="typography-h3">
                      {speaker.link ? (
                        <Anchor
                          href={speaker.link}
                          className="typography-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {speaker.name}
                        </Anchor>
                      ) : (
                        <span>{speaker.name}</span>
                      )}
                    </div>
                    {speaker.role && (
                      <div className="typography-body-md max-w-[80ch] text-pretty text-neu-700">
                        {speaker.role}
                      </div>
                    )}
                    {speaker.bio && (
                      <MicroMarkdown
                        text={speaker.bio}
                        className="typography-body-md max-w-[80ch] text-pretty text-neu-800 mt-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return SCHEDULE.map((_, index) => ({
    id: index.toString(),
  }));
}
