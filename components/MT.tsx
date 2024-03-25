"use client";
import { ThemeProvider } from "@material-tailwind/react";
//
import { type Children } from "@lib/Interface";

// MT
export default function MT({ children }: Children): JSX.Element
{
  // @ts-ignore
  return <ThemeProvider> { children } </ThemeProvider>;
}