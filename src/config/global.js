export default {
  global: {
    componenteFormativo: 'Procesamiento y análisis de datos',
    descripcionCurso:
      'Un sistema de gestión eficiente es cuando los indicadores obtenidos son el resultado de un adecuado procesamiento y análisis de los datos. Es necesario desarrollar conocimiento y habilidades en diferentes métodos de procesamiento y análisis de datos para tener gran variedad al momento de determinar cuál es el adecuado dependiendo de los requerimientos del sistema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Probabilidad y estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Moda, media, mediana y desviación típica, estudio de variables continuas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Distribuciones bidimensionales, diagramas de dispersión y rectas de regresión',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Distribuciones discretas, distribución binomial, distribuciones continuas, distribución normal',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Muestreo, distribución de medias muéstrales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Estimación y prueba de hipótesis',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Formulario de muestreo y estimación',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Probabilidad de sucesos compatibles e incompatibles',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Cálculo de probabilidades y probabilidad condicionada',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Combinatoria: Variaciones, permutaciones y combinaciones',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos para procesar, graficar y analizar datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Métodos de investigación: métodos sintéticos, métodos analíticos, métodos inductivos, métodos deductivos, métodos comparativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de procesamiento de datos más conocidos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de gráficas para el análisis de datos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Herramientas <i>software</i> más conocidas para procesar, graficar y analizar datos',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto:
        'Tesis de Cero a 100 – TV. (2019). Guía básica para análisis estadístico de datos | Parte 1. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Wn9gQjWNdiY',
    },
    {
      texto:
        'Tesis de Cero a 100 – TV (2019). Guía básica análisis estadístico de datos | Parte 2. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CnxMorGipGw',
    },
    {
      texto:
        'Comunicación numérica. (2020). Fundamentos del análisis de datos para toma de decisiones. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qvZxvMWMvDo',
    },
    {
      texto:
        'A2 Capacitación: Excel. (2019). Minicurso de business intelligence en Excel - tablas dinámicas, gráficas y dashboards - Parte 1. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TgcGa0cnIpg',
    },
    {
      texto:
        'A2 Capacitación: Excel. (2019). Minicurso de business intelligence en Excel - tablas dinámicas, gráficas y dashboards - - Parte 2. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ucJM-wpuoKg',
    },
    {
      texto:
        'Las mates fáciles. (2020). Probabilidad: sucesos compatibles e incompatibles – Explicación. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=njjrzLk5RB0',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud o rango',
      significado:
        'diferencia entre el valor máximo y mínimo de los valores de una variable se encuentran comprendidos el 100% de los valores muestrales.',
    },
    {
      termino: 'Área bajo la curva (entre dos puntos)',
      significado:
        'si la curva viene dada por una función de densidad teórica, representa la probabilidad de que la variable aleatoria tome un valor dentro del intervalo determinado por esos dos puntos.',
    },
    {
      termino: 'Características',
      significado:
        'propiedades de las unidades o elementos que componen las muestras. Se miden mediante variables. Se asume que los individuos presentan diferentes características.',
    },
    {
      termino: 'Causalidad',
      significado:
        'relación entre causa y efecto. Generalmente identificados como variables. No hay que confundir causalidad con correlación. La correlación mide la similitud estructural numérica entre dos variables. Normalmente la existencia de correlación es condición necesaria para la causalidad.',
    },
    {
      termino: 'Coeficiente de correlación',
      significado:
        'estadístico que cuantifica la correlación. Sus valores están comprendidos entre –1 y 1',
    },
    {
      termino: 'Coeficiente de variación',
      significado:
        'medida de dispersión relativa. No tiene unidades y se calcula dividiendo la cuasi-desviación típica entre la media muestral. Se suele expresar en tanto por ciento.',
    },
    {
      termino: 'Contraste bilateral',
      significado:
        'contraste de hipótesis en la que la hipótesis alternativa da opción a igualdad o superioridad.',
    },
    {
      termino: 'Contraste de hipótesis',
      significado:
        'proceso estadístico que se sigue para la toma de decisiones a partir de la información de la muestra. Comparando el valor del estadístico experimental con el valor teórico rechazamos o no la hipótesis nula.',
    },
    {
      termino: 'Correlación',
      significado:
        'concordancia entre dos variables según el sentido de la relación de estas en términos de aumento o disminución.',
    },
    {
      termino: 'Datos censurados',
      significado:
        'en análisis de supervivencia son datos donde no se conoce el tiempo total hasta la aparición del fracaso / éxito bien porque el individuo se retiró del estudio, bien porque se acabó el estudio (datos con censura administrativa). Existen datos censurados por la izquierda y por la derecha.',
    },
    {
      termino: 'Distribución de datos',
      significado:
        'en la realización de un experimento, corresponde a la recogida de los datos experimentales para cada individuo y cada variable.',
    },
    {
      termino: 'Escala',
      significado:
        'la distribución de datos puede recogerse en distintas escalas: nominal, dicotómica, discreta o continua.',
    },
    {
      termino: 'Estimación',
      significado:
        'técnicas estadísticas que a partir de la información de la estadística descriptiva pretenden conocer cómo es la población en global. Existen técnicas de estimación puntuales y por intervalos de confianza.',
    },
    {
      termino: 'Factor de clasificación',
      significado:
        'variable que se usa para clasificar los datos experimentales en grupos. Los factores de clasificación son variables nominales. Cada factor de clasificación se compone de niveles. Así la variable “fumador” codificada como “nunca”, “exfumador”, “fumador actual” es un factor de clasificación con tres niveles.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'cualquier teoría que formule posibles líneas de trabajo experimental. Ver hipótesis nula y alternativa.',
    },
    {
      termino: 'Imprecisión',
      significado: 'error que se comete en la predicción',
    },
    {
      termino: 'Modelo',
      significado:
        'intento matemático / estadístico para explicar una variable respuesta por medio de una o más variables explicativas o factores.',
    },
    {
      termino: 'Muestras',
      significado: 'subgrupos de observaciones de la población de estudio.',
    },
    {
      termino: 'Observación',
      significado: 'sinónimo de caso, registro e indivíduo.',
    },
    {
      termino: 'Parámetros',
      significado:
        'son valores desconocidos de características de una distribución teórica. El objetivo de la estadística es estimarlos bien dando un valor concreto, bien dado un intervalo confidencial.',
    },
    {
      termino: 'Rango',
      significado:
        'diferencia entre el valor máximo y mínimo de una muestra o población. Solo es válido en variables continuas.',
    },
    {
      termino: 'Sesgo',
      significado:
        'la diferencia entre el valor del parámetro y su valor esperado. También se utiliza en contraposición de aleatorio, así una muestra sesgada es no aleatoria.',
    },
    {
      termino: 'Simetría',
      significado:
        'medida que refleja si los valores muéstrales se extienden o no de igual forma a ambos lados de la media.',
    },
    {
      termino: 'Transformaciones',
      significado:
        'cambios de escala con el propósito de conseguir linealidad, normalidad en los datos.',
    },
    {
      termino: 'Valores numéricos',
      significado:
        'resultados de las variables para cada individuo en la muestra de estudio. Su naturaleza puede ser nominal, dicotómica, ordinal o continua.',
    },
    {
      termino: 'Variable',
      significado:
        'objeto matemático que puede tomar diferentes valores. Generalmente asociado a propiedades o características de las unidades de la muestra. Lo contrario de variable es constante.',
    },
    {
      termino: 'Variable aleatoria',
      significado:
        'variable cuyo resultado varía según la muestra según una distribución de probabilidad.',
    },
    {
      termino: 'Variable continua',
      significado:
        'aquella que puede tomar una infinidad de valores, de forma que dados dos valores cualquiera, también pueda tomar cualquier valor entre dichos valores.',
    },
    {
      termino: 'Variable discreta',
      significado:
        'variable que toma un número finito o infinito de valores, de forma que no cubre todos los posibles valores numéricos entre dos dados, en contraposición de las continuas.',
    },
    {
      termino: 'Variables',
      significado: 'describen características en las observaciones realizadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Devore, J. (2008). Probabilidad y estadística para ingeniería y ciencias. Cengage Learning.',
      link:
        'https://intranetua.uantof.cl/facultades/csbasicas/matematicas/academicos/jreyes/DOCENCIA/APUNTES/APUNTES%20PDF/Probabilidad%20y%20Estadistica%20para%20Ingenieria%20y%20Ciencias%20-%20Jay%20Devore%20-%20Septima%20Edicion.pdf',
    },
    {
      referencia:
        'Orellana, L., D., y Sánchez, G., M. (2006). Técnicas de recolección de datos en entornos virtuales más usadas en la investigación cualitativa. RIE - Revista de Investigación Educativa Asociación Interuniversitaria de Investigación Pedagógica Murcia, 24(1), 205-222.',
      link: 'https://www.redalyc.org/pdf/2833/283321886011.pdf',
    },
    {
      referencia:
        'Rustom, J., A. (2012). Estadística descriptiva, probabilidad e inferencia. Una visión conceptual y aplicada. Universidad de Chile.',
      link:
        'https://repositorio.uchile.cl/bitstream/handle/2250/120284/Rustom_Antonio_Estadistica_descriptiva.pdf',
    },
    {
      referencia:
        'Tanvi, B., Gautam, S., & Vijay, M. (2020). Determining Sufficient Volume of Data for Analysis with Statistical Framework. Springer',
      link:
        'https://www.springerprofessional.de/en/determining-sufficient-volume-of-data-for-analysis-with-statisti/18346230',
    },
    {
      referencia:
        'Torres, I., M., Paz, K., G., y Salazar, F. (s. f.). Métodos de recolección de datos para una investigación. Boletín Electrónico No. 03.',
      link:
        'https://fgsalazar.net/LANDIVAR/ING-PRIMERO/boletin03/URL_03_BAS01.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Mauricio Peñaloza Trespalacios',
        cargo: 'Experto técnico',
        centro:
          'Centro Electricidad Electrónica y Telecomunicaciones Distrito Capital',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres	',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
