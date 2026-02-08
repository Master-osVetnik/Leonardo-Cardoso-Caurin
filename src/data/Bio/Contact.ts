// ====================================
// TYPES
// ====================================

export const SocialMedia = [
  'github',
  'linkedin',
  'infojob',
  'youtube',
  'reddit',
  'twitter',
  'facebook',
  'instagram',
] as const

export type SocialMediaType = (typeof SocialMedia)[number]

export interface SocialMediaLink {
  social: SocialMediaType
  url: string
  icon: string
  label: string
}

// ====================================
// DATA
// ====================================

export const socialMediaLinks: SocialMediaLink[] = [
  {
    social: 'github',
    url: 'https://github.com/Master-osVetnik',
    icon: 'pi pi-github',
    label: 'GitHub',
  },
  {
    social: 'linkedin',
    url: 'https://www.linkedin.com/in/leonardo-cardoso-caurin/',
    icon: 'pi pi-linkedin',
    label: 'LinkedIn',
  },
  {
    social: 'twitter',
    url: 'https://x.com/MasterOsVetnik',
    icon: 'pi pi-twitter',
    label: 'X (Twitter)',
  },
]