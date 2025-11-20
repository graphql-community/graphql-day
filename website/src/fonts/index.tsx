import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "./Switzer-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./Switzer-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

const fontStyles = /* css */ `
html {
  --font-sans: ${switzer.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`;

export const FontStyleTag = () => {
  return <style dangerouslySetInnerHTML={{ __html: fontStyles }} />;
};
