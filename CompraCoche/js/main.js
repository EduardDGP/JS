const coches = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVqRqUhqawsaqLer1cj5_ZZ_fTnCmKrokPQ&usqp=CAU",
        descripcion: "El Toyota Corolla es un sedán compacto que destaca por su eficiencia y fiabilidad. Perfecto para aquellos que buscan un vehículo económico y de bajo consumo de combustible.",
        precio: 30000,
        opciones: ["Estándar", "Lujo", "Deportivo"]
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        año: 2023,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgchWheNrydpQI-Tpzh3OQEYopw89ybzZK6Q&usqp=CAU",
        descripcion: "El Honda Civic es un automóvil versátil con un diseño moderno y características innovadoras. Ofrece un rendimiento eficiente y un interior espacioso, ideal para la vida urbana.",
        precio: 27000,
        opciones: ["Básico", "Ejecutivo", "Turbo"]
    },
    {
        id: 3,
        marca: "Mercedes",
        modelo: "SUV - EQA",
        año: 2022,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoTeizDS2i6s3oXaH6UQotXjGUCAS8plAHWcNo3WYkOxRlb0mLatHSudg0GtgUbkHFgM&usqp=CAU",
        descripcion: "Destaca sin buscar la distinción. El nuevo EQA es un SUV 100% eléctrico con un lenguaje estético inconfundible. El exterior avanzado le confiere un aspecto poderoso que se completa con el confort deportivo del interior. De ese modo, el nuevo EQA se convierte en el modelo de acceso a la conducción 100% eléctrica perfecto. ",
        precio: 80000,
        opciones: ["Básico", "Ejecutivo", "Turbo"]
    },
    {
        id: 4,
        marca: "Citroen",
        modelo: "C4",
        año: 2023,
        imagen: "https://lifestyle.citroen.es/media/catalog/product/cache/d7347baf5c7d139c2d3f60d07c431515/m/i/miniature-citroen-e-c4-bleu-iceland-pct-bleu-2020-_6.jpg",
        descripcion: "Explora la combinación perfecta de estilo vanguardista y rendimiento dinámico con el Citroën C4. Este automóvil captura la esencia del diseño moderno y la tecnología avanzada, proporcionando una experiencia de conducción única y emocionante en cada recorrido.",
        precio: 25000,
        opciones: ["Básico", "Ejecutivo", "Turbo"]
    },
];
    // Función para cargar la información del coche seleccionado
    const carTitle = document.getElementById("carTitle");
    const carDescription = document.getElementById("carDescription");
    const carInfo = document.getElementById("carInfo");
    const carOptions = document.getElementById("carOptions");
    const carImg = document.getElementById("carImg");

    // Función para cargar la información del coche seleccionado
    function cargarInformacionCoche(coche) {
        carTitle.innerText = `${coche.marca} ${coche.modelo} (${coche.año})`;
        carDescription.innerText = coche.descripcion;
        carImg.src = coche.imagen;
        carInfo.innerText = `Precio: $${coche.precio.toLocaleString()}`;
    }

    // Función para cargar las opciones de todos los coches al elemento select
    function cargarOpcionesCoches() {
        coches.forEach(function(coche) {
            var option = document.createElement("option");
            option.value = coche.id;
            option.text = `${coche.marca} ${coche.modelo} (${coche.año})`;
            carOptions.appendChild(option);
        });
    }

    // Llama a la función para cargar la información del coche seleccionado al cambiar la opción
    carOptions.addEventListener("change", function() {
        const cocheSeleccionadoId = parseInt(carOptions.value);
        const cocheSeleccionado = coches.find(coche => coche.id === cocheSeleccionadoId);

        if (cocheSeleccionado) {
            cargarInformacionCoche(cocheSeleccionado);
        }
    });

    window.onload = function() {
        cargarOpcionesCoches();
        cargarInformacionCoche(coches[0]);

        const btnComprar = document.getElementById("btnComprar");
        btnComprar.addEventListener("click", function() {
        alert("¡Gracias por tu compra! El vehículo ha sido añadido a tu carrito.");
    });
        
    };

