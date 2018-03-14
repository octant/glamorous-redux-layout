import glamorous from 'glamorous'

export const Menu = glamorous.ul({
  listStyle: 'none',
  padding: 0,
  margin: 0
}, ({theme}) => {
  const style = {
    color: theme.colors.text
  }

  return style
})

export const Item = glamorous.li({
  ':hover': {
    cursor: 'pointer'
  }
}, ({theme, selected}) => {
  let style = {}

  if (selected) {
    style.backgroundColor = theme.colors.backgroundDark3
    style.borderRight = `2px solid ${theme.colors.primary1}`
  }

  return style
})

export const Icon = glamorous.i({
  color: 'white',
  padding: '0.5em'
})
