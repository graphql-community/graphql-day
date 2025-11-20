import clsx from "clsx";

import { Anchor } from "../components/design-system/anchor";

type Speaker = {
  name: string;
  role: string;
  link?: string;
};

type ScheduleItem = {
  time: string;
  title: string;
  speakers?: Speaker[];
  type: "talk" | "break";
  description?: string;
};

const SCHEDULE: ScheduleItem[] = [
  {
    time: "8:45 AM",
    title: "Breakfast",
    type: "break",
  },
  {
    time: "9:15 AM - 9:45 AM",
    title:
      "GraphQL: Untangling under- and overfetching problem at the largest e-commerce in NL/BE",
    speakers: [
      {
        name: "An Ngo",
        role: "Lead Engineer, bol",
        link: "https://www.linkedin.com/in/vliegveld5/",
      },
    ],
    type: "talk",
  },
  {
    time: "9:45 AM - 10:10 AM",
    title: "Grafast: A Declarative Solution to GraphQL's Execution Woes",
    speakers: [
      {
        name: "Benjie Gillam",
        role: "GraphQL Technical Steering, GraphQL Foundation",
        link: "https://www.linkedin.com/in/benjiegillam/",
      },
    ],
    type: "talk",
  },
  {
    time: "10:15 AM - 10:40 AM",
    title:
      "Introducing Fission: The Intent-first Approach to Schema Design and Microservice Governance",
    speakers: [
      {
        name: "Nithin Kumar B",
        role: "Founding Engineer, WunderGraph",
        link: "https://www.linkedin.com/in/nithinkumarb/",
      },
      {
        name: "Jens Neuse",
        role: "CEO and Co-funder, WunderGraph",
        link: "https://www.linkedin.com/in/jens-neuse-706673195/",
      },
    ],
    type: "talk",
  },
  {
    time: "10:40 AM",
    title: "Coffee Break / Networking / Expo",
    description: "Partners Village",
    type: "break",
  },
  {
    time: "11:00 AM - 11:25 AM",
    title: "Features You May Not Be Using (But Will Love)",
    speakers: [
      {
        name: "Aurélien David",
        role: "Co-founder & CTO, Pennylane",
        link: "https://www.linkedin.com/in/aurel-spyl/",
      },
    ],
    type: "talk",
  },
  {
    time: "11:30 AM - 11:55 AM",
    title: "From Isolated Services to Agentic Platforms",
    speakers: [
      {
        name: "Michael Staib",
        role: "Co-Founder, ChilliCream",
        link: "https://www.linkedin.com/in/michael-staib-31519571/",
      },
      {
        name: "Pascal Senn",
        role: "COO, ChilliCream",
        link: "https://www.linkedin.com/in/pascal-senn-90899a15a",
      },
    ],
    type: "talk",
  },
  {
    time: "12:00 PM - 12:25 PM",
    title: "Unlocking Performance with Response Caching",
    speakers: [
      {
        name: "Benjamin Coenen",
        role: "Rust Sr Staff Software Engineer, Apollo GraphQL",
        link: "https://www.linkedin.com/in/coenenbenjamin/",
      },
    ],
    type: "talk",
  },
  {
    time: "12:30 PM - 12:55 PM",
    title: "GraphQL, Pothos & SQLite: a perfect match",
    speakers: [
      {
        name: "Matthias Le Brun",
        role: "Frontend developer & designer",
        link: "https://www.linkedin.com/in/bloodyowl/",
      },
    ],
    type: "talk",
  },
  {
    time: "1:00 PM",
    title: "Lunch Break",
    type: "break",
  },
  {
    time: "2:00 PM - 2:25 PM",
    title: "An Eventful Journey: Building Federated GraphQL Subscriptions",
    speakers: [
      {
        name: "Alessandro Pagnin",
        role: "Go Developer, WunderGraph",
        link: "https://www.linkedin.com/in/alessandro-pagnin-1b6524121/",
      },
    ],
    type: "talk",
  },
  {
    time: "2:30 PM - 2:55 PM",
    title: "What if Your API Spoke Accessibility?",
    speakers: [
      {
        name: "Vanessa Johnson",
        role: "Android Engineer, The New York Times",
        link: "https://www.linkedin.com/in/vanessa-johnson999/",
      },
    ],
    type: "talk",
  },
  {
    time: "3:00 PM - 3:25 PM",
    title:
      "GraphOps: Bringing DevOps to GraphQL with the Apollo GraphOS Operator",
    speakers: [
      {
        name: "Jonathan Rainer",
        role: "Staff Software Engineer, Apollo GraphQL",
        link: "https://www.linkedin.com/in/jonathan-rainer/",
      },
    ],
    type: "talk",
  },
  {
    time: "3:30 PM - 3:55 PM",
    title: "Coffee Break / Networking / Expo",
    description: "Partners Village",
    type: "break",
  },
  {
    time: "3:55 PM - 4:20 PM",
    title: "Beyond SDL: Into the Wonderful World of Graphs",
    speakers: [
      {
        name: "Ivan Goncharov",
        role: "Head of R&D, Keenethics",
        link: "https://www.linkedin.com/in/igoncharov/",
      },
    ],
    type: "talk",
  },
  {
    time: "4:25 PM - 4:50 PM",
    title: "Closing remarks",
    speakers: [
      {
        name: "Martin Bonnin",
        role: "Android Engineer, Apollo GraphQL",
        link: "https://www.linkedin.com/in/martinbonnin/",
      },
    ],
    type: "talk",
  },
];

export function ScheduleSection() {
  return (
    <section className="gql-section xl:py-12" id="schedule">
      <div className="gql-container">
        <h3 className="typography-h2 mb-12">Schedule</h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="typography-h3">December 11</div>
            <div className="typography-body-lg text-neu-700">
              Room: Aubepine 1/2
            </div>
          </div>
          <div className="flex flex-col">
            {SCHEDULE.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex flex-col gap-4 border-b border-neu-200 p-6 md:flex-row md:gap-12",
                  item.type === "break" && "bg-neu-100"
                )}
              >
                <div className="typography-menu min-w-[160px] font-medium text-neu-700 whitespace-nowrap">
                  {item.time}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="typography-h3 text-xl font-bold text-neu-900">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="typography-body-md text-neu-700">
                      {item.description}
                    </p>
                  )}
                  {item.speakers && (
                    <div className="flex flex-col gap-1 mt-1">
                      {item.speakers.map((speaker, i) => (
                        <div
                          key={i}
                          className="typography-body-md text-neu-700"
                        >
                          {speaker.link ? (
                            <Anchor
                              href={speaker.link}
                              className="typography-link"
                            >
                              {speaker.name}
                            </Anchor>
                          ) : (
                            <span>{speaker.name}</span>
                          )}
                          {speaker.role && (
                            <span className="text-neu-700">
                              , {speaker.role}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
