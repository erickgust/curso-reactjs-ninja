var $links = document.querySelectorAll('a');
var $h1 = document.querySelector('h1');
$links.forEach(function ($link) { return $link.addEventListener('click', handleClick); });
window.onpopstate = function (e) {
    navigation({ url: e.state.url });
};
history.replaceState({ url: '/' }, '', '/');
function navigation(state) {
    var titles = {
        '/': 'Home',
        '/about': 'Sobre'
    };
    $h1.textContent = titles[state.url];
}
function handleClick(e) {
    var _a;
    e.preventDefault();
    var element = e.target;
    var url = element.getAttribute('href');
    var state = { url: url };
    history.pushState(state, '', url);
    navigation({ url: (_a = state.url) !== null && _a !== void 0 ? _a : '/' });
}
