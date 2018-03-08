import glamorous from 'glamorous'

export const Menu = glamorous.ul(({theme}) => ({
  color: theme.colors.text
}))

export const Item = glamorous.ul({
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer'
  }
}, ({theme, selected}) => {
  const style = {}

  if (selected) {
    style.backgroundColor = theme.colors.backgroundDark3
    style.borderRight = `2px solid ${theme.colors.primary1}`
  }

  return style
})
