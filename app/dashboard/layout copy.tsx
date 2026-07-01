// 'use client';

// import { signOut, useSession } from "@/lib/auth-client";
// import Image from "next/image";
// // import DashboardLinks from "../../components/layout/DashboardLinks";
// import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { CircleUser, MenuIcon, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes"
// import {
//   DropdownMenu,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import test from "node:test";
// import LoadingSpinner from "@/components/layout/LoadingSpinner"

// export function ModeToggle() {
//     const { setTheme } = useTheme()
//     return (
//         <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//             <Button variant="outline" size="icon">
//                 <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                 <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                 <span className="sr-only">Toggle theme</span>
//             </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//             <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setTheme("system")}>
//             System
//             </DropdownMenuItem>
//         </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }

// export interface items {
//     user: string;
//     asset: string;
//     shelf: string;
// }

// // export default function DashboardLayout({children}:{children : ReactNode}) {
// export default function DashboardLayout({
//         children,
//     }: {
//         children: React.ReactNode;
// }) {

//     const { data: session, isPending } = useSession();
//     const router = useRouter();

//     useEffect(() => {
//         if (!isPending && !session?.user) {
//         router.push("/sign-in");
//         }
//     }, [session, isPending, router]);

//     if (isPending) {
//         return (
//             <LoadingSpinner />
//             // <div>Loading ...</div>
//         );
//     }

//   if (!session?.user) {
//     return (
//         <div className="min-h-screen grid place-items-center p-8">
//             <div className="text-center">
//             <p>Redirecting to sign in...</p>
//             </div>
//         </div>
//     );
//   }

//     const { user } = session;

//     const profileLink = "/dashboard/"+user.id+"/profile";

//     // console.log("User in Dashboard Layout:", user);
//     // console.log("User in Dashboard Layout:", user.id);

//     return (
//     <>
//         <main className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-8">
//             <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b">
//             <Sheet>
//                 <SheetTrigger asChild>
//                 <Button
//                     className="shrink-0 md:hidden"
//                     variant="outline"
//                     size="icon"
//                 >
//                     <MenuIcon className="h-5 w-5" />
//                 </Button>
//                 </SheetTrigger>
//                 <SheetContent side="left">
//                 <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
//                     {/* <DashboardLinks /> */}
//                     <Link href={`/dashboard/${user.id}/assets`}>Assets</Link>
//                     <Link href={`/dashboard/${user.id}/shelfs`}>Shelfs</Link>
//                 </nav>
//                 </SheetContent>
//             </Sheet>

//                 <nav className="flex gap-4">
//                     <Link href="/dashboard" className="flex gap-2 select-none font-extrabold">
//                         <Image 
//                         width={24}
//                         height={24}
//                         src="/images/logo.svg" 
//                         alt="MyBookShelf logo"
//                         style={{ width: '24px', height: 'auto' }}
//                         />
//                         <p>MyBookShelf</p>
//                     </Link>

//                     <div className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
//                         {/* <DashboardLinks /> */}
//                     <Link href={`/dashboard/${user.id}/assets`}>Assets</Link>
//                     <Link href={`/dashboard/${user.id}/shelfs`}>Shelfs</Link>
//                     </div>
//                 </nav>

//             <ModeToggle></ModeToggle>

//             <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                 <Button variant="secondary" size="icon" className="rounded-full">
//                     <CircleUser className="w-5 h-5" />
//                 </Button>
//                 </DropdownMenuTrigger>

//                 <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>{user.name || "Not set"}</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                     <Link href={`/dashboard/${user.id}/profile`}>
//                     <DropdownMenuItem>
//                         Edit Profile
//                     </DropdownMenuItem>
//                     </Link>
//                 <DropdownMenuItem onClick={() => signOut()}>
//                     Logout
//                 </DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>

//             </header>
//             <div className="my-5">{children}</div>
//         </main>
//     </>
//     );
// }