import glamorous from 'glamorous'

export const NavBar = glamorous.div({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '4rem',
  width: '100vw'
}, ({theme}) => ({
  backgroundColor: theme.colors.primary1
}))

export const BrandArea = glamorous.div({
  width: '16rem',
  padding: '1.2rem',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '1.5em',
  fontWeight: '300'
}, ({theme}) => ({
  backgroundColor: theme.colors.primary1
}))
