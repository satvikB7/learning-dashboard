"use client"

import { useState } from "react";
import {LayoutGrid, BookOpen, Code2, Database} from "lucide-react"; //These are the symbols used like book four boxes one code one and warehouse symbol
import type { Course } from "@/types/course";
import { Sidebar } from "./sidebar";
import {BottomNav} from "./bottom-nav";
import {HeroCard} from "./hero-card";
import {CourseCard} from "./course-card";
import {ActivityCard} from "./activity-card";
import {motion} from "framer-motion";


const navItems = [{label: "Overview", icon: LayoutGrid}, {label: "Courses", icon: BookOpen}, {label: "Code", icon: Code2}, {label: "Data", icon: Database},];

const container = {hidden: {}, show: {transition: {staggerChildren: 0.12, }, }, };

export function DashboardClient({courses}: {courses: Course[]})
{
    const [active, setActive] = useState("Overview"); //Here Overview is Default selected item when anything loads.
    const [collapsed, setCollapsed] = useState(false);

    return(
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="mx-auto flex min-h-screen max-w-7xl gap-4 p-4 lg:p-6">
                <Sidebar items = {navItems} active = {active} onSelect={setActive} collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)}>
                    <main className="flex-1 pb-24 md:pb-0">
                        <motion.section variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            <HeroCard />
                            <ActivityCard />
                            {courses.map((course) => (
                                <CourseCard key={course.id} course={course}/>
                            ))}
                        </motion.section>                    
                    </main>
                </Sidebar>
            </div>

            <BottomNav items={navItems} active={active} onSelect={setActive} />
        </div>
    );
}