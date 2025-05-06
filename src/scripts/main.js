AOS.init();

document.querySelectorAll('.footer__container__sociais li').forEach(function(item) {
    item.addEventListener('click', function() {
        let link = item.querySelector('a');
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});