import type { Metadata } from "next";
import './globals.css';

export const metadata:Metadata = {
  title: "Learning Dashboard",
  description: "Next.js + Supabase student dashboard",
};

export default function RootLayout({children, }: {children: React.ReactNode; }){
  return(
    <html>
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}