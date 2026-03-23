import styles from '../styles/LandingPage.module.css';



const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className={styles.container}>
        <div className="text-center mb-20">
          <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">Investimento</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white">Soluções Personalizadas</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {/* Card 1: Standard Access */}
          <div className="flex-1 bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all flex flex-col">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-400 mb-2">Acesso Standard</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-white opacity-60">R$</span>
                <span className="text-5xl font-black text-white">250</span>
                <span className="text-sm font-medium text-slate-500">/mês</span>
              </div>
            </div>

            <p className="text-slate-300 mb-8 leading-relaxed text-sm">
              Ideal para quem quer entrar no ecossistema, conectar-se com compradores e gerar nova receita através do catálogo.
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-white text-sm">
                <svg className="w-5 h-5 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Acesso à rede de compradores</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm">
                <svg className="w-5 h-5 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Catálogo de produtos ativo</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm">
                <svg className="w-5 h-5 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Visibilidade para empresas validadas</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Sem centralização de negociações</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl bg-brand-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-brand-accent/20 transform hover:-translate-y-1">
              Começar Agora
            </button>
          </div>

          {/* Card 2: Enterprise/Personalized */}
          <div className="flex-1 bg-brand-accent border border-brand-accent rounded-3xl p-8 shadow-[0_20px_50px_rgba(255,77,141,0.3)] relative overflow-hidden flex flex-col scale-105 z-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="mb-6 relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Solução Enterprise</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">Sob Medida</span>
              </div>
              <div className="text-xs font-bold text-white/80 uppercase tracking-widest mt-2">Investimento Personalizado</div>
            </div>

            <p className="text-white/90 mb-8 leading-relaxed text-sm relative z-10">
              Para empresas que buscam eficiência máxima. Todas as funcionalidades do Standard, mais ferramentas avançadas de inteligência.
            </p>

            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              <li className="flex items-start gap-3 text-white text-sm font-medium">
                <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Tudo do plano Standard</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm font-medium">
                <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Negociação centralizada de preços</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm font-medium">
                <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Comparador avançado de cotações</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm font-medium">
                <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Acompanhamento e gestão de leads</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl bg-[#0F172B] border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-slate-900 transition-all shadow-lg relative z-10">
              Falar com Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
