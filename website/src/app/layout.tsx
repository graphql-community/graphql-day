import "../globals.css";

import { Metadata } from "next";
import { ReactElement, ReactNode } from "react";

import { Footer } from "../components/footer";
import { GraphQLDayLogoLink } from "../components/logo-link";
import { Navbar } from "../components/navbar";
import { TICKETS_LINK } from "../constants";
import { NewFontsStyleTag } from "../fonts";

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
  },
  description:
    "Join GraphQL Day at CNIT La Defense, Paris on December 11, 2025. Learn from industry experts, participate in hands-on workshops, and connect with the GraphQL community.",
  metadataBase: new URL("https://graphql.day"),
  keywords: ["GraphQL", "Conference", "FOST", "11 December 2025", "Paris"],
  applicationName: "GraphQL Day",
  title: {
    absolute: "",
    template: "%s | GraphQL Day",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <style>{`html { scroll-padding-top: 5rem }`}</style>
        <NewFontsStyleTag />
      </head>
      <body>
        <Navbar
          links={[
            { children: "See the schedule", href: "#schedule" },
            { children: "Get a ticket", href: TICKETS_LINK },
          ]}
        />
        {children}
        <Footer
          logo={<GraphQLDayLogoLink />}
          links={[
            {
              children: "apiDays Paris",
              href: "https://www.apidays.global/events/paris",
            },
            [
              {
                children: "Code of Conduct",
                href: "https://www.apidays.global/legal/code-of-conduct#:~:text=Individuals%20who%20participate%20(or%20plan,during%20or%20after%20the%20event.",
              },
            ],
          ]}
        />
      </body>
    </html>
  );
}
