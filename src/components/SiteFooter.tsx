export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-32 px-6 md:px-10 pt-8 pb-10 rule-t">
      <div className="grid grid-cols-12 gap-4 label-xs text-ink-muted">
        <div className="col-span-12 md:col-span-3">
           © mmxxvi — studio.ombligoo<br />all objects hand-built
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="opacity-60 mb-1">correspondence</div>
           hello@ombligoo.clay
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="opacity-60 mb-1">elsewhere</div>
           instagram — @studio.ombligoo
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right font-display italic text-base text-ink normal-case tracking-normal">
          “a small room.<br/>a slow fire.”
        </div>
      </div>
    </footer>
  );
}
