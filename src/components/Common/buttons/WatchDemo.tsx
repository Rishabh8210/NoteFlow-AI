import { PlayCircle } from "lucide-react"

export const WatchDemoButtom = () => {
    return (
        <button className="h-16 w-full flex justify-center  items-center gap-2 p-5 shadow rounded-xl">
            <PlayCircle size={20} strokeWidth={2} fill="#2B7FFF" color="white" />
            <p className="text-blue-500 text-base font-semibold font-sans tracking-wide">Watch demo</p>
        </button>
    )
}