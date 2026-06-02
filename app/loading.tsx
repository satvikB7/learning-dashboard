export default function Loading() {
  return (
    <main className="p-4"> {/*padding 4*/}
      <div className="h-40 animate-pulse rounded-xl bg-zinc-800" /> {/*height background color styling */}

      <div className="mt-4 grid gap-4 md:grid-cols-2"> {/* margin-top gap and margin down gap */}
        <div className="h-32 animate-pulse rounded-xl bg-zinc-800" /> {/* height background color and styling */} 
        <div className="h-32 animate-pulse rounded-xl bg-zinc-800" /> {/* height background color and styling */} 
      </div>
    </main>
  );
}