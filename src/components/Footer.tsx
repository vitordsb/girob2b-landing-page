import styles from '../styles/LandingPage.module.css';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/giro-b2b-logo-light.svg"
                alt="Giro B2B"
                className="w-10 h-10 rounded bg-white object-contain p-0.5"
              />
              <span className="text-xl font-black tracking-tighter text-white">Giro <span className="text-brand-accent">B2B</span></span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Liderando a transformação digital no mercado B2B com tecnologia de ponta e foco em resultados.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Plataforma</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Segurança</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Empresa</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Suporte</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Contato</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Giro B2B. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold">Privacidade</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
