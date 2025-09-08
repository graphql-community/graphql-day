import NextLink from "next/link";
import { clsx } from "clsx";
import { GraphQLDayLogo } from "./graphql-day-logo";

export interface GraphQLDayLogoLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  year: number;
}

export function GraphQLDayLogoLink({
  className,
  year,
  ...rest
}: GraphQLDayLogoLinkProps) {
  return (
    <NextLink
      href={`/conf/${year}`}
      className={clsx(
        "-m-2 p-2 underline-offset-4 hover:underline flex items-center gap-2 text-xl/none uppercase",
        className
      )}
      {...rest}
    >
      <GraphQLDayLogo className="h-6" />
      GraphQL Day {year}
    </NextLink>
  );
}
