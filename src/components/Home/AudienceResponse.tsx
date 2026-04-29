import { PiggyBank, Rocket, UserPlus, UserRoundPlus, Users, UsersRound } from "lucide-react"

export const AudienceResponse = () => {
    return (
        <div className="h-fit w-full flex justify-between gap-3 items-center text-zinc-800 ">
            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <Rocket className="text-zinc-600" size={20} fill="currentColor" strokeWidth={0}/>
                <p className="text-sm font-sans ">4.5 rating</p>
            </div>

            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <UserRoundPlus className="text-zinc-600" size={20} fill="currentColor"/>
                <p className="text-sm font-sans ">100+</p>
            </div>

            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <PiggyBank className="text-zinc-600" size={20} fill="currentColor" />
                <p className="text-sm font-sans ">4.9 rating</p>
            </div>
        </div>
    )
}