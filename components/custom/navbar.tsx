import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import AppLogo from '@/app/favicon.ico'
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
    return (
        <>
            <div className="border-b max-w-screen fixed top-0 left-0 w-full z-10 bg-inherit -mb-20">
                <div className="flex h-20 justify-center items-center px-4">

                    <div className="flex justify-center items-center">
                        <Link className="flex flex-row items-center gap-2" href="/">
                            <Image
                                src={AppLogo}
                                alt="riled-logo"
                                className="w-10 h-10 rounded-xl"
                            />
                            <h2 className="text-2xl">Riled</h2>
                            {/* <AvatarButton imgSrc="https://github.com/shadcn.png" isLogo /> */}
                        </Link>
                    </div>

                    <div className="flex justify-center items-center mx-2 lg:mx-4 gap-4">
                        {/* <StoreSwitcher items={stores} />
            <MainRoutes className="ml-auto" /> */}
                    </div>
                    <div className="ml-auto flex items-center space-x-2 lg:space-x-4">



                        <LanguageToggle />
                        <ThemeToggle />
                        <Button variant="outline" size="icon" className="md:hidden sm:hidden xs:hidden">
                            <MenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                            <span className="sr-only">Navigation Menu</span>
                        </Button>

                        {/* <AvatarButton user={user} /> */}
                    </div>
                </div>
            </div>
            <div className="h-20" />
        </>
    )
}

export default Navbar;