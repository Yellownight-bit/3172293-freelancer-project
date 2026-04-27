document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".services__form-container")

    if (!form) return;

        fetch("/views/components/contact-form.html")
        // la respuesta la convierte a texto plano
            .then(response => response.text())
            .then(data => {
                form.innerHTML = data;
            })
            .catch(error => console.error("Error cargando el formulario", error));
    });