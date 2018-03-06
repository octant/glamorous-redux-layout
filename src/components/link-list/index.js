import glamorous from 'glamorous'

const borders = {
  left: 'borderRight',
  right: 'borderLeft',
  bottom: 'borderTop',
  top: 'borderBottom'
}

const direction = {
  left: 'block',
  right: 'block',
  bottom: 'inline',
  top: 'inline'
}

export const Links = glamorous.ul(({theme}) => ({
  color: theme.colors.text
}))

export const Link = glamorous.li({
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer'
  }
}, ({theme, position, selected}) => {
  const styles = {
    display: `${direction[position || 'left']}`
  }
  if (selected) {
    styles.backgroundColor = theme.colors.backgroundDark3
    styles[borders[position || 'left']] = `2px solid ${theme.colors.primary1}`
  }

  if (position === 'top' || position === 'bottom') {
    styles.margin = `0.5em`
  }
  return styles
})

export const Icon = glamorous.i({
  color: 'white',
  padding: '0.5em'
})
