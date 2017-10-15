import glamorous from 'glamorous'

export const NavBar = glamorous.div(({layout, theme}) => {
  const height = layout.navbarHeight

  return {
    position: 'fixed',
    top: '0',
    left: '0',
    height: `${height}rem`,
    width: '100vw',
    color: theme.colors.brandText,
    backgroundColor: theme.colors.primary1
  }
})

export const BrandArea = glamorous.div(({layout, theme}) => {
  const width = layout.huge

  return {
    width: `${width}rem`,
    padding: '1.2rem',
    textTransform: 'uppercase',
    fontSize: '1.5em',
    fontWeight: '300'
  }
})
