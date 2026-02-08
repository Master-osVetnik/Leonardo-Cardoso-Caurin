import { useDark, useToggle } from '@vueuse/core'

/**
 * Composable for dark/light mode toggle
 * Persists preference in localStorage
 */
export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'p-dark',
    valueLight: '',
  })

  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
}
