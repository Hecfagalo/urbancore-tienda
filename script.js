/**
 * URBANCORE - Funcionalidad Principal
 * Sitio web de ropa urbana masculina
 */

// ============================================
// CONFIGURACIÓN
// ============================================

const config = {
    // Número de WhatsApp (cambiar por el número real)
    whatsappNumber: '51999999999',
    // Mensaje base para pedidos
    whatsappMessage: 'Hola UrbanCore, me interesa el artículo: ',
    // Cantidad de productos a mostrar inicialmente
    initialProducts: 6,
    // Cantidad de productos a cargar al hacer "Ver más"
    loadMoreCount: 3
};

// ============================================
// DATOS DE PRODUCTOS - 12 ARTÍCULOS CON DETALLES
// ============================================
// NOTA: El campo "image" es la imagen principal
//       El campo "images" (array) incluye todas las imágenes del producto
//       El campo "details" contiene información detallada del producto

const productsData = [
    {
        id: 1,
        name: 'camiseta Manos',
        category: 'camisetas',
        price: 95900,
        originalPrice: 129900,
        description: 'Esta es la camiseta Manos de la marca colombiana Clemont',
        image: 'https://i.imgur.com/78nFB3O.png',
        images: [
            'https://i.imgur.com/78nFB3O.png'
        ],
        badge: 'Oferta',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Gráfico Central: Presenta una reinterpretación de "La creación de Adán" de Miguel Ángel. Las manos están representadas con un estilo artístico moderno: una en un tono crema/dorado y la otra en un tono gris azulado, simbolizando la conexión entre lo terrenal y lo divino.',
            Concepto: 'Estas prendas no son vistas solo como ropa, sino como "amuletos" que buscan elevar la energía de quien las usa',
            materiales: 'algodones de alto gramajes para dar esa sensación de "lujo pesado" típica del streetwear de alta gama',
            origin: 'Diseñado en Colombia. Confección nacional con materiales nacionales e importados.'
        }
    },
    {
        id: 2,
        name: 'Camiseta Sagrado corazon',
        category: 'camisetas',
        price: 95900,
        originalPrice: 129900,
        description: 'camiseta Sagrado Corazón de la marca colombiana Clemont.',
        image: 'https://i.imgur.com/wm8n4Pt.png',
        images: [
            'https://i.imgur.com/wm8n4Pt.png',
            'https://i.imgur.com/M3CxNVG.png',
        ],
        badge: 'Oferta',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Iconografía Central: Presenta una ilustración detallada del Sagrado Corazón, rodeado por una corona de espinas verde y envuelto en llamas vibrantes de color naranja y amarillo.',
            materials: 'Algodón de alta densidad (Heavyweight cotton), diseñado para mantener la estructura de la prenda y durabilidad del estampado.',
            origin: 'Diseño colombiano. Fabricado con tecnología textil internacional.'
        }
    },
    {
        id: 3,
        name: 'Camiseta HELLSTAR',
        category: 'camisetas',
        price: 95900,
        originalPrice: null,
        description: 'Camiseta de la marca Hellstar, conocida por su estética punk-rock y gráficos de inspiración post-apocalíptica o "espacial".',
        image: 'https://i.imgur.com/US4ahi3.png',
        images: [
            'https://i.imgur.com/US4ahi3.png',
            'https://i.imgur.com/8DboWKB.png'
        ],
        badge: 'Nuevo',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Frente: Presenta el logotipo de Hellstar en una tipografía de estilo graffiti o "distorsionada" con bordes blancos que resaltan sobre el fondo marrón (marron) de la prenda. Espalda: Incluye un gráfico complejo en blanco que muestra una silueta humana de la cual emanan rayos de luz o energía. En la parte superior se lee "Hellstar" con su característica estrella, y en la parte inferior la frase "VICTORY WITHIN" (La victoria está en el interior).',
            materials: 'Confeccionada en algodón pesado, diseñada para tener una caída estructurada y una sensación de lujo.',
            origin: 'Producción colombiana con estándares de calidad internacional.'
        }
    },
    {
        id: 4,
        name: 'Camiseta SAINT THEORY',
        category: 'camisetas',
        price: 95900,
        originalPrice: null,
        description: 'Camiseta Divine Threads de la marca colombiana Saint Theory.',
        image: 'https://i.imgur.com/Ktm6529.png',
        images: [
            'https://i.imgur.com/Ktm6529.png',
            'https://i.imgur.com/PKSCOv7.png'
        ],
        badge: null,
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Frente: Presenta un diseño minimalista con el nombre de la marca, "SAINT THEORY", estampado en el centro del pecho en una tipografía sencilla y limpia de color blanco. Espalda: Contiene el gráfico principal "Divine Threads". Este incluye: El nombre de la marca en letras grandes con un efecto de relieve azul metálico. Una cadena gruesa que rodea el texto y de la cual cuelga una cruz detallada en la parte inferior. Un par de alas extendidas que emergen de los laterales de la palabra "SAINT".',
            materials: 'Confeccionada en algodón pesado, diseñada para tener una caída estructurada y una sensación de lujo.',
        }
    },
    {
        id: 5,
        name: 'Camiseta PSYCHO BUNNY',
        category: 'camisetas',
        price: 95900,
        originalPrice: null,
        description: 'costuras selladas en los hombros y logotipos bordados o estampados con técnicas de alta calidad que resisten el desgaste.',
        image: 'https://i.imgur.com/f0cMWfA.png',
        images: [
            'https://i.imgur.com/f0cMWfA.png',
        ],
        badge: null,
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'La prenda presenta el nombre "PSYCHO BUNNY" en el pecho con una tipografía audaz y de gran tamaño. A la izquierda del texto se encuentra el icónico logo de la calavera y las tibias cruzadas con orejas de conejo, el cual tiene un acabado que parece ser reflectante o con textura metálica sutil.',
            materials: 'algodón Pima peruano en sus prendas, lo que garantiza una suavidad excepcional, durabilidad y que la prenda no pierda su forma con facilidad.',
        }
    },
    {
        id: 6,
        name: 'camiseta HUGO BOSS',
        category: 'camisetas',
        price: 95900,
        originalPrice: null,
        description: 'Camiseta premium de algodón orgánico. Acabados perfectos.',
        image: 'https://i.imgur.com/VDH1YVw_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/VDH1YVw_d.png?maxwidth=520&shape=thumb&fidelity=high'
        ],
        badge: 'Nuevo',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Estampado de monograma a gran escala encerrado en un cuadro blanco. El diseño utiliza una tipografía entrelazada de la letra "B", creando un patrón geométrico moderno.',
            materials: 'Algodón mercerizado o algodón elástico de alta calidad, proporcionando un tacto suave y un ligero brillo que denota elegancia.',
            origin: 'Producto premium fabricado en Colombia bajo estrictos estándares de sostenibilidad y calidad.'
        }
    },
    {
        id: 7,
        name: 'Camiseta Adidas',
        category: 'camisetas',
        price: 59900,
        originalPrice: null,
        description: 'Diseño minimalista y moderno, alejándose del uso tradicional de las tres rayas en las mangas',
        image: 'https://i.imgur.com/mX93uui_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/mX93uui_d.png?maxwidth=520&shape=thumb&fidelity=high'
        ],
        badge: null,
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'Logotipo: Justo debajo de las líneas se encuentra el icónico logotipo Performance de Adidas (las tres barras inclinadas) junto con el nombre de la marca en letras minúsculas. Color: La prenda es de un tono verde oscuro (bosque) sólido, lo que hace que los detalles en blanco resalten significativamente. Detalles Técnicos: Presenta un cuello redondo clásico acanalado y mangas cortas con costuras reforzadas. Incluye la etiqueta original colgante en el cuello, lo que confirma que es un artículo nuevo..',
            materials: 'mezclas de algodón sostenible (a través de Better Cotton Initiative) o poliéster reciclado en sus camisetas básicas para garantizar comodidad y una gestión eficiente de la humedad',
            fit: 'Al no tener las rayas en los hombros, ofrece un aspecto más sobrio, ideal para combinar con jeans o pantalones casuales sin parecer ropa exclusivamente de entrenamiento.',
            careInstructions: 'Lavado a máquina en programa para prendas oscuras. No usar directamente la secadora. Planchar del revés.',
            origin: 'Diseñado y confeccionado en Colombia con materiales de alta calidad.'
        }
    },
    {
        id: 8,
        name: 'camiseta Amiri',
        category: 'camisetas',
        price: 59900,
        originalPrice: 59000,
        description: 'pieza esencial que refleja la estética del rock and roll.',
        image: 'https://i.imgur.com/VzhuhDs_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/VzhuhDs_d.png?maxwidth=520&shape=thumb&fidelity=high'
        ],
        badge: 'Oferta',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'La prenda sigue un enfoque minimalista y de lujo directo, donde el protagonismo absoluto lo tiene la identidad de la marca. Presenta el logotipo "AMIRI" estampado en el centro del pecho en un vibrante color rojo, creando un contraste clásico y potente sobre la base negra. Representa la visión de Mike Amiri de elevar las prendas básicas del guardarropa cotidiano a piezas de estatus mediante tipografías limpias y materiales premium',
            materials: 'Ccnfeccionada en 100% algodón Supima o algodón de jersey de alta calidad.',
            fit: 'Posee un corte clásico o "Standard Fit". A diferencia de las marcas de streetwear puras que son muy anchas, Amiri suele optar por una silueta más estilizada que se ajusta bien a los hombros y cae de forma recta, proporcionando una apariencia pulida.',
            careInstructions: 'Se recomienda lavar a mano o en ciclo delicado con agua fría para preservar el estampado rojo',
        }
    },
    {
        id: 9,
        name: 'Camiseta HUGO BOSS',
        category: 'camisetas',
        price: 59900,
        originalPrice: null,
        description: 'Prenda que combina la identidad clásica de la sastrería alemana con un estilo casual y gráfico.',
        image: 'https://i.imgur.com/hVYumiP_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/hVYumiP_d.png?maxwidth=520&shape=thumb&fidelity=high'
        ],
        badge: null,
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'El diseño se centra en la logomanía moderna. Presenta el nombre "BOSS" en letras grandes con un patrón de rayas diagonales internas, lo que le da dinamismo visual al bloque de texto. Incluye el nombre completo "HUGO BOSS" justo debajo en una tipografía más pequeña y limpia..',
            materials: 'Confeccionada típicamente en jersey de algodón 100% de alta calidad. El tejido está diseñado para ser suave al tacto, transpirable y con un acabado ligeramente mate que caracteriza a las prendas premium de la marca.',
            fit: 'Posee un corte regular o "Regular Fit". Está diseñada para ofrecer una silueta cómoda y equilibrada, con hombros en su sitio y una caída recta que no se ajusta demasiado al cuerpo, permitiendo versatilidad en el uso diario.',
            careInstructions: 'No utilizar lejía ni blanqueadores para proteger la integridad del algodón y el estampado negro.',
        }
    },
    {
        id: 10,
        name: 'Camiseta Nike',
        category: 'camisetas',
        price: 59900,
        originalPrice: 79000,
        description: 'Diseñada específicamente para ofrecer un rendimiento óptimo con una estética técnica y minimalista.',
        image: 'https://i.imgur.com/vVrhOzm_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/vVrhOzm_d.png?maxwidth=520&shape=thumb&fidelity=high',
        ],
        badge: 'Oferta',
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'La prenda sigue una línea de diseño minimalista y monocromático, utilizando una paleta de colores tierra (marrón suave/topo) que es tendencia tanto en el deporte como en el estilo lifestyle. El diseño destaca por su branding tonal, donde el icónico Swoosh y la palabra "NIKE" están centrados en el pecho en un gris grafito que no rompe la armonía visual de la pieza. Transmite un concepto de "atleta moderno", enfocándose en la funcionalidad sin necesidad de gráficos excesivos.',
            materials: 'Tejido técnico de última generación: 88% poliéster recycled y 12% spandex.',
            fit: 'Este corte ofrece una sensación relajada y cómoda que no se adhiere excesivamente a la piel, permitiendo un rango completo de movimiento',
            origin: 'Tecnología textil desarrollada con estándares internacionales de rendimiento.'
        }
    },
    {
        id: 11,
        name: 'Camiseta PUMA',
        category: 'camisetas',
        price: 59900,
        originalPrice: null,
        description: 'diseño inspirado en la estética universitaria clásica (varsity style) adaptada al mundo de la ropa deportiva moderna.',
        image: 'https://i.imgur.com/SHcrFRy_d.png?maxwidth=520&shape=thumb&fidelity=high',
        images: [
            'https://i.imgur.com/SHcrFRy_d.png?maxwidth=520&shape=thumb&fidelity=high'
        ],
        badge: null,
        sizes: ['XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'El diseño se basa en un concepto retro de academia o deportes universitarios. Presenta la palabra "PUMA" en una tipografía de arco con bloques rojos y bordes negros, un estilo muy común en los uniformes deportivos de las universidades estadounidenses. Debajo del nombre principal, incluye el icónico logotipo del felino saltando (Puma Cat) y la palabra "SPORTS" en rojo, reforzando la herencia atlética de la marca de una manera nostálgica..',
            materials: 'Confeccionada en 100% algodón o una mezcla de algodón con poliéster para mayor suavidad. Utiliza un tejido de punto sencillo (jersey) que es ligero y transpirable, ideal para el uso cotidiano..',
            fit: 'Regular Fit" (Ajuste Regular).',
            origin: 'Diseñado en Colombia con algodón de primera calidad.'
        }
    },
    {
        id: 12,
        name: 'Polo Elegant Grey',
        category: 'camisetas',
        price: 54900,
        originalPrice: null,
        description: 'Acabados premium con cuello perfectamente estructurado.',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80'
        ],
        badge: 'Nuevo',
        sizes: ['S', 'M', 'L', 'XL'],
        details: {
            brand: 'UrbanCore',
            artConcept: 'La sofisticación en su expresión más pura. Un gris profundo que transmite seriedad, elegancia y confianza.',
            materials: 'Piqué premium de algodón con textura característica. Cuello de doble capa con interlock interior para mantener la forma. Botones personalizados.',
            fit: 'Corte slim fit elegante. Ajuste más definido en la cintura. Perfecto para ocasiones especiales o el trabajo.',
            careInstructions: 'Lavado a máquina en ciclo delicado. Planchar inmediatamente para mejores resultados. Guardar colgado.',
            origin: 'Confección nacional con acabados de alta sastrería.'
        }
    }
];

// Variables de estado
let displayedProducts = [];
let currentCategory = 'todos';

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Inicializar productos
    displayedProducts = productsData.slice(0, config.initialProducts);
    renderProducts(displayedProducts);
    
    // Event listeners
    setupCategoryFilters();
    setupMobileMenu();
    setupLoadMore();
    setupSmoothScroll();
    setupAnimations();
    setupLightbox();
    setupDetailsButtons();
}

// ============================================
// RENDERIZADO DE PRODUCTOS
// ============================================

function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    
    if (products.length === 0) {
        grid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <p style="font-size: 1.2rem; color: var(--text-secondary);">
                    No se encontraron productos en esta categoría.
                </p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Añadir event listeners a los botones de WhatsApp
    setupWhatsAppButtons();
    
    // Añadir event listeners a las miniaturas
    setupThumbnailClicks();
    
    // Añadir event listeners a los botones de detalles
    setupDetailsButtons();
    
    // Reiniciar animaciones
    setupAnimations();
}

// ============================================
// UTILIDADES
// ============================================

// Formatear precio al estilo colombiano (95.900)
function formatPrice(price) {
    const numPrice = parseFloat(price);
    if (isNaN(numPrice)) return '$ 0';
    const formatted = numPrice.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return '$ ' + formatted;
}

// Formatear precio con formato para WhatsApp
function formatPriceDecimal(price) {
    const numPrice = parseFloat(price);
    if (isNaN(numPrice)) return '0';
    const formatted = numPrice.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return formatted;
}

function createProductCard(product) {
    const badgeHTML = product.badge 
        ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` 
        : '';
    
    const originalPriceHTML = product.originalPrice 
        ? `<span class="price-original">$ ${formatPriceDecimal(product.originalPrice)}</span>` 
        : '';
    
    const descriptionHTML = product.description 
        ? `<p class="product-description">${product.description}</p>` 
        : '';
    
    // Generar miniaturas si hay múltiples imágenes
    const thumbnailsHTML = generateThumbnails(product);
    
    return `
        <article class="product-card" data-product-id="${product.id}" data-images="${encodeURIComponent(JSON.stringify(product.images))}">
            <div class="product-image-container" data-main-image="${product.image}">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80'"
                >
                ${badgeHTML}
                <button class="product-wishlist" aria-label="Añadir a favoritos">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
                <div class="product-zoom-icon" aria-label="Ampliar imagen">
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                    </svg>
                </div>
            </div>
            ${thumbnailsHTML}
            <div class="product-info">
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${originalPriceHTML}
                </div>
                ${descriptionHTML}
                <button class="btn-details-product" data-product-id="${product.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                    Ver Detalles
                </button>
                <button class="btn-whatsapp-product" data-product="${encodeURIComponent(JSON.stringify(product))}">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pedir por WhatsApp
                </button>
            </div>
        </article>
    `;
}

// Generar HTML de miniaturas
function generateThumbnails(product) {
    const images = product.images || [product.image];
    
    if (images.length <= 1) {
        return ''; // No mostrar miniaturas si solo hay una imagen
    }
    
    let thumbnailsHTML = '<div class="product-thumbnails">';
    
    images.forEach((img, index) => {
        const activeClass = index === 0 ? 'active' : '';
        thumbnailsHTML += `
            <div class="thumbnail ${activeClass}" data-image="${img}" data-index="${index}">
                <img src="${img}" alt="Imagen ${index + 1}" loading="lazy">
            </div>
        `;
    });
    
    thumbnailsHTML += '</div>';
    return thumbnailsHTML;
}

// Configurar clics en miniaturas
function setupThumbnailClicks() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const newImage = this.dataset.image;
            const productCard = this.closest('.product-card');
            const imageContainer = productCard.querySelector('.product-image-container');
            const mainImage = imageContainer.querySelector('.product-image');
            
            // Actualizar imagen principal con transición
            mainImage.style.opacity = '0';
            
            setTimeout(() => {
                mainImage.src = newImage;
                mainImage.onload = () => {
                    mainImage.style.opacity = '1';
                };
            }, 200);
            
            // Actualizar clase active en miniaturas
            const allThumbs = productCard.querySelectorAll('.thumbnail');
            allThumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function getCategoryLabel(category) {
    const labels = {
        'sudaderas': 'Sudaderas y Chaquetas',
        'pantalones': 'Pantalones',
        'camisetas': 'Camisetas',
        'accesorios': 'Accesorios'
    };
    return labels[category] || category;
}

// ============================================
// MODAL DE DETALLES DE PRODUCTO
// ============================================

function setupDetailsButtons() {
    const buttons = document.querySelectorAll('.btn-details-product');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const product = productsData.find(p => p.id === productId);
            
            if (product) {
                openProductModal(product);
            }
        });
    });
}

function openProductModal(product) {
    const modal = document.getElementById('product-detail-modal');
    
    if (!modal) {
        console.warn('Modal de detalles no encontrado');
        return;
    }
    
    // Llenar la información del producto en el modal
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-category').textContent = getCategoryLabel(product.category);
    document.getElementById('detail-price').textContent = formatPrice(product.price);
    
    // Llenar los detalles específicos
    if (product.details) {
        document.getElementById('detail-brand').textContent = product.details.brand || 'No disponible';
        document.getElementById('detail-art-concept').textContent = product.details.artConcept || 'No disponible';
        document.getElementById('detail-materials').textContent = product.details.materials || 'No disponible';
        document.getElementById('detail-fit').textContent = product.details.fit || 'No disponible';
        document.getElementById('detail-care').textContent = product.details.careInstructions || 'No disponible';
        document.getElementById('detail-origin').textContent = product.details.origin || 'No disponible';
    }
    
    // Configurar la imagen principal del modal
    const modalMainImage = document.getElementById('detail-main-image');
    if (modalMainImage && product.image) {
        modalMainImage.src = product.image;
        modalMainImage.alt = product.name;
    }
    
    // Generar miniaturas del modal
    const modalThumbnails = document.getElementById('detail-thumbnails');
    if (modalThumbnails && product.images) {
        let thumbnailsHTML = '';
        product.images.forEach((img, index) => {
            thumbnailsHTML += `
                <div class="detail-thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}" data-index="${index}">
                    <img src="${img}" alt="Imagen ${index + 1}" loading="lazy">
                </div>
            `;
        });
        modalThumbnails.innerHTML = thumbnailsHTML;
        
        // Configurar clics en miniaturas del modal
        modalThumbnails.querySelectorAll('.detail-thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newImage = this.dataset.image;
                modalMainImage.src = newImage;
                
                // Actualizar estado active
                modalThumbnails.querySelectorAll('.detail-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Configurar el botón de WhatsApp del modal
    const modalWhatsAppBtn = document.getElementById('detail-whatsapp-btn');
    if (modalWhatsAppBtn) {
        modalWhatsAppBtn.onclick = function() {
            openWhatsApp(product);
        };
    }
    
    // Mostrar el modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    
    // Prevenir scroll en el body
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
    }
}

// ============================================
// FILTROS DE CATEGORÍA
// ============================================

function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Actualizar clase activa
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar productos
            filterProducts(category);
            
            // Scroll suave al catálogo
            const catalogSection = document.getElementById('catalogo');
            if (catalogSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = catalogSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function filterProducts(category) {
    currentCategory = category;
    
    if (category === 'todos') {
        displayedProducts = productsData.slice(0, config.initialProducts);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        displayedProducts = filtered.slice(0, config.initialProducts);
    }
    
    renderProducts(displayedProducts);
    
    // Actualizar botón de cargar más
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    const totalInCategory = currentCategory === 'todos' 
        ? productsData.length 
        : productsData.filter(p => p.category === currentCategory).length;
    
    if (displayedProducts.length >= totalInCategory) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// ============================================
// CARGAR MÁS PRODUCTOS
// ============================================

function setupLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    
    loadMoreBtn.addEventListener('click', function() {
        loadMoreProducts();
    });
}

function loadMoreProducts() {
    const totalInCategory = currentCategory === 'todos' 
        ? productsData.length 
        : productsData.filter(p => p.category === currentCategory).length;
    
    if (displayedProducts.length >= totalInCategory) {
        return;
    }
    
    let newProducts;
    if (currentCategory === 'todos') {
        newProducts = productsData.slice(displayedProducts.length, displayedProducts.length + config.loadMoreCount);
    } else {
        const categoryProducts = productsData.filter(p => p.category === currentCategory);
        const currentIndex = displayedProducts.length % config.initialProducts;
        newProducts = categoryProducts.slice(currentIndex, currentIndex + config.loadMoreCount);
    }
    
    displayedProducts = [...displayedProducts, ...newProducts];
    
    // Añadir nuevos productos al grid
    const grid = document.getElementById('products-grid');
    const newCardsHTML = newProducts.map(product => createProductCard(product)).join('');
    grid.insertAdjacentHTML('beforeend', newCardsHTML);
    
    // Configurar event listeners para los nuevos botones
    setupWhatsAppButtons();
    setupThumbnailClicks();
    setupDetailsButtons();
    
    // Añadir animaciones a los nuevos productos
    const newCards = grid.querySelectorAll('.product-card:not([style*="opacity: 0"])');
    newCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s ease forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
    
    updateLoadMoreButton();
    
    // Scroll suave a los nuevos productos
    if (newProducts.length > 0) {
        const lastNewCard = grid.lastElementChild.previousElementSibling;
        if (lastNewCard) {
            lastNewCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// ============================================
// LIGHTBOX CON ZOOM Y GALERÍA
// ============================================

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const galleryIndicator = document.getElementById('gallery-indicator');
    const closeBtn = document.querySelector('.lightbox-close');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    
    if (!lightbox || !lightboxImage) {
        console.warn('Lightbox elements not found');
        return;
    }
    
    // Variables de estado del zoom y galería
    let currentZoom = 1;
    let currentImageIndex = 0;
    let currentImages = [];
    let currentProductName = '';
    const minZoom = 0.5;
    const maxZoom = 5;
    const zoomStep = 0.25;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    let initialTranslateX = 0, initialTranslateY = 0;
    
    // Función para actualizar el transform de la imagen
    function updateImageTransform() {
        lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
    }
    
    // Función para cambiar zoom
    function setZoom(zoom) {
        currentZoom = Math.max(minZoom, Math.min(maxZoom, zoom));
        updateImageTransform();
    }
    
    // Función para crear los puntos indicadores
    function createGalleryIndicator() {
        if (!galleryIndicator || currentImages.length <= 1) {
            if (galleryIndicator) galleryIndicator.innerHTML = '';
            return;
        }

        galleryIndicator.innerHTML = '';
        currentImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `gallery-dot ${index === currentImageIndex ? 'active' : ''}`;
            dot.addEventListener('click', function() {
                currentImageIndex = index;
                navigateImage(0);
            });
            galleryIndicator.appendChild(dot);
        });
    }

    // Función para actualizar los puntos indicadores
    function updateGalleryIndicator() {
        if (!galleryIndicator || currentImages.length <= 1) return;

        const dots = galleryIndicator.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }
    
    // Función para navegar entre imágenes
    function navigateImage(direction) {
        if (direction !== 0) {
            currentImageIndex += direction;

            // Loop circular
            if (currentImageIndex < 0) {
                currentImageIndex = currentImages.length - 1;
            } else if (currentImageIndex >= currentImages.length) {
                currentImageIndex = 0;
            }
        }

        // Resetear zoom al cambiar imagen
        currentZoom = 1;
        translateX = 0;
        translateY = 0;

        // Actualizar caption
        if (lightboxCaption) {
            lightboxCaption.textContent = `${currentProductName} (${currentImageIndex + 1}/${currentImages.length})`;
        }

        // Actualizar indicador de posición
        updateGalleryIndicator();

        // Transición suave
        lightboxImage.style.opacity = '0';

        setTimeout(() => {
            lightboxImage.src = currentImages[currentImageIndex];
            lightboxImage.onload = () => {
                lightboxImage.style.opacity = '1';
                updateImageTransform();
            };
        }, 200);
    }
    
    // Zoom con botones
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            setZoom(currentZoom + zoomStep);
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            setZoom(currentZoom - zoomStep);
        });
    }
    
    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentZoom = 1;
            translateX = 0;
            translateY = 0;
            updateImageTransform();
        });
    }
    
    // Navegación de galería
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateImage(-1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateImage(1);
        });
    }
    
    // Zoom con scroll del mouse
    if (lightboxContent) {
        lightboxContent.addEventListener('wheel', function(e) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
            setZoom(currentZoom + delta);
        }, { passive: false });
    }
    
    // Arrastrar la imagen
    if (lightboxContent && lightboxImage) {
        lightboxContent.addEventListener('mousedown', function(e) {
            if (currentZoom > 1) {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialTranslateX = translateX;
                initialTranslateY = translateY;
                lightboxContent.style.cursor = 'grabbing';
            }
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            translateX = initialTranslateX + deltaX;
            translateY = initialTranslateY + deltaY;
            updateImageTransform();
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
            lightboxContent.style.cursor = 'grab';
        });
        
        // Táctil
        let touchStartDistance = 0;
        let initialZoom = 1;
        
        lightboxContent.addEventListener('touchstart', function(e) {
            if (e.touches.length === 2) {
                touchStartDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                initialZoom = currentZoom;
                e.preventDefault();
            } else if (e.touches.length === 1 && currentZoom > 1) {
                isDragging = true;
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                initialTranslateX = translateX;
                initialTranslateY = translateY;
            }
        }, { passive: true });
        
        lightboxContent.addEventListener('touchmove', function(e) {
            if (e.touches.length === 2 && touchStartDistance > 0) {
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const scale = currentDistance / touchStartDistance;
                setZoom(initialZoom * scale);
                e.preventDefault();
            } else if (e.touches.length === 1 && isDragging) {
                const deltaX = e.touches[0].clientX - startX;
                const deltaY = e.touches[0].clientY - startY;
                translateX = initialTranslateX + deltaX;
                translateY = initialTranslateY + deltaY;
                updateImageTransform();
            }
        }, { passive: false });
        
        lightboxContent.addEventListener('touchend', function() {
            isDragging = false;
            touchStartDistance = 0;
        });
    }
    
    // Abrir lightbox al hacer clic en imagen del producto
    document.addEventListener('click', function(e) {
        const imageContainer = e.target.closest('.product-image-container');
        
        if (imageContainer) {
            const productCard = imageContainer.closest('.product-card');
            const productImage = imageContainer.querySelector('.product-image');
            
            if (productImage && productImage.src) {
                // Obtener todas las imágenes del producto
                try {
                    currentImages = JSON.parse(decodeURIComponent(productCard.dataset.images));
                } catch (error) {
                    currentImages = [productImage.src];
                }
                
                currentProductName = productCard.querySelector('.product-name')?.textContent || '';
                currentImageIndex = 0;

                // Crear indicadores de galería
                createGalleryIndicator();
                
                // Resetear estado
                currentZoom = 1;
                translateX = 0;
                translateY = 0;
                updateImageTransform();
                
                // Mostrar lightbox
                lightbox.classList.add('active');
                document.body.classList.add('lightbox-open');
                
                // Cargar imagen
                lightboxImage.classList.add('loading');
                lightboxImage.src = currentImages[0];
                lightboxImage.alt = currentProductName || 'Imagen de producto';
                
                lightboxImage.onload = function() {
                    lightboxImage.classList.remove('loading');
                };
                
                lightboxImage.onerror = function() {
                    lightboxImage.classList.remove('loading');
                    console.error('Error al cargar la imagen');
                };

                // Inicializar estado de la imagen
                navigateImage(0);
            }
        }
    });
    
    // Cerrar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        lightboxImage.src = '';
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
            navigateImage(1);
        }
    });
}

// ============================================
// INTEGRACIÓN WHATSAPP
// ============================================

function setupWhatsAppButtons() {
    const buttons = document.querySelectorAll('.btn-whatsapp-product');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            try {
                const productData = JSON.parse(decodeURIComponent(this.dataset.product));
                openWhatsApp(productData);
            } catch (error) {
                console.error('Error al procesar datos del producto:', error);
                openWhatsAppGeneric();
            }
        });
    });
}

function openWhatsApp(product) {
    const message = `${config.whatsappMessage} "${product.name}" que cuesta $ ${formatPriceDecimal(product.price)}. ¿Tienen talla disponible?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    trackWhatsAppClick(product);
}

function openWhatsAppGeneric() {
    const message = encodeURIComponent('Hola UrbanCore, me gustaría hacer una consulta sobre sus productos.');
    const whatsappURL = `https://wa.me/${config.whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function trackWhatsAppClick(product) {
    console.log('Producto pedido por WhatsApp:', product.name);
}

// ============================================
// MENÚ MÓVIL
// ============================================

function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target) && !nav.contains(event.target)) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
}

// ============================================
// SCROLL SUAVE
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMACIONES DE SCROLL
// ============================================

function setupAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// HEADER FIXED CON SCROLL
// ============================================

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// CONFIGURACIÓN DE EVENTOS DEL MODAL DE DETALLES
// ============================================

function setupProductModalEvents() {
    const modal = document.getElementById('product-detail-modal');
    
    if (!modal) return;
    
    // Botón cerrar del modal
    const closeBtn = modal.querySelector('.detail-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Inicializar eventos del modal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupProductModalEvents();
});

// ============================================
// FUNCIÓN TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
    // Eliminar toast anterior si existe
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Crear elemento toast
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close">&times;</button>
    `;
    
    // Estilos inline para el toast
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 20px;
        border-radius: 8px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: toastSlideIn 0.3s ease;
        max-width: 350px;
        font-family: system-ui, -apple-system, sans-serif;
    `;
    
    // Agregar al DOM
    document.body.appendChild(toast);
    
    // Botón cerrar
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        opacity: 0.8;
    `;
    closeBtn.addEventListener('click', () => toast.remove());
    
    // Auto cerrar después de 3 segundos
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'toastSlideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// ============================================
// EXPORTAR PARA USO EXTERNO
// ============================================

window.UrbanCore = {
    config,
    productsData,
    refreshProducts: () => filterProducts(currentCategory),
    showToast,
    openWhatsApp: openWhatsAppGeneric,
    openProductModal,
    closeProductModal
};

console.log('UrbanCore - Tienda Online cargada correctamente');
console.log(`${productsData.length} productos disponibles`);
console.log('WhatsApp configurado para:', config.whatsappNumber);
