if ("getInstalledRelatedApps" in navigator) {
    navigator.getInstalleRelatedApps().then((relatedApps) => {
        relatedApps.forEach((application) => {
            console.log(application.id);
            console.log(application.platform);
            console.log(application.url);
        });
    });
}

// On récupère l'information via matchMedia
// puis on la teste
const fullscreen = matchMedia(`(display-mode : fullscreen)`);

if (fullscreen.matches) {
    // faire quelque chose si l'application est en fullscreen
}

// on peut être averti du changement de mode d'affichage
// par la méthode onchange de l'objet fullscreen

fullscreen.onchange = (e) => {
    if (e.matches) {
        // faire quelque chose si l'application est en fullscreen
    }
};
