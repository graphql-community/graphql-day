import localFont from "next/font/local";

export const bbbKarrik = localFont({
  src: "./BBB_Karrik.woff2",
});

const newFontsStyles = /* css */ `
html {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`;

export const NewFontsStyleTag = () => {
  return <style dangerouslySetInnerHTML={{ __html: newFontsStyles }} />;
};
