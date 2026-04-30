import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="relative z-20 px-6 md:px-10 pt-6 md:pt-8 pb-4 rule-b">
      <div className="grid grid-cols-12 gap-4 items-baseline">
        <Link
          to="/"
          className="col-span-6 md:col-span-3 font-display italic text-2xl md:text-[28px] leading-none tracking-tight"
        >
           studio.<span className="text-terracotta">omblingoo</span>
        </Link>
        <div className="hidden md:block col-span-3 label-xs text-ink-muted">
          ceramics — hand-built<br />small archive 2024 — 2026
        </div>
        <nav className="col-span-6 md:col-span-4 flex justify-end md:justify-start gap-5 md:gap-7 label-xs">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-terracotta" }} className="hover:text-terracotta transition-colors">
            Index
          </Link>
          <Link to="/works" activeProps={{ className: "text-terracotta" }} className="hover:text-terracotta transition-colors">
            Works
          </Link>
        </nav>
        <div className="hidden md:flex col-span-2 label-xs text-ink-muted justify-end">
          vol. iii / mmxxvi
        </div>
      </div>
    </header>
  );
}