// const fixedHeaderWhenScrolling = () => {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 0) {
//         header.classList.add('header--fixed');
//     } else {
//         header.classList.remove('header--fixed');
//     }
// }
//
// const openCloseSidebar = () => {
//     const openBtn = document.querySelector('.header__burger');
//     const closeBtn = document.querySelector('.sidebar__close');
//     const sidebar = document.querySelector('.sidebar');
//
//     const toggleScroll = (isOpen) => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//     };
//
//     openBtn.addEventListener('click', () => {
//         sidebar.classList.add('sidebar--open');
//         toggleScroll(true);
//     });
//
//     closeBtn.addEventListener('click', () => {
//         sidebar.classList.remove('sidebar--open');
//         toggleScroll(false);
//     });
//
//     document.addEventListener('click', (event) => {
//         if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
//             sidebar.classList.remove('sidebar--open');
//             toggleScroll(false);
//         }
//     });
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//     window.addEventListener('scroll', function () {
//         fixedHeaderWhenScrolling();
//     });
//
//     openCloseSidebar();
// });


const info = document.querySelector('.projects__info');
const searchForm = document.querySelector('.fastsearch__scroll');
const projects = document.querySelector('.projects');
const searchBlock = document.querySelector('.fastsearch');

const scrollBlock = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // if (scrollY < 730) {
    //     searchBlock.classList.remove('search-stage-2', 'search-stage-3');
    //     searchBlock.classList.add('search-stage-1');
    //     projects.classList.remove
    //
    //     info.classList.add('project-info');
    //
    //
    // } else if (scrollY >= 730 && scrollY < 930) {
    //     searchBlock.classList.remove('search-stage-1', 'search-stage-3');
    //     searchBlock.classList.add('search-stage-2');
    // } else {
    //     searchBlock.classList.remove('search-stage-1', 'search-stage-2');
    //     searchBlock.classList.add('search-stage-3');
    // }

    if (scrollY > 730) {
        // searchForm.classList.add('is-sticky');
        scrollBlock.classList.add('visible');
    }else {
        scrollBlock.classList.remove('visible', 'compact');
    }

    if (scrollY > 1750) {
        requestAnimationFrame(() => {
            scrollBlock.classList.add('search-stage-1');
        })
    }else {
        requestAnimationFrame(() => {
            scrollBlock.classList.remove('search-stage-1');
        })
    }
}
);




const profileButton = document.querySelector('.header__login');

profileButton.addEventListener('click', () => {
    window.location.href = 'profile.html';
})

