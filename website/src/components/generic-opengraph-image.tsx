import {
  ConferenceOpengraphImageHeader,
  OG_IMAGE_HEADER_HEIGHT,
} from "./conference-opengraph-image-header";
import graphqlLogoStripes from "./graphql-logo-stripes.png";

/**
 * We can't use CSS variables and Tailwind classes here because we're rendering an image.
 */
export const colors = {
  neu0: "hsl(0 0% 100%)",
  neu50: "hsl(75 37% 97%)",
  neu100: "hsl(75 2% 95%)",
  neu200: "hsl(75 2% 90%)",
  neu300: "hsl(75 2% 85%)",
  neu400: "hsl(75 2% 80%)",
  neu500: "hsl(75 2% 70%)",
  neu600: "hsl(75 2% 60%)",
  neu700: "hsl(75 2% 40%)",
  neu800: "hsl(75 2% 20%)",
  neu900: "hsl(75 2% 5%)",
  priLighter: "hsl(319 100% 90%)",
  priLight: "hsl(318 100% 80%)",
  priBase: "hsl(319 100% 44.1%)",
  priDark: "hsl(319 100% 30%)",
  priDarker: "hsl(319 100% 20%)",
  secLighter: "hsl(181deg 74% 80%)",
  secLight: "hsl(181deg 98% 67%)",
  secBase: "hsl(181deg 98% 37%)",
  secDark: "hsl(181deg 98% 27%)",
  secDarker: "hsl(181deg 98% 17%)",
};

export const fonts = {
  sans: "var(--font-sans)",
  mono: "var(--font-karrik)",
};

export const RIGHT_COLUMN_WIDTH_PX = 476;

export interface GenericOpengraphImageProps
  extends React.HTMLAttributes<HTMLElement> {
  date: string;
  year: string;
  location: string;
  pageTitle: string;
}

export function GenericOpengraphImage({
  date,
  location,
  year,
  pageTitle,
  ...rest
}: GenericOpengraphImageProps) {
  const basePath =
    `https://${process.env.VERCEL_URL}` || process.env.__NEXT_PRIVATE_ORIGIN;

  const height = 630;

  return (
    <article
      style={{
        display: "flex",
        height,
        width: "1200px",
        flexDirection: "column",
        overflow: "hidden",
        borderWidth: "2px",
        borderColor: colors.neu600,
        backgroundColor: colors.neu900,
        fontFamily: fonts.sans,
      }}
      {...rest}
    >
      <ConferenceOpengraphImageHeader
        year={year}
        date={date}
        location={location}
      />

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "2.5rem",
          position: "relative",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: fonts.sans,
            lineHeight: "1.25",
            color: colors.neu0,
            fontSize: "96px",
          }}
        >
          {pageTitle}
        </h1>
        <img
          src={`${basePath}${graphqlLogoStripes.src}`}
          style={{ position: "absolute", right: 0, bottom: -5 }}
          height={height - OG_IMAGE_HEADER_HEIGHT}
          width={673}
        />
      </div>
    </article>
  );
}
