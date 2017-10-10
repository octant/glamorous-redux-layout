import glamorous from 'glamorous'

export const Links = glamorous.ul(({theme}) => ({
  color: theme.colors.text
}))

export const Link = glamorous.li({
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer'
  }
}, ({theme, selected}) => {
  if (selected) {
    return {
      backgroundColor: theme.colors.backgroundDark3,
      borderRight: `2px solid ${theme.colors.primary1}`
    }
  }
})

export const Icon = glamorous.i({
  color: 'white',
  padding: '0.5em'
})
