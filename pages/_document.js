// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }



import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Tambahin meta tag buat SEO */}
        <meta charSet="UTF-8" />
        <meta name="description" content="This is my custom Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Tambahin link ke Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* Tambahin custom class buat body */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

