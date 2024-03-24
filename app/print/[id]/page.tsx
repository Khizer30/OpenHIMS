import { type Metadata } from "next";
//
import { getAppointment } from "@lib/db";
import { type JSON } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | Print",
  keywords: ["OpenHIMS", "Print"]
};

// Params
interface Params
{
  params:
  {
    id: string;
  };
}

// Page
export default async function Page({ params }: Params): Promise<JSX.Element>
{
  const data: JSON = await getAppointment(+params.id);

  return (
    <>
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        { params.id }
        { JSON.stringify(data) }
      </div>
    </>
  );
}