"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
//
import logo from "@images/logo.webp";

// Navbar
export default function Navbar(): JSX.Element
{
  return (
    <>
      <nav className=" h-28 p-6 grid grid-cols-4">
        <div className=" col-span-1 flex justify-start items-center">
          <Image
            src={ logo }
            alt="Clinic Run"
            draggable="false"
            className=" w-12 md:w-20 h-12 md:h-20"
          />
        </div>
        <div className=" col-span-3 flex justify-center items-center">

          <Link href="/">
            <Button
              type="button"
              placeholder=""
              variant="text"
              ripple
            >
              Home
            </Button>
          </Link>

          <Link href="/appointment">
            <Button
              type="button"
              placeholder=""
              variant="text"
              ripple
            >
              New Appointment
            </Button>
          </Link>

          <Link href="/records">
            <Button
              type="button"
              placeholder=""
              variant="text"
              ripple
            >
              Records
            </Button>
          </Link>

        </div>
      </nav>
    </>
  );
}