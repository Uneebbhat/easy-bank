function toggleHide() {
    var navList = document.querySelector('.nav-list');
    var mobileNav = document.querySelector('.mobile-nav');

    navList.classList.toggle('hide');
    mobileNav.classList.toggle('show');
}

toggleHide()