import type { Metadata } from "next";
import "./global.css"

export const metadata: Metadata = {
  title: "Young Based Blog",
  description: "Get Based",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <main> {children} </main>
      </body>
    </html>
  );
}
