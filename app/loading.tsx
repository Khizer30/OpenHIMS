import Image from "next/image";
//
import clinic_img from "@images/clinic.webp";

// Loading
export default function Loading(): JSX.Element
{
  return (
    <>
      <div className=" w-full h-[80vh] p-6 flex justify-center items-center">
        <Image
          src={ clinic_img }
          alt="The Owaisi's Clinic"
          draggable="false"
          className=" w-32 md:w-40 h-32 md:h-40 m-4 md:m-6 animate-pulse"
        />
      </div>
    </>
  );
}