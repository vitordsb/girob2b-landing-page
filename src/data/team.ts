export type TeamRole = 'Co-founder' | 'Conselheiro Estrategico';

export interface TeamMember {
  name: string;
  title: string;
  role: TeamRole;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Gustavo Striolo',
    title: 'CEO & Co-founder',
    role: 'Co-founder',
    bio: 'Responsavel por estrategia, produto e visao de negocios. Conduz a direcao geral da plataforma.',
    photoUrl: '/team/gustavo.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Gustavo]',
  },
  {
    name: 'Vitor [PENDENTE: sobrenome]',
    title: 'CTO & Co-founder',
    role: 'Co-founder',
    bio: 'Lidera tecnologia, arquitetura e desenvolvimento da plataforma GiroB2B.',
    photoUrl: '/team/vitor.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Vitor]',
  },
  {
    name: 'Marcio [PENDENTE: sobrenome]',
    title: 'Conselheiro Estrategico',
    role: 'Conselheiro Estrategico',
    bio: 'Contribui com relacionamento comercial, parcerias e visao de mercado B2B brasileiro.',
    photoUrl: '/team/marcio.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Marcio]',
  },
];
