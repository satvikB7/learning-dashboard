"use client";

import {motion} from "framer-motion";
import {ChevronLeft, Menu, type LucideIcon} from "lucide-react";

type NavItem = {label: string; icon: LucideIcon;};

export function Sidebar({items, active, onSelect, collapsed, onToggle, children, }:{items: NavItem[]; active: string; onSelect: (label: string) => void; collapsed: boolean; onToggle: () => void; children: React.ReactNode; })
{
    return(
        <>
            <aside className="hidden md:block">
                <nav className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all ${collapsed ? "w-20" : "w-72"}`}>
                    <button type="button" onClick={onToggle} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />} {/* chevron left is symbol like < and Menu is also symbol like that 3 lines one */}
                        </span>
                        <span className={collapsed ? "hidden" : "hidden lg:inline"}>
                            Collapse
                        </span>
                    </button>

                    <div className="mt-4 space-y-2">
                        {items.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.label;

                            return(
                                <button key={item.label} type="button" onClick={() => onSelect(item.label)} className="relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-left text-sm text-zinc-200 hover:bg-white/5">
                                    {isActive ? (
                                        <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-2xl bg-white/10"/>
                                    ):null}

                                    <span className="relative z-10 flex items-center gap-3">
                                        <Icon size={18} />
                                        <span className={collapsed ? "hidden" : "hidden lg:inline"}>
                                            {item.label}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    
                    <div className="mt-auto rounded-2xl border border-white/10 bg-black/20 p-3 text-xs text-zinc-400">
                        <p className= {collapsed ? "hidden" : "hidden lg:block"}>Dark mode dashboard with Supabase Data</p>
                    </div>
                </nav>
            </aside>
            {children}
        </>
    );
}   
