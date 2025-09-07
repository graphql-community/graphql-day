import { ReactElement, ReactNode } from "react";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://graphql.day"),
  keywords: ["GraphQL", "Conference", "FOST", "December 2025", "Paris"],
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
      </head>
      <body>{children}</body>
    </html>
  );
}
