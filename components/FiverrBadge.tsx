import Link from "next/link";
import { Star } from "lucide-react";

const FIVERR_URL = "https://fiverr.com/mzohaibs_devs";

export function FiverrBadge() {
  return (
    <Link
      href={FIVERR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-[#1DBF73]/30 bg-[#1DBF73]/10 px-4 py-3 transition-colors hover:bg-[#1DBF73]/15"
    >
      <svg
        viewBox="0 0 89 27"
        aria-label="Fiverr"
        className="h-5 w-auto shrink-0"
        fill="#1DBF73"
      >
        <path d="M14.4 0H0v6.2h5.7v20.8h8.7V6.2H20V0h-5.6zm15.1 0h-8.7v27h8.7V0zm14.2 0c-5.4 0-9.8 4.4-9.8 9.8v7.4c0 5.4 4.4 9.8 9.8 9.8s9.8-4.4 9.8-9.8v-7.4C53.5 4.4 49.1 0 43.7 0zm0 6.2c2 0 3.6 1.6 3.6 3.6v7.4c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6v-7.4c0-2 1.6-3.6 3.6-3.6zm22.5-6.2L56.8 16.9 52.2 0h-6.5l7.2 27h5.4L76.5 6.2 81.1 27h6.5L80.4 0h-5.4l5.2 20.7L66.2 0z" />
      </svg>
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-[#1DBF73]">5.0</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#1DBF73] text-[#1DBF73]" />
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#1DBF73]">5.0 Rated on Fiverr</p>
        <p className="text-xs text-muted-foreground">Verified client reviews</p>
      </div>
    </Link>
  );
}
