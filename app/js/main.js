const fixedHeaderWhenScrolling = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

const openCloseSidebar = () => {
    const openBtn = document.querySelector('.header__burger');
    const closeBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');

    const toggleScroll = (isOpen) => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('sidebar--open');
        toggleScroll(true);
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--open');
        toggleScroll(false);
    });

    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
            sidebar.classList.remove('sidebar--open');
            toggleScroll(false);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
        fixedHeaderWhenScrolling();
    });

    openCloseSidebar();
});