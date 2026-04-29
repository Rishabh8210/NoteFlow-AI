import { Menu } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="h-16 w-full flex shadow sticky top-0 left-0 items-center justify-between px-4 bg-white z-100">
            {/* Navigation Logo */}
            <div className="h-full w-fit flex items-center gap-4">
                <img className="h-8" src={'https://cdn.prod.website-files.com/61ba09162b87002e87715b91/61bb125944d9e0417af764a9_perspective-icon-logo.avif'} alt="#Logo"/>
                
                <h1 className="hidden md:block text-xl font-semibold text-zinc-700">NoteFlow AI</h1>
            </div>

            <div className="flex gap-7 h-full w-fit items-center">
                <Link href={'/login'} className="hidden lg:flex text-zinc-400 items-center justify-center rounded-lg font-semibold text-base shrink-0">
                    Product
                </Link>

                <Link href={'/login'} className="hidden lg:flex  text-zinc-400 items-center justify-center rounded-lg font-semibold text-base shrink-0">
                    Reviews
                </Link>

                <Link href={'/login'} className="hidden lg:flex  text-zinc-400 items-center justify-center rounded-lg font-semibold text-base shrink-0">
                    Partners
                </Link>

                <Link href={'/login'} className="hidden lg:flex  text-zinc-400 items-center justify-center rounded-lg font-semibold text-base shrink-0">
                    Partners
                </Link>
            </div>

            <div className="h-full w-fit flex items-center gap-2">
                <Link href={'/login'} className="hidden lg:flex py-2 items-center justify-center px-2.5 rounded-lg font-semibold text-sm shrink-0">
                    Login
                </Link>

                <button className="hidden lg:flex py-2 items-center justify-center px-2.5 shadow rounded-lg font-semibold text-sm bg-zinc-200/70 shrink-0">Pricing</button>

                <button className="flex py-2 items-center justify-center px-2.5 rounded-lg shadow shadow-zinc-400 bg-blue-600/90 text-white font-semibold text-sm shrink-0">Try for free</button>
                <Menu className="p-1.5 lg:hidden rounded-lg shadow shadow-zinc-400 shrink-0" size={36} strokeWidth={1.5} />
            </div>
        </nav>
    )
}

