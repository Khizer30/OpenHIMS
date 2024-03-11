import { type Metadata } from "next";
import "@fontsource-variable/raleway";
import "@fontsource/lato";
//
import Navbar from "@components/Navbar";
import { type Children } from "@lib/Interface";
import "./globals.css";

// Metadata
export const metadata: Metadata =
{
  title: "Clinic Run",
  keywords: ["Clinic Run"],
  description: "Clnic Run is an open-source HIMS",
  authors:
  {
    name: "Syed Muhammad Khizer",
    url: "https://syedmuhammadkhizer.vercel.app"
  },
  icons:
  {
    icon:
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favicon.png"
    }
  }
};

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  return (
    <>
      <html lang="en-PK">
        <body>
          <Navbar />
          { children }
        </body>
      </html>
    </>
  );
}