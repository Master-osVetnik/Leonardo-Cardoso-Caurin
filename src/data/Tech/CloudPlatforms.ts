import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

// ====================================
// DATA: CLOUD PLATFORMS
// ====================================

interface CloudPlatformBaseDTO extends TableItem {
  nickname: string
  services: string[]
  description: LocalizedText
  icon?: string
}

export const CLOUD_PLATFORMS: Record<string, CloudPlatformBaseDTO> = {
  azure: {
    key: 'azure',
    id: 'azure',
    nickname: 'Azure',
    services: ['compute', 'storage', 'database', 'ai', 'functions'],
    description: t('Plataforma cloud da Microsoft.', 'Microsoft cloud platform.'),
    icon: 'devicon-dotnet-plain colored',
  },
  aws: {
    key: 'aws',
    id: 'aws',
    nickname: 'AWS',
    services: ['ec2', 's3', 'rds', 'lambda', 'dynamodb'],
    description: t('Plataforma cloud da Amazon.', 'Amazon cloud platform.'),
    icon: 'devicon-amazonwebservices-plain colored',
  },
  gcp: {
    key: 'gcp',
    id: 'gcp',
    nickname: 'Google Cloud',
    services: ['compute-engine', 'cloud-storage', 'bigquery', 'cloud-functions'],
    description: t('Plataforma cloud do Google.', 'Google cloud platform.'),
    icon: 'devicon-googlecloud-plain colored',
  },
  vercel: {
    key: 'vercel',
    id: 'vercel',
    nickname: 'Vercel',
    services: ['hosting', 'serverless', 'edge-functions'],
    description: t('Plataforma para deploy de frontends (Next.js).', 'Frontend deployment platform (Next.js).'),
    icon: 'devicon-vercel-original colored',
  },
  netlify: {
    key: 'netlify',
    id: 'netlify',
    nickname: 'Netlify',
    services: ['hosting', 'serverless', 'forms'],
    description: t('Plataforma para deploy de sites estáticos e JAMstack.', 'Static sites and JAMstack deployment platform.'),
    icon: 'devicon-netlify-original colored',
  },
  wix: {
    key: 'wix',
    id: 'wix',
    nickname: 'Wix Cloud',
    services: ['hosting', 'database', 'serverless'],
    description: t('Plataforma cloud para aplicações no Wix.', 'Cloud platform for applications on Wix.'),
    icon: 'devicon-javascript-plain colored',
  },
  githubPages: {
    key: 'githubPages',
    id: 'githubPages',
    nickname: 'GitHub Pages',
    services: ['hosting', 'static-sites'],
    description: t('Hospedagem gratuita de sites estáticos pelo GitHub.', 'Free static site hosting from GitHub.'),
    icon: 'devicon-github-original colored',
  }
} as const

export type CloudPlatformDTO = CloudPlatformBaseDTO | undefined
