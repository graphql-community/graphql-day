import { clsx } from "clsx";
import NextLink from "next/link";

import { GraphQLDayLogo } from "./graphql-day-logo";

export interface GraphQLDayLogoLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function GraphQLDayLogoLink({
  className,
  ...rest
}: GraphQLDayLogoLinkProps) {
  return (
    <NextLink
      href="/"
      className={clsx(
        "-m-2 p-2 underline-offset-4 hover:underline flex items-center gap-2 text-xl/none uppercase",
        className
      )}
      {...rest}
    >
      <GraphQLDayLogo className="h-6" />
      GraphQL Day 2025
    </NextLink>
  );
}
