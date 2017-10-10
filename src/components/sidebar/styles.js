import glamorous from 'glamorous'

export const SideBar = glamorous.div({
  position: 'fixed',
  top: '4rem',
  left: '0',
  minWidth: '16rem',
  height: 'calc(100vh - 4rem)'
}, ({theme}) => ({
  backgroundColor: theme.colors.backgroundDark1
}))

export const SideBarSpacer = glamorous.div({
  height: '3rem',
  width: '16rem'
})
