import glamorous from 'glamorous'

export const ContentContainer = glamorous.div(({layout, theme}) => {
  const top = layout.navbarHeight + layout.subnavHeight
  const left = layout.sidebarWidth

  return {
    position: 'absolute',
    top: `${top}rem`,
    left: `${left}rem`,
    width: `calc(100vw - ${left}rem)`,
    minHeight: `calc(100vh - ${top}rem)`,
    padding: '0.5rem',
    backgroundColor: theme.colors.backgroundDark3
  }
})
