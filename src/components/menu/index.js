import glamorous from 'glamorous'

export const Nav = glamorous.nav(({horizontal}) => {
  const style = {
  }

  if (horizontal) {
    style.textAlign = 'center'
  }

  return style
})
