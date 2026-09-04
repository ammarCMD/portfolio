import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ammar Rasheed | Junior Data Engineer | SQL, Python, Azure, Databricks & Microsoft Fabric",
  description:
    "Ammar Rasheed — Junior Data Engineer based in Islamabad, Pakistan, specializing in SQL, Python, ETL/ELT pipelines, Azure, Databricks, Apache Spark, Microsoft Fabric, data warehousing, and Power BI. Building reliable data pipelines from source to insight.",
  keywords: [
    "Ammar Rasheed",
    "Junior Data Engineer",
    "Data Engineer Pakistan",
    "Junior Data Engineer Islamabad",
    "Azure Data Engineer",
    "Databricks Data Engineer",
    "SQL Data Engineer",
    "Python Data Engineer",
    "Microsoft Fabric Data Engineer",
    "Apache Spark Data Engineer",
    "ETL Developer",
    "Data Engineering Portfolio",
    "Dimensional Modeling",
    "Medallion Architecture",
    "Power BI",
    "PySpark"
  ],
  authors: [{ name: "Ammar Rasheed" }],
  creator: "Ammar Rasheed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.dataengineer.dev",
    title: "Ammar Rasheed | Junior Data Engineer Portfolio",
    description:
      "Ammar Rasheed — Junior Data Engineer based in Islamabad, Pakistan, specializing in SQL, Python, ETL/ELT pipelines, Azure, Databricks, Apache Spark, Microsoft Fabric, and Power BI.",
    siteName: "Ammar Rasheed Data Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Rasheed | Junior Data Engineer",
    description: "Building reliable data pipelines from source to insight.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-deDark-950 text-slate-100 antialiased min-h-screen selection:bg-sky-500/30 selection:text-sky-200`}
      >
        {children}
      </body>
    </html>
  );
}
