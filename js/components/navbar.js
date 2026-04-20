// Lógica para cargar el componente navbar

document.addEventListener("DOMContentLoaded", function(){

    const navbarElement = document.querySelector(".navbar-container")

    if (!navbarElement) return;

        fetch("/views/components/navbar.html")
        // la respuesta la convierte a texto plano
            .then(Response => Response.text())
            // Inserta el contenido html del navbar em el contenedor correspondiente
            .then(data => {
                navbarElement.innerHTML = data;
            
            
            const currentPage = window.location.pathname.split("/").pop() ||
            "index.html"

            const navlinks = navbarElement.querySelectorAll(".navbar__link")

            navlinks.forEach(link => {
                // Verifica si el href del enlace incluye el nombre de la pagina actual
                if (link.getAttribute("href").includes(currentPage)) {

                    link.classList.add("active")        
                }
            })
            })

            .catch(error => console.error("Error cargando el navbar", error));
    })