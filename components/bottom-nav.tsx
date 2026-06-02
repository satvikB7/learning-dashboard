"use client"

import {motion} from "framer-motion";
import { LucideIcon } from "lucide-react";

type NavItem = {label: string; icon: LucideIcon;};

export function BottomNav({items, active, onSelect, }: {items: NavItem[]; active: string; onSelect: (label: string) => void;}){
    return(
        <nav className="fixed inset-x-4 bottom-4 z-50 md:hidden">
            <div className="mx-auto flex max-w-md rounded-3xl border border-white/10 bg-zinc-950/95 p-2 backdrop-blur">
                {items.map((item) => {
                    const Icon = item.icon;

                    const isActive = active === item.label;

                    return(
                         <button key={item.label} type="button" onClick={() => onSelect(item.label)} className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl py-3 text-zinc-200">
                            {isActive ? (
                                <motion.span layoutId="nav-pill-mobile" className="absolute inset-0 rounded-2xl bg-white/10" />
                            ) : null}
                            <span className="relative z-10">
                                <Icon size={18}/>
                            </span>
                         </button>
                    );
                })}
            </div>

        </nav>
    );
}