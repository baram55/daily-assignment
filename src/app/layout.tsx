import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily 과제",
  description: "고양이 정보 가져오기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <h1 className="text-center m-4 bg-stone-300 w-full">
          고양이 정보 페이지
        </h1>
        <nav className="flex">
          <Link className="flex-1 bg-slate-200 text-center" href="/">
            Home{" "}
          </Link>
          <Link className="flex-1 bg-slate-400 text-center" href="/CSR">
            CSR{" "}
          </Link>
          <Link
            className="flex-1 bg-slate-600 text-white text-center"
            href="/ISR"
          >
            ISR{" "}
          </Link>
          <Link
            className="flex-1 bg-slate-800 text-white text-center"
            href="/SSG"
          >
            SSG{" "}
          </Link>
          <Link
            className="flex-1 bg-slate-950 text-white text-center"
            href="/SSR"
          >
            SSR{" "}
          </Link>
        </nav>
        <div className="bg-stone-300 h-full">{children}</div>
      </body>
    </html>
  );
}
