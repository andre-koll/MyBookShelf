import { columns, Assets } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Assets[]> {
    // Fetch data from API
    const userId = "LauLwQTtZ4z7baLMvFAHYMvFdow1FCwH"
    const formData = new FormData();
    formData.append('id', userId);
    const putMethod = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        }

    const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_URL + `/get/${userId}/asset`,
        putMethod
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