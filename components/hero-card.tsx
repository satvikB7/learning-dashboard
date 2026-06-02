"use client"

import {motion} from "framer-motion";
import {Flame, Sparkles} from "lucide-react";

const itemVariants = {hidden: {opacity: 0, y: 14}, show: {opacity: 1, y: 0}, };

const spring = {type: "spring" as const, stiffness: 300, damping: 20};


export function HeroCard(){
    return(
        <motion.article variants={itemVariants} whileHover={{scale: 1.02}} transition={spring} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right, rgba(56,189,248,0.18), transparent_40%),radial-gradient(circle_at_bottom_left, rgba(168,85,247,0.16),transparent_35%)]" />
            <div className="relative">
                <p className="text-sm text-zinc-400">Today</p>
                <h1 className="mt-2 text-3xl font-semibold">Welcome back, Satvik</h1>
                <p className="mt-3 max-w-xl text-sm text-zinc-300">You are doing well. Keep the Streak going and finish one more lesson Today.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm">
                        <Flame size={16} /> 14 day Streak
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-2 text-sm text-sky-200">
                        <Sparkles size={16} /> 3 tasks Pending
                    </span>
                </div>
            </div>
        </motion.article>
    );
}