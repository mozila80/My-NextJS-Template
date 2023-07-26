import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/component/header";
import Footer from "@/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Title",
  description: "Description",
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <a className='skip__content' href='#main'>
          Skip to Content
        </a>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
