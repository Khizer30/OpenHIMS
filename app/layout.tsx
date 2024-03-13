import { type Metadata } from "next";
import "@fontsource-variable/raleway";
import "@fontsource/lato";
//
import Sidebar from "@components/Sidebar";
import { type Children } from "@lib/Interface";
import "./globals.css";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS",
  keywords: ["OpenHIMS"],
  description: "OpenHIMS is an open-source HIMS",
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
        <body className=" flex">
          <Sidebar />
          { children }
        </body>
      </html>
    </>
  );
}