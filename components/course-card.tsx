"use client"

import {motion} from "framer-motion";
import { BookOpen, Code2, Database, Laptop, type LucideIcon } from "lucide-react";
import type { Course } from "@/types/course";

const icons: Record<string, LucideIcon> = {BookOpen, Code2, Database, Laptop, };

const itemVariants = {hidden: {opacity: 0, y: 14}, show: {opacity:1, y:0 }, };

const spring = {type: "spring" as const, stiffness: 300, damping: 20, };

export function CourseCard({course}:{course: Course}){
    const Icon = icons[course.icon_name] ?? BookOpen;

    return(
        <motion.article variants={itemVariants} whileHover={{scale: 1.02}} transition={spring} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08), transparent_40%), radial-gradient(circle_at_bottom_left, rgba(59,130,246,0.14), transparent_35%)]"/>

            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                        <Icon size={18} />
                    </span>
                    <span className="text-sm text-zinc-400">{course.progress}%</span>
                </div>

                <h3 className="mt-4 text-lg font-medium">{course.title}</h3>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div initial={{width: 0}} animate={{width: `${course.progress}%`}} transition={{duration: 0.8, ease: "easeOut"}} className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400"/>
                </div>
            </div>
        </motion.article>
    );
}