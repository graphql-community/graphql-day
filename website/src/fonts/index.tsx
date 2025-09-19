import localFont from "next/font/local";

export const bbbKarrik = localFont({
  src: "./BBB_Karrik.woff2",
});

const newFontsStyles = /* css */ `
html {
  --font-sans: ${bbbKarrik.style.fontFamily};
}`;

export const NewFontsStyleTag = () => {
  return <style dangerouslySetInnerHTML={{ __html: newFontsStyles }} />;
};
