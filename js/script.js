document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation du Menu Mobile (Sidenav)
    var sidenavElems = document.querySelectorAll('.sidenav');
    // edge: 'right' fait sortir le menu de la droite
    M.Sidenav.init(sidenavElems, {
        edge: 'left' 
    });

    // Effet d'apparition au scroll (optionnel mais sympa)
    // On peut ajouter d'autres inits Materialize ici si besoin
});