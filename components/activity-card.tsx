"use client"

import {motion} from "framer-motion";

const itemVariants = {hidden: {opacity: 0, y:14}, show: {opacity: 1, y: 0}, };

const spring ={type: "spring" as const, stiffness: 300, damping: 20, };

const cells=Array.from({length: 42}, (_, i) => i%3 === 0 || i%7 === 0 ? 1 : 0);

export function ActivityCard(){
    return(
        <motion.article variants={itemVariants} whileHover = {{scale: 1.02}} transition={spring} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2 xl:col-span-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right, rgba(34,197,94,0.14),transparent_40%),radial-gradient(circle_at_bottom_left, rgba(59,130,246,0.12),transparent_35%)]" />
            <div className="relative">
                <h2 className="text-lg font-medium">Activity</h2>
                <p className="mt-1 text-sm text-zinc-400">This week</p>

                <div className="mt-5 grid grid-cols-7 gap-2">
                    {cells.map((cell, index) => {
                        return (<span key={index} className={`aspect-square rounded-md ${cell ? "bg-emerald-400/80" : "bg-white/10"}`} />);
                    })}
                </div>
            </div>

        </motion.article>

    );
}