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
  const style = {
    display: `inline`,
    margin: `0.5em`
  }

  if (selected) {
    style.backgroundColor = theme.colors.backgroundDark3
    style.borderBottom = `2px solid ${theme.colors.primary1}`
  }

  return style
})
