//toggle class active
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger diklik
hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
    hamburger.classList.toggle('slide');
};
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        hamburger.classList.remove('slide');
    }
})
document.querySelectorAll('.navbar-nav').forEach(n => n.addEventListener('click', () => {
    navbarNav.classList.remove('active');
    hamburger.classList.remove('slide');
}));