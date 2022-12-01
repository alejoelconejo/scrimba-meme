export const themeToggle = () => {
  const themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon')
  const themeToggleLightIcon = document.querySelector(
    '#theme-toggle-light-icon'
  )

  themeToggleDarkIcon?.classList.toggle('hidden')
  themeToggleLightIcon?.classList.toggle('hidden')

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
