import Image from "next/image";
//
import clinic_img from "@images/clinic.webp";

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" w-full h-[80vh] p-6 flex flex-col justify-center items-center">
        <Image
          src={ clinic_img }
          alt="The Owaisi's Clinic"
          draggable="false"
          className=" w-32 md:w-40 h-32 md:h-40 m-4 md:m-6"
        />
        <h1 className=" m-4 md:m-6 font-primary font-medium text-center text-3xl md:text-5xl text-grey">
          Welcome To <span className=" font-semibold"> The Owaisi's Clinic </span>
        </h1>
      </div>
    </>
  );
}