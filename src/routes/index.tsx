import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { works, studioImage } from "@/data/works";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useParallax, useReveal } from "@/hooks/useParallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
       { title: "studio.ombligoo — index" },
      { name: "description", content: "An ongoing archive of hand-built ceramic objects." },
    ],
  }),
  component: Index,
});

function Index() {
  const heroParallax = useParallax<HTMLDivElement>(0.55);
  const floatA = useParallax<HTMLDivElement>(0.8);
  const floatB = useParallax<HTMLDivElement>(-0.5);
  const floatC = useParallax<HTMLDivElement>(0.35);
  const floatD = useParallax<HTMLDivElement>(-0.7);

  const revealHero = useReveal<HTMLDivElement>();
  const revealQuote = useReveal<HTMLDivElement>();
  const revealFeatured = useReveal<HTMLDivElement>();
  const revealCollage = useReveal<HTMLDivElement>();
  const revealStrip = useReveal<HTMLDivElement>();

  // featured selection — pull from across the archive
  const featured = [works[0], works[8], works[5], works[6], works[9], works[3]];

  return (
    <div className="min-h-screen relative">
      <SiteHeader />

      {/* HERO — editorial masthead */}
      <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-12 md:col-span-7 relative z-10">
            <div className="label-xs text-ink-muted mb-6">
              ※ &nbsp; archive n° 047 &nbsp; · &nbsp; an ongoing record
            </div>
            <h1 className="font-display text-[14vw] md:text-[10.5vw] leading-[0.86] tracking-[-0.02em] font-light">
              <span className="italic">things</span> made
              <br />
              <span className="italic">slowly</span>,
              <br />
              by hand<span className="text-terracotta">.</span>
            </h1>
            <p className="mt-10 max-w-[42ch] text-sm leading-relaxed text-ink-muted font-mono-tight">
              a small, ongoing archive of hand-built ceramic objects — vessels,
              pots, half-collapsed forms — pulled from the earth, shaped without
              hurry, fired in a small room.
            </p>
            <div className="mt-10 flex gap-6 label-xs">
              <Link to="/works" className="border-b border-ink pb-1 hover:text-terracotta hover:border-terracotta transition-colors">
                → see the archive
              </Link>
            </div>
          </div>

          {/* Floating hero specimen */}
          <div
            ref={revealHero}
            className="reveal col-span-12 md:col-span-5 relative md:absolute md:right-10 md:top-0 md:w-[38vw] md:max-w-[520px]"
          >
            <div ref={heroParallax} className="will-change-transform">
              <img
                src={featured[1].image}
                alt={featured[1].title}
                className="w-full aspect-[3/4] object-cover"
                loading="eager"
              />
              <div className="mt-3 flex justify-between label-xs text-ink-muted">
                <span>{featured[1].number}</span>
                <span>{featured[1].firing.split(" — ")[0]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* tiny floating annotation */}
        <div className="hidden md:block absolute left-[42%] top-[58%] label-xs text-terracotta rotate-[-4deg] z-20">
          ↑ kiln still warm
        </div>
      </section>

      {/* INDEX STRIP — like a contents page */}
      <section className="px-6 md:px-10 py-6 rule-t rule-b">
        <div className="grid grid-cols-12 gap-4 items-baseline label-xs">
          <div className="col-span-3 text-ink-muted">contents</div>
          <div className="col-span-1 text-right text-ink-muted">n°</div>
          <div className="col-span-4">title</div>
          <div className="col-span-2 text-ink-muted">material</div>
          <div className="col-span-2 text-right text-ink-muted">year</div>
          {works.map((w, i) => (
            <div key={w.id} className="contents">
              <div className="col-span-3"></div>
              <div className="col-span-1 text-right text-ink-muted">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-4 lowercase">{w.title}</div>
              <div className="col-span-2 text-ink-muted truncate">{w.material.split(",")[0]}</div>
              <div className="col-span-2 text-right text-ink-muted">{w.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED OBJECT — full plate */}
      <section ref={revealFeatured} className="reveal px-6 md:px-10 pt-32 pb-24 relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 md:pt-12">
            <div className="label-xs text-ink-muted mb-4">specimen — plate iii</div>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[0.95] mb-6">
              {featured[3].title}
            </h2>
            <div className="space-y-3 text-xs leading-loose font-mono-tight">
              <div><span className="label-xs text-ink-muted">origin</span><br/>{featured[3].material}</div>
              <div><span className="label-xs text-ink-muted">method</span><br/>{featured[3].glaze}</div>
              <div><span className="label-xs text-ink-muted">firing</span><br/>{featured[3].firing}</div>
              <div><span className="label-xs text-ink-muted">size</span><br/>{featured[3].dimensions}</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 relative">
            <div ref={floatA} className="will-change-transform">
              <img
                src={featured[3].image}
                alt={featured[3].title}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex justify-between label-xs text-ink-muted">
              <span>{featured[3].number} &nbsp; / &nbsp; {featured[3].edition}</span>
              <span>fig. 03</span>
            </div>

            {/* small floating sub-image, off-grid, tilted */}
            <div ref={floatB} className="hidden md:block absolute -left-20 -bottom-32 w-44 will-change-transform z-10">
              <img src={featured[4].image} alt="" className="w-full aspect-[3/4] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]"/>
              <div className="label-xs text-ink-muted mt-2 text-center">{featured[4].number}</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / STATEMENT — large italic */}
      <section ref={revealQuote} className="reveal px-6 md:px-10 py-32 rule-t">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 label-xs text-ink-muted">
            statement<br/>—<br/>2026
          </div>
          <blockquote className="col-span-12 md:col-span-9 font-display italic text-3xl md:text-5xl leading-[1.1] font-light">
            “each object is fired once,
            <br/>
            never twice. what cracks,
            <br/>
            <span className="text-terracotta">cracks.</span> what slumps, stays.”
          </blockquote>
        </div>
      </section>

      {/* COLLAGE GRID — three works, off-aligned */}
      <section ref={revealCollage} className="reveal px-6 md:px-10 py-24 relative overflow-hidden">
        <div className="grid grid-cols-12 gap-6 items-end relative">
          <div ref={floatC} className="col-span-6 md:col-span-4 md:mt-0 will-change-transform">
            <img src={featured[5].image} alt={featured[5].title} className="w-full aspect-[3/4] object-cover" loading="lazy"/>
            <div className="mt-3 flex justify-between label-xs text-ink-muted">
              <span>{featured[5].number}</span>
              <span>{featured[5].year}</span>
            </div>
            <div className="font-display italic text-xl mt-1">{featured[5].title}</div>
          </div>

          <div className="col-span-6 md:col-span-3 md:mb-32 will-change-transform" ref={floatD}>
            <img src={works[7].image} alt={works[7].title} className="w-full aspect-square object-cover" loading="lazy"/>
            <div className="mt-3 flex justify-between label-xs text-ink-muted">
              <span>{works[7].number}</span>
              <span>{works[7].year}</span>
            </div>
            <div className="font-display italic text-xl mt-1">{works[7].title}</div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mb-12">
            <div className="label-xs text-ink-muted mb-3">— field note</div>
            <p className="font-display italic text-xl leading-snug">
              the studio is one room, north window, a kiln that takes nine hours
              to cool. the work doesn't ask for more than that.
            </p>
          </div>
        </div>
      </section>

      {/* FULL ARCHIVE CTA — prominent */}
      <section className="px-6 md:px-10 py-24 rule-t rule-b">
        <Link
          to="/works"
          className="group block relative"
          aria-label={`Open the full archive of ${works.length} works`}
        >
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-2 label-xs text-ink-muted">
              archive<br/>—<br/>{works.length} objects
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="font-display text-5xl md:text-[7.5rem] leading-[0.88] font-light tracking-tight">
                <span className="italic">enter</span> the
                <br/>
                full <span className="italic">archive</span>
                <span className="text-terracotta inline-block transition-transform duration-500 group-hover:translate-x-3">
                  &nbsp;→
                </span>
              </div>
            </div>
            <div className="hidden md:block col-span-2 label-xs text-ink-muted text-right">
              2024 — 2026<br/>
              all unique<br/>
              never reproduced
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-px h-[2px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </Link>
      </section>

      {/* STUDIO PLATE — archival shelf record */}
      <section ref={revealStrip} className="reveal px-6 md:px-10 pt-32 pb-24 rule-t">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* left meta column */}
          <div className="col-span-12 md:col-span-3 md:pt-6 order-2 md:order-1">
            <div className="label-xs text-ink-muted mb-6">
              plate xcix<br/>—<br/>shelf record
            </div>
            <h3 className="font-display italic text-3xl md:text-4xl leading-[1.0] mb-6">
              north shelf,
              <br/>
              early march
            </h3>
            <p className="text-xs leading-loose font-mono-tight text-ink-muted max-w-[34ch] mb-8">
              one room, one window, three pine shelves. everything in this
              archive has stood here at some point — between the kiln cooling
              and the hand deciding.
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs font-mono-tight">
              <dt className="label-xs text-ink-muted">orient.</dt><dd>north, 11 a.m.</dd>
              <dt className="label-xs text-ink-muted">light</dt><dd>diffused daylight</dd>
              <dt className="label-xs text-ink-muted">shelves</dt><dd>raw pine, three</dd>
              <dt className="label-xs text-ink-muted">held</dt><dd>{works.length} objects</dd>
              <dt className="label-xs text-ink-muted">dated</dt><dd>march, vol. iii</dd>
            </dl>
          </div>

          {/* right plate */}
          <figure className="col-span-12 md:col-span-9 order-1 md:order-2 relative">
            <div className="relative">
              <img
                src={studioImage}
                alt="north shelf — archival plate"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />
              {/* corner crop marks */}
              <span className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-ink/60"></span>
              <span className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-ink/60"></span>
              <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-ink/60"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-ink/60"></span>
              {/* plate number overlay */}
              <div className="absolute top-4 left-4 label-xs text-ink/70 bg-background/70 backdrop-blur-sm px-2 py-1">
                pl. xcix
              </div>
            </div>
            <figcaption className="mt-4 grid grid-cols-12 gap-4 label-xs text-ink-muted">
              <span className="col-span-6">fig. 99 — north shelf, march</span>
              <span className="col-span-3 text-center hidden md:block">↔ approx. 1.4 m</span>
               <span className="col-span-6 md:col-span-3 text-right">studio.ombligoo / vol. iii</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
