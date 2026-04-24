import { DIFFERENTIATORS } from '@/data/differentiators';
import { IconCheck, IconX } from '@/components/icons';

export function DifferentiatorsV2() {
  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: '#0A5C5C' }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(212,160,74,0.14)', filter: 'blur(70px)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-16 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(42,122,122,0.35)', filter: 'blur(60px)' }}
      />

      <div className="max-w-container mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-gold-soft text-xs mb-3">O que muda com a GiroB2B</p>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-offwhite mb-4 max-w-2xl mx-auto">
            Por que a GiroB2B funciona diferente
          </h2>
          {/* IndiaMART citation */}
          <p className="font-sans text-offwhite/75 text-sm max-w-xl mx-auto leading-relaxed">
            Modelo inspirado em marketplaces consolidados como IndiaMART — R$ 950M/ano, 8,4M fornecedores — adaptado ao mercado brasileiro.
          </p>
        </div>

        {/* Grid of differentiator cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(192,138,46,0.35)',
                background: 'rgba(22,102,102,0.85)',
                backdropFilter: 'blur(8px)',
                boxShadow:
                  '0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(212,160,74,0.12)',
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-4"
                style={{ borderBottom: '1px solid rgba(192,138,46,0.28)' }}
              >
                <h3 className="font-sans font-bold text-lg text-offwhite">{d.title}</h3>
              </div>

              {/* Stacked on mobile+tablet, two-column from lg+ (avoids 4-col crush in 768 grid) */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] items-stretch">
                {/* Left — today (problem, desaturated) */}
                <div className="px-6 py-5">
                  <p
                    className="text-xs font-sans font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'rgba(244,241,234,0.55)' }}
                  >
                    Mercado hoje
                  </p>
                  <div className="flex items-start gap-2.5">
                    <IconX
                      size={15}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'rgba(244,241,234,0.45)' } as React.CSSProperties}
                    />
                    <p className="text-sm leading-relaxed text-offwhite/75">
                      {d.marketToday}
                    </p>
                  </div>
                </div>

                {/* Hairline separator — horizontal on mobile/tablet, vertical on lg+ */}
                <div className="h-px lg:h-auto" style={{ background: 'rgba(212,160,74,0.40)' }} />

                {/* Right — with GiroB2B (solution, highlighted) */}
                <div
                  className="px-6 py-5"
                  style={{ background: 'rgba(212,160,74,0.06)' }}
                >
                  <p
                    className="text-xs font-sans font-bold uppercase tracking-widest mb-3"
                    style={{ color: '#D4A04A' }}
                  >
                    Com GiroB2B
                  </p>
                  <div className="flex items-start gap-2.5">
                    <IconCheck
                      size={15}
                      strokeWidth={2.5}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#D4A04A' } as React.CSSProperties}
                    />
                    <p className="text-sm leading-relaxed text-offwhite">
                      {d.withGiroB2B}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
