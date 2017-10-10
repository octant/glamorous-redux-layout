import glamorous from 'glamorous'

export const ContentContainer = glamorous.div(({layout}) => {
  return {
    position: 'absolute',
    top: '7rem',
    left: '16rem',
    width: 'calc(100vw - 16rem)',
    minHeight: 'calc(100vh - 7rem)',
    padding: '0.5rem',
    backgroundColor: '#1e1e1e'
  }
})
