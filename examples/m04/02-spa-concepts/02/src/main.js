var $links = document.querySelectorAll('a');
var $h1 = document.querySelector('h1');
$links.forEach(function ($link) { return $link.addEventListener('click', handleClick); });
function handleClick(e) {
    e.preventDefault();
    var element = e.target;
    var url = element.getAttribute('href');
    history.pushState({}, '', url);
    $h1.textContent = url;
}
