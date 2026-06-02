"use client";

export default function Error({error, reset, }:{error: Error & {digest?: string}; reset: () => void;})
{
    return(
        <main className="flex min-h-screen items-center justify-center p-6">
            <section className="max-w-md rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
                <h1 className="text-xl font-semibold">Could not load the dashboard</h1>
                <p className="mt-2 text-sm text-zinc-300">{error.message}</p>

                <button onClick={reset} className="mt-4 rounded-full bg-white px-4 py-2 text-sm text-black">Try Again</button>

            </section>
        </main>
    );
}