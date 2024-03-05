/*funció per el botó "pujar", amb una animació de pujar amb suavitat*/
function scrollToTop() {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      }

/*funció per el botó del menú, per obrir o tencar el bloc, a més per defecte el bloc no apareix*/
function toggleBloque() {
        var bloque = document.getElementById("bloque");
        if (bloque.style.display === "none") {
          bloque.style.display = "block";
        } else {
            bloque.style.display = "none";
        }
    }