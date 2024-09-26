import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Ja Filip som toto spravil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        {children}
      </body>
    </html>
  );
}
