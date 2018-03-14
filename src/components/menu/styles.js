import glamorous from 'glamorous'

export const Menu = glamorous.ul({
  listStyle: 'none'
}, ({theme, menuStyle}) => {
  const style = {
    color: theme.colors.text
  }

  switch (menuStyle) {
    case 'inline':
      style['display'] = 'inline-block'
      break
    default:
      break
  }

  return style
})

export const Item = glamorous.li({
  float: 'left',
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
