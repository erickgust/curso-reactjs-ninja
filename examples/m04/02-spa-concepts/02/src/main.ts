const $links = document.querySelectorAll('a')!
const $h1 = document.querySelector('h1')!

$links.forEach($link => $link.addEventListener('click', handleClick))

function handleClick(e: MouseEvent) {
    e.preventDefault()
    const element = e.target as HTMLAnchorElement
    const url = element.getAttribute('href')
    history.pushState({}, '', url)
    $h1.textContent = url
}
