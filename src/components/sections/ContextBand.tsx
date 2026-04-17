import styles from '../../styles/LandingPage.module.css';

const pillars = [
  {
    label: 'Mercado',
    value: '24,2 milhões de empresas',
    sub: 'Base ativa no Brasil (IBGE)',
  },
  {
    label: 'Problema atacado',
    value: 'Comércio B2B fragmentado',
    sub: 'Majoritariamente off-line, em canais dispersos',
  },
  {
    label: 'Status',
    value: 'Constituída em março de 2026',
    sub: 'Inova Simples ativa, equipe identificada',
  },
  {
    label: 'Próximo marco',
    value: 'MVP em construção',
    sub: 'Desenvolvimento ativo pelo time fundador',
  },
];

export default function ContextBand() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className={styles.container}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5"
            >
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
                {item.label}
              </div>
              <div className="mt-2 text-lg font-black leading-tight text-slate-950">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-slate-600">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
