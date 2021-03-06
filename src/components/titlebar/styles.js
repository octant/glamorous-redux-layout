import glamorous from 'glamorous'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  const layout = {
    ...props.layout,
    titlebar: state.titlebar,
    sidebar: state.sidebar
  }

  return {layout}
}

export const TitleBar = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  return {
    position: 'fixed',
    top: '0',
    left: '0',
    height: `${layout.titlebar.height}rem`,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: theme.colors.brandText,
    backgroundColor: theme.colors.primary1
  }
}))

export const BrandArea = connect(mapStateToProps)(glamorous.div(({layout, theme}) => {
  const width = theme.text.huge
  const fontSize = theme.text.brandSize

  return {
    top: '0',
    width: `${width}rem`,
    paddingLeft: '1rem',
    fontSize: `${fontSize}rem`,
    textTransform: 'uppercase',
    fontWeight: '300'
  }
}))
