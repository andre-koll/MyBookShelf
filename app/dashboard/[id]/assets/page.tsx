import { columns, Assets } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Assets[]> {
    // Fetch data from API
    const userId = "LauLwQTtZ4z7baLMvFAHYMvFdow1FCwH"
    const res = await fetch(
        `http://localhost:3000/api/get/${userId}/asset`,
        { cache: "no-store" }
    )
    const data = await res.json()

    // console.log(data);
    return data as Assets[]

}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}