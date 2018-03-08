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

export const TopBar = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const top = layout.titlebar.height
  const left = layout.sidebar.width
  const height = layout.topbar.height

  return {
    position: 'fixed',
    top: `${top}rem`,
    left: `${left}rem`,
    height: `${height}rem`,
    width: `calc(100vw - ${left}rem)`,
    paddingTop: '0.4em',
    color: theme.colors.titlebarText,
    backgroundColor: theme.colors.backgroundDark2
  }
}))

export const TitleArea = glamorous.div(({layout, theme}) => {
  return {
    position: 'absolute',
    bottom: '0.4em'
  }
})
