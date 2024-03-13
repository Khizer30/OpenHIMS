"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PresentationChartBarIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/solid";
//
import logo from "@images/clinic.webp";

// Sidebar
export default function Sidebar()
{
  return (
    <Card className=" h-screen max-w-[20rem] p-4">
      <div className=" mb-4 p-4 flex justify-center items-center">
        <Image
          src={ logo }
          alt="The Owaisi's Clinic"
          draggable="false"
          className=" w-20 h-20"
        />
      </div>
      <List>

        <Link href="/">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className=" h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link href="/appointment">
          <ListItem>
            <ListItemPrefix>
              <UserPlusIcon className=" h-5 w-5" />
            </ListItemPrefix>
            New Appointment
          </ListItem>
        </Link>

        <Link href="/records">
          <ListItem>
            <ListItemPrefix>
              <UsersIcon className=" h-5 w-5" />
            </ListItemPrefix>
            Patient Records
          </ListItem>
        </Link>

      </List>
    </Card>
  );
}