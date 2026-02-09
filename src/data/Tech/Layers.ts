
import {
    t, type LocalizedText,
    type TableItem,
} from '../types'

// ====================================
// DATA: LAYERS
// ====================================

interface LayerBaseDTO extends TableItem {
  nickname: string
  tags: string[]
  description: LocalizedText
  icon?: string
  color?: string
}

export const LAYERS: Record<string, LayerBaseDTO> = {
  frontend: {
    key: 'frontend',
    id: 'frontend',
    nickname: 'Frontend',
    tags: ['ui', 'ux', 'client-side', 'web', 'mobile'],
    description: t('Interface do usuário e interação.', 'User interface and interaction.'),
    icon: 'devicon-html5-plain colored',
    color: '#00F0FF',
  },
  backend: {
    key: 'backend',
    id: 'backend',
    nickname: 'Backend',
    tags: ['server-side', 'api', 'database', 'auth'],
    description: t('Lógica de negócios e processamento de dados.', 'Business logic and data processing.'),
    icon: 'devicon-nodejs-plain colored',
    color: '#B026FF',
  },
  fullstack: {
    key: 'fullstack',
    id: 'fullstack',
    nickname: 'Full-stack',
    tags: ['frontend', 'backend', 'ui', 'api'],
    description: t('Desenvolvimento completo frontend + backend.', 'Complete frontend + backend development.'),
    icon: 'devicon-react-plain colored',
    color: '#FF006E',
  },
  devops: {
    key: 'devops',
    id: 'devops',
    nickname: 'DevOps',
    tags: ['ci-cd', 'cloud', 'infrastructure', 'automation'],
    description: t('Integração de desenvolvimento e operações.', 'Development and operations integration.'),
    icon: 'devicon-docker-plain colored',
    color: '#FFD700',
  },
  database: {
    key: 'database',
    id: 'database',
    nickname: 'Database',
    tags: ['sql', 'nosql', 'design', 'modeling'],
    description: t('Gerenciamento e arquitetura de dados.', 'Data management and architecture.'),
    icon: 'devicon-postgresql-plain colored',
    color: '#4CAF50',
  },
  datascience: {
    key: 'datascience',
    id: 'datascience',
    nickname: 'Data Science',
    tags: ['ml', 'ai', 'analytics', 'python', 'r'],
    description: t('Análise de dados e aprendizado de máquina.', 'Data analysis and machine learning.'),
    icon: 'devicon-python-plain colored',
    color: '#FF9800',
  },
} as const

export type LayerDTO = LayerBaseDTO | undefined