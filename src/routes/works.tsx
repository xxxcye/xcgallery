import { createFileRoute } from "@tanstack/react-router";
import { works } from "@/data/works";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useParallax } from "@/hooks/useParallax";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — studio.yún" },
      { name: "description", content: "Catalogue of hand-built ceramic objects. Each piece a unique study." },
      { property: "og:title", content: "Works — studio.yún" },
      { property: "og:description", content: "Catalogue of hand-built ceramic objects." },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <div className="min-h-screen relative">
      <SiteHeader />

      {/* Page heading */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="label-xs text-ink-muted mb-6">
              ※ &nbsp; works &nbsp; · &nbsp; catalogue raisonné &nbsp; · &nbsp; 2024 — 2026
            </div>
            <h1 className="font-display text-7xl md:text-[9rem] leading-[0.85] font-light">
              <span className="italic">ten</span> objects,
              <br/>
              <span className="italic">one</span> room<span className="text-terracotta">.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 label-xs text-ink-muted md:text-right">
            scroll &nbsp;↓<br/>
            each piece is unique<br/>
            and never reproduced
          </div>
        </div>
      </section>

      {/* Catalogue index header */}
      <div className="px-6 md:px-10 rule-t rule-b py-3 grid grid-cols-12 gap-4 label-xs text-ink-muted sticky top-0 bg-background z-30">
        <div className="col-span-1">n°</div>
        <div className="col-span-4">title</div>
        <div className="col-span-3">material</div>
        <div className="col-span-2">firing</div>
        <div className="col-span-2 text-right">status</div>
      </div>

      {/* Works listing — alternating layouts */}
      <div className="px-6 md:px-10">
        {works.map((w, i) => (
          <WorkRow key={w.id} work={w} index={i} />
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}

function WorkRow({ work, index }: { work: typeof works[number]; index: number }) {
  const ref = useParallax<HTMLDivElement>(index % 2 === 0 ? 0.3 : -0.2);
  const flip = index % 2 === 1;

  return (
    <article className="py-20 md:py-32 rule-b grid grid-cols-12 gap-4 md:gap-8 relative">
      {/* Image */}
      <div className={`col-span-12 md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
        <div ref={ref} className="will-change-transform">
          <img
            src={work.image}
            alt={work.title}
            className={`w-full object-cover ${
              work.ratio === "tall" ? "aspect-[3/4]" : work.ratio === "wide" ? "aspect-[4/3]" : "aspect-square"
            }`}
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex justify-between label-xs text-ink-muted">
          <span>{work.number}</span>
          <span>fig. {String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Metadata */}
      <div className={`col-span-12 md:col-span-4 ${flip ? "md:order-1 md:col-start-2" : "md:col-start-9"} md:pt-16`}>
        <div className="label-xs text-terracotta mb-3">{work.number}</div>
        <h2 className="font-display italic text-4xl md:text-5xl leading-[0.95] mb-2">
          {work.title}
        </h2>
        <div className="font-mono-tight text-xs text-ink-muted mb-8 italic">
          {work.subtitle}
        </div>

        <p className="font-display italic text-lg leading-snug mb-8 max-w-[34ch]">
          “{work.note}”
        </p>

        <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-mono-tight">
          <dt className="label-xs text-ink-muted">material</dt>
          <dd>{work.material}</dd>
          <dt className="label-xs text-ink-muted">glaze</dt>
          <dd>{work.glaze}</dd>
          <dt className="label-xs text-ink-muted">firing</dt>
          <dd>{work.firing}</dd>
          <dt className="label-xs text-ink-muted">size</dt>
          <dd>{work.dimensions}</dd>
          <dt className="label-xs text-ink-muted">edition</dt>
          <dd>{work.edition}</dd>
          <dt className="label-xs text-ink-muted">year</dt>
          <dd>{work.year}</dd>
        </dl>

        <div className="mt-8 inline-block label-xs border border-ink px-3 py-1.5">
          {work.status}
        </div>
      </div>
    </article>
  );
}