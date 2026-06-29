import Link from "next/link"

const links = [
    {
        name: "Books",
        href: "/dashboard/books",
    },
    {
        name: "Shelfs",
        href: "/dashboard/shelfs"
    },
]

// export default function DashboardLinks({data} : {data:any}) {
export default function DashboardLinks() {
  return (
    <>
        {links.map((link)=>(
            <Link key={link.href} href={link.href}>{link.name}</Link>
        ))}
    </>
  )
}