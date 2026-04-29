import { Facebook } from "lucide-react"
import { CreateFreeNoteButton } from "../Common/buttons/CreateFreeNote"
import { WatchDemoButtom } from "../Common/buttons/WatchDemo"
import { AudienceResponse } from "./AudienceResponse"

export const MainTitle = () => {
    return (
        <div className="h-fit w-full px-5 text-center flex flex-col items-center justify-center gap-5.5">
            <h1 className="text-[40px] leading-12 font-bold font-sans">Double Your Learning with NoteFlow<sup className="text-2xl">AI</sup></h1>
            <p className="text-base px-2 font-medium text-zinc-500 tracking-wide font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maiores magni explicabo qui quod, quidem beatae ea quaerat! Nulla, dicta.</p>
            <div className="w-full py-5 h-fit flex flex-col gap-5 items-center justify-center">
                <CreateFreeNoteButton />
                <WatchDemoButtom />
            </div>
            <AudienceResponse />
            <div className="h-[15rem] py-5 w-full flex items-center justify-center relative">
                <div className="h-32 w-32 absolute transition-all spin">
                    <span className="h-24 w-24 absolute top-0 left-0 bg-emerald-500 rounded-full blur-3xl"></span>
                    <span className="h-24 w-24 absolute bottom-0 right-0 bg-fuchsia-500 rounded-full blur-3xl"></span>
                </div>
                <div className="video-border-wrapper">
                    <video className="video-content border-3 border-orange-500 rounded-lg" src={'https://player.vimeo.com/progressive_redirect/playback/1064689144/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9769e12e649f9faf25294a7405057fbe410fb0ab4ab24a6575ad652b3b11ff57&user_id=101816034'} autoPlay muted />
                </div>
            </div>

            <div className="py-5 w-full items-center h-fit flex flex-col gap-7 overflow-hidden">
                <p className="text-base font-sans font-semibold">Used daily by more than 100+ users.</p>
                {/* <div className="h-16 px-5 w-full flex gap-5 relative justify-center overflow-x-auto overflow-y-hidden">
                    <span className="absolute top-0 left-0 w-10 h-16 blur-md bg-white z-10"></span>
                    <span className="absolute top-0 right-0 w-10 h-16 blur-md bg-white z-10"></span>
                    <div className="h-14 w-full flex gap-5 relative overflow-x-auto overflow-y-hidden">
                        <div className="h-full shrink-0 w-fit flex items-center justify-center">
                            <Facebook size={32} />
                            <p className="text-3xl font-medium font-sans">Facebook</p>
                        </div>
                        <div className="h-full shrink-0 w-fit flex items-center justify-center">
                            <Facebook size={32} />
                            <p className="text-3xl font-medium font-sans">Facebook</p>
                        </div>

                        <div className="h-full shrink-0 w-fit flex items-center justify-center">
                            <Facebook size={32} />
                            <p className="text-3xl font-medium font-sans">Facebook</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}