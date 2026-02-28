// Root loading skeleton — renders between navigations
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 bg-obsidian flex items-center justify-center"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col leading-none text-center">
          <span className="font-display text-2xl tracking-tight text-parchment-100 animate-pulse">
            AURA
          </span>
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-light opacity-60 -mt-1">
            Voyages
          </span>
        </div>
        {/* Gold progress line */}
        <div className="w-24 h-px bg-white/10 overflow-hidden">
          <div className="h-full bg-gold animate-[slideRight_1s_ease_infinite]" />
        </div>
      </div>
    </div>
  );
}
