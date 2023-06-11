import Head from "next/head";
import favicon192 from "../../assets/favicons/android-chrome-192x192.png";
import favicon512 from "../../assets/favicons/android-chrome-512x512.png";
import appleTouchIcon from "../../assets/favicons/apple-touch-icon.png";
import favicon16 from "../../assets/favicons/favicon-16x16.png";
import favicon32 from "../../assets/favicons/favicon-32x32.png";
import defaultImage from "../../assets/images/default.jpg";
import faviconIco from "../../assets/favicons/favicon.ico";

const pageImage = process.env.NEXT_PUBLIC_ROOT_URL + defaultImage.src.slice(1);

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL as string;

export const HtmlHead = () => {
  const url = `${ROOT_URL}`;

  return (
    <>
      <meta name="robots" content="follow, index" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={pageImage} />
      <meta property="og:site_name" content="Jack Antoine Charlot" />
      <meta property="og:title" content={'Jack Antoine Charlot - Director & Animation Director'} />
      <meta property="og:description" content={'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.'} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pageImage} />

      <link rel="shortcut icon" href={faviconIco.src} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
      <link rel="icon" type="image/png" sizes="192x192" href={favicon192.src} />
      <link rel="icon" type="image/png" sizes="512x512" href={favicon512.src} />
      {/* <link rel="mask-icon" href="" color="#5bbad5" /> Add mask icon */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={url} />
      </>
  );
};