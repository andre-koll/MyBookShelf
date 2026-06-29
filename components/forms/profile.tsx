import { updateProfile } from "@/app/dashboard/[id]/profile/actions";
import SubmitButton from "./submit-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, BookOpenText, Library, ChartNoAxesCombined, User2 } from "lucide-react"

export default async function ProfileForm({data} : {data:any}) {
    // console.log({data});

    const langs: string[] = ["de", "en", "fr", "it"];
    // console.log(langs);

    return (
        <>
        {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 columns-sm">
            <CardHeader className="box-border size-80 border-4 p-4">
                <CardTitle>Total Shelfs</CardTitle>
                <User className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">Total Shelfs on MyBookshelf</p>
            </CardContent>
        </Card>         */}
        
        {/* <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3"> */}
            <form action={updateProfile} className="space-y-2">
                <input
                    name="id"
                    defaultValue={data.id}
                    hidden
                    readOnly
                />
                <input
                    name="name"
                    placeholder="Your Name"
                    defaultValue={data.name}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="email"
                    placeholder="E-Mail"
                    defaultValue={data.email}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="image"
                    placeholder="Profile Picture"
                    defaultValue={data.image || ""}
                    className="border p-2 w-full"
                />
                <div className="border p-2 w-full">
                    <p>Language</p>
                    <div className="mt-2 grid grid-cols-1 w-20">
                        <select name="lang"  defaultValue={data.lang} className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required>
                        {langs.map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                        </select>
                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <input
                    name="createdAt"
                    placeholder="Account Created"
                    defaultValue={data.createdAt || ""}
                    className="border p-2 w-full"
                    hidden
                    readOnly
                />
                <SubmitButton />
            </form>
        </>
    )
}

        //  export default async function ProfileFormXXX({
        //  params,
        //  }: {
        //      params: Promise<{ data: string }>
        //  }) {

        //   export default async function ProfileForm(this: any.props: any.first: any){

        //   Get user ID from slug
        //     const { data } = await params
        //        console.log('profile form', params);
        //   Get user data from db
        //     const profile = await prisma.user.findUnique({
        //       where: { id: id },
        //     });
        //     console.log("profile form", profile)


        //   export default function ProfileForm() {
        //  return (
        //      <form action={createNote} className="space-y-2">
        //      <input
        //          name="name"
        //          placeholder="Name"
        //          className="border p-2 w-full"
        //          required
        //      />
        //      <input
        //          name="email"
        //          placeholder="E-Mail"
        //          className="border p-2 w-full"
        //          required
        //      />
        //      <input
        //          name="image"
        //          placeholder="Profile Picture"
        //          className="border p-2 w-full"
        //          required
        //      />
        //      <input
        //          name="lang"
        //          placeholder="Language"
        //          className="border p-2 w-full"
        //          required
        //      />
        //      <input
        //          name="createdAt"
        //          placeholder="Account Created"
        //          className="border p-2 w-full"
        //          required
        //      />
        //      <SubmitButton />
        //      </form>
        //  );
        //  }