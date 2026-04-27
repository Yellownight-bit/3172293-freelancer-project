// Lógica para cargar el componente navbar

document.addEventListener("DOMContentLoaded", function(){

    const heroElement = document.querySelector(".hero-container")

    if (!heroElement) return;

        fetch("/views/components/hero.html")
        // la respuesta la convierte a texto plano
            .then(response => response.text())
            // Inserta el contenido html del navbar em el contenedor correspondiente
            .then(data => {
                heroElement.innerHTML = data;
            
            })

            .catch(error => console.error("Error cargando el hero", error));
    });