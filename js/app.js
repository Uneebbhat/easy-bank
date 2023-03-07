function toggleHide() {
    const navList = document.querySelector('.nav-list');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileNav.style.display != 'none') {
        mobileNav.style.display = 'none'
    }
    else {
        mobileNav.style.display = 'block';
    }
}

toggleHide()