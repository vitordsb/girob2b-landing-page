export type TeamRole = 'Co-founder' | 'Conselheiro Estratégico';

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
    name: 'Gustavo Hely Ferreira da Silva',
    title: 'CEO & Co-founder',
    role: 'Co-founder',
    bio: 'CEO e co-fundador da Giro B2B. Lidera produto, estratégia e visão de negócios na construção de uma camada de conexão comercial entre empresas de diferentes setores no Brasil.',
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
    name: 'Márcio [PENDENTE: sobrenome]',
    title: 'Conselheiro Estratégico',
    role: 'Conselheiro Estratégico',
    bio: 'Contribui com relacionamento comercial, parcerias e visão de mercado B2B brasileiro.',
    photoUrl: '/team/marcio.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Márcio]',
  },
];
