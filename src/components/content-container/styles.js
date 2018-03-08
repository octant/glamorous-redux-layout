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

export const ContentContainer = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const top = layout.titlebar.height + layout.topbar.height
  const left = layout.sidebar.width

  return {
    position: 'absolute',
    top: `${top}rem`,
    left: `${left}rem`,
    width: `calc(100vw - ${left}rem)`,
    minHeight: `calc(100vh - ${top}rem)`,
    padding: '0.5rem',
    backgroundColor: theme.colors.backgroundDark3
  }
}))
