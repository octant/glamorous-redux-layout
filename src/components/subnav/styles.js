import glamorous from 'glamorous'

export const SubNav = glamorous.div(({layout}) => {
  return {
    position: 'fixed',
    top: '4rem',
    left: '16rem',
    height: '3rem',
    width: 'calc(100vw - 16rem)',
    backgroundColor: '#252526'
  }
})

export const SubNavSpacer = glamorous.div(({layout}) => {
  return {
    width: '2rem',
    height: '3rem',
    float: 'left'
  }
})

export const TitleArea = glamorous.div(({layout}) => {
  return {
    padding: '0.8em',
    fontSize: '1.2em',
    color: 'white',
    margin: '0 0.2em'
  }
})
