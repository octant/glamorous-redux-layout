import glamorous from 'glamorous'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  const layout = {
    ...props.layout,
    titlebar: state.titlebar,
    sidebar: state.sidebar,
    topbar: state.topbar
  }
  return {layout}
}

export const SideBar = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const top = layout.titlebar.height
  const width = layout.sidebar.width

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
  const height = layout.topbar.height
  const width = layout.sidebar.width

  return {
    height: `${height}rem`,
    width: `${width}rem`
  }
}))
