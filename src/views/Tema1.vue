<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1  Probabilidad y estadística
      
    p(data-aos="fade-down") La estadística forma parte del comportamiento histórico de todos los fenómenos naturales que ocurren en el mundo:
    .row.justify-content-start.align-items-center         
      .col-lg-4.blue-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Comparación de media, mediana y moda]

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-4.imgs-flotantes.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img2.jpg', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/box.svg', alt='Imagen decorativa')              
      .col-lg-8
        p(data-aos="fade-down") La probabilidad y la estadística son las ramas de las matemáticas relacionadas con las leyes que gobiernan los eventos aleatorios, incluida la recopilación, análisis, interpretación y visualización de datos numéricos. La probabilidad tiene su origen en el estudio del juego y los seguros en el siglo XVII, y ahora es una herramienta indispensable de las ciencias sociales y naturales.
        .row.justify-content-start.align-items-center.ps-3         
          .col-lg-3.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Se puede decir que…]        
        p(data-aos="fade-down").mt-3 las estadísticas tienen su origen en los censos realizados hace miles de años. Sin embargo, como disciplina científica distinta, se desarrolló a principios del siglo XIX como el estudio de poblaciones, economías y acciones morales y, más tarde en ese siglo, como herramienta matemática para analizar tales números.

    .row.justify-content-start.align-items-center         
      .col-lg-6.blue-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Moda, media, mediana y desviación típica, estudio de variables continuas]

    p(data-aos="fade-down").mt-5 La media, la mediana y la moda son tres tipos de “promedios”. Hay muchos “promedios” en estadística, pero estos son los tres más comunes y, ciertamente, son los tres más utilizados al momento de llevar a cabo aplicaciones y procesos estadísticos.

    .row.justify-content-center.align-items-center.mt-5         
      .col-lg-8.col-color1.px-0
        ol.lista-ol--cuadro(data-aos="fade-left")
          li 
            .lista-ol--cuadro__vineta
              span a
            p.mb-0.mt-1 #[b Medida]
        .row.justify-content-center.align-items-center         
          .col-11
            p(data-aos="fade-down") La media resume un conjunto de datos completo con un solo número que representa el punto central de los datos o el valor típico. También se conoce como promedio aritmético y es una de varias medidas de tendencia central.            
            .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
              p(data-aos="fade-down").mb-0 Encontrar la media es muy sencillo. Simplemente sume todos los valores y divídalos por el número de observaciones; la fórmula se indica a continuación. 
            img.img-a.img-t.pb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')
            p(data-aos="fade-down") Por ejemplo, si las estaturas de cinco personas son 48, 51, 52, 54 y 56 pulgadas, su altura promedio es de 52,2 pulgadas.
            p(data-aos="fade-down").text-center.pb-4 48 + 51 + 52 + 54 + 56/5 = 52,2
      .col-lg-4.my-2           
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.png', alt='')

    .row.justify-content-start.align-items-center.ps-3.mt-5         
      .col-lg-2.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Idealmente…]  

    p(data-aos="fade-down").mt-5 La media indica la región donde caen la mayoría de los valores en una distribución. Los estadísticos se refieren a ella como la ubicación central de una distribución. Puede pensar en ello como la tendencia de los datos a agruparse en torno a un valor medio. Sin embargo, la media no siempre encuentra el centro de los datos. Es sensible a datos sesgados y valores extremos. Por ejemplo, cuando los datos están sesgados, pueden fallar.

    .row.justify-content-start.align-items-center.mt-5         
      .col-lg-5.col-color1.px-0
        ol.lista-ol--cuadro(data-aos="fade-left")
          li 
            .lista-ol--cuadro__vineta
              span b
            p.mb-0.mt-1 #[b Tipos de medias]

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.png', alt='')
      .col-lg-7
        SlyderA
          .row.justify-content-center.align-items-center
            .col-10.bg-slyder.py-3.px-4  
              .row.justify-content-start.align-items-center.ps-3         
                .col-lg-4.green-p.p-3(data-aos="fade-down")
                  p(data-aos="fade-down").mb-0.text-white #[b Medida aritmetica]
              p(data-aos="fade-down").my-4.ps-1 La media aritmética (o simplemente media) de una lista de números, es la suma de todos los números divididos por el número de números. De manera similar, la media de una muestra x1, x2, …, xn, generalmente denotado por  es la suma de los valores muestreados dividida por el número de elementos de la muestra:
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img6.svg', alt='')
              p(data-aos="fade-down").my-4 Por ejemplo, la media aritmética de cinco valores: 4, 36, 45, 50, 75 es:
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img7.svg', alt='')  

          .row.justify-content-center.align-items-center
            .col-10.bg-slyder.py-3.px-4  
              .row.justify-content-start.align-items-center.ps-3         
                .col-lg-5.green-p.p-3(data-aos="fade-down")
                  p(data-aos="fade-down").mb-0.text-white #[b Media Geométrica (GM)]
              p(data-aos="fade-down").my-4.ps-1 La media geométrica es una media útil para conjuntos de números positivos, que se interpretan según su producto (como es el caso de las tasas de crecimiento) y no su suma (como es el caso de la media aritmética):
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')
              p(data-aos="fade-down").my-4 Por ejemplo, la media geométrica de cinco valores: 4, 36, 45, 50, 75 es:
              img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img9.svg', alt='')     

          .row.justify-content-center.align-items-center
            .col-10.bg-slyder.py-3.px-4  
              .row.justify-content-start.align-items-center.ps-3         
                .col-lg-5.green-p.p-3(data-aos="fade-down")
                  p(data-aos="fade-down").mb-0.text-white #[b Media Armónica (HM)]
              p(data-aos="fade-down").my-4.ps-1 La media armónica es un promedio que es útil para conjuntos de números que se definen en relación con alguna unidad, como en el caso de la velocidad (es decir, distancia por unidad de tiempo):
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8_1.svg', alt='')
              p(data-aos="fade-down").my-4 Por ejemplo, la media armónica de los cinco valores: 4, 36, 45, 50, 75 es:
              img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img9_1.svg', alt='')  

          .row.justify-content-center.align-items-center
            .col-10.bg-slyder.py-3.px-4  
              .row.justify-content-start.align-items-center.ps-3         
                .col-lg-6.green-p.p-3(data-aos="fade-down")
                  p(data-aos="fade-down").mb-0.text-white #[b Relación entre AM, GM y HM]
              p(data-aos="fade-down").my-4.ps-1 AM, GM y HM satisfacen estas desigualdades:
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.svg', alt='')
              p(data-aos="fade-down").my-4 La igualdad se mantiene si todos los elementos de la muestra dada son iguales.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Moda, media, mediana y desviación típica, estudio de variables continuas

    p(data-aos="fade-down") A continuación, se definirá la moda, media, mediana y desviación típica, así como el estudio de variables continuas.

    .row.justify-content-evenly.align-items-stretch.mt-5           
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
        a(@click="modal1 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img11.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Mediana]
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
        a(@click="modal2 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Moda]
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-down")
        a.indicador__container(@click="modal3 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img13.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Comparación de media, mediana y moda]
          .indicador--click(v-if="mostrarIndicador")
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")
        a(@click="modal4 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Varianza y desviación típica o estándariana]
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")
        a(@click="modal5 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.svg', alt='')
          p.text-center.mb-0.mt-2 #[b  Estudio de variables continuas] 

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-2.bg-modal-p.p-3
              h3.mb-0.text-white.text-center #[b Mediana]
          p.my-5 La mediana es la observación intermedia en un conjunto de datos. Para contextualizar qué significa, se calcula la mediana de un conjunto de datos de muestra sobre el peso infantil, así:

          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')
          p.my-5 En el siguiente conjunto de datos, ¿cuál es la observación intermedia? Bueno, antes que pueda resolver esto, tenemos que ordenar correctamente las observaciones de una manera lógica para que tengan sentido. Los ordenaremos de menor a mayor, como se muestra a continuación:

          .row.justify-content-center.align-items-center.mt-5           
            .col-lg-4.imgs-flotantes1.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img17.jpg', alt='')
              img.img-flotante1(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
            .col-lg-8
              img.img-a.img-t(src='@/assets/curso/temas/img18.svg', alt='')
              .cajon.color-primario.p-4.mt-5
                p.mb-0 #[b Ahora que nuestros datos están ordenados correctamente, podemos encontrar la observación intermedia.]

          .row.justify-content-center.align-items-center.mt-5           
            .col-lg-7
              LineaTiempoD.color-acento-contenido
                .row.justify-content-center.align-items-center(numero="1" titulo="Número impar de observaciones")
                  .col-11
                    p En un conjunto de datos que tiene un número impar de observaciones, esto es muy fácil; es simplemente el número justo en el medio (el que tiene el mismo número de observaciones arriba y abajo). 
                    img.img-a.img-t.mb-3.mt-4(src='@/assets/curso/temas/img20.svg', alt='')
                    img.img-a.img-t(src='@/assets/curso/temas/img21.svg', alt='')

                .row.justify-content-center.align-items-center(numero="2" titulo="Número par de observaciones")
                  .col-11
                    p Sin embargo, en nuestro caso tenemos 12 observaciones, que es un número par. Esto significa que debemos tomar las dos observaciones del centro y promediarlas. En este caso, las dos observaciones en el medio son 42 y 49. Cuando tomamos el promedio de estos dos números (para hacer un promedio, sume los dos números (42 + 49 = 91) y divida ese número por la cuenta, que en este caso es 2), obtenemos 45,5. Entonces nuestra mediana es 45,5. 
                    img.img-a.img-t.mb-3.mt-4(src='@/assets/curso/temas/img22.svg', alt='')
                    img.img-a.img-t(src='@/assets/curso/temas/img23.svg', alt='')

                .row.justify-content-center.align-items-center(numero="3" titulo="Entonces, ¿qué significa la mediana?")
                  .col-11
                    p Bueno, al igual que la media, proporciona una medida útil del centro de nuestro conjunto de datos. Ahora sabemos que el peso medio de los niños de nuestro grupo es de 45,5. Pero también es útil comparar la mediana con la media. 45,5 es obviamente menor que la media, que fue 53,5. A menudo, la media y la mediana serán las mismas en un conjunto de datos, pero a veces son diferentes, como en nuestro caso. Cuando la media y la mediana son iguales, se sabe que el conjunto de datos está “distribuido normalmente”. Cuando la media y la mediana son diferentes, se sabe que los datos están “sesgados” de alguna manera.

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img24.svg', alt='')

                .row.justify-content-center.align-items-center(numero="4" titulo="¿Qué se quiere decir con sesgado?")
                  .col-11
                    p Bueno, a diferencia de la media, que era un cálculo matemático que usaba todas las observaciones del conjunto de datos, la mediana ignora lo que dicen los números y solo usa la observación del medio. ¿Cuál es la correcta? Ambos lo son. Ninguno es necesariamente mejor que el otro. Entonces, ¿por qué usar una mediana? Bueno, hay ciertos tipos de datos en los que le preocupa el sesgo que  es cuando la media sube o baja por encima de la mediana debido a valores muy altos o muy bajos. 
 
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img25.svg', alt='')
            .col-lg-5
              img.img-a.img-t(src='@/assets/curso/temas/img19.svg', alt='')

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-1.bg-modal-p1.p-3
              h3.mb-0.text-center #[b Moda]
          p.my-5 Es el valor que aparece con mayor frecuencia en un conjunto de valores de datos. Si X es una variable aleatoria discreta, la moda es el valor x (es decir, X = x) en el que la función de masa de probabilidad toma su valor máximo. En otras palabras, es el valor que es más probable que se muestree. De esta manera:
          .bg-gradi.px-5
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/img23.jpg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Al igual que la media y la mediana estadísticas, la moda es una forma de expresar, en un número (normalmente) único, información importante sobre una variable aleatoria o una población. El valor numérico de la moda es el mismo que el de la media y la mediana en una distribución normal y puede ser muy diferente en distribuciones muy asimétricas. La moda no es necesariamente única para una distribución discreta dada, ya que la función de masa de probabilidad puede tomar el mismo valor máximo en varios puntos x1 x2, etc. El caso más extremo ocurre en distribuciones uniformes, donde todos los valores ocurren con la misma frecuencia.
            .tarjeta.tarjeta--azul.bg-slyder1.p-4.mt-5                
              SlyderA
                .row.justify-content-center.align-items-center
                  .col-lg-5.imgs-flotantes2                        
                    .color-fondo-text.bg-color
                      .color-fondo-text__texto        
                        p Cuando la función de densidad de probabilidad de una distribución continua tiene múltiples máximos locales, es común referirse a todos los máximos locales como modos de la distribución. Esta distribución continua se denomina multimodal (en contraposición a unimodal). Un modo de una distribución de probabilidad continua se considera a menudo como cualquier valor x en el que su función de densidad de probabilidad tiene un valor máximo localmente, por lo que cualquier pico es un modo.
                      img.img-flotante2.d-none.d-lg-block.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                         
                  .col-lg-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')

                .row.justify-content-center.align-items-center
                  .col-lg-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26_1.svg', alt='')                  
                  .col-lg-5.imgs-flotantes2                       
                    .color-fondo-text2.bg-color
                      .color-fondo-text2__texto        
                        p En distribuciones unimodales simétricas, como la distribución normal, la media (si está definida), la mediana y la moda coinciden. Para las muestras, si se sabe que se extraen de una distribución unimodal simétrica, la media de la muestra se puede utilizar como una estimación de la moda poblacional.
                      img.img-flotante2.d-none.d-lg-block.mt-3(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
                .row.justify-content-center.align-items-center
                  .col-lg-5.imgs-flotantes2                        
                    .color-fondo-text3.bg-color
                      .color-fondo-text3__texto        
                        p Moda de una muestra: la moda de una muestra es el elemento que aparece con mayor frecuencia en la colección. Por ejemplo, la moda de la muestra [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17] es 6. Dada la lista de datos [1, 1, 2, 4, 4] su modo no es único. En tal caso, se dice que un conjunto de datos es bimodal, mientras que un conjunto con más de dos modos puede describirse como multimodal.
                      img.img-flotante2.d-none.d-lg-block.mt-4(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
                  .col-lg-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26_2.svg', alt='')

                .row.justify-content-center.align-items-center
                  .col-lg-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26_3.svg', alt='')                  
                  .col-lg-5.imgs-flotantes2                        
                    .color-fondo-text4.bg-color
                      .color-fondo-text4__texto        
                        p Para una muestra de una distribución continua, como [0.935 ..., 1.211 ..., 2.430 ..., 3.668 ..., 3.874 ...], el concepto es inutilizable en su forma bruta, ya que no hay dos valores será exactamente el mismo, por lo que cada valor ocurrirá exactamente una vez. Para estimar la moda de la distribución subyacente, la práctica habitual es discretizar los datos asignando valores de frecuencia a intervalos de igual distancia, como para hacer un histograma, reemplazando efectivamente los valores por los puntos medios de los intervalos a los que están asignados. El modo es, entonces, el valor en el que el histograma alcanza su pico. 
                      img.img-flotante2.d-none.d-lg-block.mt-3(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                       

                .row.justify-content-center.align-items-center.pb-5
                  .col-lg-5.imgs-flotantes2                      
                    .color-fondo-text5.bg-color
                      .color-fondo-text5__texto        
                        p.mb-5 Para muestras pequeñas o medianas, el resultado de este procedimiento es sensible a la elección del ancho del intervalo si se elige demasiado estrecho o demasiado ancho; por lo general, se debe tener una fracción considerable de los datos concentrada en un número relativamente pequeño de intervalos (5 a 10), mientras que la fracción de los datos que quedan fuera de estos intervalos también es considerable. Un enfoque alternativo es la estimación de la densidad del núcleo, que esencialmente difumina las muestras puntuales para producir una estimación continua de la función de densidad de probabilidad que puede proporcionar una estimación del modo.
                      img.img-flotante2.d-none.d-lg-block.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')   
                  .col-lg-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26_4.svg', alt='')
                  
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p2.p-3
              h3.mb-0.text-center.text-white #[b Comparación de media, mediana y moda]
          p.mt-5 A diferencia de la media y la mediana, el concepto de moda también tiene sentido para los “datos nominales” (es decir, que no constan de valores numéricos en el caso de la media, ni siquiera de valores ordenados en el caso de la mediana). Por ejemplo, tomando una muestra de apellidos coreanos, uno podría encontrar que “Kim” aparece con más frecuencia que cualquier otro nombre. Entonces “Kim” sería la moda de la muestra. En cualquier sistema de votación donde una pluralidad determina la victoria, un único valor modal determinar al vencedor, mientras que un resultado multimodal requeriría algún procedimiento de desempate.

          img.img-a.img-t.mt-4(src='@/assets/curso/temas/img27.svg', alt='')

          .cajon.color-primario.p-4.mt-5
            p.mb-0 A diferencia de la mediana, el concepto de moda tiene sentido para cualquier variable aleatoria que asuma valores de un espacio vectorial, incluidos los números reales (un espacio vectorial unidimensional) y los enteros (que pueden considerarse incrustados en los reales). Por ejemplo, una distribución de puntos en el plano normalmente tendrá una media y una moda, pero el concepto de mediana no se aplica. La mediana tiene sentido cuando existe un orden lineal en los valores posibles. 

          .tabla-b.color-primario.mt-5.px-2
            .tabla-b__header
              h5.mb-0 Las generalizaciones del concepto de mediana a espacios de dimensiones superiores son la mediana geométrica y el punto central.
            table
              tr.bg-table.text-white.text-center.br-gray
                td #[b Tipo]
                td #[b Descripción]
                td #[b Ejemplo]
                td #[b Resultado]

              tr.bg-white
                th.br-gray Media Aritmética
                td.br-gray Suma de valores de un conjunto de datos dividida por el número de elementos o cantidad de números.
                td.br-gray (1 + 2 + 2 + 3 + 4 + 7 + 9) / 7
                td.br-gray 4

              tr
                th.br-gray Mediana
                td.br-gray Valor medio o central que separa las mitades menor y mayor de un conjunto de elementos numéricos
                td.br-gray 1, 2, 2, 3, 4, 7, 9
                td.br-gray 3

              tr.bg-white
                th.br-gray Moda
                td.br-gray Valor más frecuente en un conjunto de elementos numéricos.
                td.br-gray 1, 2, 2, 3, 4, 7, 9
                td.br-gray 2    

    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p1.p-3
              h3.mb-0.text-center #[b Varianza y desviación típica o estándar]                

          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img28.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La varianza es la expectativa de la desviación al cuadrado de una variable aleatoria de su media poblacional o muestral. La varianza es una medida de dispersión, lo que significa que es una medida de qué tan lejos se separa un conjunto de números de su valor promedio y se define de manera detallada así:

          .row.justify-content-start.align-items-center.mt-5     
            .col-lg-7 
              LineaTiempoD.color-acento-contenido
                .row(numero="1" titulo="Varianza y desviación típica o estándar")
                  .col-11
                    p La varianza es la expectativa de la desviación al cuadrado de una variable aleatoria de su media poblacional o muestral. La varianza es una medida de dispersión, lo que significa que es una medida de qué tan lejos se separa un conjunto de números de su valor promedio. La varianza tiene un papel central en la estadística, donde algunas ideas que la usan incluyen estadística descriptiva, inferencia estadística, prueba de hipótesis y muestreo de Monte Carlo. 
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img29.svg', alt='')

                .row(numero="2" titulo="La varianza…")
                  .col-11
                    p Es una herramienta importante en las ciencias, donde el análisis estadístico de datos es común. La varianza es el cuadrado de la desviación estándar, el segundo momento central de una distribución y la covarianza de la variable aleatoria consigo misma, y a menudo se representa por σ2, s2, Var(x) o V(x).

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img30.svg', alt='')                    
              
                .row(numero="3" titulo="Una ventaja de la varianza como medida de dispersión es…")
                  .col-11
                    p Más susceptible de manipulación algebraica que otras medidas de dispersión, como la desviación absoluta esperada; por ejemplo, la varianza de una suma de variables aleatorias no correlacionadas es igual a la suma de sus varianzas. Una desventaja de la varianza para aplicaciones prácticas es que, a diferencia de la desviación estándar, sus unidades difieren de la variable aleatoria, por lo que la desviación estándar se informa más comúnmente como una medida de dispersión una vez finalizado el cálculo.

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img31.svg', alt='')               

                .row(numero="4" titulo="La desviación estándar en las estadísticas")
                  .col-11
                    p Está típicamente denotada por σ, es una medida de variación o dispersión (se refiere al grado de estiramiento o compresión de una distribución) entre valores en un conjunto de datos. Cuanto menor es la desviación estándar, más cerca tienden a estar los puntos de datos de la media (o valor esperado), μ. Por el contrario, una desviación estándar más alta indica una gama más amplia de valores. De manera similar a otros conceptos matemáticos y estadísticos, existen muchas situaciones diferentes en las que se puede usar la desviación estándar y, por lo tanto, muchas ecuaciones diferentes. 

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img32.svg', alt='')
                    
                    .row.justify-content-start.align-items-center.ps-3.mt-4        
                      .col-lg-7.green-p.p-3
                        p.mb-0.text-white #[b Además de expresar la variabilidad de la población]   

                    p.mt-4 La desviación estándar también se usa a menudo para medir resultados estadísticos como el margen de error. Cuando se usa de esta manera, la desviación estándar a menudo se denomina error estándar de la media o error estándar de la estimación con respecto a una media. 
 
                .row(numero="5" titulo="Desviación estándar de población")
                  .col-11
                    p La desviación estándar de la población, la definición estándar de σ se usa cuando se puede medir una población completa y es la raíz cuadrada de la varianza de un conjunto de datos dado.

                    p #[b En los casos en que se pueda muestrear a cada miembro de una población], se puede utilizar la siguiente ecuación para encontrar la desviación estándar de toda la población:

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img33.svg', alt='')

                    p.mt-4 #[b Para aquellos] que no están familiarizados con la notación de suma, la ecuación anterior puede parecer desalentadora, pero cuando se aborda a través de sus componentes individuales, esta suma no es particularmente complicada. 

                    .row.justify-content-start.align-items-center.ps-3.mt-4        
                      .col-lg-5.green-p.p-3(data-aos="fade-down")
                        p(data-aos="fade-down").mb-0.text-white #[b Para entender más…] 

                    p.mt-4 El i = 1 en la suma indica el índice inicial, es decir, para el conjunto de datos 1, 3, 4, 7, 8, i = 1 sería 1, i = 2 sería 3, y así sucesivamente. Por lo tanto, la notación de suma simplemente significa realizar la operación de (xi – μ)2 en cada valor a través de N, que en este caso es 5 ya que hay 5 valores en este conjunto de datos.

                    h4 Ejemplo:

                    p μ = (1 + 3 + 4 + 7 + 8) / 5 = 4,6.       
                    p σ = √ [(1 – 4,6)2 + (3 – 4,6)2 + … + (8 – 4,6)2] / 5.
                    p σ = √ (12,96 + 2,56 + 0,36 + 5,76 + 11,56) / 5 = 2,577.

                .row(numero="6" titulo="Desviación estándar de la muestra")
                  .col-11
                    p En muchos casos, no es posible muestrear a todos los miembros dentro de una población, lo que requiere que se modifique la ecuación anterior para que la desviación estándar se pueda medir a través de una muestra aleatoria de la población que se está estudiando. Un estimador común para σ es la desviación estándar de la muestra, normalmente denotada por s. Vale la pena señalar que existen muchas ecuaciones diferentes para calcular la desviación estándar de la muestra, ya que, a diferencia de la media de la muestra, la desviación estándar de la muestra no tiene un estimador único que sea insesgado, eficiente y con una probabilidad máxima.

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img34.svg', alt='')

                    .cajon.color-primario.p-4.mt-4
                      p.mb-0 #[b La ecuación proporcionada a continuación es] la “desviación estándar de la muestra corregida”. Es una versión corregida de la ecuación obtenida al modificar la ecuación de desviación estándar de la población utilizando el tamaño de la muestra como el tamaño de la población, lo que elimina parte del sesgo de la ecuación. Sin embargo, la estimación imparcial de la desviación estándar es muy complicada y varía según la distribución.
 
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img35.svg', alt='')

                    p.mt-4 #[b Como tal] la “desviación estándar de la muestra corregida” es el estimador más comúnmente utilizado para la desviación estándar de la población, y generalmente se la denomina simplemente “desviación estándar de la muestra”. Es una estimación mucho mejor que su versión sin corregir, pero aún tiene un sesgo significativo para tamaños de muestra pequeños (N <10).

                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img36.svg', alt='')

            .col-lg-5.my-3.imgs-flotantes3
              img.img-a.img-t(src='@/assets/curso/temas/img37.jpg', alt='')
              img.img-flotante3(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 

          .cajon.color-primario.p-4.mt-5
            p.mb-0 La desviación estándar se usa ampliamente en entornos experimentales e industriales para probar modelos con datos del mundo real; un ejemplo de esto es el control de calidad de algunos productos. A continuación, se informa acerca de sus usos:

          .row.justify-content-start.align-items-center.ps-3.mt-5         
            .col-lg-4.green-p.p-3
              p.mb-0.text-white #[b Aplicaciones de la desviación estándar]

          .row.justify-content-center.align-items-center.mt-5     
            .col-lg-4              
              img.img-a.img-t(src='@/assets/curso/temas/img38.svg', alt='')
            .col-lg-8 
              p La desviación estándar se puede utilizar para calcular un valor mínimo y máximo dentro del cual algún aspecto del producto debería caer en un alto porcentaje del tiempo. En los casos en que los valores estén fuera del rango calculado, puede ser necesario realizar cambios en el proceso de producción para garantizar el control de calidad.
              
              .cajon.color-primario.p-4.mt-5.mx-4
                p.mb-0 La desviación estándar también se usa en el clima para determinar las diferencias en el clima regional. Imagínese dos ciudades, una en la costa y otra tierra adentro, que tienen la misma temperatura media de 75 °F. Si bien esto puede generar la creencia de que las temperaturas de estas dos ciudades son prácticamente las mismas, la realidad podría enmascararse si solo se aborda la media y se ignora la desviación estándar. 

          .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-12
                .bloque-texto-a__texto.p-4
                  p.mb-0 Las ciudades costeras tienden a tener temperaturas mucho más estables debido a la regulación de grandes masas de agua, ya que el agua tiene una mayor capacidad calorífica que la Tierra; esencialmente, esto hace que el agua sea mucho menos susceptible a los cambios de temperatura, y las áreas costeras permanecen más cálidas en invierno y más frescas en verano debido a la cantidad de energía requerida para cambiar la temperatura del agua. 
        
          .row.justify-content-center.align-items-center.mt-5     
            .col-lg-2.my-2              
              img.img-a.img-t(src='@/assets/curso/temas/img39.svg', alt='')
            .col-lg-10 
              h5.mb-0 Otra área en la que se usa ampliamente la desviación estándar es la de las finanzas, donde a menudo se usa para medir el riesgo asociado en las fluctuaciones de precios de algún activo o cartera de activos.
 

    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p1.p-3
              h3.mb-0.text-center #[b Estudio de variables continuas]

          p.my-5 Se invita a realizar  un recorrido por #[b el estudio de las variables] continuas, así:

          h5 Una variable continua es un tipo específico de variable cuantitativa que se utiliza en estadística para describir datos que se pueden medir de alguna manera. Si sus datos tratan de medir la altura, el peso o el tiempo, entonces tiene una variable continua.

          .row.justify-content-center.align-items-center.mt-5     
            .col-lg-3.my-3              
              img.img-a.img-t(src='@/assets/curso/temas/img40.svg', alt='')
            .col-lg-9
              .cajon.color-primario.p-4
                p.mb-0 Definamos más un par de términos utilizados en nuestra definición. Una variable en estadística no es lo mismo que una variable en álgebra. En estadística, una variable es algo que nos da datos. Algunos ejemplos de variables en las estadísticas pueden incluir edad, color de ojos, altura, número de hermanos, sexo o número de mascotas. Nuestra definición de variable continua también menciona que es cuantitativa. Los datos cuantitativos involucran cantidades o números. En los ejemplos de variables enumerados anteriormente, su edad, altura, número de hermanos y número de mascotas son todas variables cuantitativas.
 
          .row.justify-content-center.align-items-stretch.mt-5     
            .col-lg-6.col-bg-1.p-5
              img.img-t(src='@/assets/curso/temas/img41.svg', alt='')
              p.mt-4 #[b Datos]
              p.mb-0 La definición también menciona que los datos se pueden medir de alguna manera. Para comprender esto, debe comprender las variables discretas. Los datos se consideran discretos si son un recuento. Cuando contamos cosas, usamos números enteros como 0, 1, 2 y 3. Mi ejemplo favorito de una variable discreta es cuántos huevos pone una gallina. Cada día una gallina puede o no poner un huevo, pero hay dos cosas que nunca pueden suceder. Nunca puede haber un número negativo de huevos, y nunca puede haber una fracción o una porción de un huevo.
            .col-lg-6.col-bg-2.p-5
              img.img-t(src='@/assets/curso/temas/img42.svg', alt='')
              p.mt-4 #[b Variable]
              p.mb-0 Las variables continuas son variables que miden algo. Un buen ejemplo de variable continua es cuántos galones de leche da una vaca. Hasta donde se sabe, las vacas no saben cómo dejar de producir o dar leche después de exactamente 4 galones. Bessie puede dar 4,17 galones el lunes, 3,89 galones el martes y 4,2 galones el miércoles. Observe que las variables continuas nos permiten tener decimales o fracciones.

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Distribuciones bidimensionales, diagramas de dispersión y rectas de regresión

    p(data-aos="fade-down") La distribución bidimensional es una representación gráfica de un conjunto de puntos dentro de un diagrama de dispersión que representan individuos dentro de la misma distribución y las rectas de regresión son un método para definir la relación que existe entre estos puntos o el comportamiento de los mismos.
    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-4.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Distribuciones Bidimensionales]
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img106.svg', alt='')

      .col-lg-8 
        p(data-aos="fade-down") En la estadística, a la distribución donde interceden dos variables, x e y, se le denomina distribución bidimensional, esto significa que a cada individuo le pertenecen dos valores, xi, yi. Y al momento de ser representados en un plano o diagrama cartesiano se les debe considerar como coordenadas de un solo punto (xi, yi). Así, toda esta distribución se visualizará como un conjunto de puntos y cada punto corresponde a un individuo de la distribución.   
        .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Como ejemplo típico de distribución bidimensional, se pueden tomar los errores de precisión del fuego de artillería. El error total se compone de dos desviaciones independientes: error en la distancia de disparo X y desviación lateral Y de la dirección de disparo. Un número tan relativamente pequeño de puntos clasifica esta distribución entre las distribuciones discretas.

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-2.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Correlación]

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="fade-down") La correlación es una medida estadística que expresa el grado en que dos variables están relacionadas linealmente (lo que significa que cambian juntas a una tasa constante). Es una herramienta común para describir relaciones simples sin hacer una declaración sobre causa y efecto. La correlación se mide mediante un coeficiente llamado coeficiente de correlación de la muestra, r, la cual cuantifica la fuerza de la relación. Las correlaciones también se prueban para determinar la significancia estadística.

        .cajon.color-acento-botones.p-4.mt-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Las limitaciones de correlación es que esta no puede considerar la presencia o el efecto de otras variables fuera de las dos que se están explorando. Es importante destacar que la correlación no nos dice sobre causa y efecto. La correlación tampoco puede describir con precisión las relaciones curvilíneas.

      .col-lg-4.my-3.imgs-flotantes
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img107.jpg', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/box.svg', alt='Imagen decorativa')     

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5(data-aos="fade-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Las correlaciones son útiles para describir relaciones simples entre datos. Por ejemplo, imagine que está mirando un conjunto de datos de campings en un parque de montaña. Quiere saber si existe una relación entre la elevación del camping (qué tan alto está la montaña) y la temperatura media alta en verano. Para cada campamento individual, tiene dos medidas: elevación y temperatura. Cuando compara estas dos variables en su muestra con una correlación, puede encontrar una relación lineal: a medida que aumenta la elevación, la temperatura desciende. Están correlacionados negativamente.

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row.justify-content-center.align-items-center.pb-4(titulo="Diagramas de dispersión")
        .col-11
          .row.justify-content-center.align-items-center         
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img43.svg', alt='')
            .col-lg-8
              p Estas son herramientas matemáticas convenientes para estudiar la correlación entre dos variables aleatorias. Como su nombre indica, son una forma de hoja de papel sobre la que se encuentran dispersos los puntos de datos correspondientes a las variables de interés:            
              .cajon.color-primario.p-4.mt-4
                p.mb-0 A juzgar por la forma del patrón que forman los puntos de datos en esta hoja de papel, podemos determinar la asociación entre las dos variables y aplicar la técnica de análisis de correlación más adecuada.         

          .titulo-sexto.color-acento-contenido.mt-5
            h5 Figura 2.
            span a. Correlación débil. b. Correlación fuerte correlación inversa
          img.img-a.img-t.mt-3(src='@/assets/curso/temas/img44.svg', alt='')

          .row.justify-content-start.align-items-center.ps-3.mt-5         
            .col-lg-4.green-p.p-3
              p.mb-0.text-white #[b Interpretación de diagramas de dispersión] 

          .row.justify-content-center.align-items-center.mt-5
            .col-lg-10
              p Los diagramas de dispersión entre dos variables aleatorias presentan las variables como sus ejes x e y. Podemos tomar cualquier variable como variable independiente en tal caso (la otra variable es la dependiente) y, en consecuencia, graficar cada punto de datos en el gráfico (xi, yi). La totalidad de todos los puntos graficados forma el diagrama de dispersión. Basándonos en las diferentes formas que puede asumir el diagrama de dispersión, podemos sacar diferentes inferencias. Podemos calcular un coeficiente de correlación para los datos dados. Es una medida cuantitativa de la asociación de las variables aleatorias. Su valor es siempre menor que 1 y puede ser positivo o negativo. 
            .col-lg-2.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img45.svg', alt='')    

          .row.justify-content-center.align-items-stretch.mt-5     
            .col-lg-6.col-bg-1b.p-5
              img.img-t(src='@/assets/curso/temas/img41.svg', alt='')
              p.mt-4 #[b Correlación positiva]
              p.mb-0 En el caso de una correlación positiva, los puntos graficados se distribuyen desde la esquina inferior izquierda a la esquina superior derecha (en el patrón general de estar distribuidos uniformemente sobre una línea recta con una pendiente positiva); y en el caso de una correlación negativa, los puntos trazados se extienden sobre una línea recta de una pendiente negativa) desde la parte superior izquierda hacia la parte inferior derecha.

            .col-lg-6.col-bg-2b.p-5
              img.img-t(src='@/assets/curso/temas/img46.svg', alt='')
              p.mt-4 #[b Puntos distribuidos]
              p.mb-0 Si los puntos están distribuidos aleatoriamente en el espacio, o distribuidos casi por igual en todos los lugares sin representar ningún patrón en particular, es el caso de una correlación muy pequeña, que tiende a 0.
       
          .row.justify-content-start.align-items-center.ps-3.mt-5         
            .col-lg-2.green-p.p-3
              p.mb-0.text-white #[b Regresión] 
              
          .row.justify-content-center.align-items-center         
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img47.svg', alt='')
            .col-lg-8
              p Consiste en una técnica estadística para estimar las relaciones entre variables. Incluye muchas técnicas para modelar y analizar varias variables cuando el foco está en la relación entre una variable dependiente y una o más variables independientes. Más específicamente, el análisis de regresión ayuda a comprender cómo cambia el valor típico de la variable dependiente cuando se varía cualquiera de las variables independientes, mientras que las otras variables independientes se mantienen fijas. Más comúnmente, el análisis de regresión estima la expectativa condicional de la variable dependiente dadas las variables independientes, es decir, el valor promedio de la variable dependiente cuando las variables independientes son fijas. Con menos frecuencia, la atención se centra en un cuantil, u otro parámetro de ubicación de la distribución condicional de la variable dependiente dadas las variables independientes. 
          
              .cajon.color-primario.p-4.mt-4
                p.mb-0 En todos los casos, el objetivo de estimación es una función de las variables independientes, llamada función de regresión. En el análisis de regresión, también es interesante caracterizar la variación de la variable dependiente alrededor de la función de regresión, que puede describirse mediante una distribución de probabilidad. Una aplicación muy común de la regresión es ayudar a los administradores financieros y de inversiones a valorar los activos y comprender las relaciones entre las variables, como los precios de los productos básicos y las acciones de las empresas que comercian con esos productos básicos.

          img.img-a.img-t.mt-5(src='@/assets/curso/temas/img48.svg', alt='')

          .bloque-texto-a.color-acento-botones.p-4.p-md-5.mt-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-12
                .bloque-texto-a__texto.p-4
                  p.mb-0 El <em>software</em> no es solo para buscar filtros de caras divertidas o aprender nuevos movimientos de baile. Puede ayudar a su equipo a aumentar su eficiencia y ser más productivo y capaz en su trabajo. Una solución de <em>software</em> personalizada puede ayudar a eliminar el cuello de botella del seguimiento de los recibos y gastos del personal, o puede facilitar que su equipo administre los contactos de <em>marketing</em>.
 
          .row.justify-content-center.align-items-center.mt-5     
            .col-lg-2.my-2              
              img.img-a.img-t(src='@/assets/curso/temas/img49.svg', alt='')
            .col-lg-10 
              h5.mb-0 Y el <em>software</em> personalizado también puede servir como una solución para sus clientes. Por ejemplo, una opción de chat en vivo en su sitio web proporciona un contacto inmediato para clientes o prospectos con una necesidad urgente o que están listos para realizar una compra. Un <em>software</em> personalizado también podría ayudar a sus clientes a rastrear a su representante de servicio en el camino a su hogar, o enviar una solicitud de soporte técnico.
 
      .row.justify-content-center.align-items-center.pb-4(titulo="Diagramas de dispersión")
        .col-11
          p Están definidas de la siguiente manera:
          .row.justify-content-between.align-items-stretch.mt-5.col-color-4     
            .col-lg-1.col-color-3.mx-0              
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/a.svg', alt='')
            .col-lg-11.mx-0.p-4
              p.mb-0  Las rectas de regresión son líneas que se utiliza para describir el comportamiento de un conjunto de datos. En otras palabras, da la mejor tendencia de los datos proporcionados. Las rectas de regresión son útiles en los procedimientos de pronóstico. Su propósito es describir la interrelación de la variable dependiente (variable y) con una o muchas variables independientes (variable x). 
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img50.svg', alt='')

          .row.justify-content-between.align-items-stretch.mt-5.col-color-4     
            .col-lg-1.col-color-3.mx-0              
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/b.svg', alt='')
            .col-lg-11.mx-0.p-4
              p.mb-0 El uso de la ecuación obtenida de la recta de regresión actúa como un analista que puede pronosticar comportamientos futuros de las variables dependientes ingresando diferentes valores para las independientes. Los dos tipos básicos de regresión son la recta de regresión normal o simple y la recta de regresión múltiple, aunque existen métodos de regresión no lineal para datos y análisis más complicados. 
 

          .row.justify-content-between.align-items-stretch.mt-5.col-color-4     
            .col-lg-1.col-color-3.mx-0              
              img.img-a.img-t.mt-3(src='@/assets/curso/temas/c.svg', alt='')
            .col-lg-11.mx-0.p-4
              p.my-3 La recta de regresión simple usa una variable independiente para explicar o predecir el resultado de la variable dependiente Y, mientras que la recta de regresión múltiple usa dos o más variables independientes para predecir el resultado. 
  

          .row.justify-content-between.align-items-stretch.mt-5.col-color-4     
            .col-lg-1.col-color-3.mx-0              
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/d.svg', alt='')
            .col-lg-11.mx-0.p-4
              p La forma general de cada tipo de regresión es: Fórmula de la recta de regresión simple: #[b Y = a + bX + u]
              p Fórmula de la recta de regresión múltiple: #[b Y = a + b1X1 + b2 X2 + b3 X3 + … + bt Xt + u  ]

              .row.justify-content-start.align-items-center.mt-4.ps-3     
                .col-lg-2.bg-modal-p3.p-2
                  h3.mb-0.text-white.text-center #[b Dondé:]

              p.mt-4 Y = la variable que está intentando predecir (variable dependiente).
              p X = la variable que está utilizando para predecir Y (variable independiente).
              p a = la intersección.
              p b = la pendiente.
              p u = el residual de regresión.

          .tarjeta.color-secundario.p-3.mt-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/book.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Para profundizar aún más en este ítem, diríjase al:
                    p.text-small.mb-0 #[b Anexo 1] - Distribuciones bidimensionales y rectas de regresión.
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('downloads/anexo_1_distribuciones_bidimensionales_y_rectas_de_regresion.pdf')" target="_blank")
                      span Descargar PDF
                      i.fas.fa-file-download

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Distribuciones discretas, distribución binomial, distribuciones continuas, distribución normal

    p(data-aos="fade-down") A continuación, se exponen los diferentes tipos de distribución y cómo aplicarlos en la vida profesional.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img51.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En estadística, las distribuciones parecen infinitas con docenas de distribuciones compitiendo por su atención y con poca o ninguna base intuitiva para diferenciarlas. Las descripciones tienden a ser abstractas y enfatizan propiedades estadísticas como los momentos, funciones características y distribuciones acumulativas.

    .row.justify-content-evenly.align-items-stretch.mt-5           
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
        a(@click="modal6 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img52.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Distribuciones discretas]
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
        a(@click="modal7 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img53.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Distribución binominal]
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-down")
        a.indicador__container(@click="modal8 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img54.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Distribuciones continuas]
          .indicador--click(v-if="mostrarIndicador")
      .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")
        a(@click="modal9 = true")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
          p.text-center.mb-0.mt-2 #[b Distribución normal]


    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p4.p-3
              h3.mb-0.text-center.text-white #[b Distribuciones discretas]
          
          .row.justify-content-center.align-items-center.mt-5  
            .col-lg-9
              p Una distribución discreta es una distribución de probabilidad que representa la ocurrencia de resultados discretos (contables individualmente), como 1, 2, 3 … o 0 contra 1.             
              .cajon.color-primario.p-4.mt-4
                p.mb-0 #[b Por ejemplo], es una distribución discreta que evalúa la probabilidad de que ocurra un resultado “sí” o “no” en un número determinado de intentos, dada la probabilidad del evento en cada intento, como lanzar una moneda cien veces y teniendo el resultado “cabezas”.
            .col-lg-3.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img56.svg', alt='')

          .row.justify-content-center.align-items-center 
            .col-lg-5.my-3.br-white
              img.img-a.img-t(src='@/assets/curso/temas/img57.svg', alt='')

            .col-lg-5.my-3.br-white
              img.img-a.img-t(src='@/assets/curso/temas/img58.svg', alt='')              

          .row.justify-content-center.align-items-center 
            .col-lg-5.my-3.br-white
              img.img-a.img-t(src='@/assets/curso/temas/img59.svg', alt='')

            .col-lg-5.my-3.br-white
              img.img-a.img-t(src='@/assets/curso/temas/img60.svg', alt='')

          p.mt-5 Las distribuciones estadísticas pueden ser discretas o continuas. Una distribución continua se construye a partir de resultados que caen en un continuo, como todos los números mayores que 0 (que incluirían números cuyos decimales continúan indefinidamente, como pi = 3,14159265 …). En general, los conceptos de distribuciones de probabilidad discretas y continuas y las variables aleatorias que describen son la base de la teoría de la probabilidad y el análisis estadístico.

          .row.justify-content-start.align-items-center     
            .col-lg-3.bg-modal-p5.p-3
              h3.mb-0.text-white #[b Características principales]

          .row.justify-content-evenly.align-items-center.mt-5
            .col-sm-6.col-xl-2.mb-4
              .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
                .indicador--hover(v-if="indicadorTarjetaSlide")
                .tarjeta-slide__contenedor.p-3
                  .tarjeta-slide__contenido                     
                    p.mb-0 Una distribución de probabilidad discreta cuenta las ocurrencias que tienen resultados contables o finitos.

                  .tarjeta-slide__img.bg-white(:style="{'background-image': `url(${require('@/assets/curso/temas/img61.svg')})`}")
            .col-sm-6.col-xl-2.mb-4
              .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
                .tarjeta-slide__contenedor.p-3
                  .tarjeta-slide__contenido                     
                    p.mb-0 Esto contrasta con una distribución continua, donde los resultados pueden caer en cualquier parte de un continuo.

                  .tarjeta-slide__img.bg-white(:style="{'background-image': `url(${require('@/assets/curso/temas/img62.svg')})`}")
            .col-sm-6.col-xl-2.mb-4
              .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
                .tarjeta-slide__contenedor.p-1
                  .tarjeta-slide__contenido                     
                    p.mb-0 Los ejemplos comunes de distribución discreta incluyen las distribuciones binomiales, binomial negativa, beta-binomial, Poisson, hipergeométrica y Bernoulli.

                  .tarjeta-slide__img.bg-white(:style="{'background-image': `url(${require('@/assets/curso/temas/img63.svg')})`}")
            .col-sm-6.col-xl-2.mb-4
              .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
                .tarjeta-slide__contenedor.p-3
                  .tarjeta-slide__contenido                   
                    p.mb-0 Estas distribuciones a menudo involucran análisis estadísticos de “conteos” o “cuántas veces” ocurre un evento.

                  .tarjeta-slide__img.bg-white(:style="{'background-image': `url(${require('@/assets/curso/temas/img64.svg')})`}")
            .col-sm-6.col-xl-2.mb-4
              .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
                .tarjeta-slide__contenedor.p-2
                  .tarjeta-slide__contenido                    
                    p.mb-0 En finanzas, las distribuciones discretas se utilizan en la fijación de precios de opciones y en la previsión de shocks o recesiones del mercado.

                  .tarjeta-slide__img.bg-white(:style="{'background-image': `url(${require('@/assets/curso/temas/img65.svg')})`}")

    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p1.p-3
              h3.mb-0.text-center #[b Distribución binomial]

          .row.justify-content-center.align-items-center.mt-5 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img66.svg', alt='')           
            .col-lg-8
              p Suponer que X1, X2, …, Xn son variables aleatorias de Bernoulli independientes e idénticamente distribuidas (iid), cada una con la distribución. 
              img.img-a.img-t.my-4(src='@/assets/curso/temas/img67.svg', alt='') 
              p Entonces se dice que X tiene una distribución binomial con parámetros n y p:          
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img68.svg', alt='') 

          .row.justify-content-center.align-items-center.mt-5            
            .col-lg-8
              p Suponga que un experimento e x consiste en n ensayos repetidos tipo Bernoulli, cada ensayo resulta en un “éxito” con probabilidad π y un “fracaso” con probabilidad 1 – π. Por ejemplo, lanza una moneda 100 veces n = 100. Cuente el número de veces que observa cabezas, por ejemplo, X = # de cabezas. Si todos los ensayos son independientes, es decir, si la probabilidad de éxito en cualquier ensayo no se ve afectada por el resultado de cualquier otro ensayo, entonces el número total de éxitos en el experimento tendrá una distribución binomial, por ejemplo, dos lanzamientos de moneda no lo hacen afectarse unos a otros. La distribución binomial se puede escribir como:
              img.img-a.img-t.my-4(src='@/assets/curso/temas/img70.svg', alt='') 
              p La distribución de Bernoulli es un caso especial del binomio con n = 1. Es decir,        
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img71.svg', alt='') 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img69.svg', alt='')
          p.mt-5 Una forma más sencilla de llegar a estos resultados es tener en cuenta que dónde son variables aleatorias de Bernoulli. Entonces, por las propiedades aditivas de media y varianza, X= X1, X2, …, Xn donde X1, X2, …, Xn son variables aleatorias de Bernoulli. Entonces, por las propiedades aditivas de media y varianza,
          img.img-a.img-t.mt-4(src='@/assets/curso/temas/img72.svg', alt='')

          .row.justify-content-center.align-items-center.mt-5 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img73.svg', alt='')           
            .col-lg-8
              p Tenga en cuenta que X no tendrá una distribución binomial si la probabilidad de éxito π no es constante de un ensayo a otro, o si los ensayos no son completamente independientes (es decir, un éxito o fracaso en un ensayo altera la probabilidad de éxito en otro ensayo).
              img.img-a.img-t.my-4(src='@/assets/curso/temas/img74.svg', alt='') 
              p A medida que n aumenta, para fijo π, la distribución binomial se aproxima a la distribución normal:         
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img75.svg', alt='') 

          p.mt-4 Por ejemplo, si se toman muestras sin reemplazo de una población finita, entonces la distribución hipergeométrica es apropiada. 
          
          .tarjeta.color-acento-botones.p-3.mt-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/book.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Para profundizar aún más en este ítem, diríjase al:
                    p.text-small.mb-0 #[b Anexo 2] - Modelos de probabilidad discretos.
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('downloads/anexo_2_modelos_de_probabilidad_discretos.pdf')" target="_blank")
                      span Descargar PDF
                      i.fas.fa-file-download  


    ModalA(:abrir-modal.sync="modal8")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p4.p-3
              h3.mb-0.text-center.text-white #[b Distribuciones continuas]
          
          .row.justify-content-center.align-items-center.mt-5  
            .col-lg-7
              p Estas pueden tomar cualquier valor dentro de un rango definido. Este rango puede ser infinito (por ejemplo, para la distribución normal) en cuyo caso se habla de una distribución limitada o si es finita (por ejemplo, la distribución uniforme) es una distribución delimitada.
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img76.svg', alt='')                      

            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img77.svg', alt='')   

          .tarjeta.color-secundario.p-3.mt-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/book.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small.mb-0 #[b Anexo 2] - En el Anexo 2 - Distribuciones continuas encontrarán una tabla que ofrece una descripción general de varias distribuciones continuas que se usan comúnmente en el modelado de análisis de riesgos, de modo que pueda enfocarse más fácilmente en cuáles podrían ser las más apropiadas para sus necesidades de modelado. Siga los enlaces para obtener una explicación detallada de cada uno. Se ha utilizado el nombre más común para cada distribución..
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('downloads/anexo_3_distribuciones_continuas.pdf')" target="_blank")
                      span Descargar PDF
                      i.fas.fa-file-download              

          .row.justify-content-center.align-items-center.mt-5  
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img78.svg', alt='')           
            .col-lg-8
              p Una distribución continua se utiliza para representar una variable que puede tomar cualquier valor dentro de un rango definido (dominio). Por ejemplo, la estatura de un inglés adulto escogido al azar tendrá una distribución continua, porque la estatura de una persona es esencialmente infinitamente divisible. Se podría medir su estatura en centímetro, milímetro, décimo de milímetro, etc.; la escala se puede dividir repetidamente generando cada vez más valores posibles.

          .cajon.color-primario.p-4.mt-4
            p.mb-0 Propiedades como el tiempo, la masa y la distancia, que son infinitamente divisibles, se modelan utilizando distribuciones continuas. En la práctica, también se usan distribuciones continuas para modelar variables que son, en verdad, discretas, pero donde la brecha entre los valores permitidos es insignificante: por ejemplo, el costo del proyecto (que es discreto con pasos de un centavo, un centavo, etc.), tipo de cambio (que solo se cotiza a unas pocas cifras significativas), número de empleados en una gran organización, etc. 


    ModalA(:abrir-modal.sync="modal9")
      .row.align-items-center
        .col-12
          .row.justify-content-start.align-items-center     
            .col-lg-4.bg-modal-p1.p-3
              h3.mb-0.text-center #[b Distribución normal]

          .row.justify-content-center.align-items-center.mt-5 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img79.svg', alt='')           
            .col-lg-8
              p En la teoría de la probabilidad, la distribución normal (o gaussiana o Gauss o Laplace-Gauss) es un tipo de distribución de probabilidad continua para un valor real- variable aleatoria. La forma general de su función de densidad de probabilidad es:             
              img.img-a.img-t.my-4(src='@/assets/curso/temas/img80.svg', alt='')    
              p El parámetro μ es la media o expectativa de la distribución (y también su mediana y moda), mientras que el parámetro es su desviación estándar σ. La varianza de la distribución es σ2. Se dice que una variable aleatoria con una distribución gaussiana tiene una distribución normal y se denomina desviación normal.       
          img.img-a.img-t.mt-4(src='@/assets/curso/temas/img81.svg', alt='')    

          .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mt-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-12
                .bloque-texto-a__texto.p-4
                  p.mb-0 Cualquier combinación lineal de una colección fija de desviaciones normales es una desviación normal. Muchos resultados y métodos, como la propagación de la incertidumbre y el ajuste de parámetros por mínimos cuadrados, pueden derivarse analíticamente de forma explícita cuando las variables relevantes se distribuyen normalmente. Una distribución normal a veces se denomina informalmente curva de campana. Sin embargo, muchas otras distribuciones tienen forma de campana (como las distribuciones de Cauchy, de Student y logística).
 
          .tarjeta.color-secundario.p-3.mt-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/book.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Para profundizar aún más en este ítem, diríjase al:
                    p.text-small.mb-0 #[b Anexo 3] - Distribuciones continuas.
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('downloads/anexo_3_distribuciones_continuas.pdf')" target="_blank")
                      span Descargar PDF
                      i.fas.fa-file-download 


    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Muestreo, distribución de medias muéstrales 

    p(data-aos="fade-down") Para este tema se invita a  revisar de qué trata el muestreo y la distribución de medias muestrales.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/abrctmXaS4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mt-5 Y ahora se sugiere complementar la información con la siguiente presentación.
     
    .row.justify-content-start.align-items-start.mt-5     
      .col-lg-7 
        .row.justify-content-start.align-items-center.ps-3      
          .col-lg-12.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Tipos de muestreo más comunes]      
        LineaTiempoD.color-acento-contenido.mt-4
          .row(numero="1" titulo="Muestreo aleatorio")
            .col-11
              .row.justify-content-center.align-items-center.mt-5 
                .col-lg-4.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img83.svg', alt='')           
                .col-lg-8
                  p Con el muestreo aleatorio, cada elemento de una población tiene la misma probabilidad de ser elegido. Es el más alejado de cualquier sesgo potencial, porque no hay un juicio humano involucrado en la selección de la muestra. Por ejemplo, una muestra aleatoria puede incluir elegir los nombres de 25 empleados de un sombrero en una empresa de 250 empleados. La población es de 250 empleados y la muestra es aleatoria porque cada empleado tiene la misma probabilidad de ser elegido.
 
          .row(numero="2" titulo="Muestreo discrecional o de juicio")
            .col-11
              p Se puede utilizar el juicio del auditor para seleccionar la muestra de la población completa. Un auditor solo puede estar preocupado por transacciones de naturaleza material. Por ejemplo, suponga que el auditor establece el umbral de importancia relativa para las transacciones de cuentas por pagar en $10.000. Si el cliente proporciona una lista completa de 15 transacciones de más de $10,000, el auditor puede optar por revisar todas las transacciones debido al pequeño tamaño de la población.
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img84.svg', alt='') 

          .row(numero="3" titulo="Muestreo en bloque")
            .col-11
              p El muestreo por bloques toma una serie consecutiva de elementos dentro de la población para usar como muestra. Por ejemplo, una lista de todas las transacciones de ventas en un período contable podría clasificarse de varias formas, incluso por fecha o por monto en dólares. 
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img85.svg', alt='') 

              .cajon.color-primario.p-4.mt-4
                p.mb-0 Un auditor puede solicitar que el contador de la empresa proporcione la lista en un formato u otro para seleccionar una muestra de un segmento específico de la lista. Este método requiere muy poca modificación por parte del auditor, pero es probable que un bloque de transacciones no sea representativo de la población completa.
                   
              .row.justify-content-center.align-items-center.mt-4 
                .col-lg-4.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img86.svg', alt='')           
                .col-lg-8
                  p Alternativamente, un auditor puede identificar todas las cuentas del libro mayor con una variación mayor al 10% del período anterior. En este caso, el auditor está limitando la población de la que se deriva la selección de la muestra. Desafortunadamente, el juicio humano utilizado en el muestreo siempre conlleva la posibilidad de sesgo, ya sea explícito o implícito. 

          .row(numero="4" titulo="Muestreo sistemático")
            .col-11
              p Los investigadores utilizan el método de muestreo sistemático para elegir los miembros de la muestra de una población a intervalos regulares. Requiere la selección de un punto de partida para la muestra y el tamaño de la muestra que pueda repetirse a intervalos regulares.

              .cajon.color-primario.p-4.mt-4
                p.mb-0 Este tipo de método de muestreo tiene un rango predefinido y, por lo tanto, esta técnica de muestreo es la que requiere menos tiempo. 

              img.img-a.img-t.my-4(src='@/assets/curso/temas/img87.svg', alt='') 
              
              p Suponga que un auditor está revisando los controles internos relacionados con la cuenta de efectivo de una empresa y desea probar la política de la empresa que estipula que los cheques que superen los $ 10,000 deben estar firmados por dos personas. 
              p La población consiste en cada cheque de la compañía que exceda los $ 10,000 durante el año fiscal, que, en este ejemplo, fue de 300. El auditor usa estadísticas de probabilidad y determina que el tamaño de la muestra debe ser el 20% de la población o 60 cheques. El intervalo de muestreo es 5 (300 controles / 60 controles de muestra)
              .row.justify-content-center.align-items-center.mt-4 
                .col-lg-4.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img88.svg', alt='')           
                .col-lg-8
                  p Por lo tanto, el auditor selecciona una de cada cinco verificaciones para probarlas. Suponiendo que no se encuentran errores en el trabajo de prueba de muestreo, el análisis estadístico le da al auditor una tasa de confianza del 95% de que el procedimiento de verificación se realizó correctamente. El auditor prueba la muestra de 60 cheques y no encuentra errores, por lo que concluye que el control interno sobre el efectivo está funcionando correctamente.

          .row(numero="5" titulo="Ejemplo de muestreo de <em>marketing</em>")
            .col-11
              p Las empresas tienen como objetivo vender sus productos y / o servicios a los mercados objetivo. Antes de presentar productos al mercado, las empresas generalmente identifican las necesidades y deseos de su público objetivo. Para hacerlo, pueden emplear un muestreo de la población del mercado objetivo para obtener una mejor comprensión de esas necesidades para luego crear un producto y / o servicio que satisfaga esas necesidades. En este caso, recoger las opiniones de la muestra ayuda a identificar las necesidades del conjunto.
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img82.jpg', alt='')
    
    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-4.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Distribución de medias muestrales]

    .row.justify-content-center.align-items-center.mt-5         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img89.svg', alt='')
      .col-lg-8
        p(data-aos="fade-down") La media muestral de un grupo de observaciones es una estimación de la media poblacional μ. Dada una muestra de tamaño n, considere n variables aleatorias independientes X1, X2, …, Xn, cada una de las cuales corresponde a una observación seleccionada al azar. Cada una de estas variables tiene la distribución de la población, con media μ y desviación estándar σ. La media muestral se define como:

        img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img90.svg', alt='')
        
        p(data-aos="fade-down") Por las propiedades de las medias y las varianzas de las variables aleatorias, la media y la varianza de la media muestral son las siguientes: 

        img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img91.svg', alt='')

        p(data-aos="fade-down") Aunque la media de la distribución de  es idéntica a la media de la distribución de la población, la varianza es mucho menor para tamaños de muestra grandes.

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Por ejemplo, suponga que la variable aleatoria X registra el puntaje de un estudiante seleccionado al azar en una prueba nacional, donde la distribución de la población para el puntaje es normal con una media de 70 y una desviación estándar de 5 (N (70,5)). Dada una muestra aleatoria simple (SRS) de 200 estudiantes, la distribución de la puntuación media de la muestra  tiene una media de 70 y una desviación estándar de 5 / sqrt (200) = 5 / 14,14 = 0,35.

    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-8
        p(data-aos="fade-down") La distribución de medias muestrales se define como el conjunto de medias de todas las posibles muestras aleatorias de un tamaño específico (n) seleccionadas de una población específica. Esta distribución tiene características bien definidas (y predecibles) que se especifican en el teorema del Límite central.

        img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img93.svg', alt='')  

        p(data-aos="fade-down") Cuando la distribución de la población es normal, la distribución de la media muestral también es normal. Para una distribución de población normal con media μ y desviación estándar σ, la distribución de la media de la muestra es normal, con media μ y desviación estándar.         
        img.img-a.img-t.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img94.svg', alt='') 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img92.svg', alt='')

    .cajon.color-acento-botones.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Este resultado se deriva del hecho de que cualquier combinación lineal de variables aleatorias normales independientes también se distribuye normalmente. Esto significa que para dos variables aleatorias normales independientes X, Y y cualquier constante a y b, Ax + By serán distribuidos normalmente. En el caso de la media muestral, la combinación lineal es = (1 / n) * (X1 + X2 + … Xn).  

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-4.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Teorema del Límite central]

    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-8
        p(data-aos="fade-down") El resultado más importante sobre las medias muestrales es el teorema del Límite central. En pocas palabras, este teorema dice que para un tamaño de muestra n suficientemente grande, la distribución de la media muestral X se acercará a una distribución normal. Esto es cierto para una muestra de variables aleatorias independientes de cualquier distribución de población, siempre que la población tenga una desviación estándar finita σ. Una declaración formal del teorema del límite central es la siguiente:

        p(data-aos="fade-down") Si X es la media de una muestra aleatoria X1, X2, …, Xn de tamaño n de una distribución con una media finita μ y una varianza positiva finita σ², entonces la distribución de W =
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img96.svg', alt='')        
 
        .row.justify-content-start.align-items-center.ps-3.my-5         
          .col-lg-6.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b es N (0,1) en el límite cuando n se acerca al infinito.]  
        .row.justify-content-start.align-items-end.mt-5 
          .col-lg-5
            p.mb-0 Esto significa que la variable  se distribuye
          .col-auto.p-0
            img(src='@/assets/curso/temas/img97.svg')
        p Una aplicación bien conocida de este teorema es la aproximación normal a la distribución binomial.              
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img95.svg', alt='')  

    img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img98.svg', alt='')  

    p(data-aos="fade-down").mt-5 El concepto de distribución de medias muestrales y sus características deben ser intuitivamente razonables:

    .row.justify-content-evenly.align-items-stretch.mt-5 
      .col-lg-4.col-bg-1.p-5(data-aos="fade-left")
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img99.svg', alt='')
        p.mt-4.mb-0 Es de notar que las medias muestrales son variables. Si se seleccionan dos (o más) muestras de la misma población, es probable que las dos muestras tienen medias diferentes. 

      .col-lg-4.col-bg-2.p-5(data-aos="fade-down")
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img99.svg', alt='')
        p.mt-4.mb-0 Aunque las muestras tendrán medias diferentes, se debe esperar que las medias muestrales estén cerca de la media de la población. Es decir, las medias de la muestra deberían “acumularse” alrededor de μ. Por tanto, la distribución de las medias muestrales tiende a adoptar una forma normal con un valor esperado de μ.  

      .col-lg-4.col-bg-3.p-5(data-aos="fade-right")
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img99.svg', alt='')
        p.mt-4.mb-0 Debe darse cuenta de que la media de una muestra individual probablemente no será idéntica a la media de su población; es decir, habrá algún “error” entre X y μ. Algunas medias de muestra estarán relativamente cerca de μ y otras relativamente lejos. El error estándar proporciona una medida de la distancia estándar entre X y μ.  

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-7.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Puntuaciones Z y ubicación dentro de la distribución de medias muestrales]

    .row.justify-content-center.align-items-center
      .col-lg-6.tarjeta-avatar-b.mt-5(data-aos="fade-left")
        .tarjeta-avatar-b__img
          img.m-top(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.tex-black Dentro de la distribución de las medias muestrales, la ubicación de cada media muestral se puede especificar mediante una puntuación Z,
            img.img-t.img-r.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img101.svg', alt='')

      .col-lg-6.tarjeta-avatar-b.mt-5(data-aos="fade-right")
        .tarjeta-avatar-b__img
          img.m-top(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.tex-black Como siempre, una puntuación Z positiva indica una media muestral mayor que μ y una puntuación Z negativa corresponde a una media muestral menor que μ.

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-10.green-p.p-3
        h3.mb-0.text-white #[b El valor numérico de la puntuación Z indica la distancia entre  y μ medida en términos del error estándar.]

    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Estimación y prueba de hipótesis 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img102.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un área de preocupación en la estadística inferencial es la estimación del parámetro de población a partir de la estadística de la muestra; aquí es importante darse cuenta del orden. La estadística de muestra se calcula a partir de los datos de muestra y el parámetro de población se infiere (o estima) a partir de esta estadística de muestra: 

    p(data-aos="fade-down").mt-5 Otra área de la estadística inferencial es la determinación del tamaño de la muestra. Es decir, qué tamaño de muestra debe tomarse para hacer una estimación precisa. En estos casos, las estadísticas no se pueden utilizar, ya que aún no se ha tomado la muestra.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-7
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center.align-items-center.pb-4(numero="1" titulo="Prueba de hipótesis")
            .col-11
              p Hay dos tipos de estimaciones que encontraremos: estimaciones puntuales y estimaciones de intervalo. La estimación puntual es el mejor valor individual. Un buen estimador debe satisfacer tres condiciones:
              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar1
                    .p-4.ps-1
                      p.mb-0 #[b Insesgado:] el valor esperado del estimador debe ser igual a la media del parámetro.
              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar2
                    .p-4.ps-1
                      p.mb-0 #[b Consistente:] el valor del estimador se acerca al valor del parámetro a medida que aumenta el tamaño de la muestra.
              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar3
                    .p-4.ps-1
                      p.mb-0 #[b Relativamente eficiente:] el estimador tiene la varianza más pequeña de todos los estimadores que podrían usarse.

          .row.justify-content-center.align-items-center.pb-4(numero="2" titulo="Intervalos de confianza")
            .col-11
              p La estimación puntual va a ser diferente del parámetro de población porque debido al error de muestreo, y no hay forma de saber quién se acerca al parámetro real. Por esta razón, a los estadísticos les gusta dar una estimación de intervalo que es un rango de valores utilizados para estimar el parámetro. Un intervalo de confianza es una estimación de intervalo con un nivel de confianza específico. Un nivel de confianza es la probabilidad de que la estimación del intervalo contenga el parámetro. El nivel de confianza es 1-alfa y esta se encuentra dentro del intervalo de confianza.
                
          .row.justify-content-center.align-items-center.pb-4(numero="3" titulo="Error máximo de la estimación")
            .col-11
              p El error máximo de la estimación se indica con E y es la mitad del ancho del intervalo de confianza. El intervalo de confianza básico para una distribución simétrica se establece para que sea la estimación puntual menos el error máximo de la estimación es menor que el parámetro de población real que es menor que la estimación puntual más el error máximo de la estimación. Esta fórmula funcionará para medias y proporciones, porque usarán las distribuciones Z o T que son simétricas.
 
          .row.justify-content-center.align-items-center.pb-4(numero="4" titulo="Prueba de hipótesis")
            .col-11
              p Cuando evalúas una hipótesis, debes tener en cuenta tanto la variabilidad de tu muestra como el tamaño de la muestra. La prueba de hipótesis se usa generalmente cuando se comparan dos o más grupos. Por ejemplo, puede implementar protocolos para realizar la intubación en pacientes pediátricos en el entorno prehospitalario. Para evaluar si estos protocolos tuvieron éxito en mejorar las tasas de intubación, podría medir la tasa de intubación a lo largo del tiempo en un grupo asignado aleatoriamente a la capacitación en los nuevos protocolos y compararla con la tasa de intubación a lo largo del tiempo en otro grupo de control que no recibió capacitación en los nuevos protocolos.
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img104.svg', alt='')
              .row.justify-content-start.align-items-center.mt-5
                .col-lg-8
                  .cajon.color-primario.p-4.mt-4
                    p.mb-0 Cuando evalúas una hipótesis, debes tener en cuenta tanto la variabilidad de tu muestra como el tamaño de la muestra.  Con base en esta información, le gustaría hacer una evaluación de si las diferencias que ve son significativas o si es probable que se deba a la casualidad. Esto se hace formalmente a través de un proceso llamado prueba de hipótesis.
                .col-lg-4
                  img.img-t.img-a(src='@/assets/curso/temas/img105.svg', alt='')
  
      .col-lg-5
        img.img-a.img-t(src='@/assets/curso/temas/img19.svg', alt='')

    p(data-aos="fade-down").mt-5 Cinco pasos en la prueba de hipótesis:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .row.justify-content-evenly.align-items-stretch        
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img108.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Especificar la hipótesis nula]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img109.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Especificar la hipótesis alternativa]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-down")        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img110.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Establecer el nivel de significación (α)]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")       
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img111.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Calcule la estadística de prueba y el valor P correspondiente]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")      
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img112.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Esbozando una conclusión]          

    p(data-aos="fade-down").mt-5 Para ampliar la información sobre estos importantes pasos en la estimación y la prueba de hipótesis, se invita a revisar:

    TabsA.color-secundario.mt-5(data-aos="fade-left")
      .tarjeta.color-secundario--borde.p-4(titulo="Especifique la hipótesis nula")    
        .row.justify-content-center.align-items-center        
          .col-lg-11
            h5 Especifique la hipótesis nula
            p La hipótesis nula (H0) es una declaración de ningún efecto, relación o diferencia entre dos o más grupos o factores. En los estudios de investigación, un investigador suele estar interesado en refutar la hipótesis nula.

            .row.justify-content-start.align-items-center.mt-4
              .col-lg-2.green-p.p-2
                h3.mb-0.text-white #[b Ejemplos] 
            .row.justify-content-center.align-items-center.mt-4
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 No hay diferencia en las tasas de intubación entre las edades de 0 a 5 años.
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 Los grupos de intervención y control tienen la misma tasa de supervivencia (o la intervención no mejora la tasa de supervivencia).
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 No existe asociación entre el tipo de lesión y si el paciente recibió o no una vía intravenosa en el entorno prehospitalario.

     
      .tarjeta.color-secundario--borde.p-4(titulo="Especifique la hipótesis alternativa")    
        .row.justify-content-center.align-items-center        
          .col-lg-11
            h5 Especifique la hipótesis alternativa
            p La hipótesis alternativa (HA) es la afirmación de que existe un efecto o diferencia. Esta suele ser la hipótesis que el investigador está interesado en probar. La hipótesis alternativa puede ser unilateral (solo proporciona una dirección, por ejemplo, inferior) o bilateral. A menudo, utilizamos pruebas de dos caras incluso cuando nuestra verdadera hipótesis es unilateral, porque requiere más evidencia en contra de la hipótesis nula para aceptar la hipótesis alternativa.
            .row.justify-content-start.align-items-center.mt-4
              .col-lg-2.green-p.p-2
                h3.mb-0.text-white #[b Ejemplos] 
            .row.justify-content-center.align-items-center.mt-4
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 La tasa de éxito de la intubación difiere según la edad del paciente tratado (bilateral).
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 El tiempo hasta la reanimación de un paro cardíaco es menor para el grupo de intervención que para el control (unilateral).
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 Existe una asociación entre el tipo de lesión y si el paciente recibió o no una vía intravenosa en el entorno prehospitalario (bilateral).
 
      .tarjeta.color-secundario--borde.p-4(titulo="Establecer el nivel ")    
        .row.justify-content-center.align-items-center        
          .col-lg-11
            h5 Establecer el nivel de significancia (α)
            p El nivel de significancia (denotado por la letra griega alfa α) generalmente se establece en 0,05. Esto significa que hay 5% de probabilidad de que acepte su hipótesis alternativa cuando su hipótesis nula sea realmente cierta. Cuanto menor sea el nivel de significancia, mayor será la carga de la prueba necesaria para rechazar la hipótesis nula o, en otras palabras, para respaldar la hipótesis alternativa.
            img.img-a.img-t.mt-3(src='@/assets/curso/temas/img113.svg', alt='')

      .tarjeta.color-secundario--borde.p-4(titulo="Calcule la estadística")    
        .row.justify-content-center.align-items-center        
          .col-lg-11
            h5 Calcule la estadística de prueba y el valor P correspondiente
            p En otra sección presentamos algunas estadísticas de prueba básicas para evaluar una hipótesis. La prueba de hipótesis generalmente utiliza una estadística de prueba que compara grupos o examina asociaciones entre variables. Cuando se describe una sola muestra sin establecer relaciones entre variables, se suele utilizar un intervalo de confianza.
            .cajon.color-primario.p-4.mt-4
              p.mb-0 El valor p describe la probabilidad de obtener un estadístico de muestra tan o más extremo por casualidad solo si su hipótesis nula es cierta. Este valor p se determina en función del resultado de su estadística de prueba. Sus conclusiones sobre la hipótesis se basan en su valor p y su nivel de significancia.           
            .row.justify-content-start.align-items-center.mt-4
              .col-lg-2.green-p.p-2
                h3.mb-0.text-white #[b Ejemplos] 
            .row.justify-content-center.align-items-center.mt-4
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 #[b Valor p = 0,01.] Esto sucederá 1 de cada 100 veces por pura casualidad si su hipótesis nula es cierta. No es probable que suceda estrictamente por casualidad.
                  li 
                    i.fas.fa-caret-right
                    p.mb-0 #[b Valor p = 0,75.] Esto sucederá 75 de cada 100 veces por pura casualidad si su hipótesis nula es cierta. Es muy probable que ocurra estrictamente por casualidad.

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-4.bg-modal-p2.p-3
        h3.mb-0.text-white #[b Precauciones sobre los valores p]
    p(data-aos="fade-down").mt-5 El tamaño de la muestra afecta directamente su valor p. Los tamaños de muestra grandes producen valores p pequeños incluso cuando las diferencias entre los grupos no son significativas. Siempre debe verificar la relevancia práctica de sus resultados. Por otro lado, un tamaño de muestra demasiado pequeño puede provocar que no se identifique una diferencia cuando realmente existe. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img114.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se debe planificar el tamaño de la muestra con anticipación para tener  suficiente información de su muestra para mostrar una relación o diferencia significativa, si existe. Consulte el cálculo de un tamaño de muestra para obtener más información. 

    .row.justify-content-center.align-items-stretch.mt-5     
      .col-lg-6.col-bg-1.p-5(data-aos="fade-left")
        img.img-t(src='@/assets/curso/temas/img115.svg', alt='')
        p.mt-4(data-aos="fade-down") #[b Ejemplo 1]
        p.mb-0(data-aos="fade-down") Las edades medias fueron significativamente diferentes entre los dos grupos (16,2 años frente a 16,7 años; p = 0,01; n = 1.000). ¿Es esta una diferencia importante? Probablemente no, pero el gran tamaño de la muestra ha dado como resultado un valor p pequeño.

      .col-lg-6.col-bg-2.p-5(data-aos="fade-right")
        img.img-t(src='@/assets/curso/temas/img115.svg', alt='')
        p.mt-4(data-aos="fade-down") #[b Ejemplo 2]
        p.mb-0(data-aos="fade-down") Las edades medias no fueron significativamente diferentes entre los dos grupos (10,4 años frente a 16,7 años; p = 0,40, n = 10). ¿Es esta una diferencia importante? Podría ser, pero debido a que el tamaño de la muestra es pequeño, no se puede determinar con certeza si se trata de una verdadera diferencia o simplemente sucedió debido a la variabilidad natural en la edad dentro de estos dos grupos. 

    p(data-aos="fade-down").mt-5 Si realiza una gran cantidad de pruebas para evaluar una hipótesis (lo que se denomina prueba múltiple), debe controlar esto en su designación del nivel de significancia o en el cálculo del valor p. Por ejemplo, si tres resultados miden la efectividad de un fármaco u otra intervención, tendrá que ajustar estos tres análisis.

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-3.bg-modal-p2.p-3(data-aos="fade-left")
        h3.mb-0.text-white #[b Sacar una conclusión]

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-6.tarjeta-avatar-b.my-3(data-aos="fade-left")
        .tarjeta-avatar-b__img.mr
          img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
        .tarjeta.color-primario.bg-avatar1
          .p-4.ps-1
            p.mb-0 #[b Valor p < = nivel de significancia (a) = >, rechaza su hipótesis nula a favor de su hipótesis alternativa. El resultado es estadísticamente significativo.]

      .col-lg-6.tarjeta-avatar-b.my-3(data-aos="fade-right")
        .tarjeta-avatar-b__img.mr
          img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
        .tarjeta.color-primario.bg-avatar2
          .p-4.ps-1
            p.mb-0.pt-2.mt-1 #[b Valor p > nivel de significancia (a) = > no rechaza su hipótesis nula. El resultado no es estadísticamente significativo.]

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-down") La prueba de hipótesis no está configurada para que pueda probar absolutamente una hipótesis nula. Por lo tanto, cuando no se encuentra evidencia en contra de la hipótesis nula, no se puede rechazar la hipótesis nula. Cuando se encuentra evidencia suficientemente fuerte en contra de la hipótesis nula, se rechaza la hipótesis nula. Sus conclusiones también se traducen en una declaración sobre su hipótesis alternativa. Cuando presente los resultados de una prueba de hipótesis, incluya también las estadísticas descriptivas en sus conclusiones. Informe valores p exactos en lugar de un rango determinado. Por ejemplo, “La tasa de intubación difirió significativamente según la edad del paciente y los pacientes más jóvenes tienen una tasa más baja de intubación exitosa (p = 0,02)”. Aquí hay dos ejemplos más con la conclusión expresada de varias formas diferentes. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        .color1.p-4(data-aos="flip-down")
          h5(data-aos="fade-down") Ejemplo
          p(data-aos="fade-down") H0: no hay diferencia en la supervivencia entre el grupo de intervención y el de control.
          p(data-aos="fade-down") HA: existe una diferencia en la supervivencia entre el grupo de intervención y el de control. 
          p(data-aos="fade-down") α = 0,05: aumento del 20% en la supervivencia para el grupo de intervención; valor p = 0,002.

        .color2.p-4(data-aos="flip-down")
          h5(data-aos="fade-down") Conclusión
          p(data-aos="fade-down") Rechace la hipótesis nula a favor de la hipótesis alternativa. La diferencia en la supervivencia entre el grupo de intervención y el de control fue estadísticamente significativa. Hubo un aumento del 20% en la supervivencia para el grupo de intervención en comparación con el control (p = 0,001).
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img116.svg', alt='')


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img117.svg', alt='')    
      .col-lg-7
        .color1.p-4(data-aos="flip-down")
          h5(data-aos="fade-down") Ejemplo
          p(data-aos="fade-down") H0: no hay diferencia en la supervivencia entre el grupo de intervención y el de control.
          p(data-aos="fade-down") HA: existe una diferencia en la supervivencia entre el grupo de intervención y el de control.
          p(data-aos="fade-down") α = 0,05: aumento del 5% en la supervivencia entre el grupo de intervención y el de control; valor p = 0,20.


        .color2.p-4(data-aos="flip-down")
          h5(data-aos="fade-down") Conclusión
          p(data-aos="fade-down") No rechace la hipótesis nula. La diferencia en la supervivencia entre el grupo de intervención y el de control no fue estadísticamente significativa. No hubo un aumento significativo en la supervivencia para el grupo de intervención en comparación con el control (p = 0,20).

    Separador 
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.6 Formulario de muestreo y estimación

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img114.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las fórmulas que se usan para calcular la media muestral y todas las demás estadísticas muestrales son ejemplos de fórmulas de estimación o estimadores. El valor particular que calculamos a partir de observaciones de muestra utilizando un estimador se denomina estimación. Por ejemplo, el valor calculado de la media muestral en una muestra determinada se denomina estimación puntual de la media poblacional. Las tres propiedades deseables de un estimador son:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-11
        .row.justify-content-center.align-items-center
          .col-lg-4.color2.p-4.br-white1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img119.svg', alt='')
            h5.mt-2 Insesgado
            p.mt-4 Su valor esperado es igual al parámetro que se está estimando.
          .col-lg-4.color3.p-4.py-5.br-white1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img120.svg', alt='')
            h5.mt-2 Eficiencia
            p.mt-4 Tiene la varianza más baja en comparación con otros estimadores insesgados del mismo parámetro.
          .col-lg-4.color2.p-4.br-white1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img121.svg', alt='')
            h5.mt-2 Coherencia
            p.mt-4 A medida que aumenta el tamaño de la muestra, el error muestral disminuye y las estimaciones se acercan al valor real.

    .tarjeta.color-secundario.p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/book.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b En el Anexo 4 - Formulario de muestreo], se puede encontrar una clasificación por tablas de fórmulas más utilizadas y necesarias para llevar a cabo todo lo relacionado a procesos de muestreo de datos.
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/anexo_4_formulario_de_muestreo.pdf')" target="_blank")
                span Descargar PDF
                i.fas.fa-file-download 

    Separador 
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.7 Probabilidad de sucesos compatibles e incompatibles                              

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img122.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dos o más eventos son compatibles, si pueden cumplirse simultáneamente; es decir, si tienen al menos un resultado común. Por el contrario, son incompatibles o mutuamente excluyentes y su intersección es el conjunto vacío Ø si se analiza el siguiente experimento de lanzar un dado. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        p(data-aos="fade-down") Comencemos con el siguiente experimento: tiramos un dado de seis caras y vemos cuál es el resultado. Consideremos los siguientes eventos A= {2, 3}, B= {1,2}, C= {5}.

        p(data-aos="fade-down") Observamos que, si extraemos 2, luego A está satisfecho, así como B. Decimos que los eventos son compatibles, esto significa que pueden ocurrir simultáneamente. Por el contrario, los eventos B y C son incompatibles, ya que los dos no pueden suceder simultáneamente.    

        .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para ver cuando dos eventos son compatibles o no, podemos observar que A y B tienen un elemento común: 2, por lo tanto, serán compatibles. De lo contrario, A y C no tienen ningún elemento común y, por tanto, son incompatibles. Expresamos esto diciendo que dos eventos A y B son compatibles si:

        img.img-t.img-a.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img123.svg', alt='')

      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img124.svg', alt='')

    .bloque-texto-a.color-acento-botones.p-4.p-md-5.mt-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-down") Si tenemos tres o más eventos, decimos que son incompatibles de dos en dos si dos eventos son incompatibles (de manera similar, son compatibles de dos en dos si dos eventos son compatibles). En nuestro caso A, B y C no son incompatibles de dos en dos, ya que, aunque A y C, al igual que B y C son incompatibles, A y B son compatibles.

    .row.justify-content-center.align-items-stretch.mt-5     
      .col-lg-6.col-bg-1.p-5(data-aos="fade-left")
        p.mt-4(data-aos="fade-down") #[b Eventos:]
        p(data-aos="fade-down") A = {2,3} B = {1,2} C = {4,5} cumplen con lo siguiente: 
        p(data-aos="fade-down") A y B son compatibles, y B y C son incompatibles, B Ո C = Ø
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img125.svg', alt='')

      .col-lg-6.col-bg-2.p-5(data-aos="fade-right")
        p.mt-4(data-aos="fade-down") #[b Evento incompatible. ]
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img126.svg', alt='') 

    Separador 
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.8 Cálculo de probabilidades y probabilidad condicionada 
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-4.imgs-flotantes.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img127.svg', alt='')
        img.img-w1.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/lupa.svg', alt='Imagen decorativa')              
      .col-lg-8
        p(data-aos="fade-down") Una probabilidad es un modelo representado matemáticamente de un fenómeno aleatorio. Las probabilidades pueden ser marginales, conjuntas o condicionales.
        p(data-aos="fade-down") Comprender sus diferencias y cómo manipularlas es clave para tener éxito en la comprensión de los fundamentos de las estadísticas.
        .row.justify-content-start.align-items-center.my-4.ps-3(data-aos="flip-down")     
          .col-lg-10.bg-modal-p3.p-2
            h3.mb-0.text-white #[b Cálculo de probabilidades de eventos compatibles e incompatibles]
        p(data-aos="fade-down") Se explicará cómo calcular la probabilidad de un evento aislado con la ley de Laplace y calcular la probabilidad de la unión de dos eventos cuando son compatibles y cuándo son incompatibles.

    .row.justify-content-start.align-items-stretch.ps-3.mt-5         
      .col-lg-3.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Ley de Laplace:] 

    .row.justify-content-between.align-items-stretch.mt-5         
      .col-lg-4.color4.br-white1.br-radius.p-4(data-aos="fade-left")
        p.mt-4(data-aos="fade-down") No es más que la fórmula para calcular la probabilidad de que ocurra un evento aislado. Cuando en un experimento aleatorio, todos los eventos tienen la misma probabilidad de ocurrir, la probabilidad de que ocurra un evento A es:

        img.img-t.img-a.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img128.svg', alt='')
        p(data-aos="fade-down") En el numerador colocamos el número de casos favorables para que ocurra el evento A y en el denominador colocamos el número de eventos posibles. Por ejemplo, en un dado, ¿cuál es la probabilidad de obtener un 2?       
        
      .col-lg-4.color3.br-white1.br-radius.p-4(data-aos="fade-down")
        p.mt-4.mb-0(data-aos="fade-down") En este caso, el número de casos favorables es 1, ya que el dado tiene solo un 2. El número de casos posibles es 6, que son los números que tiene un dado. Por lo tanto, la probabilidad de que salga un 2 se puede escribir como P(2) y es igual a:
        img.img-t.img-a.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img129.svg', alt='') 
        
      .col-lg-4.color2.br-white1.br-radius.p-4(data-aos="fade-right")
        p.mt-4(data-aos="fade-down") El valor de la probabilidad de ocurrencia del evento A estará entre 0 y 1:

        img.img-t.img-a.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img130.svg', alt='')
        p.mb-0(data-aos="fade-down") Siendo 1 la probabilidad del evento seguro (siempre ocurrirá) y 0 es la probabilidad del evento imposible (nunca ocurrirá).         
        
    .row.justify-content-start.align-items-center.mt-5         
      .col-lg-7
        p(data-aos="fade-down") Cómo calcular la probabilidad de ocurrencia de A o B, si los eventos son incompatibles: Si A y B son dos eventos incompatibles, es decir, no pueden ocurrir al mismo tiempo, la probabilidad de que ocurra A o B será la suma de las probabilidades de que cada evento ocurra por separado.

    .row.justify-content-center.align-items-center
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img132.svg', alt='')
        p(data-aos="fade-down").my-4 La probabilidad de obtener una bola blanca es:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img133.svg', alt='')
        p(data-aos="fade-down").my-4 La probabilidad de obtener una bola negra es: 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img134.svg', alt='')
        p(data-aos="fade-down").my-4 Por lo tanto, la probabilidad de obtener una bola blanca o una bola negra es:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img135.svg', alt='')        
      .col-lg-7
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img131.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img136.svg', alt='')

      .col-lg-7
        p(data-aos="fade-down") Cómo calcular la probabilidad de que ocurra A o B, si los eventos son compatibles: si A y B son dos eventos compatibles, es decir, pueden ocurrir al mismo tiempo, entonces la probabilidad de que ocurran A o B será: 
        img.img-t.img-a.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img137.svg', alt='')        
        p(data-aos="fade-down") P (A ∩ B) dice: la probabilidad de que ocurran A y B.

    .bloque-texto-a.color-acento-botones.p-4.p-md-5.mt-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-down") Esta vez, la suma de las probabilidades de que cada evento ocurra por separado debe restarse de la probabilidad de que los dos eventos ocurran al mismo tiempo. Por ejemplo, calcular la probabilidad de que al lanzar un dado el número obtenido sea par o que sea un 4. En este caso, el evento “obtener un número par” y el evento “obtener un 4” son compatibles, porque si obtenemos un 4 están sucediendo ambos eventos a la vez. Por lo tanto, la probabilidad de obtener 4 o un número par se calculará con la fórmula: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img138.svg', alt='')
        p(data-aos="fade-down").my-4 La probabilidad de obtener un número par es:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img139.svg', alt='')
        p(data-aos="fade-down").my-4 La probabilidad de obtener un 4 es:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img140.svg', alt='')
        p(data-aos="fade-down").my-4 La probabilidad de obtener un número par y un 4 es:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img141.svg', alt='')        
      .col-lg-7
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img142.svg', alt='')
 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img143.svg', alt='')

      .col-lg-7
        p(data-aos="fade-down") Solo hay una posibilidad entre 6 ya que 4 es el único número que cumple ambos eventos al mismo tiempo. Finalmente, la probabilidad de obtener un número par o 4 es:
        img.img-t.img-a.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/img144.svg', alt='')        
        p(data-aos="fade-down") Que la sustitución de cada término por su valor nos queda a nosotros:
        img.img-t.img-a.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img145.svg', alt='')        

    .row.justify-content-start.align-items-center.mt-5       
      .col-lg-3.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Probabilidad condicionada] 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img146.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la teoría de la probabilidad, la probabilidad condicionada o condicional es una medida de la probabilidad de que ocurra un evento, dado que ya ha ocurrido otro evento (por suposición, presunción, afirmación o evidencia). Veamos:  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="fade-down") Si el evento de interés es A y se sabe o se supone que ocurrió el evento B, “la probabilidad condicional de A dado B “, o “la probabilidad de A bajo la condición B “, generalmente se escribe como P (A | B) y ocasionalmente PB(A). Esto también se puede entender como la fracción de probabilidad B que se cruza con A: 
      .col-lg-4
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img147.svg', alt='')

    .row.justify-content-start.align-items-center.mt-5       
      .col-lg-2.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Por ejemplo…] 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="fade-down") La probabilidad de que una persona determinada tenga tos en un día determinado puede ser solo del 5%. Pero si sabemos o asumimos que la persona está enferma, es mucho más probable que esté tosiendo. Por ejemplo, la probabilidad condicional de que alguien no esté bien tosiendo podría ser del 75%, en cuyo caso tendríamos que P (Tos) = 5% y P (Tos | Enfermo) = 75%. Aunque, no tiene que haber relación o dependencia entre A y B, y no tienen que ocurrir simultáneamente. 
        .row.justify-content-start.align-items-center.mt-5       
          .col-lg-4.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Teniendo en cuenta que… ]
        p(data-aos="fade-down").mt-5 P (A | B) puede o no ser igual a P (A) (la probabilidad incondicional de A). Si P (A | B) = P (A), entonces se dice que los eventos A y B son independientes: en tal caso, el conocimiento sobre cualquiera de los eventos no altera la probabilidad de los demás. P (A | B) (la probabilidad condicional de A dado B) típicamente difiere de P (B | A). 

      .col-lg-4
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img148.svg', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-4
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img149.svg', alt='')    
      .col-lg-8
        .row.justify-content-start.align-items-center.mt-4       
          .col-lg-2.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Por ejemplo…]      
        p(data-aos="fade-down").mt-4 Si una persona tiene fiebre del dengue, podría tener 90% de probabilidades de dar positivo en la prueba de la enfermedad. En este caso, lo que se está midiendo es que si ha ocurrido el evento B (tener dengue), la probabilidad de A (resultado positivo) dado que B ocurrió es del 90%: P (A | B) = 90%. Alternativamente, si una persona da positivo en la prueba del dengue, es posible que solo tenga 15% de probabilidades de tener esta rara enfermedad debido a las altas tasas de falsos positivos. 

        .row.justify-content-start.align-items-center.mt-4       
          .col-lg-2.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b En este caso…]
        p(data-aos="fade-down").mt-4 La probabilidad del evento B (tener dengue) dado que el evento A (resultado positivo) que ha ocurrido es 15%: P (B | A) = 15% Ahora debería ser evidente que igualar falsamente las dos probabilidades puede conducir a varios errores de razonamiento, lo que comúnmente se ve a través de falacias de tasa base.

    .row.justify-content-center.align-items-center.mt-2 
      .col-lg-8
        .row.justify-content-start.align-items-center.mt-5       
          .col-lg-11.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Si bien las probabilidades condicionales pueden proporcionar información extremadamente útil…]      
        p(data-aos="fade-down").mt-4 A menudo se proporciona o se dispone de información limitada. Por lo tanto, puede ser útil revertir o convertir una probabilidad de condición usando el teorema de Bayes:

        img.img-t.img-a.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img150.svg', alt='')   

        p(data-aos="fade-down").mt-4 Otra opción es mostrar probabilidades condicionales en una tabla de probabilidad condicional para iluminar la relación entre eventos.

      .col-lg-4
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img151.svg', alt='')   

    Separador 
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.9 Combinatoria: variaciones, permutaciones y combinaciones 

    .row.justify-content-center.align-items-center.mt-2 
      .col-lg-4
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img152.svg', alt='') 
      .col-lg-8
        p(data-aos="fade-down") La combinatoria se ocupa de conjuntos finitos y sus objetos básicos son permutaciones, variaciones y combinaciones (y se refieren tanto a las operaciones como a los resultados de estas operaciones). Dado que siempre es posible identificar m y n elementos conjuntos con los conjuntos {1, 2, …, m} y {1, 2, …, n}, es suficiente considerar estos conjuntos, y esta situación es una a uno estándar. Recordamos estas tres nociones (en sus dos apariencias: cuándo se permiten las repeticiones y cuándo no). 

    p(data-aos="fade-down") Esto se hace comenzando con variaciones sin repeticiones (validando esta decisión por una relación directa con la cardinalidad de todos los mapas finitos), aunque se podría comenzar con combinaciones o con permutaciones. Al cumplir con la permutación, hay que prestar una especial atención a las operaciones con factorial.

    .tarjeta.color-secundario.p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/book.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b En el Anexo 5 - Combinatoria - Variaciones, permutaciones y combinaciones], se encuentran las respectivas fórmulas para un caso determinado y su respectivo ejemplo.
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/anexo_5_combinatoria_variaciones_permutaciones_y_combinaciones.pdf')" target="_blank")
                span Descargar PDF
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
