import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BookOpenText, Library, ChartNoAxesCombined, User2 } from "lucide-react"

export default function Dashboard() {
  return (
    <>
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-10">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Total Assets</CardTitle>
                <BookOpenText className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">87</p>
                <p className="text-xs text-muted-foreground">on average shelf</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Total Shelfs</CardTitle>
                <Library className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">Total Shelfs on MyBookshelf</p>
            </CardContent>
        </Card>

        {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Total XYZ</CardTitle>
                <ChartNoAxesCombined className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">XX</p>
                <p className="text-xs text-muted-foreground">Total XYZ Created</p>
            </CardContent>
        </Card> */}

        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Total Users</CardTitle>
                <User2 className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">120</p>
                <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
            </CardContent>
        </Card>
    </div>

    <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
            <CardHeader>
                <CardTitle>Inventory</CardTitle>
                <CardDescription>
                    Latest entries in your account
                </CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Most Recently Added</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    {/* <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>AT</AvatarFallback>
                    </Avatar> */}
                    <BookOpenText className="h-6 w-6" />
                    <div className="grid gap-1">
                        <p className="test-sm font-medium">F. Scott Fitzgerald</p>
                        <p className="text-sm text-muted-foreground">The Great Gatsby</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>AT</AvatarFallback>
                    </Avatar> */}
                    <BookOpenText className="h-6 w-6" />
                    <div className="grid gap-1">
                        <p className="test-sm font-medium">F. Scott Fitzgerald</p>
                        <p className="text-sm text-muted-foreground">The Great Gatsby</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>AT</AvatarFallback>
                    </Avatar> */}
                    <BookOpenText className="h-6 w-6" />
                    <div className="grid gap-1">
                        <p className="test-sm font-medium">F. Scott Fitzgerald</p>
                        <p className="text-sm text-muted-foreground">The Great Gatsby</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>AT</AvatarFallback>
                    </Avatar> */}
                    <BookOpenText className="h-6 w-6" />
                    <div className="grid gap-1">
                        <p className="test-sm font-medium">F. Scott Fitzgerald</p>
                        <p className="text-sm text-muted-foreground">The Great Gatsby</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
    </>
  )
}