import { useDark, useToggle } from '@vueuse/core'

/**
 * Composable for dark/light mode toggle
 * Persists preference in localStorage
 * Default: Light mode (não detecta preferência do sistema)
 */
export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'p-dark',
    valueLight: '',
    initialValue: 'light', // Define Light como padrão
    disableTransition: false,
  })

  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
}
