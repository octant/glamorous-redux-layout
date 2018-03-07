import glamorous from 'glamorous'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  const layout = {...props.layout, navbar: state.navbar}
  return {layout}
}

export const SideBar = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const top = layout.navbar.height
  const width = layout.sidebarWidth

  return {
    position: 'fixed',
    top: `${top}rem`,
    left: '0',
    width: `${width}rem`,
    height: `calc(100vh - ${top}rem)`,
    backgroundColor: theme.colors.backgroundDark1
  }
}))

export const SideBarSpacer = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const height = layout.subnavHeight
  const width = layout.sidebarWidth

  return {
    height: `${height}rem`,
    width: `${width}rem`
  }
}))
