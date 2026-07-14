document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation du Menu Mobile (Sidenav)
    var sidenavElems = document.querySelectorAll('.sidenav');
    // edge: 'right' fait sortir le menu de la droite
    M.Sidenav.init(sidenavElems, {
        edge: 'left' 
    });

    // Effet d'apparition au scroll
    var revealElems = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElems.forEach(function(el) {
        observer.observe(el);
    });
});