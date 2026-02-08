/**
 * Constrói URL completa para recursos públicos respeitando o BASE_URL configurado no Vite
 * @param path - Caminho relativo à pasta public (ex: 'images/Perfil/Leonardo.jpg')
 * @returns URL completa com o base path
 */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

/**
 * Constrói URL para imagens na pasta public/images
 * @param path - Caminho relativo à pasta images (ex: 'Perfil/Leonardo.jpg')
 * @returns URL completa com o base path
 */
export function imageUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return publicUrl(`images/${cleanPath}`)
}
