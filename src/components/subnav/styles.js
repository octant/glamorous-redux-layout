import glamorous from 'glamorous'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  const layout = {
    ...props.layout,
    navbar: state.navbar,
    sidebar: state.sidebar
  }

  return {layout}
}

export const SubNav = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const top = layout.navbar.height
  const left = layout.sidebar.width
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
}))

export const TitleArea = glamorous.div(({theme}) => {
  return {
    padding: '0.5em',
    fontSize: '1.1em',
    margin: '0.5em 0.2em'
  }
})
