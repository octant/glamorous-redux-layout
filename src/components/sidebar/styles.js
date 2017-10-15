import glamorous from 'glamorous'

export const SideBar = glamorous.div(({layout, theme}) => {
  const top = layout.navbarHeight
  const width = layout.sidebarWidth

  return {
    position: 'fixed',
    top: `${top}rem`,
    left: '0',
    width: `${width}rem`,
    height: `calc(100vh - ${top}rem)`,
    backgroundColor: theme.colors.backgroundDark1
  }
})

export const SideBarSpacer = glamorous.div(({layout, theme}) => {
  const height = layout.subnavHeight
  const width = layout.sidebarWidth

  return {
    height: `${height}rem`,
    width: `${width}rem`
  }
})
