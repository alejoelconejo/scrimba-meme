export const themeIcons = () => {
  const themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon')
  const themeToggleLightIcon = document.querySelector(
    '#theme-toggle-light-icon'
  )

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleLightIcon?.classList.remove('hidden')
  } else {
    themeToggleDarkIcon?.classList.remove('hidden')
  }
}
