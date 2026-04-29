import { MoveRight } from "lucide-react"

export const FeaturePerformance = () => {
    return (
        <div className="h-[32rem] py-10 px-5 w-full rounded-3xl bg-gradient-to-b border border-zinc-200 from-zinc-200 to-white flex flex-col items-center justify-between">
            <video className="w-full rounded-lg" src={'https://player.vimeo.com/progressive_redirect/playback/1064689144/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9769e12e649f9faf25294a7405057fbe410fb0ab4ab24a6575ad652b3b11ff57&user_id=101816034'} autoPlay muted />
            <h3 className="text-2xl text-center font-sans font-semibold">NoteFlow Has 5+ New Features✨</h3>
            <p className="text-center">Save notes in different formats like Pdf, Notion docs & more. All in one powerful platgorm</p>
            <div className="h-fit w-full flex gap-2 justify-center items-center">
                <MoveRight size={20} strokeWidth={5} color="#FFFFFF" className="p-1.5 bg-blue-500 rounded-full " />
                <p className="font-sans text-blue-500 font-semibold">Watch demo</p>
            </div>
        </div>
    )
}