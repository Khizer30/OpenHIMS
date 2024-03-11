import { type Metadata } from "next";

// Metadata
export const metadata: Metadata =
{
  title: "Clinic Run | 404",
  keywords: ["Clinic Run", "404"]
};

// Not Found
export default function NotFound(): JSX.Element
{
  return (
    <>
      <div className=" w-full h-[80vh] p-6 flex flex-col justify-center items-center">
        <h1 className=" m-4 md:m-6 font-primary font-medium text-center text-5xl md:text-7xl text-grey"> 404 </h1>
        <h2 className=" m-4 md:m-6 font-primary font-medium text-center text-3xl md:text-5xl text-grey"> Page Not Found! </h2>
      </div>
    </>
  );
}