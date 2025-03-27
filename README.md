<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CATALAGO BIA HONDURAS</title>
    <style>
        /* Reset de estilo básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7fc;
            color: #333;
            transition: background-color 0.3s;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        h1, h2 {
            font-weight: 600;
            color: #333;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            flex: 1;
        }

        .category-list, .line-list, .product-list {
            display: none;
        }

        .active {
            display: block;
        }

        .category, .line, .product {
            display: inline-block;
            margin: 20px;
            width: 250px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        .category:hover, .line:hover, .product:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .category img, .line img, .product img {
            width: 100%;
            border-radius: 10px;
            height: 200px;
            object-fit: cover;
        }

        .category p, .line p, .product p {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 500;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #218838;
        }

        footer {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            text-align: center;
            padding: 20px 0;
            position: relative;
            width: 100%;
            bottom: 0;
            margin-top: auto;
        }

        footer a {
            color: #28a745;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Imagen de fondo transparente */
        .background-image {
            background: url('https://www.laprensa.hn/binrepository/1200x900/0c0/0d0/none/11004/QHLW/proceso1_6358129_20231227140757.jpg') no-repeat center center fixed;
            background-size: cover;
            opacity: 0.1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        /* Botón Volver siempre centrado */
        .center-button {
            position: fixed;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%);
            font-size: 18px;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s;
        }

        .center-button:hover {
            background-color: #0056b3;
        }

        /* Animación de desvanecimiento */
        .fade-in {
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Efecto para el scroll */
        .scroll-down {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            color: #28a745;
            cursor: pointer;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }
    </style>
</head>
<body>

    <!-- Imagen de fondo transparente -->
    <div class="background-image"></div>

    <!-- Página Principal -->
    <div id="main-page" class="container category-list active fade-in">
        <h1>CATALAGO BIA HONDURAS</h1>
        <p class="intro-text">Selecciona una marca para ver los productos disponibles.</p>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClOURjwytaiaGW7w39xjEPkxI3hEeNJIzXg&s" alt="Café Maya">
                <p><strong>Café Maya</strong></p>
            </a>
        </div>
      
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-INDIO')">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE9x1ddUWKxJzYxbfz4CIzL-MrvhZ-XWi008UsBmD8jzKnpcpsYxQkZYSp_ycBOkGbZw&usqp=CAU" alt="Café Maya">
                <p><strong>Café Indio</strong></p>
            </a>
        </div>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9exGfGMT8Nx7t0r02CTDSaZm7hoWAfGfu5A&s" alt="Café Maya">
                <p><strong>Confite Venus</strong></p>
            </a>
        </div>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51iNNP8GuR2dUrfSt6gJCBoNHvmFeR8ow_Q&s" alt="Café Maya">
                <p><strong>Malvadisco Guandy</strong></p>
            </a>
        </div>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://gruponutresa.com/wp-content/uploads/2022/08/servicios-.png" alt="Café Maya">
                <p><strong>Grupo Nutresa</strong></p>
            </a>
        </div>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTyuzy5ywDBebpSz9mey-AhosMdsS0QmXXobhC9-mOsF4e2hnqsEz-FWhn_rOEAUZKu0&usqp=CAU" alt="Café Maya">
                <p><strong>Best</strong></p>
            </a>
        </div>
        <div class="category">
            <a href="javascript:void(0)" onclick="showPage('cafe-maya')">
                <img src="https://www.intedya.com/logos/415183Logoversioninsitucional-02.jpg" alt="Café Maya">
                <p><strong>MOLSA</strong></p>
            </a>
        </div>
  
        <footer>
            <p>© 2025 BIA HONDURAS. Todos los derechos reservados.</p>
            <p>
                <a href="#">Política de Privacidad</a> |
                <a href="#">Términos y Condiciones</a>
            </p>
        </footer>
        <div class="scroll-down">↓</div>
    </div>

    <!-- Página de Café Maya -->
    <style>
        .line {
            margin-bottom: 20px;
            text-align: center;
            position: relative;
        }
    
        .line img {
            width: 100%;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
            cursor: pointer;
            border: 3px solid transparent; /* Marco transparente por defecto */
            border-radius: 10px;
        }
    
        .line img:hover {
            transform: scale(1.05); /* Efecto de ampliación */
            box-shadow: 0 10px 30px rgba(0, 0, 255, 0.5); /* Sombra azul */
            border: 5px solid #4682B4; /* Marco azul */
        }
    
        .line p {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-top: 10px;
        }
    
        .line a {
            text-decoration: none;
        }
    
        .center-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4682B4;
            color: white;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
    
        .center-button:hover {
            background-color: #3b6a99;
        }
    
        .fade-in {
            animation: fadeIn 1s ease-in;
        }
    
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    </style>
    
    <div id="cafe-maya" class="container line-list fade-in">
        <h2>Líneas de Café Maya</h2>
        <div class="line">
            <a href="javascript:void(0)" onclick="showPage('torrefacto')">
                <img src="https://walmarthn.vtexassets.com/arquivos/ids/385992-800-450?v=638458762308370000&width=800&height=450&aspect=true" alt="Torrefacto">
                <p><strong>Torrefacto</strong></p>
            </a>
        </div>
        <div class="line">
            <a href="javascript:void(0)" onclick="showPage('puro')">
                <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Puro">
                <p><strong>Puro</strong></p>
            </a>
        </div>
        <div class="line">
            <a href="javascript:void(0)" onclick="showPage('productos')">
                <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/09/cafe-maya-cremora-6.jpg" alt="Productos">
                <p><strong>Productos</strong></p>
            </a>
        </div>
        <span class="center-button" onclick="showPage('main-page')">⬅ Volver</span>
    </div>
    
    <script>
        function showPage(page) {
            console.log("Cargando la página: " + page);
            // Aquí puedes agregar el código para cambiar de página
        }
    </script>
    

    <!-- Página de Torrefacto maya -->
    <div id="torrefacto" class="container product-list fade-in">
        <h2>Productos de Torrefacto</h2>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/176653-800-450?v=637674357752530000&width=800&height=450&aspect=true" alt="Café Maya 432g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya 432g</strong><br> CB: 7421830700015 <br> 1 fardo x 60un x 16 bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/176653-800-450?v=637674357752530000&width=800&height=450&aspect=true" alt="Café Maya 378g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya 378g</strong><br> CB: 0742183070130 <br> 1 fardo x 60un x 14 bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/176653-800-450?v=637674357752530000&width=800&height=450&aspect=true" alt="Café Maya 216g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya 216g</strong><br> CB: 7421830700343 <br> 1 fardo x 60un x 8 bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/176653-800-450?v=637674357752530000&width=800&height=450&aspect=true" alt="Café Maya 6oz"onclick="toggleImageSize(this)">
            <p><strong>Café Maya 6oz</strong><br> CB: 0742183070021 <br> 1 caja de 30un</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/385992-800-450?v=638458762308370000&width=800&height=450&aspect=true" alt="Café Maya Selecto 378g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya Selecto 378g</strong><br> CB: 7421830700602 <br> 1 caja x 30un x 16 bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/385992-800-450?v=638458762308370000&width=800&height=450&aspect=true" alt="Café Maya Selecto 6oz"onclick="toggleImageSize(this)">
            <p><strong>Café Maya Selecto 6oz</strong><br> CB: 7421830700510 <br> 1 caja x 30un</p>
        </div>
        <div class="product">
            <img src="https://tiendaenlinea.supermercadoelexito.hn/web/image/product.template/15634/image_1024?unique=b12f3fc" alt="Café Medalla 432g"onclick="toggleImageSize(this)">
            <p><strong>Café Medalla 432g</strong><br> CB: 7421830700091 <br> 1 fardo x 60un x 16 bol</p>
        </div>
        <div class="product">
            <img src="https://tiendaenlinea.supermercadoelexito.hn/web/image/product.template/15634/image_1024?unique=b12f3fc" alt="Café Medalla 378g"onclick="toggleImageSize(this)">
            <p><strong>Café Medalla 378g</strong><br> CB: 0742183070131 <br> 1 fardo x 60un x 14 bol</p>
        </div>
        <div class="product">
            <img src="https://tiendaenlinea.supermercadoelexito.hn/web/image/product.template/15634/image_1024?unique=b12f3fc" alt="Café Medalla 216g"onclick="toggleImageSize(this)">
            <p><strong>Café Medalla 216g</strong><br> CB: 7421830700565 <br> 1 fardo x 60un x 8 bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/248717/Caf-Campeno-Torrefacto-Molido-453Gramos-1-9154.jpg?v=637965417905400000" alt="Café Campeño 432g"onclick="toggleImageSize(this)">
            <p><strong>café Campeño 432g</strong><br> 1 fardo x 60un x 16bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/248717/Caf-Campeno-Torrefacto-Molido-453Gramos-1-9154.jpg?v=637965417905400000" alt="Café Casino 400g"onclick="toggleImageSize(this)">
            <p><strong>Café Casino 400g</strong><br> 1 caja x 60un x 16 bol</p>
        </div>
        <span class="center-button" onclick="showPage('cafe-maya')">⬅ Volver</span>
    </div>

    <!-- Página de Puro  maya-->
    <div id="puro" class="container product-list fade-in">
        <h2>Productos de Puro</h2>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Café Puro Maya 340g"onclick="toggleImageSize(this)">
            <p><strong>Café Puro Maya 340g</strong><br> CB: 7421830700312 <br> 1 fardo x 16un x 12oz</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Coffe Club Molido 340g"onclick="toggleImageSize(this)">
            <p><strong>Coffe Club Molido 340g</strong><br> CB: 7421830701357 <br> 1 fardo x 16un x 12oz</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Coffe Club Grano 340g"onclick="toggleImageSize(this)">
            <p><strong>Coffe Club Grano 340g</strong><br> CB: 7421830701364 <br> 1 fardo x 16un x 12oz</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Café Maya Palo 444g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya Palo 444g</strong><br> CB: 7421830703306 <br> 1 fardo x 30un</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/172064-800-450?v=637666371760930000&width=800&height=450&aspect=true" alt="Café Maya Palo 190g"onclick="toggleImageSize(this)">
            <p><strong>Café Maya Palo 190g</strong><br> CB: (sin código) <br> 1 caja x 30un</p>
        </div>
        <span class="center-button" onclick="showPage('cafe-maya')">⬅ Volver</span>
    </div>

    <!-- Página de Productos maya -->
    <div id="productos" class="container product-list fade-in">
        <h2>Productos de Café Instantáneo</h2>
        <div class="product">
            <img src="https://www.lamonjaras.com/admin/storage/products/cafe-maya-instantaneo-16-scaled.jpg" alt="Café Instantáneo"onclick="toggleImageSize(this)">
            <p><strong>Café Instantáneo</strong><br> CB: 7421830703580 <br> 1 caja x 20 sobres de 1.8g</p>
        </div>
        <div class="product">
            <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/09/cafe-maya-cremora-6.jpg" alt="Café Instantáneo"onclick="toggleImageSize(this)">
            <p><strong>Cremora para Cafe Maya </strong><br> CB: 7421830703016 <br> 1 caja x 12 botes x 170g</p>
        </div>
        <span class="center-button" onclick="showPage('cafe-maya')">⬅ Volver</span>
    </div>

    <script>
        function showPage(pageId) {
            var pages = document.querySelectorAll('.category-list, .line-list, .product-list');
            pages.forEach(function(page) {
                page.classList.remove('active');
            });

            var targetPage = document.getElementById(pageId);
            targetPage.classList.add('active');
        }
    </script>
      <!-- Página de INDIO_torrefacto -->
      <div id="INDIO_PRODUCTOS_TORREFACTO" class="container product-list fade-in">
        <h2>Productos de Torrefacto</h2>
        <div class="product">
            <img src="https://m.media-amazon.com/images/I/91UAqwmDhcL.jpg" alt="Café Puro Maya 340g" onclick="toggleImageSize(this)">
            <p><strong>Café Indio 432g</strong><br> CB: 7421800110004 <br> 1 fardo x 60bol</p>
        </div>
        <div class="product">
            <img src="https://m.media-amazon.com/images/I/91UAqwmDhcL.jpg" alt="Coffe Club Molido 340g"onclick="toggleImageSize(this)">
            <p><strong>café Indio 378g</strong><br> CB: 0742180011002 <br> 1 fardo x 60bol </p>
        </div>
        <div class="product">
            <img src="https://m.media-amazon.com/images/I/91UAqwmDhcL.jpg" alt="Coffe Club Grano 340g"onclick="toggleImageSize(this)">
            <p><strong>café Indio 216g </strong><br> CB: 7421800110035 <br> 1 fardo x 60un x 16bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/169882/Caf-Oro-226-Gr-1-9140.jpg?v=637662813866500000" alt="Café Maya Palo 444g"onclick="toggleImageSize(this)">
            <p><strong>Cafe Oro 432g </strong><br> CB: 7421830703306 <br> 1 fardo x 30un</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/169882/Caf-Oro-226-Gr-1-9140.jpg?v=637662813866500000" alt="Café Maya Palo 190g"onclick="toggleImageSize(this)">
            <p><strong>café Oro 378g</strong><br> CB: 0742180011006 <br> 1 fardo x 60un x 8bol</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/169882/Caf-Oro-226-Gr-1-9140.jpg?v=637662813866500000" alt="Coffe Club Molido 340g"onclick="toggleImageSize(this)">
            <p><strong>café Indio 378g</strong><br> CB: 0742180011002 <br> 1 fardo x 60bol </p>
        </div>
        <div class="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnEkELdpJs4n-Ex5RMLIvwxXiV55viqD8nA&s" alt="Coffe Club Grano 340g"onclick="toggleImageSize(this)">
            <p><strong>café Indio 216g </strong><br> CB: 7421800110035 <br> 1 fardo x 60un x 16bol</p>
        </div>
        <div class="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE3DAW6HX-KB0OCgpjstK9VWpB1ACLEOMuQ&s" alt="Café Maya Palo 444g"onclick="toggleImageSize(this)">
            <p><strong>café Oro 6oz </strong><br> CB: 7421800100043 <br> 1 caja de 30un </p>
        </div>
        <div class="product">
            <img src="https://lacoloniaqa.vteximg.com.br/arquivos/ids/164440-650-500/Desayuno-Cafe-Cafes-Molidos_7421800200019_1.jpg?v=636984615090070000" alt="Café Maya Palo 190g"onclick="toggleImageSize(this)">
            <p><strong>café Rey 432g</strong><br> CB: 7421800210001 <br>1 fardo x 60un</p>
        </div>
        <div class="product">
            <img src="https://lacoloniaqa.vteximg.com.br/arquivos/ids/164440-650-500/Desayuno-Cafe-Cafes-Molidos_7421800200019_1.jpg?v=636984615090070000" alt="Coffe Club Grano 340g"onclick="toggleImageSize(this)">
            <p><strong>café Rey 378g </strong><br> CB: 0742180010605 <br> 1 fardo x 60un</p>
        </div>
        <div class="product">
            <img src="https://bodegahilvia.com/sistema/docs/products/28620200809132022.JPG" alt="Café Maya Palo 444g"onclick="toggleImageSize(this)">
            <p><strong>café Mi Delicia 432g</strong><br> CB:  <br> 1 fardo x 60un </p>
        </div>
        <script>
            function toggleImageSize(img) {
                img.classList.toggle('enlarged');
            }
        </script>
        <span class="center-button" onclick="showPage('cafe-INDIO')">⬅ Volver</span>
    </div>

    <!-- Página de Café INDIO -->
    <div id="cafe-INDIO" class="container line-list fade-in">
        <h2>Líneas de Café INDIO</h2>
        <div class="line">
            <a href="javascript:void(0)" onclick="showPage('INDIO_PRODUCTOS_TORREFACTO')">
                <img src="https://m.media-amazon.com/images/I/91BzQVXtHPL.jpg" alt="Torrefacto">
                <p><strong>Torrefacto</strong></p>
            </a>
        </div>
        <div class="line">
            <a href="javascript:void(0)" onclick="showPage('puro_oro')">
                <img src="https://walmarthn.vtexassets.com/arquivos/ids/169881-800-450?v=637662813861830000&width=800&height=450&aspect=true" alt="Puro">
                <p><strong>Puro</strong></p>
            </a>
        </div>

        <span class="center-button" onclick="showPage('main-page')">⬅ Volver</span>
    </div>
    <!-- Página de Puro oro -->
    <style>
        .product img {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
            cursor: pointer;
            border: 2px solid transparent;
        }
        .product img.expanded {
            transform: scale(1.8); /* Aumento de la ampliación */
            box-shadow: 0 10px 30px rgba(70, 130, 180, 0.7); /* Sombra azul intermedio */
            border: 5px solid #4682B4; /* Borde azul intermedio */
            opacity: 0.9;
        }
    </style>
    
    <script>
        function toggleImageSize(img) {
            img.classList.toggle("expanded");
        }
    </script>
    
    <div id="puro_oro" class="container product-list fade-in">
        <h2>Productos de Puro Oro</h2>
        <div class="product">
            <img src="https://lacolonia.vtexassets.com/arquivos/ids/223805-800-800?v=637352996744230000&width=800&height=800&aspect=true" alt="Café Puro Maya 340g" onclick="toggleImageSize(this)">
            <p><strong>En Grano Tostado Tipo Espresso</strong><br> CB: 7421800101019 <br> 1 caja x 12un x 12oz</p>
        </div>
        <div class="product">
            <img src="https://lacolonia.vtexassets.com/arquivos/ids/223805-800-800?v=637352996744230000&width=800&height=800&aspect=true" alt="Coffe Club Molido 340g" onclick="toggleImageSize(this)">
            <p><strong>En Grano Tostado Medio</strong><br> CB: 7421800101002<br> 1 caja x 12un x 12oz</p>
        </div>
        <div class="product">
            <img src="https://lacolonia.vtexassets.com/arquivos/ids/201752-800-800?v=637141780745030000&width=800&height=800&aspect=true" alt="Coffe Club Grano 340g" onclick="toggleImageSize(this)">
            <p><strong>Molido Tostado Tipo Percolador</strong><br> CB: <br> 1 caja x 16un x 340g</p>
        </div>
        <div class="product">
            <img src="https://lacolonia.vtexassets.com/arquivos/ids/201752-800-800?v=637141780745030000&width=800&height=800&aspect=true" alt="Café Maya Palo 444g" onclick="toggleImageSize(this)">
            <p><strong>Molido Tostado Tipo Espresso</strong><br> CB: <br> 1 caja x 16un x 340g</p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/169881-800-450?v=637662813861830000&width=800&height=450&aspect=true" alt="Café Maya Palo 190g" onclick="toggleImageSize(this)">
            <p><strong>Molido Tostado Medio </strong><br> CB: (sin código) <br> 1 caja x 16un x 340g </p>
        </div>
        <div class="product">
            <img src="https://walmarthn.vtexassets.com/arquivos/ids/169881-800-450?v=637662813861830000&width=800&height=450&aspect=true" alt="Café Maya Palo 190g" onclick="toggleImageSize(this)">
            <p><strong>Molido Tipo árabe </strong><br> CB: (sin código) <br> 1 caja x16un x 340g</p>
        </div>
        <span class="center-button" onclick="showPage('cafe-INDIO')">⬅ Volver</span>
    </div>
    
    
    
    
    



</body>
</html>
