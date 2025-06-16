import Sidebar from "@/components/ui/sidebar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Sidebar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
