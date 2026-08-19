<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aura Noir | Descubre otra forma de disfrutar</title>
    <meta name="description" content="Descubre nuestra exclusiva colección de bienestar íntimo. Sensualidad, elegancia y discreción garantizada.">
    
    <!-- Fuentes: Playfair Display (Lujo) y Montserrat (Modernidad) -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <!-- Iconos FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Vinculación del CSS externo -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Verificación de Edad -->
    <div id="age-gate">
        <div class="age-content">
            <h2 class="logo-text">AURA NOIR</h2>
            <p>Este sitio contiene productos y colecciones destinadas exclusivamente a adultos.<br>Al ingresar, confirmas que tienes la edad legal en tu jurisdicción.</p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button class="btn btn-solid" onclick="closeAgeGate()">Soy mayor de edad</button>
                <button class="btn" onclick="window.location.href='https://google.com'">Salir</button>
            </div>
        </div>
    </div>

    <!-- Header / Navbar -->
    <header id="navbar">
        <div class="logo-text">AURA NOIR</div>
        <nav class="nav-links">
            <a href="#">Colecciones</a>
            <a href="#">Para Parejas</a>
            <a href="#">Premium</a>
            <a href="#">Descubre</a>
        </nav>
        <div class="nav-icons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="logo-text">Descubre otra forma<br>de disfrutar.</h1>
            <p>El lujo de la intimidad. Diseños exclusivos para sensaciones inolvidables.</p>
            <a href="#productos" class="btn btn-solid">Explorar la Colección</a>
        </div>
    </section>

    <!-- Categorías -->
    <section class="categories reveal">
        <h2 class="section-title">Nuestros Universos</h2>
        <div class="grid-cats">
            <div class="cat-card">
                <img src="https://images.unsplash.com/photo-1588636737562-b7e289bf5fc9?q=80&w=800&auto=format&fit=crop" alt="Lencería">
                <div class="cat-info">
                    <h3 class="logo-text">Lencería Noir</h3>
                    <p style="color: var(--accent-gold); font-size: 0.9rem; margin-top: 5px;">Explorar <i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
            <div class="cat-card">
                <img src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=800&auto=format&fit=crop" alt="Bienestar">
                <div class="cat-info">
                    <h3 class="logo-text">Bienestar Íntimo</h3>
                    <p style="color: var(--accent-gold); font-size: 0.9rem; margin-top: 5px;">Explorar <i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
            <div class="cat-card">
                <img src="https://images.unsplash.com/photo-1596766736467-33f78a2f4ab7?q=80&w=800&auto=format&fit=crop" alt="Parejas">
                <div class="cat-info">
                    <h3 class="logo-text">Para Parejas</h3>
                    <p style="color: var(--accent-gold); font-size: 0.9rem; margin-top: 5px;">Explorar <i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Productos Destacados -->
    <section id="productos" class="products reveal">
        <h2 class="section-title">Piezas de Deseo</h2>
        <div class="product-grid">
            
            <!-- Producto 1 -->
            <div class="product-card">
                <div class="img-container">
                    <span class="badge">Más Vendido</span>
                    <div class="fav-btn"><i class="fa-regular fa-heart"></i></div>
                    <img src="https://images.unsplash.com/photo-1615397323602-0e9e4f3050c2?q=80&w=600&auto=format&fit=crop" alt="Lumina Massager" class="img-main">
                    <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=600&auto=format&fit=crop" alt="Lumina Detalles" class="img-hover">
                </div>
                <div class="product-info">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        <span style="color: var(--text-muted); margin-left: 5px;">(128)</span>
                    </div>
                    <h4>Lumina Sonic Elegance</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px;">Estimulador sónico recubierto en silicona premium.</p>
                    <span class="price">$145.00</span>
                    <br><br>
                    <button class="btn" style="width: 100%; padding: 10px;">Ver Producto</button>
                </div>
            </div>

            <!-- Producto 2 -->
            <div class="product-card">
                <div class="img-container">
                    <span class="badge" style="background: var(--accent-gold); color: #000;">Nuevo</span>
                    <div class="fav-btn"><i class="fa-regular fa-heart"></i></div>
                    <img src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=600&auto=format&fit=crop" alt="Aceite Velvet" class="img-main">
                    <img src="https://images.unsplash.com/photo-1518085250293-b67ed1a88b56?q=80&w=600&auto=format&fit=crop" alt="Textura Aceite" class="img-hover">
                </div>
                <div class="product-info">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        <span style="color: var(--text-muted); margin-left: 5px;">(84)</span>
                    </div>
                    <h4>Elixir N° 5 - Seda Líquida</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px;">Lubricante híbrido con destellos dorados.</p>
                    <span class="price">$45.00</span> <span class="old-price">$55.00</span>
                    <br><br>
                    <button class="btn" style="width: 100%; padding: 10px;">Ver Producto</button>
                </div>
            </div>

            <!-- Producto 3 -->
            <div class="product-card">
                <div class="img-container">
                    <div class="fav-btn"><i class="fa-regular fa-heart"></i></div>
                    <img src="https://images.unsplash.com/photo-1584305419992-0b2f567b40d6?q=80&w=600&auto=format&fit=crop" alt="Set Nocturne" class="img-main">
                    <img src="https://images.unsplash.com/photo-1616853549247-498c4a520a06?q=80&w=600&auto=format&fit=crop" alt="Detalle Encaje" class="img-hover">
                </div>
                <div class="product-info">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                        <span style="color: var(--text-muted); margin-left: 5px;">(42)</span>
                    </div>
                    <h4>Set Bralette Rouge</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px;">Encaje francés en tono borgoña profundo.</p>
                    <span class="price">$89.00</span>
                    <br><br>
                    <button class="btn" style="width: 100%; padding: 10px;">Ver Producto</button>
                </div>
            </div>

            <!-- Producto 4 -->
            <div class="product-card">
                <div class="img-container">
                    <div class="fav-btn"><i class="fa-regular fa-heart"></i></div>
                    <img src="https://images.unsplash.com/photo-1599690925059-3fb62e08e8cb?q=80&w=600&auto=format&fit=crop" alt="Vibrador" class="img-main">
                    <img src="https://images.unsplash.com/photo-1613904985222-0d534430bdbd?q=80&w=600&auto=format&fit=crop" alt="Detalle" class="img-hover">
                </div>
                <div class="product-info">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        <span style="color: var(--text-muted); margin-left: 5px;">(210)</span>
                    </div>
                    <h4>Ébano Dual Vibe</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px;">Diseñado ergonómicamente para el placer en pareja.</p>
                    <span class="price">$175.00</span>
                    <br><br>
                    <button class="btn" style="width: 100%; padding: 10px;">Ver Producto</button>
                </div>
            </div>

        </div>
    </section>

    <!-- Confianza y Discreción -->
    <section class="trust reveal">
        <div class="trust-item">
            <i class="fa-solid fa-box-open"></i>
            <h4>Discreción Total</h4>
            <p>Empaque sin logos, nombres ni descripciones del contenido.</p>
        </div>
        <div class="trust-item">
            <i class="fa-solid fa-shield-halved"></i>
            <h4>Pago Seguro</h4>
            <p>Transacciones cifradas y facturación anónima en tus estados de cuenta.</p>
        </div>
        <div class="trust-item">
            <i class="fa-solid fa-gem"></i>
            <h4>Calidad Premium</h4>
            <p>Materiales seguros para el cuerpo, silicona de grado médico y texturas sedosas.</p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h2 class="logo-text" style="font-size: 1.5rem; color: #fff;">AURA NOIR</h2>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 15px;">Redefiniendo el placer a través de la elegancia y el diseño de alta gama.</p>
            </div>
            <div class="footer-col">
                <h5>Colecciones</h5>
                <ul>
                    <li><a href="#">Para Ella</a></li>
                    <li><a href="#">Para Él</a></li>
                    <li><a href="#">Para Parejas</a></li>
                    <li><a href="#">Cuidado Íntimo</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>Atención al Cliente</h5>
                <ul>
                    <li><a href="#">Envíos Discretos</a></li>
                    <li><a href="#">Devoluciones</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>Síguenos</h5>
                <div style="display: flex; gap: 15px; font-size: 1.5rem;">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="disclaimer">
            <p>&copy; <?php echo date("Y"); ?> Aura Noir. Todos los derechos reservados. Sitio exclusivo para mayores de 18 años.</p>
        </div>
    </footer>

    <!-- Vinculación del JS externo -->
    <script src="script.js"></script>
</body>
</html>
