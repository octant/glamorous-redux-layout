import glamorous from 'glamorous'

export const NavBar = glamorous.div(({layout, theme}) => {
  const height = layout.navbarHeight

  return {
    position: 'fixed',
    top: '0',
    left: '0',
    height: `${height}rem`,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: theme.colors.brandText,
    backgroundColor: theme.colors.primary1
  }
})

export const BrandArea = glamorous.div(({layout, theme}) => {
  const width = layout.sidebarWidth
  const fontSize = theme.text.brandSize

  return {
    top: '0',
    width: `${width}rem`,
    paddingLeft: '1em',
    fontSize: `${fontSize}rem`,
    textTransform: 'uppercase',
    fontWeight: '300'
  }
})
