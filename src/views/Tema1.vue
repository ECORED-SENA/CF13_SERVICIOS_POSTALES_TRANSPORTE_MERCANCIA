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
      .col-lg-4.my-2           
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.png', alt='')

    .row.justify-content-start.align-items-center.ps-3.mt-5         
      .col-lg-2.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Idealmente…]  

    p(data-aos="fade-down").mt-5 La media indica la región donde caen la mayoría de los valores en una distribución. Los estadísticos se refieren a ella como la ubicación central de una distribución. Puede pensar en ello como la tendencia de los datos a agruparse en torno a un valor medio. Sin embargo, la media no siempre encuentra el centro de los datos. Es sensible a datos sesgados y valores extremos. Por ejemplo, cuando los datos están sesgados, pueden fallar.

    .row.justify-content-center.align-items-center.mt-5         
      .col-lg-12.col-color1.px-0.pb-3
        ol.lista-ol--cuadro(data-aos="fade-left")
          li 
            .lista-ol--cuadro__vineta
              span b
            p.mb-0.mt-1 #[b Tipos de medias]
        .row.justify-content-center.align-items-center         
          .col-11
            p(data-aos="fade-down") La media resume un conjunto de datos completo con un solo número que representa el punto central de los datos o el valor típico. También se conoce como promedio aritmético y es una de varias medidas de tendencia central.

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
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')
              p(data-aos="fade-down").my-4 Por ejemplo, la media armónica de los cinco valores: 4, 36, 45, 50, 75 es:
              img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img9.svg', alt='')  

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
          p(data-aos="fade-down").my-5 La mediana es la observación intermedia en un conjunto de datos. Para contextualizar qué significa, se calcula la mediana de un conjunto de datos de muestra sobre el peso infantil, así:

          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')
          p(data-aos="fade-down").my-5 En el siguiente conjunto de datos, ¿cuál es la observación intermedia? Bueno, antes que pueda resolver esto, tenemos que ordenar correctamente las observaciones de una manera lógica para que tengan sentido. Los ordenaremos de menor a mayor, como se muestra a continuación:

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
                    p sin embargo, en nuestro caso tenemos 12 observaciones, que es un número par. Esto significa que debemos tomar las dos observaciones del centro y promediarlas. En este caso, las dos observaciones en el medio son 42 y 49. Cuando tomamos el promedio de estos dos números (para hacer un promedio, sume los dos números (42 + 49 = 91) y divida ese número por la cuenta, que en este caso es 2), obtenemos 45,5. Entonces nuestra mediana es 45,5. 
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
              h3.mb-0 #[b Moda]
          p(data-aos="fade-down").my-5 Es el valor que aparece con mayor frecuencia en un conjunto de valores de datos. Si X es una variable aleatoria discreta, la moda es el valor x (es decir, X = x) en el que la función de masa de probabilidad toma su valor máximo. En otras palabras, es el valor que es más probable que se muestree. De esta manera:
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
                  .col-5.imgs-flotantes2                        
                    .color-fondo-text.bg-color(data-aos="fade-down")
                      .color-fondo-text__texto        
                        p Cuando la función de densidad de probabilidad de una distribución continua tiene múltiples máximos locales, es común referirse a todos los máximos locales como modos de la distribución. Esta distribución continua se denomina multimodal (en contraposición a unimodal). Un modo de una distribución de probabilidad continua se considera a menudo como cualquier valor x en el que su función de densidad de probabilidad tiene un valor máximo localmente, por lo que cualquier pico es un modo.
                      img.img-flotante2.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                         
                  .col-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')

                .row.justify-content-center.align-items-center
                  .col-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')                  
                  .col-5.imgs-flotantes2                       
                    .color-fondo-text2.bg-color(data-aos="fade-down")
                      .color-fondo-text2__texto        
                        p En distribuciones unimodales simétricas, como la distribución normal, la media (si está definida), la mediana y la moda coinciden. Para las muestras, si se sabe que se extraen de una distribución unimodal simétrica, la media de la muestra se puede utilizar como una estimación de la moda poblacional.
                      img.img-flotante2.mt-3(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
                .row.justify-content-center.align-items-center
                  .col-5.imgs-flotantes2                        
                    .color-fondo-text3.bg-color(data-aos="fade-down")
                      .color-fondo-text3__texto        
                        p Moda de una muestra: la moda de una muestra es el elemento que aparece con mayor frecuencia en la colección. Por ejemplo, la moda de la muestra [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17] es 6. Dada la lista de datos [1, 1, 2, 4, 4] su modo no es único. En tal caso, se dice que un conjunto de datos es bimodal, mientras que un conjunto con más de dos modos puede describirse como multimodal.
                      img.img-flotante2.mt-4(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
                  .col-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')

                .row.justify-content-center.align-items-center
                  .col-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')                  
                  .col-5.imgs-flotantes2                        
                    .color-fondo-text4.bg-color(data-aos="fade-down")
                      .color-fondo-text4__texto        
                        p Para una muestra de una distribución continua, como [0.935 …, 1.211 …, 2.430 …, 3.668 …, 3.874 …], el concepto es inutilizable en su forma bruta, ya que no hay dos valores será exactamente el mismo, por lo que cada valor ocurrirá exactamente una vez. Para estimar la moda de la distribución subyacente, la práctica habitual es discretizar los datos asignando valores de frecuencia a intervalos de igual distancia, como para hacer un histograma, reemplazando efectivamente los valorpico. es por los puntos medios de los intervalos a los que están asignados.  
                      img.img-flotante2.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                       

                .row.justify-content-center.align-items-center.pb-5
                  .col-5.imgs-flotantes2                      
                    .color-fondo-text5.bg-color(data-aos="fade-down")
                      .color-fondo-text5__texto        
                        p.mb-5 Para muestras pequeñas o medianas, el resultado de este procedimiento es sensible a la elección del ancho del intervalo si se elige demasiado estrecho o demasiado ancho; por lo general, se debe tener una fracción considerable de los datos concentrada en un número relativamente pequeño de intervalos (5 a 10), mientras que la fracción de los datos que quedan fuera de estos intervalos también es considerable. Un enfoque alternativo es la estimación de la densidad del núcleo, que esencialmente difumina las muestras puntuales para producir una estimación continua de la función de densidad de probabilidad que puede proporcionar una estimación del modo.
                      img.img-flotante2.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')   
                  .col-5.my-3      
                    img.img-a.img-t.mt-4(src='@/assets/curso/temas/img26.svg', alt='')
                  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
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
