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
// DATOS DE PRODUCTOS - 12 ARTÍCULOS
// ============================================
// NOTA: El campo "image" es la imagen principal
//       El campo "images" (array) incluye todas las imágenes del producto

const productsData = [
    {
        id: 1,
        name: 'Clemont Manos',
        category: 'camisetas',
        price: 95900,
        originalPrice: 129900,
        description: 'Esta es la camiseta "Manos" de la marca colombiana Clemont, una pieza representativa de su estilo streetwear con enfoque espiritual.',
        image: 'https://imgur.com/gallery/clemont-touch-y43kvW2',
        images: [

        ],
        badge: 'Oferta',
        sizes: ['XL']
    },
    {
        id: 2,
        name: 'Clemont Sagrado corazon',
        category: 'camisetas',
        price: 95900,
        originalPrice: 129900,
        description: 'Esta es la camiseta Sagrado Corazón de la marca colombiana Clemont, una pieza que profundiza en la estética mística y espiritual que caracteriza a la firma de Medellín.',
        image: 'https://imgur.com/gallery/camisetas-R6Ivdxn',
        images: [
            'https://imgur.com/gallery/camisetas-R6Ivdxn',
            'https://imgur.com/gallery/clemont-b6Y64Ce',
        ],
        badge: 'Oferta',
        sizes: ['XL']
    },
    {
        id: 3,
        name: 'T-Shirt Basic Black',
        category: 'camisetas',
        price: 39900,
        originalPrice: null,
        description: 'Esta es una camiseta de la marca Hellstar, conocida por su estética punk-rock y gráficos de inspiración post-apocalíptica o "espacial" que han ganado gran popularidad en la escena del streetwear',
        image: 'https://imgur.com/gallery/hellstar-f-85VNKJL',
        images: [
            'https://imgur.com/gallery/hellstar-b-A3fNLUi'
        ],
        badge: 'Nuevo',
        sizes: ['XL']
    },
    {
        id: 4,
        name: 'T-Shirt Graphic Grey',
        category: 'camisetas',
        price: 49900,
        originalPrice: null,
        description: 'Camiseta con diseño gráfico urbano. Prints de alta calidad.',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
            'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80'
        ],
        badge: null,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: 'T-Shirt Oversize Blue',
        category: 'camisetas',
        price: 55900,
        originalPrice: null,
        description: 'Camiseta oversize con corte moderno. Tejido suave y resistente.',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'
        ],
        badge: null,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 6,
        name: 'T-Shirt Premium Red',
        category: 'camisetas',
        price: 59900,
        originalPrice: null,
        description: 'Camiseta premium de algodón orgánico. Acabados perfectos.',
        image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80'
        ],
        badge: 'Nuevo',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 7,
        name: 'Camiseta Urbana Dark',
        category: 'camisetas',
        price: 42900,
        originalPrice: null,
        description: 'Diseño urbano contemporáneo en color negro. Perfecta para cualquier ocasión.',
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80',
            'https://images.unsplash.com/photo-1503341455253-dff4815485f1?w=600&q=80'
        ],
        badge: null,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 8,
        name: 'Polo Classic White',
        category: 'camisetas',
        price: 48900,
        originalPrice: 59000,
        description: 'Polo clásico de corte regular. Algodón peinado de alta calidad.',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80'
        ],
        badge: 'Oferta',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 9,
        name: 'T-Shirt Vintage Green',
        category: 'camisetas',
        price: 51900,
        originalPrice: null,
        description: 'Estilo vintage con tintes ecológicos. Suavidad excepcional.',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
            'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80'
        ],
        badge: null,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 10,
        name: 'Camiseta Performance',
        category: 'camisetas',
        price: 64900,
        originalPrice: 79000,
        description: 'Tecnología de alto rendimiento. Secado rápido y compresión ideal.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80'
        ],
        badge: 'Oferta',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 11,
        name: 'T-Shirt Minimalist Beige',
        category: 'camisetas',
        price: 44900,
        originalPrice: null,
        description: 'Diseño minimalista para un look sofisticado. Versatilidad garantizada.',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80'
        ],
        badge: null,
        sizes: ['S', 'M', 'L', 'XL']
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
        sizes: ['S', 'M', 'L', 'XL']
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
// EXPORTAR PARA USO EXTERNO
// ============================================

window.UrbanCore = {
    config,
    productsData,
    refreshProducts: () => filterProducts(currentCategory),
    showToast,
    openWhatsApp: openWhatsAppGeneric
};

console.log('UrbanCore - Tienda Online cargada correctamente');
console.log(`${productsData.length} productos disponibles`);
console.log('WhatsApp configurado para:', config.whatsappNumber);
