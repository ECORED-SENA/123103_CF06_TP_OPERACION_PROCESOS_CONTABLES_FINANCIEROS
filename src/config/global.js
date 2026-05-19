export default {
  global: {
    Name: 'Conciliación, control y mejora continua del registro contable',
    Description:
      'El componente formativo explica la conciliación, control y mejora continua del registro contable. Desarrolla el proceso de conciliación bancaria, identificación de diferencias, errores, omisiones e inconsistencias, aplicación de políticas contables y ajustes. También aborda reportes de hallazgos, soportes documentales, seguimiento y mejora de procedimientos, fortaleciendo la confiabilidad, trazabilidad y calidad de la información financiera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso de conciliación contable y bancaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura del proceso de conciliación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diferencias y partidas conciliatorias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Reporte de la conciliación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Identificación de errores, omisiones e inconsistencias contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipología de errores e inconsistencias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Verificación y análisis de diferencias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reporte de hallazgos contables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Aplicación de políticas contables y ajuste del registro contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Criterios de aplicación de políticas contables',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ajuste del registro contable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Instrumentos para la corrección contable',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejoramiento de procedimientos contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diagnóstico del procedimiento contable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Simplificación y rediseño de actividades',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Evaluación, seguimiento y sostenibilidad de la mejora del procedimiento',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Bien, derecho o recurso controlado por la organización del que se espera obtener beneficios económicos.',
    },
    {
      termino: 'Ajuste contable',
      significado:
        'Registro que se realiza para corregir errores, omisiones, diferencias o reclasificaciones en la información contable.',
    },
    {
      termino: 'Asiento contable',
      significado:
        'Registro técnico de una operación económica en las cuentas correspondientes, aplicando el principio de partida doble.',
    },
    {
      termino: 'Auxiliar contable',
      significado:
        'Registro detallado que permite identificar los movimientos individuales de una cuenta contable.',
    },
    {
      termino: 'Cheque pendiente',
      significado:
        'Título valor ya registrado en libros, pero que aún no ha sido cobrado por el beneficiario ni debitado por el banco.',
    },
    {
      termino: 'Comprobante de contabilidad',
      significado:
        'Documento interno en el que se resume una operación económica y que sirve de base para su registro en libros o en el sistema contable.',
    },
    {
      termino: 'Conciliación bancaria',
      significado:
        'Proceso de comparación entre los registros contables y el extracto bancario para identificar y explicar diferencias.',
    },
    {
      termino: 'Control documental',
      significado:
        'Conjunto de acciones orientadas a organizar, conservar, consultar y verificar los documentos que soportan el proceso contable.',
    },
    {
      termino: 'Control interno',
      significado:
        'Sistema de políticas, procedimientos y mecanismos de verificación orientado a proteger recursos y asegurar información confiable.',
    },
    {
      termino: 'Cuenta contable',
      significado:
        'Instrumento de clasificación que permite registrar, agrupar y controlar los hechos económicos según su naturaleza.',
    },
    {
      termino: 'Depósito en tránsito',
      significado:
        'Consignación registrada en libros que todavía no aparece abonada en el extracto bancario a la fecha de corte.',
    },
    {
      termino: 'Documento fuente',
      significado:
        'Soporte original que evidencia la ocurrencia de una operación económica, como facturas, extractos, nóminas o recibos.',
    },
    {
      termino: 'Error contable',
      significado:
        'Inexactitud, omisión o registro incorrecto de una operación económica en la contabilidad.',
    },
    {
      termino: 'Política contable',
      significado:
        'Criterio o lineamiento adoptado por la entidad para reconocer, medir, presentar y revelar la información financiera.',
    },
    {
      termino: 'Trazabilidad documental',
      significado:
        'Posibilidad de seguir el recorrido de una operación o ajuste desde su soporte inicial hasta su registro y archivo final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2000, julio 14). Ley 594 de 2000: por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993, noviembre 29). Ley 87 de 1993: por la cual se establecen normas para el ejercicio del control interno en las entidades y organismos del Estado y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=300',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, julio 13). Ley 1314 de 2009: por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de la información aceptados en Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2025, diciembre 10). Procedimiento para la evaluación del control interno contable.',
      link: '',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2025, diciembre 4). Resolución 347 de 2025: por la cual se adopta el procedimiento para la evaluación del control interno contable.',
      link:
        'https://www.contaduria.gov.co/documents/d/guest/resolucion-347-de-2025',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2022, octubre 24). PR-ADF-0041: cierre contable.',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Recaudadora/Procedimientos/PR-ADF-0041.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). IN-ADF-0180: conciliación bancaria de caja menor.',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Pagadora/Instructivos/IN-ADF-0180.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). Listado maestro de documentos públicos.',
      link:
        'https://www.dian.gov.co/atencionciudadano/Paginas/Listado-maestro-de-documentos-publicos.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). PR-ADF-0037: proceso administrativo y financiero.',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Recaudadora/Procedimientos/PR-ADF-0037.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). PR-ADF-0114: generación de conciliaciones bancarias y cruces de información.',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Pagadora/Procedimientos/PR-ADF-0114.pdf',
    },
    {
      referencia:
        'Función Pública. (2015, diciembre 2). Normas internacionales de auditoría.',
      link:
        'https://www.funcionpublica.gov.co/eva/admon/files/empresas/ZW1wcmVzYV83Ng%3D%3D/archivos/1463963391_fe7da6e6c9286a0f7d57c2882fa6ecf4.pdf',
    },
    {
      referencia:
        'Función Pública. (2020, julio). Guía para la gestión por procesos en el marco del modelo integrado de planeación y gestión (Mipg).',
      link:
        'https://www1.funcionpublica.gov.co/web/eva/biblioteca-virtual/-/document_library/bGsp2IjUBdeu/view_file/36963907',
    },
    {
      referencia:
        'Función Pública. (2025). Guía para la gestión integral de riesgos en entidades públicas.',
      link: '',
    },
    {
      referencia: 'Función Pública. (s.f.). Gestión documental.',
      link: 'https://www1.funcionpublica.gov.co/gestion-documental',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993, diciembre 29). Decreto 2649 de 1993: por el cual se reglamenta la contabilidad en general y se expiden los principios o normas de contabilidad generalmente aceptados en Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015, anexo 3: marco técnico normativo de información financiera para microempresas.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76055',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015, anexo 4: normas de aseguramiento de la información.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76026',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro:
            'Líder del Ecosistema Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' Juan José Calderón Gutíerrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
