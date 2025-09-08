import { ReactElement, ReactNode } from "react";
import { Metadata } from "next";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { GraphQLDayLogoLink } from "../components/logo-link";

import { NewFontsStyleTag } from "../fonts";
import { CFP_LINK, TICKETS_LINK } from "../constants";

import "../globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`html { scroll-padding-top: 5rem }`}</style>
        <NewFontsStyleTag />
      </head>
      <body>
        <Navbar
          year={2025}
          links={[
            { children: "Submit a talk", href: CFP_LINK },
            { children: "Get a ticket", href: TICKETS_LINK },
            // todo: ?
            // { children: "Schedule", href: "/conf/2025/schedule" },
            // { children: "Speakers", href: "/conf/2025/speakers" },
            // { children: "Sponsors", href: "/#sponsors" },
            // { children: "Resources", href: "/resources" },
            // { children: "FAQ", href: "/#faq" },
          ]}
        />
        {children}
        <Footer
          logo={<GraphQLDayLogoLink year={2025} />}
          links={[
            { children: "Sponsor", href: "/conf/2025/#sponsors" },
            { children: "Speakers", href: "/#speakers" },
            { children: "GraphQLConf 2024", href: "/conf/2024" },
            { children: "FAQ", href: "#faq" },
            { children: "Contact Us", href: "/conf/2025/resources/#contact" },
            { children: "GraphQL", href: "/" },
            { children: "GraphQL Foundation", href: "/foundation" },
            [
              {
                children: "Code of Conduct",
                href: "/conf/2025/code-of-conduct",
              },
              {
                children: "Inclusion & Accessibility",
                href: "/conf/2025/resources/#inclusion--accessibility",
              },
            ],
          ]}
        />
      </body>
    </html>
  );
}
