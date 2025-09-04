        let player; // Variable global para el reproductor de YouTube
        let isPlayerReady = false; // Nueva bandera para verificar si el reproductor de YouTube está listo

        // Esta función se ejecuta automáticamente cuando la API de Iframe de YouTube se carga.
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube-player', {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerReady(event) {
            // Silenciar el video al cargarse, ya que el autoplay sin mutear puede ser bloqueado por los navegadores.
            event.target.mute();
            isPlayerReady = true; // El reproductor está listo
            // El video no se reproduce automáticamente aquí; el IntersectionObserver lo controlará.
        }

        function onPlayerStateChange(event) {
            // Puedes añadir lógica aquí si necesitas reaccionar a cambios de estado del video
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Función para mezclar un array (algoritmo de Fisher-Yates)
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
                }
            }

            // Define una única lista de portadas de libros
            const allBookCovers = [
                // Portadas existentes de la lista 1 (8 portadas)
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_1.gif", alt: "Portada Libro 1" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_2.gif", alt: "Portada Libro 2" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_3.gif", alt: "Portada Libro 3" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_4.gif", alt: "Portada Libro 4" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_5.gif", alt: "Portada Libro 5" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_6.gif", alt: "Portada Libro 6" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_7.gif", alt: "Portada Libro 7" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_8.gif", alt: "Portada Libro 8" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_9.gif", alt: "Portada Libro 9" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_10.gif", alt: "Portada Libro 10" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_11.gif", alt: "Portada Libro 11" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_12.gif", alt: "Portada Libro 12" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_13.gif", alt: "Portada Libro 13" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_14.gif", alt: "Portada Libro 14" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_15.gif", alt: "Portada Libro 15" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_16.gif", alt: "Portada Libro 16" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_16-2.gif", alt: "Portada Libro 16-b" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_17.gif", alt: "Portada Libro 17" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_18.gif", alt: "Portada Libro 18" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_19.gif", alt: "Portada Libro 19" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_20.gif", alt: "Portada Libro 20" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_21.gif", alt: "Portada Libro 21" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_22.gif", alt: "Portada Libro 22" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_23.gif", alt: "Portada Libro 23" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_24.gif", alt: "Portada Libro 24" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_25.gif", alt: "Portada Libro 25" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_26.gif", alt: "Portada Libro 26" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_27.gif", alt: "Portada Libro 27" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_28.gif", alt: "Portada Libro 28" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_29.gif", alt: "Portada Libro 29" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_30.gif", alt: "Portada Libro 30" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_31.gif", alt: "Portada Libro 31" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_32.gif", alt: "Portada Libro 32" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_34.gif", alt: "Portada Libro 34" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_35.gif", alt: "Portada Libro 35" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_36.gif", alt: "Portada Libro 36" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_37.gif", alt: "Portada Libro 37" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_38.gif", alt: "Portada Libro 38" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_39.gif", alt: "Portada Libro 39" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_40.gif", alt: "Portada Libro 40" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_41.gif", alt: "Portada Libro 41" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_42.gif", alt: "Portada Libro 42" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_43.gif", alt: "Portada Libro 43" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_44.gif", alt: "Portada Libro 44" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_45.gif", alt: "Portada Libro 45" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_46.gif", alt: "Portada Libro 46" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_47.gif", alt: "Portada Libro 47" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_48.gif", alt: "Portada Libro 48" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_49.gif", alt: "Portada Libro 49" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_50.gif", alt: "Portada Libro 50" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_51.gif", alt: "Portada Libro 51" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_52.gif", alt: "Portada Libro 52" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_53.gif", alt: "Portada Libro 53" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_54.gif", alt: "Portada Libro 54" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_55.gif", alt: "Portada Libro 55" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_56.gif", alt: "Portada Libro 56" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_57.gif", alt: "Portada Libro 57" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_58.gif", alt: "Portada Libro 58" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_59.gif", alt: "Portada Libro 59" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_61.gif", alt: "Portada Libro 61" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_62.gif", alt: "Portada Libro 62" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_63.gif", alt: "Portada Libro 63" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_64.gif", alt: "Portada Libro 64" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_65.gif", alt: "Portada Libro 65" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_66.gif", alt: "Portada Libro 66" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_67.gif", alt: "Portada Libro 67" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_68.gif", alt: "Portada Libro 68" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_69.gif", alt: "Portada Libro 69" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_71.gif", alt: "Portada Libro 71" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_72.gif", alt: "Portada Libro 72" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_73.gif", alt: "Portada Libro 73" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_74.gif", alt: "Portada Libro 74" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_75.gif", alt: "Portada Libro 75" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_76.gif", alt: "Portada Libro 76" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_77.gif", alt: "Portada Libro 77" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_78.gif", alt: "Portada Libro 78" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_79.gif", alt: "Portada Libro 79" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_80.gif", alt: "Portada Libro 80" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_81.gif", alt: "Portada Libro 81" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_82.gif", alt: "Portada Libro 82" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_83.gif", alt: "Portada Libro 83" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_84.gif", alt: "Portada Libro 84" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_85.gif", alt: "Portada Libro 85" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_86.gif", alt: "Portada Libro 86" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_87.gif", alt: "Portada Libro 87" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_88.gif", alt: "Portada Libro 88" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_89.gif", alt: "Portada Libro 89" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_90.gif", alt: "Portada Libro 90" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_91.gif", alt: "Portada Libro 91" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_92.gif", alt: "Portada Libro 92" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_93.gif", alt: "Portada Libro 93" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_94.gif", alt: "Portada Libro 94" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_95.gif", alt: "Portada Libro 95" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_96.gif", alt: "Portada Libro 96" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_97.gif", alt: "Portada Libro 97" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_98.gif", alt: "Portada Libro 98" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_99.gif", alt: "Portada Libro 99" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_100.gif", alt: "Portada Libro 100" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_101.gif", alt: "Portada Libro 101" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_102.gif", alt: "Portada Libro 102" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_103.gif", alt: "Portada Libro 103" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_104.gif", alt: "Portada Libro 104" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_105.gif", alt: "Portada Libro 105" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_106.gif", alt: "Portada Libro 106" },
                { src: "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a_aniversario_107.gif", alt: "Portada Libro 107" },
                // AÑADE AQUÍ MÁS OBJETOS { src: "URL_DE_TU_IMAGEN", alt: "Texto alternativo" } PARA TUS OTRAS PORTADAS.
                // La lista contendrá solo las portadas definidas explícitamente aquí.
                // Por ejemplo, si quieres 104 portadas en total, puedes añadir 80 más aquí:
                // { src: "https://tu-dominio.com/mi-portada-1.jpg", alt: "Mi Portada 1" },
                // { src: "https://tu-dominio.com/mi-portada-2.png", alt: "Mi Portada 2" },
                // ...
            ];

            // La lista se mezcla una vez al inicio, pero cada actualización del slider toma 8 elementos aleatorios de una copia recién mezclada.

            const slider = document.getElementById('bookSlider');
            const numSliderItems = slider.querySelectorAll('.item').length; // Debería ser 8

            // Función para actualizar las imágenes del slider 3D
            function updateSliderImages() {
                // Crea una copia de allBookCovers para mezclar sin afectar el orden original
                let shuffledCovers = [...allBookCovers];
                shuffleArray(shuffledCovers); // Mezcla la copia

                const nextCoversToDisplay = [];
                // Selecciona las primeras 'numSliderItems' (8) portadas únicas de la lista mezclada
                for (let i = 0; i < numSliderItems; i++) {
                    // Asegura que no intentamos acceder a un índice fuera de los límites si allBookCovers es menor que numSliderItems
                    if (shuffledCovers[i]) {
                        nextCoversToDisplay.push(shuffledCovers[i]);
                    } else {
                        // Si no hay suficientes imágenes, repite las existentes o usa un marcador de posición
                        nextCoversToDisplay.push(shuffledCovers[i % shuffledCovers.length]);
                    }
                }

                const items = slider.querySelectorAll('.item img');

                // Aplica desenfoque y opacidad 0 para la transición de salida
                items.forEach(img => {
                    img.style.opacity = '0';
                    img.style.filter = 'blur(5px)';
                });

                // Después de un breve retraso, cambia la fuente y desvanece la entrada
                setTimeout(() => {
                    items.forEach((img, index) => {
                        if (nextCoversToDisplay[index]) {
                            img.src = nextCoversToDisplay[index].src;
                            img.alt = nextCoversToDisplay[index].alt;
                        }
                        // Restaura la opacidad y elimina el desenfoque para la transición de entrada
                        img.style.opacity = '1';
                        img.style.filter = 'blur(0px)';
                    });
                }, 500); // Duración de la transición de opacidad y filtro
            }

            // Población inicial del slider con 8 elementos aleatorios
            const initialItems = slider.querySelectorAll('.item img');
            let initialShuffledCovers = [...allBookCovers]; // Copia para la mezcla inicial
            shuffleArray(initialShuffledCovers); // Mezcla la copia inicial
            for (let i = 0; i < numSliderItems; i++) {
                if (initialShuffledCovers[i]) {
                    initialItems[i].src = initialShuffledCovers[i].src;
                    initialItems[i].alt = initialShuffledCovers[i].alt;
                } else {
                    // Maneja el caso si allBookCovers es menor que numSliderItems al inicio
                    initialItems[i].src = `https://placehold.co/200x280/D3D3D3/000000?text=Libro+${i + 1}`;
                    initialItems[i].alt = `Portada Libro ${i + 1}`;
                }
            }
            
            if (slider) {
                slider.addEventListener('animationiteration', (event) => {
                    if (event.animationName === 'autoRun') {
                        updateSliderImages();
                    }
                });
            }

            // JavaScript para el cambio de color de fondo y la imagen flotante
            const sections = document.querySelectorAll('main .edunlu-marca, #timeline-section, #mission-statement, #video-section, #catalog-section, #footer-section, #carta-director'); 
            const floatingImage = document.getElementById('floating-image');
            const body = document.body;
            const videoSection = document.getElementById('video-section');

            // Define los colores de fondo para cada sección por su ID
            const sectionColors = {
                'inicio': '#0da353',
                'aula': '#006bcd',
                'ciencia': '#FF0000',
                'sociedad': '#ffc300',
                'our-history-images': '#FFFFFF',
                'timeline-section': '#FFFFFF',
                'mission-statement': '#0da353',
                'video-section': '#333333',
                'carta-director': '#0da353',
                'catalog-section': '#e2e8f0',
                'footer-section': '#1a202c'
            };

            // Secciones en las que la imagen flotante DEBE ser visible
            const sectionsForFloatingImageVisibility = ['ciencia', 'sociedad'];

            const observer = new IntersectionObserver((entries) => {
                let anyVisibleFloatingImageSection = false;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;

                        // Cambia el color de fondo del body
                        if (sectionColors[sectionId]) {
                            body.style.backgroundColor = sectionColors[sectionId];
                        }

                        // Comprueba si esta sección intersectante debe mostrar la imagen flotante
                        if (sectionsForFloatingImageVisibility.includes(sectionId)) {
                            anyVisibleFloatingImageSection = true;
                        }

                        // Lógica de reproducción/pausa del video
                        if (sectionId === 'video-section' && player && isPlayerReady) {
                            player.playVideo();
                            player.mute();
                        }
                    } else {
                        // Pausa el video cuando la sección no es visible
                        if (entry.target.id === 'video-section' && player && isPlayerReady) {
                            player.pauseVideo();
                        }
                    }
                });

                // Después de verificar todas las entradas que intersectan, decide la visibilidad de la imagen
                if (anyVisibleFloatingImageSection) {
                    floatingImage.classList.remove('fade-out');
                } else {
                    floatingImage.classList.add('fade-out');
                }
            }, { threshold: 0.1 }); // Umbral pequeño para detectar entrada/salida rápidamente

            // Observa cada sección relevante
            sections.forEach(section => {
                observer.observe(section);
            });

            // Inicialmente, oculta la imagen si la sección de inicio o cualquier sección donde no deba verse
            // es la primera visible.
            const initialHiddenSections = ['inicio', 'aula', 'video-section', 'our-history-images', 'timeline-section', 'mission-statement', 'catalog-section', 'footer-section', 'carta-director'];

            const initialCheckObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && initialHiddenSections.includes(entry.target.id)) {
                        floatingImage.classList.add('fade-out');
                    }
                });
            }, { threshold: 0.1 });
            
            initialHiddenSections.forEach(sectionId => {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    initialCheckObserver.observe(sectionElement);
                }
            });

            // Lógica de animación del contador
            const counterElement = document.getElementById('counterDisplay');
            let hasAnimated = false; // Bandera para asegurar que la animación se ejecute solo una vez

            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCounter(counterElement, 100, ' +', ' LIBROS EDITADOS');
                        hasAnimated = true; // Establece la bandera a true después de que la animación comienza
                        counterObserver.unobserve(entry.target); // Deja de observar después de la animación
                    }
                });
            }, { threshold: 0.5 }); // Se activa cuando el 50% del elemento es visible

            counterObserver.observe(counterElement);

            function animateCounter(element, target, prefix = '', suffix = '') {
                let current = 0;
                const duration = 2000; // 2 segundos
                const stepTime = 10; // milisegundos
                const increment = target / (duration / stepTime);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    element.textContent = prefix + Math.floor(current) + suffix;
                }, stepTime);
            }

            // Lógica del botón de desplazamiento hacia arriba
            const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

            // Muestra u oculta el botón según la posición de desplazamiento
            window.onscroll = function() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    scrollToTopBtn.style.display = "block";
                } else {
                    scrollToTopBtn.style.display = "none";
                }
            };

            // Cuando el usuario hace clic en el botón, se desplaza a la parte superior del documento
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Lógica del menú de hamburguesa
            const hamburgerButton = document.getElementById('hamburger-button');
            const mobileNavContainer = document.getElementById('mobile-nav-container');
            const mobileNavLinks = document.getElementById('mobile-nav-links');

            hamburgerButton.addEventListener('click', () => {
                mobileNavContainer.classList.toggle('open');
            });

            // Cierra el menú móvil cuando se hace clic en un enlace
            mobileNavLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNavContainer.classList.remove('open');
                });
            });

            // Cierra el menú móvil cuando se hace clic fuera de él (pero no en el botón)
            document.addEventListener('click', (event) => {
                if (!mobileNavContainer.contains(event.target) && !hamburgerButton.contains(event.target) && mobileNavContainer.classList.contains('open')) {
                    mobileNavContainer.classList.remove('open');
                }
            });

            // Función para crear y poblar un carrusel para colecciones
            function setupCarousel(trackId, itemClassName, imageUrls, numImages = 10, animationDuration = 20) {
                const track = document.getElementById(trackId);
                if (!track) return;

                let imagesToUse = [];
                // Repite las imágenes para llenar numImages
                for (let i = 0; i < numImages; i++) {
                    imagesToUse.push(imageUrls[i % imageUrls.length]);
                }
                imagesToUse = imagesToUse.concat(imagesToUse); // Duplica para un bucle sin fisuras

                track.innerHTML = ''; // Limpia el contenido existente
                imagesToUse.forEach(url => {
                    const item = document.createElement('div');
                    item.classList.add(itemClassName); // Usa el nombre de clase pasado
                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = 'Imagen de carrusel'; // Texto alternativo genérico
                    // Añade onerror para la imagen de respaldo
                    img.onerror = function() { this.onerror=null; this.src='https://placehold.co/250x350/CCCCCC/FFFFFF/png?text=Error'; };
                    item.appendChild(img);
                    track.appendChild(item);
                });

                // Calcula el ancho para la animación dinámicamente basándose en el ancho del primer elemento
                // Esto asume que todas las imágenes tienen el mismo ancho definido en CSS para .carousel-item-collection
                // y que el primer elemento existe.
                const firstItem = track.querySelector(`.${itemClassName}`);
                const singleItemWidth = firstItem ? firstItem.offsetWidth : 250; // Valor predeterminado si no se encuentra
                const totalOriginalWidth = numImages * singleItemWidth;

                // Crea una hoja de estilos dinámica para actualizar la animación
                const styleId = `scrollRightToLeft-${trackId}-style`;
                let styleSheet = document.getElementById(styleId);
                if (!styleSheet) {
                    styleSheet = document.createElement("style");
                    styleSheet.id = styleId;
                    document.head.appendChild(styleSheet);
                }
                styleSheet.innerText = `
                    @keyframes scrollRightToLeft-${trackId} {
                        from { transform: translateX(0); }
                        to { transform: translateX(-${totalOriginalWidth}px); }
                    }
                    #${trackId} {
                        animation: scrollRightToLeft-${trackId} ${animationDuration}s linear infinite;
                    }
                `;
            }

            // URLs de imágenes para el carrusel de historia
            const historyImageUrls = [
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/01-historia-pablo-lulic.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/05-el-cubo.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/04-libreria.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/03-murales-escritura.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/02-murales-escritura.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/06-jornada-pintura.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/07--libreria.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/08-expo-unlu.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/09-impresiones.jpg",
                "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/10-presentacion.jpg"
            ];

 // Llama a la función para cada carrusel con las URLs de imagen especificadas
            setupCarousel('aulasCarouselTrack', 'carousel-item-collection', ["https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-1.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-2.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-3.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-4.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-5.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-6.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-7.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-8.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-9.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-10.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-11.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-12.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-13.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-14.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-15.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-16.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-17.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-18.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-19.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/a-20.png"], 20, 40);
            setupCarousel('cienciasCarouselTrack', 'carousel-item-collection', ["https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-1.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-2.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-3.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-4.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-6.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-7.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-8.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-9.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-10.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-11.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-12.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-13.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-14.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-15.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-16.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-17.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-18.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-19.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-20.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/c-21.png"], 20, 40);
            setupCarousel('sociedadCarouselTrack', 'carousel-item-collection', ["https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-1.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-2.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-3.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-4.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-5.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-6.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-7.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-8.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-9.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-10.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-11.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-12.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-13.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-14.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-15.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-16.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-17.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-18.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-19.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/s-20.png"], 20, 40);
            setupCarousel('serievidaCarouselTrack', 'carousel-item-collection', ["https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/shv-1.png", "https://www.edunlu.unlu.edu.ar/sites/www.edunlu.unlu.edu.ar/files/site/shv-2.png"], 20, 40);
            setupCarousel('historyCarouselTrack', 'carousel-item-history', historyImageUrls, historyImageUrls.length, 30); // Mayor duración para la historia
        });

        // Lógica para la carta del director desplegable por click
        const directorLetterTrigger = document.getElementById('directorLetterTrigger');
        const collapsibleLetterContent = document.getElementById('collapsibleLetterContent');
        const arrowIcon = directorLetterTrigger.querySelector('.arrow-icon');

        if (directorLetterTrigger && collapsibleLetterContent && arrowIcon) {
            directorLetterTrigger.addEventListener('click', () => {
                collapsibleLetterContent.classList.toggle('is-open');
                arrowIcon.classList.toggle('rotated');
            });
        }