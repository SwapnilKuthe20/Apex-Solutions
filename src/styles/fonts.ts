import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = localFont({
  src: [
    {
      path: "../../public/fonts/Manrope/Manrope-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Instrument_Serif/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});
