import glamorous from 'glamorous'

export const SubNav = glamorous.div(({layout, theme}) => {
  const top = layout.navbarHeight
  const left = layout.sidebarWidth
  const height = layout.subnavHeight

  return {
    position: 'fixed',
    top: `${top}rem`,
    left: `${left}rem`,
    height: `${height}rem`,
    width: `calc(100vw - ${left}rem)`,
    color: theme.colors.navbarText,
    backgroundColor: theme.colors.backgroundDark2
  }
})

export const TitleArea = glamorous.div(({theme}) => {
  return {
    padding: '0.5em',
    fontSize: '1.1em',
    margin: '0.5em 0.2em'
  }
})
