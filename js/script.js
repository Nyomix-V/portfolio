document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation du Menu Mobile (Sidenav)
    var sidenavElems = document.querySelectorAll('.sidenav');
    // edge: 'right' fait sortir le menu de la droite
    M.Sidenav.init(sidenavElems, {
        edge: 'left' 
    });

    // Bouton "Voir plus de projets"
    var toggleBtn = document.getElementById('toggle-more-projects');
    var moreProjects = document.getElementById('more-projects');
    if (toggleBtn && moreProjects) {
        toggleBtn.addEventListener('click', function() {
            var isHidden = moreProjects.style.display === 'none';
            moreProjects.style.display = isHidden ? 'flex' : 'none';
            toggleBtn.innerHTML = isHidden
                ? '<i class="material-icons right">expand_less</i>Voir moins de projets'
                : '<i class="material-icons right">expand_more</i>Voir plus de projets';

            if (isHidden) {
                // Révèle les cartes nouvellement affichées (l'observer les avait ignorées pendant qu'elles étaient display:none)
                moreProjects.querySelectorAll('.reveal').forEach(function(el) {
                    el.classList.add('in-view');
                });
            }
        });
    }

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