import Image from "next/image";
//
import Sidebar from "@components/Sidebar";
import logo from "@images/clinic.webp";

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <Image
          src={ logo }
          alt="The Owaisi's Clinic"
          draggable="false"
          className=" w-40 h-40 m-4"
        />
        <h1 className=" m-4 font-primary font-medium text-center text-5xl text-grey">
          Welcome To <span className=" font-semibold"> The Owaisi's Clinic </span>
        </h1>
      </div>
    </>
  );
}