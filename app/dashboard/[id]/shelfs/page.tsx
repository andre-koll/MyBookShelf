import { columns, Shelfs } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Shelfs[]> {
    // Fetch data from API
    const userId = "LauLwQTtZ4z7baLMvFAHYMvFdow1FCwH"
    const res = await fetch(
        `http://localhost:3000/api/get/${userId}/shelf`,
        { cache: "no-store" }
    )
    const data = await res.json()

    // console.log(data);
    return data as Shelfs[]

}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}