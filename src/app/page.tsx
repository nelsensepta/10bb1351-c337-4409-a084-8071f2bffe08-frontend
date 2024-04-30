import { Payment, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getData(): Promise<Payment[] | undefined> {
  // Fetch data from your API here.
  let data;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/persons`, {
      method: "GET",
    });
    data = await res.json();
  } catch (err) {
    console.log(err);
  }
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  // console.log("api", process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="container mx-auto py-10">
      <p>ok</p>
      <DataTable columns={columns} data={data!} />
    </div>
  );
}
