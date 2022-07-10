const $links = document.querySelectorAll('a')!
const $h1 = document.querySelector('h1')!

type State = {
  url: string
}

type Titles = {
  [key: string]: string
}

$links.forEach($link => $link.addEventListener('click', handleClick))

window.onpopstate = (e) => {
  navigation({url: e.state.url})
}

history.replaceState({url: '/'}, '', '/')

function navigation(state: State) {
  const titles: Titles = {
    '/': 'Home',
    '/about': 'Sobre'
  }

  $h1.textContent = titles[state.url]
}

function handleClick(e: MouseEvent) {
    e.preventDefault()
    const element = e.target as HTMLAnchorElement
    const url = element.getAttribute('href')
    const state = {url}
    history.pushState(state, '', url)
    navigation({url: state.url ?? '/'})
}
