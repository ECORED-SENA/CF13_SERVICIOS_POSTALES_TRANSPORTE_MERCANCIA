<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Métodos para procesar, graficar y analizar datos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img154.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después de la recolección de datos, limpieza inicial y clasificación de los mismos se sigue un conjunto de procedimientos para obtener los datos / información deseados del trabajo de campo que se desea ejecutar, para procesar, graficar y analizar los hechos de manera lógica y científica.

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1. Métodos de investigación 
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-4.imgs-flotantes1.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img153.jpg', alt='')
        img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/sobre2.svg', alt='Imagen decorativa')              
      .col-lg-8
        p(data-aos="fade-down") Estos métodos son procesos que se utilizan para recopilar datos. Puede utilizar estos datos para analizar métodos o procedimientos actuales y encontrar información adicional sobre un tema. Los profesionales utilizan métodos de investigación mientras estudian medicina, comportamiento humano y otros temas académicos. Hay dos categorías principales de métodos de investigación: métodos de investigación cualitativa y métodos de investigación cuantitativa; ahora se ejemplifica la mirada cuantitativa: 
        .row.justify-content-start.align-items-center.my-4.ps-3(data-aos="flip-down")     
          .col-lg-7.bg-modal-p3.p-2
            h5.mb-0.text-white #[b Los métodos de investigación cuantitativa…]      
        p(data-aos="fade-down") Implican el uso de números para medir datos. Los investigadores pueden utilizar el análisis estadístico para encontrar conexiones y significado en los datos. Los métodos de investigación cualitativa implican explorar información y datos no numéricos. Estos métodos de investigación también examinan cómo las personas pueden conectar el significado con sus experiencias y emociones. 

    .row.justify-content-start.align-items-center.mt-5       
      .col-lg-4.green-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Tipos de métodos de investigación:] 

    TabsA.color-secundario.mt-5(data-aos="fade-left")
      .tarjeta.color-secundario--borde.p-4(titulo="Método sintético")    
        .row.justify-content-center.align-items-center        
          .col-lg-11 
            h5  Método sintético 
            .row.justify-content-center.align-items-center        
              .col-lg-3.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/img155.svg', alt='')

              .col-lg-9
                p.mb-0 Busca la reconstrucción de componentes dispersos de un objeto o evento para estudiarlos en profundidad y crear un resumen de cada detalle. El proceso de este método se desarrolla de lo abstracto a lo concreto para aglutinar cada segmento que conforma una unidad y poder comprenderlo.                  

      .tarjeta.color-secundario--borde.p-4(titulo="Método analítico")    
        .row.justify-content-center.align-items-center        
          .col-lg-11 
            h5  Método analítico
            .row.justify-content-center.align-items-center        
              .col-lg-3.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/img156.svg', alt='')

              .col-lg-9
                p Se encarga de desagregar los apartados que componen el conjunto del caso a estudiar, estableciendo las relaciones de causa, efecto y naturaleza. A partir de los análisis realizados, se pueden generar analogías y nuevas teorías para comprender los comportamientos.

            p Se desarrolla en la comprensión de lo concreto a lo abstracto, descomponiendo los elementos que constituyen la teoría general para estudiar con mayor profundidad cada elemento por separado y, de esta manera, conocer la naturaleza del fenómeno de estudio para revelar su esencia. Mediante el razonamiento y la síntesis se enfatiza la profundidad del análisis de forma metódica y concisa para obtener un conocimiento profundo de cada parte y particularidad de lo estudiado.

      .tarjeta.color-secundario--borde.p-4(titulo="Método inductivo")    
        .row.justify-content-center.align-items-center        
          .col-lg-11 
            h5  Método inductivo 
            .row.justify-content-center.align-items-center        
              .col-lg-3.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/img157.svg', alt='')

              .col-lg-9
                p.mb-0 Con este método se pueden analizar situaciones particulares a través de un estudio individual de los hechos que formule conclusiones generales, que ayudan al descubrimiento de temas y teorías generalizadas que parten de la observación sistemática de la realidad. Es decir, se refiere a la formulación de hipótesis a partir de lo vivido y observado de los elementos de estudio para definir leyes generales. Consiste en la recogida de datos ordenados en variables en busca de regularidades.
 
      .tarjeta.color-secundario--borde.p-4(titulo="Método deductivo")    
        .row.justify-content-center.align-items-center        
          .col-lg-11 
            h5  Método deductivo
            .row.justify-content-center.align-items-center        
              .col-lg-3.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/img158.svg', alt='')

              .col-lg-9
                p Se refiere a un método desde lo general para enfocarse en lo específico a través de razonamientos lógicos e hipótesis que pueden sustentar conclusiones. Este proceso se basa en los análisis anteriores, leyes y principios validados y probados para ser aplicados a casos particulares.
            p En este método, todo el esfuerzo de investigación se basa en las teorías recopiladas, no en lo observado o experimentado; forma parte de una premisa para delinear y concluir la situación de estudio, deduciendo el camino a seguir para implementar las soluciones. 


      .tarjeta.color-secundario--borde.p-4(titulo="Método comparativo")    
        .row.justify-content-center.align-items-center        
          .col-lg-11 
            h5  Método comparativo
            .row.justify-content-center.align-items-center        
              .col-lg-3.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/img159.svg', alt='')

              .col-lg-9
                p Es una búsqueda de similitudes y comparaciones sistemáticas que sirve para la verificación de hipótesis para encontrar parentesco y se basa en la documentación de múltiples casos para realizar análisis comparativos. Básicamente consiste en poner dos o más elementos uno al lado del otro para encontrar diferencias y relaciones y así definir un caso o problema y poder actuar en el futuro.
            p El uso de la comparación es útil para comprender un tema, ya que puede conducir a nuevas hipótesis o teorías de crecimiento y mejora. Tiene varias etapas en las que destaca la observación, descripción, clasificación, comparación en sí y su conclusión. 

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Métodos de procesamiento de datos más conocidos 
    .bloque-texto-a.color-acento-botones.p-4.p-md-5.mt-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-down") La recopilación, manipulación y procesamiento de datos recopilados para el uso requerido se conoce como procesamiento de datos, es una técnica realizada normalmente por una computadora; el proceso incluye la recuperación, transformación o clasificación de información. Sin embargo, el procesamiento de datos depende en gran medida de lo siguiente:

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-11
        .row.justify-content-evenly.align-items-stretch        
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img160.svg', alt='')
            p.text-center.mb-0.mt-2 #[b El volumen de datos que deben procesarse]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-left")
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img161.svg', alt='')
            p.text-center.mb-0.mt-2 #[b La complejidad de las operaciones de procesamiento de datos]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-down")        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img162.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Capacidad y tecnología incorporada del sistema informático respectivo]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")       
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img163.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Habilidades técnicas]
          .col-lg-2.bg-modal.p-3.my-3(data-aos="fade-right")      
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img164.svg', alt='')
            p.text-center.mb-0.mt-2 #[b Limitaciones de tiempo]  

    p(data-aos="fade-down").mt-5 #[b Para completar la temática, se invita a realizar un recorrido por los diferentes métodos de procesamiento de datos:]

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center.align-items-center.pb-4(numero="1" titulo="Programación de usuario único")
            .col-11
              p.mb-0 Generalmente lo hace una sola persona para su uso personal. Esta técnica es adecuada, incluso, para oficinas pequeñas.

          .row.justify-content-center.align-items-center.pb-4(numero="2" titulo="Programación múltiple")
            .col-11
              p.mb-0 Esta técnica proporciona la posibilidad de almacenar y ejecutar más de un programa en la Unidad Central de Procesamiento (CPU) simultáneamente. Además, la técnica de programación múltiple aumenta la eficiencia de trabajo global del ordenador respectivo.
                
          .row.justify-content-center.align-items-center.pb-4(numero="3" titulo="Procesamiento en tiempo real")
            .col-11
              p.mb-0 Esta técnica facilita que el usuario tenga un contacto directo con el sistema informático, y el procesamiento de datos. Esta técnica también se conoce como el modo directo o la técnica del modo interactivo y se desarrolla exclusivamente para realizar una tarea. Es una especie de procesamiento en línea, que siempre permanece en ejecución.
 
          .row.justify-content-center.align-items-center.pb-4(numero="4" titulo="Procesamiento en línea")
            .col-11
              p.mb-0 Esta técnica facilita la entrada y ejecución de datos directamente; por lo tanto, no se almacena ni se acumula primero y luego se procesa. La técnica está desarrollada de tal manera que reduce los errores de entrada de datos, ya que valida los datos en varios puntos y también asegura que solo se ingresen los datos corregidos. Esta técnica se usa ampliamente para aplicaciones en línea.

          .row.justify-content-center.align-items-center.pb-4(numero="5" titulo="Procesamiento de tiempo compartido")
            .col-11
              p Esta es otra forma de procesamiento de datos en línea que facilita a varios usuarios compartir los recursos de un sistema informático en línea. Esta técnica se adopta cuando se necesitan resultados rápidamente. Además, como sugiere el nombre, este sistema se basa en el tiempo.
              .cajon.color-primario.p-4.mt-4
                p.mb-0 A continuación, se presentan algunas de las principales ventajas del procesamiento de tiempo compartido:

              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar1
                    .p-4.ps-1
                      p.mb-0 Se pueden atender varios usuarios simultáneamente.
              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar2
                    .p-4.ps-1
                      p.mb-0 Todos los usuarios tienen casi la misma cantidad de tiempo de procesamiento.
              .row.mt-4
                .col-lg-12.tarjeta-avatar-b
                  .tarjeta-avatar-b__img.mr
                    img.img-w(src='@/assets/curso/temas/img100.svg' alt='AvatarTop')
                  .tarjeta.color-primario.bg-avatar3
                    .p-4.ps-1
                      p.mb-0 Existe la posibilidad de interacción con los programas en ejecución.

          .row.justify-content-center.align-items-center.pb-4(numero="6" titulo="Procesamiento en tiempo real")
            .col-11
              p Esta es una técnica de procesamiento de datos especializada en la que varias computadoras (que están ubicadas de forma remota) permanecen interconectadas con una sola computadora host que forma una red de computadoras. 
              .cajon.color-primario.p-4.mt-4
                p.mb-0 Todos estos sistemas informáticos permanecen interconectados con una red de comunicaciones de alta velocidad. Esto facilita la comunicación entre computadoras, sin embargo, el sistema informático central mantiene la base de datos maestra y supervisa en consecuencia.              
      .col-lg-5(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/temas/img165.svg', alt='')

    .bg_img
      Separador 
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 2.3  Tipos de gráficas para el análisis de datos         
      p(data-aos="fade-down") Es necesario conocer las diferentes gráficas para realizar un análisis de datos; a saber:

      .tarjeta.tarjeta--azul.p-4.mt-5(data-aos="fade-left")                
        SlyderA
          .row.justify-content-center.align-items-center
            .col-lg-5.imgs-flotantes2
              .row.justify-content-start.align-items-center.ps-3(data-aos="flip-down")     
                .col-lg-8.bg-modal-p3.p-2
                  h5.mb-0.text-white #[b Tipos de gráficas para el análisis de datos]                        
              .color-fondo-text.bg-color.mt-4
                .color-fondo-text__texto        
                  p Las investigaciones muestran que creamos 2,5 trillones de bytes de datos todos los días. ¿Qué tipos de visualización de datos utiliza para digerir correctamente todos esos datos?

                img.img-flotante2.d-none.d-lg-block.mt-4(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                         
            .col-lg-5.my-3      
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img167.svg', alt='')

          .row.justify-content-center.align-items-center
            .col-lg-5.my-3      
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img168.svg', alt='')                  
            .col-lg-5.imgs-flotantes2
              .row.justify-content-start.align-items-center.ps-3(data-aos="flip-down")     
                .col-lg-8.bg-modal-p3.p-2
                  h5.mb-0.text-white #[b Si bien esta es una cifra asombrosa,]                                     
              .color-fondo-text2.bg-color.mt-4
                .color-fondo-text2__texto        
                  p solo aumentará a medida que evoluciona Internet de las cosas. De hecho, el 90% de los datos del mundo se generaron solo en los últimos dos años. Con tanta información accesible al alcance de la mano, es importante comprender cómo organizarla en información analizable y procesable. 

                img.img-flotante2.d-none.d-lg-block.mt-3(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
          .row.justify-content-center.align-items-center
            .col-lg-5.imgs-flotantes2
              .row.justify-content-start.align-items-center.ps-3(data-aos="flip-down")     
                .col-lg-3.bg-modal-p3.p-2
                  h5.mb-0.text-white #[b Sin embargo,]                                      
              .color-fondo-text3.bg-color.mt-4
                .color-fondo-text3__texto        
                  p si administra varios activos de contenido con múltiples fuentes de datos, puede resultar difícil determinar cómo dar forma a su estrategia de análisis. Aquí es donde ayuda conocerlos mejores tipos de visualización de datos.

                img.img-flotante2.d-none.d-lg-block.mt-4(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa') 
            .col-lg-5.my-3      
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img169.svg', alt='')

          .row.justify-content-center.align-items-center
            .col-lg-5.my-3      
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img170.svg', alt='')                  
            .col-lg-5.imgs-flotantes2
              .row.justify-content-start.align-items-center.ps-3(data-aos="flip-down")     
                .col-lg-6.bg-modal-p3.p-2
                  h5.mb-0.text-white #[b La visualización de datos…]                                      
              .color-fondo-text4.bg-color.mt-4
                .color-fondo-text4__texto        
                  p es el proceso de convertir sus datos en representaciones gráficas que comunican relaciones lógicas y conducen a una toma de decisiones más informada.

                img.img-flotante2.d-none.d-lg-block.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')                       

          .row.justify-content-center.align-items-center.pb-5
            .col-lg-5.imgs-flotantes2
              .row.justify-content-start.align-items-center.ps-3(data-aos="flip-down")     
                .col-lg-3.bg-modal-p3.p-2
                  h5.mb-0.text-white #[b En resumen,]                                    
              .color-fondo-text5.bg-color.mt-4
                .color-fondo-text5__texto        
                  p.mb-5 la visualización de datos es la representación de datos en un formato gráfico o pictórico. Permite a los tomadores de decisiones clave ver análisis complejos en un diseño visual, para que puedan identificar nuevos patrones o comprender conceptos desafiantes. 

                img.img-flotante2.d-none.d-lg-block.mt-5(src='@/assets/curso/temas/sobre.svg', alt='Imagen decorativa')   
            .col-lg-5.my-3      
              img.img-a.img-t.mt-4(src='@/assets/curso/temas/img171.svg', alt='')

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Desde las métricas del sitio web y el desempeño del equipo de ventas hasta los resultados de las campañas de marketing y las tasas de adopción de productos, existe una variedad de puntos de datos que su organización necesita rastrear. Cuando se tienen las manos ocupadas haciendo malabares con varios proyectos a la vez, se necesita un método de informes rápido y eficaz que le permita expresar un punto claro. ¿Se sabe qué tipo de método de visualización de datos utilizar? 

    p(data-aos="fade-down").mt-5 Algunos de los tipos más comunes de gráficos y gráficos de visualización de datos incluyen:


    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-8.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img172.svg', alt='')

      .col-lg-4
        ul.lista-ul--color
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de columnas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de barras.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de barras apiladas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de columnas apiladas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de área.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de doble eje.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de líneas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de Mekko.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico circular.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de cascada.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de burbujas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de diagrama de dispersión.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de viñetas.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Gráfico de embudo.
          li(data-aos="fade-down") 
            i.fas.fa-caret-right.i-color
            p.mb-0 Mapa de calor.
       
    .bloque-texto-a.color-acento-botones.p-4.p-md-5.mt-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-down") Si bien todos sirven para agilizar y mejorar la interpretación de datos, no todos son apropiados para el mismo trabajo. Elegir la ayuda visual adecuada es la clave para evitar la confusión del usuario y asegurarse de que su análisis sea preciso. Ahora se analizarán 10 de estos 15 tipos de tablas y gráficos.

    .row.justify-content-start.align-items-center.mt-5(data-aos="flip-down")     
      .col-lg-8.bg-modal-p3.p-2
        h5.mb-0.text-white #[b Explicación de 10 tipos de visualización de datos]

    p(data-aos="fade-down").mt-5 Existen innumerables tipos diferentes de tablas, gráficos y otras técnicas de visualización que pueden ayudar a los analistas a representar y transmitir datos importantes. Echemos un vistazo a 10 de los más comunes:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de columnas")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este es uno de los tipos más comunes de herramientas de visualización de datos. Hay una razón por la que aprendemos a hacer gráficos de columnas en la escuela primaria. Son una forma simple y tradicional de mostrar una comparación entre diferentes conjuntos de datos. También se puede utilizar un gráfico de columnas para realizar un seguimiento de los conjuntos de datos a lo largo del tiempo. 

              p.mb-0 Un gráfico de columnas incluirá etiquetas de datos a lo largo del eje horizontal (X) con métricas o valores medidos presentados en el eje vertical (Y), también conocido como el lado izquierdo del gráfico. El eje Y normalmente comenzará en 0 y llegará tan alto como la medida más grande que está rastreando.
     
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img173.png', alt='')

          P Puede utilizar gráficos de columnas para realizar un seguimiento de las cifras de ventas mensuales, los ingresos por página de destino o medidas similares. Los colores consistentes ayudan a mantener el enfoque en los datos en sí, aunque puede introducir colores de acento para enfatizar puntos de datos importantes o para realizar un seguimiento de los cambios a lo largo del tiempo.

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de barras")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p A menudo puede usar un gráfico de barras y un gráfico de columnas de la misma manera, aunque los gráficos de columnas limitan su etiqueta y el espacio de comparación. Es mejor seguir con un gráfico de barras si:
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Trabaja con etiquetas más largas.
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Visualiza números negativos.
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Compara 10 o más elementos.
     
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img174.png', alt='')

          P En este caso, sus etiquetas de datos irán a lo largo del eje Y, mientras que las medidas estarán a lo largo del eje X.  

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de barras apiladas")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p ¿Está comparando muchos elementos diferentes? ¿Desea realizar un seguimiento del crecimiento individual de cada conjunto de datos en sí, junto con el crecimiento del grupo como un todo colectivo? Para revelar esta relación de parte a todo, se creará un gráfico de barras apiladas. 

              p Al eliminar el color de este gráfico, se vería similar a un gráfico de barras estándar. El diseño “apilado” representa la combinación de colores contrastantes de este gráfico. Estos colores se asignan a una leyenda que acompaña a su mapa.

            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img175.png', alt='')

          P Por ejemplo, es posible que desee realizar un seguimiento del rendimiento de cuatro tipos diferentes de productos en cinco estrategias de ventas diferentes. La estrategia 1 a la estrategia 5 estará en su eje X, mientras que las cifras de ventas estarán en el eje Y.  
          .cajon.color-primario.p-4.mt-4
            p.mb-0 Sin embargo, dentro de cada categoría de estrategia, tendrá cuatro bloques de colores diferentes. Cada uno representa uno de los tipos de productos. De esta manera, puede determinar qué estrategia funcionó mejor para cada tipo de producto en su conjunto, así como qué productos funcionaron bien dentro de cada estrategia.            

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de líneas")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este un tipo de gráficos estándar que se reconoce al instante. Un gráfico de líneas está diseñado para revelar tendencias, avances o cambios que ocurren a lo largo del tiempo. Como tal, funciona mejor cuando el conjunto de datos es continuo en lugar de estar lleno de arranques y paradas.

              p Como un gráfico de columnas, las etiquetas de datos en un gráfico de líneas están en el eje X mientras que las medidas están en el eje Y.

              p Se deben usar líneas continuas y evite trazar más de cuatro líneas, ya que cualquier cosa por encima de esto puede distraer; además, hay que  planificar el espacio suficiente para que tus líneas midan alrededor de 2/3 de la altura del eje Y.
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img176.png', alt='')

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de doble eje")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este tipo de gráfico se utiliza para presentar la relación entre dos variables. Más específicamente, estos gráficos son útiles para demostrar la relación entre dos o más medidas con diferente amplitud y escala. Los gráficos de doble eje ayudan a presentar mucha información en el espacio limitado presente en su tablero y también le permiten comprender las tendencias que, de lo contrario, podría haber perdido.
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img177.png', alt='')

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico Mekko")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este es un gráfico con el que podría estar menos familiarizado, a menos que se encuentre en el espacio de análisis de datos. Un gráfico de Mekko tiene un diseño similar a un gráfico de barras apiladas, con una excepción importante: en lugar de seguir la progresión del tiempo, el eje X mide otra dimensión de sus conjuntos de datos. 
              p Con este diseño, puede comparar valores, medir la composición de cada valor y analizar la distribución de datos, todo al mismo tiempo.  
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img178.png', alt='')

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico circular")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Un gráfico circular representa un número estático, dividido en categorías que constituyen sus porciones individuales; este representará cantidades numéricas en porcentajes. Cuando sume todas las porciones separadas, deberían sumar el 100%. Estos son especialmente útiles en marketing digital, ya que puede usarlos para mostrar un desglose de:
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Cuotas de mercado.
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Gastos de marketing.
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Demografía del cliente.
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Uso del dispositivo del cliente (para pruebas de UX).
                li
                  i.fas.fa-caret-right.i-color
                  p.mb-0 Fuentes de tráfico online.     
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img179.png', alt='')
          .cajon.color-primario.p-4.mt-4
            p.mb-0 Si se desea que su gráfico circular tenga mucha diferenciación entre los sectores, es mejor limitar la cantidad de categorías que ilustra. 

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico circular")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este tipo de visualización también se denomina diagrama de dispersión y representa diferentes variables trazadas a lo largo de dos ejes. Tenga en cuenta que tanto el eje X como el eje Y son ejes de valor, ya que un gráfico de dispersión no utiliza un eje de categoría.
              p Estos tipos de visualización de datos funcionan mejor cuando analiza varios puntos de datos y busca similitudes dentro del conjunto de datos. Al hacerlo, se puede notar cualquier valor atípico y también obtener una comprensión más clara de la distribución general de sus datos.  
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img180.png', alt='')
          .cajon.color-primario.p-4.mt-4
            p.mb-0 Digamos, por ejemplo, que desea medir las puntuaciones de los comentarios de los clientes que recibe su organización. También quería ver si los tiempos de respuesta de su mesa de servicio tienen algún impacto en esos puntajes. Los puntajes de retroalimentación varían de 0 a 10, por lo que esas serían sus medidas del eje Y. En su eje X, etiquetaría desde 0 hasta el tiempo de respuesta más largo permitido, como una hora. Luego, trazaría los puntajes que recibió, notando patrones y tendencias que pueden ayudarlo a informar sus esfuerzos de servicio.         

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de burbujas")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Al igual que un gráfico de dispersión, un gráfico de burbujas también puede mostrar relaciones o distribución. En esta variación, sin embargo, reemplazará los puntos de datos con burbujas. También variará los tamaños de la burbuja para representar un tercer conjunto de datos.
              p Al igual que con un gráfico de dispersión, uno de burbujas no utiliza un eje de categorías. Más bien, trazará los conjuntos de datos como valores X, valores Y y ahora, valores Z (tamaño de burbuja). 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img181.png', alt='')         

      .row.justify-content-center.align-items-center.pb-4(titulo="Gráfico de viñetas")
        .col-11
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Este tipo de gráfico puede ayudar a realizar un seguimiento visual de su progreso. Similar al diseño gráfico de barras, estos también incorporan otros elementos visuales. Al usar un gráfico de viñetas, comenzará con una medida principal, y luego comparará esa medida con otra (o múltiple) para encontrar un significado y una conexión más profundos. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/img182.png', alt='')               

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img183.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora que hemos explorado los diferentes tipos de gráficos, cuadros y mapas de visualización de datos, analicemos brevemente algunas de las razones por las que podría necesitar la visualización de datos en primer lugar. Si no sabe qué tipo de visual funcionará mejor para su empresa, es útil comprender las principales funciones comerciales que puede ofrecer la visualización de datos. Aquí están los cinco principales a considerar: 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center.align-items-center.pb-4(numero="1" titulo="Comparación de valores")
            .col-11
              p Como analistas de datos, ve su parte justa de conjuntos de datos. Cuando desee comparar las diferencias y similitudes entre estos conjuntos, los gráficos son ideales. Revelan fácilmente los valores altos y bajos de un conjunto en particular para que pueda notar las principales diferencias, brechas y otras tendencias. Si necesita crear un gráfico de comparación, los siguientes tipos de visualizaciones son apropiados:   
              .row.justify-content-center.align-items-center
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de columnas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de viñetas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de Mekko.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico circular.
    
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de barras.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de líneas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de dispersión. 

              .cajon.color-primario.p-4.mt-4
                p.mb-0 Cualquiera de estas técnicas de visualización le permite escanear grandes cantidades de datos y aún así derivar patrones relevantes e informativos de ellos.

          .row.justify-content-center.align-items-center.pb-4(numero="2" titulo="Mostrar composición")
            .col-11
              p También es posible que deba dividir sus conjuntos de valores, mostrando cómo las unidades individuales afectan el panorama general. Por ejemplo, es posible que desee realizar un seguimiento del acceso móvil general en su sitio web por tipo de dispositivo o ubicación geográfica. O quizá desee saber qué elementos de su reciente campaña de marketing digital resultaron ser los más exitosos. En este caso, puede utilizar cualquiera de estos tipos de visualizaciones de datos:
  
              .row.justify-content-center.align-items-center
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico circular.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de barras apiladas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de Mekko.    
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de columnas apiladas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de área.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de cascada.

              .cajon.color-primario.p-4.mt-4
                p.mb-0 Todas estas representaciones permiten a los usuarios medir los niveles de desempeño individuales para determinar su efecto en el conjunto de datos general. 

          .row.justify-content-center.align-items-center.pb-4(numero="3" titulo="Determinar la distribución")
            .col-11
              p ¿Está tratando de comprender la distribución general de sus datos? Si es así, un gráfico de distribución mostrará todos los posibles intervalos o valores del conjunto de valores, así como la frecuencia con la que ocurren. A partir de esta visualización, puede identificar las tendencias normales, así como cualquier valor atípico que pueda alterarlas. También puede obtener una imagen clara de qué tan amplio es el rango entre sus valores de información. Puede utilizar los siguientes tipos de visualizaciones de datos cuando necesite determinar la distribución:
  
              .row.justify-content-center.align-items-center
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de dispersión.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de Mekko.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de líneas.
   
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de columnas.
                    li
                      i.fas.fa-caret-right.i-color                      
                      p.mb-0 Gráfico de barras.

          .row.justify-content-center.align-items-center.pb-4(numero="4" titulo="Investigación de tendencias")
            .col-11
              p ¿Terminó una campaña publicitaria televisiva reciente? ¿Qué tal el lanzamiento de un nuevo producto? 
              p Una vez que el polvo se asiente, es hora de volver al trabajo, es su trabajo ver si esos esfuerzos tuvieron éxito. Cuando desee determinar cómo se desempeñó un conjunto de datos en particular durante un período de tiempo establecido, estos tipos de visualizaciones funcionan bien:
  
              .row.justify-content-start.align-items-center
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de líneas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de líneas de doble eje.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de columnas.
 
          .row.justify-content-center.align-items-center.pb-4(numero="5" titulo="Comprensión de las relaciones en diferentes tipos de visualización de datos")
            .col-11
              p A veces, la mejor manera de comprender una variable dada es ver cómo se relaciona con una o varias otras variables. Por ejemplo, una variable podría tener un efecto positivo o negativo en otra. Puede utilizar estos tipos de gráficos para representar visualmente la relación entre las cosas:
  
              .row.justify-content-start.align-items-center
                .col-lg-6
                  ul.lista-ul--color
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de dispersión.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de burbujas.
                    li
                      i.fas.fa-caret-right.i-color
                      p.mb-0 Gráfico de líneas.
 
      .col-lg-5(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/temas/img184.png', alt='')


    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Herramientas software más conocidas para procesar, graficar y analizar datos
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4.imgs-flotantes.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img185.jpg', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/box.svg', alt='Imagen decorativa')
      .col-lg-8
        p(data-aos="fade-down") Las herramientas de software de análisis de datos permiten a las empresas analizar grandes almacenes de datos para obtener una gran ventaja competitiva. El software de análisis de datos puede extraer datos que rastrean una amplia gama de actividades comerciales, desde las ventas actuales hasta el inventario histórico, y procesarlos en función de las consultas de los científicos de datos.
        p(data-aos="fade-down") Muchas tecnologías relacionadas permiten que el software de análisis cree sus resultados. Principalmente, estos incluyen herramientas de almacenamiento de datos, herramientas ETL, y - ahora más a menudo - el cálculo de la nube de infraestructura. Estas herramientas permiten conocer los datos que van desde el análisis predictivo, la inteligencia empresarial (un término que a menudo se usa indistintamente con el análisis de datos) y los datos estructurados y no estructurados. 

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 A medida que las herramientas de análisis evolucionan, utilizan cada vez más la inteligencia artificial y el aprendizaje automático. Esta IA y ML permiten “análisis aumentados”, lo que significa que los resultados de las consultas tienen mayor profundidad y detalle debido a las tecnologías avanzadas.
         
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="fade-down") Los resultados de una consulta de datos se muestran en un software de análisis de datos mediante un panel visual elaborado, generalmente con una serie de cuadros y gráficos codificados por colores que ilustran las líneas de tendencia empresarial. Estos cuadros de mando se pueden personalizar en función de las aportaciones del personal. También se pueden modificar con el tiempo para producir una representación más específica.
        p(data-aos="fade-down") Estas visualizaciones de datos en tiempo real son ahora un dispositivo de navegación fundamental para la mayoría de las empresas. Muchos factores están impulsando el crecimiento del mercado de software de análisis de datos, pero, en resumen: en la actualidad, apenas existe una empresa que pueda competir de manera efectiva sin la información de las herramientas de software de análisis de datos.
          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img185.jpg', alt='')

    .row.justify-content-start.align-items-center         
      .col-lg-5.blue-p.p-3(data-aos="fade-down")
        p(data-aos="fade-down").mb-0.text-white #[b Cómo seleccionar herramientas de software de análisis de datos:]

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img185.jpg', alt='')    
      .col-lg-8
        p(data-aos="fade-down") Cualquiera que entienda el mercado de software de análisis de datos le dirá que seleccionar una solución de software de análisis de datos es complicado. Mucho. Es complejo porque el software es complejo y solo se vuelve más complejo con el tiempo. Y es complicado por cómo debe encajar en su negocio; Se debe sopesar cualquier cantidad de variables matizadas para que una herramienta de software de análisis de datos se adapte bien a su organización.
          
        .row.justify-content-start.align-items-center.mt-5       
          .col-lg-7.green-p.p-3(data-aos="fade-down")
            p(data-aos="fade-down").mb-0.text-white #[b Principales Herramientas de software de análisis de datos:] 

        .row.justify-content-center.align-items-center.mt-4
          .col-lg-4
            ul.lista-ul--color
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 Tableau         
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 Microsoft
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 Qlik
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 ThoughtSpot
          .col-lg-4
            ul.lista-ul--color
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 MicroStrategy
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 Sisense
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 TIBCO
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 SAS
          .col-lg-4
            ul.lista-ul--color
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 IBM
              li(data-aos="fade-down") 
                i.fas.fa-caret-right.i-color
                p.mb-0 SAP  

    .tarjeta.color-secundario.p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/book.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Para tener una idea más clara y profunda de esta temática, diríjase al
              p.mb-0 #[b Anexo 6 ]- Principales herramientas y software de análisis de datos 2021.
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/anexo_6_principales_herramientas_y_software_de_analisis_de_datos_2021.pdf')" target="_blank")
                span Descargar PDF
                i.fas.fa-file-download                

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
