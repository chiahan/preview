fetch('navbar.html')
    .then(response => response.text())
    .then(navbarContent => {
        document.getElementById('navbar-container').innerHTML = navbarContent;
    });
fetch('footer.html')
    .then(response => response.text())
    .then(footerContent => {
        document.getElementById('footer-container').innerHTML = footerContent;
});