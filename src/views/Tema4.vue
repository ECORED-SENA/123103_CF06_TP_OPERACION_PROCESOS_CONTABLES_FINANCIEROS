<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Mejoramiento de procedimientos contables
    p(data-aos="fade-left") A continuación, se presenta un video sobre el mejoramiento de procedimientos contables, orientado a comprender la importancia de fortalecer los procesos de registro, control y cierre financiero para garantizar información confiable, oportuna y sustentada.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/M_NLypFAQGg?si=9FTR6FQU-oIt5nv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    Separador
    //- Inicio Tema4.1
    .row.mt-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Diagnóstico del procedimiento contable
    .row.mb-10      
      .col-lg-7
        p.mt-3(data-aos="fade-left") El diagnóstico del procedimiento contable es el punto de partida para comprender cómo se produce, valida y consolida la información dentro de una organización. Su finalidad no es solamente describir actividades, sino establecer si el proceso permite obtener información oportuna, razonable, trazable y útil para la toma de decisiones.
        p.mt-3(data-aos="fade-left") En el contexto colombiano, esta revisión se relaciona con la Ley 87 de 1993, que señala que el ejercicio del control interno debe ser intrínseco al desarrollo de las funciones de todos los cargos, y con el procedimiento de la Contaduría General de la Nación incorporado por la Resolución 347 de 2025, que define el control interno contable como el proceso que promueve la existencia y efectividad de procedimientos de control y verificación sobre las actividades relacionadas con el proceso contable (Ley 87, 1993). 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img1.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Desde esta perspectiva, diagnosticar el procedimiento contable implica revisar:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 La secuencia real de trabajo. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Los responsables que intervienen.
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Los documentos que soportan cada operación. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Los controles existentes. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Los riesgos que pueden afectar la calidad del dato. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Las debilidades que explican errores o reprocesos.
    p(data-aos="fade-left") La CGN precisa que la evaluación del control interno contable abarca marco de referencia, proceso contable, gestión del riesgo contable y rendición de cuentas. A su vez, la DIAN exige en su cierre contable revisar reportes previos, verificar saldos atípicos o fuera de rangos normales y asegurar que las cifras del libro borrador reflejen razonablemente los estados financieros antes del cierre definitivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Análisis del procedimiento actual
    //- Título con imagen
    p(data-aos="fade-left") El análisis del procedimiento actual consiste en identificar cómo fluye la información desde el hecho económico hasta su registro, revisión, ajuste y cierre. Para ello, conviene observar:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Qué documentos ingresan al proceso.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Quién los recibe. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Qué validaciones se realizan. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Qué sistema se utiliza para registrar. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Quién revisa los saldos. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Qué evidencias quedan de cada etapa. 
          //- Fin Carrusel
    p(data-aos="fade-left") Esta forma de análisis es consistente con el control interno contable definido por la CGN, según el cual deben existir procedimientos de control y verificación que garanticen razonablemente que la información financiera cumpla con las características cualitativas del marco normativo aplicable (Contaduría General de la Nación, 2025).
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 Analizar el procedimiento actual también supone revisar si las actividades se encuentran claramente delimitadas y si existe correspondencia entre soportes, comprobantes, auxiliares y libros. El Decreto 2649 de 1993 exige que las partidas asentadas en los libros estén respaldadas por comprobantes de contabilidad y que los soportes puedan verificarse, mientras que la DIAN indica que durante el cierre se generan libros borradores para revisar, analizar y evaluar la consistencia de las cifras.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema4/img3.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 En consecuencia, un buen diagnóstico debe examinar no solo la ruta teórica del procedimiento, sino también la forma en que efectivamente se cumplen estas exigencias en la práctica. 
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Desde un enfoque práctico, el análisis del procedimiento actual puede organizarse alrededor de preguntas como estas:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Qué actividad se ejecuta. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Con qué documento inicia. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Quién la realiza. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Qué control la acompaña. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Qué salida genera. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Qué riesgo se presenta si esa etapa falla.
    p(data-aos="fade-left") Esta mirada ayuda a identificar si el problema proviene de la captura inicial de la información, de la revisión documental, del registro contable, de la aprobación del ajuste o del cierre. Además, la CGN señala que las entidades pueden diseñar y utilizar instrumentos complementarios de implementación, evaluación y seguimiento, lo que respalda el uso de matrices de diagnóstico, listas de chequeo o mapas de procedimiento para este análisis.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Supóngase que una entidad recibe facturas de proveedores por correo electrónico, las imprime, las remite físicamente para aprobación, luego las entrega al área contable para digitación y finalmente revisa el auxiliar al cierre del mes.
              
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema4/img5.svg')
    p.mb-3.mt-5 Si en ese recorrido no existe un control de recepción, ni una lista de documentos pendientes, ni una validación previa de fechas y valores, el procedimiento ya presenta una debilidad desde su diseño. En ese caso, el diagnóstico no solo diría que hay omisiones en el registro, sino que mostraría que el procedimiento actual no garantiza trazabilidad suficiente desde la entrada del soporte hasta su contabilización. Para revisar el procedimiento vigente de forma ordenada, puede emplearse una matriz de análisis como la siguiente:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Recepción del soporte")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/tema4/pestana01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Recepción del soporte
                p Cómo ingresa la información al proceso contable; revisar facturas, extractos, notas, correos o radicados para identificar riesgos de pérdida o ingreso tardío.
          .py-3.py-md-4(titulo="Validación documental")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/pestana01_2.png')
              .col-md-6
                h4 Validación documental
                p Verificar si se revisan integridad, fecha, valor y autorización; revisar soportes, listas de chequeo o vistos buenos para evitar registros incompletos o improcedentes.
          .py-3.py-md-4(titulo="Registro contable")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/pestana01_3.png')
              .col-md-6
                h4 Registro contable
                p Revisar quién registra, con qué justificación y cómo queda el asiento; verificar comprobantes, notas contables y auxiliares para detectar errores de cuenta, valor o período.
          .py-3.py-md-4(titulo="Revisión y ajuste")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/pestana01_4.png')
              .col-md-6
                h4 Revisión y ajuste
                p Verificar si se revisan diferencias y saldos atípicos; revisar libro borrador, conciliaciones y reportes previos para evitar permanencia de inconsistencias.
          .py-3.py-md-4(titulo="Cierre y archivo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/pestana01_5.png')
              .col-md-6
                h4 Cierre y archivo
                p Revisar si se aprueba, comunica y conserva la evidencia; verificar aprobaciones, informes y archivo documental para asegurar trazabilidad y control posterior.          
    //- Cierres Pestanas horizontales
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Cuellos de botella, procesos manuales y errores recurrentes
    //- Título con imagen
    .row.mb-10
      .col-lg-7
        p.mt-3(data-aos="fade-left") Una parte importante del diagnóstico consiste en reconocer cuellos de botella, actividades excesivamente manuales y errores que se repiten en el tiempo. Los cuellos de botella aparecen cuando una etapa concentra demoras, aprobaciones acumuladas, reprocesos o dependencia excesiva de una sola persona o de un solo documento.
        p.mt-3(data-aos="fade-left") Los procesos manuales, por su parte, incrementan el riesgo de pérdida de información, doble digitación, registros tardíos y fallas de transcripción. La DIAN advierte que el procesamiento oportuno de la información y la disponibilidad, confiabilidad e integridad de los datos son necesarios para realizar los cierres mensuales y de vigencia, lo que evidencia la importancia de detectar estas debilidades operativas (DIAN, 2022).  
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img6.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Desde un enfoque analítico, conviene observar:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si las demoras se originan en la recepción de soportes. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si existen retrasos en la revisión documental. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si la digitación genera reprocesos. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si la aprobación del registro retrasa el flujo.
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si la consolidación del cierre concentra errores o acumulación de tareas.
    p(data-aos="fade-left") También es útil establecer si ciertos errores se asocian a tareas manuales específicas, como transcribir valores de una factura al sistema, reclasificar partidas sin una guía definida o registrar documentos fuera de orden cronológico.
    p(data-aos="fade-left") La CGN señala que la evaluación del control interno contable debe apoyar la formulación de acciones de mejora y verificar su cumplimiento. Esto implica que el diagnóstico no se detenga en describir debilidades, sino que relacione cada debilidad con una causa y con una posible línea de intervención.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 En una empresa pequeña, todas las facturas se reciben en físico, se registran manualmente en una hoja electrónica y, al final de la semana, se vuelven a digitar en el software contable. Si el mismo documento pasa por dos digitaciones, el procedimiento incrementa el riesgo de error y retrasa el cierre.
              p.mb-3 Si además se observa que cada mes aparecen diferencias por valores mal transcritos o por facturas contabilizadas fuera del período, el diagnóstico debe concluir que existe un cuello de botella en la captura inicial y una dependencia excesiva de tareas manuales que deben revisarse (DIAN, 2022).
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema4/img8.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Priorización y factibilidad de mejora
    //- Título con imagen
    p(data-aos="fade-left") Una vez identificadas las debilidades del procedimiento, el siguiente paso es priorizar cuáles deben atenderse primero y valorar si su mejora es factible técnica, operativa y documentalmente. No todas las deficiencias tienen el mismo impacto. Algunas afectan directamente la confiabilidad del registro, otras retrasan el cierre y otras generan reprocesos menores. La priorización debe considerar, por lo menos:
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-4.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Desde un enfoque analítico, conviene observar:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 La frecuencia con que ocurre la falla. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 El efecto que produce sobre la información. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 El riesgo de incumplimiento normativo. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 La posibilidad real de corregirla con los recursos y condiciones disponibles. 
    p(data-aos="fade-left") Esta lógica es consistente con la estructura de control mencionada por la CGN, que incluye evaluación del riesgo, actividades de control, información y comunicación, y actividades de monitoreo (Contaduría General de la Nación, 2025).
    .row.mb-10
      .col-lg-7
        p.mt-3(data-aos="fade-left") La factibilidad de mejora implica analizar si la solución puede aplicarse con los medios existentes o si requiere rediseño más amplio, nuevos formatos, ajustes de responsabilidades, capacitación o apoyo tecnológico.
        p.mt-3(data-aos="fade-left") La CGN indica que los jefes de control interno y quienes ejecutan actividades del proceso contable deben evaluar permanentemente la implementación y efectividad del control interno contable para optimizar la calidad de la información financiera, y agrega que pueden utilizar instrumentos complementarios. Esto permite afirmar que una mejora es factible cuando puede implementarse, evaluarse y seguirse con evidencia, y no solo cuando parece deseable en teoría.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img10.png", data-aos="zoom-in" style="max-width: 458px")
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 En la práctica, priorizar y valorar la factibilidad evita que el mejoramiento se convierta en un listado excesivo de recomendaciones sin ejecución. Si una organización detecta diez debilidades, pero tres de ellas explican la mayoría de las diferencias y reprocesos, conviene intervenir primero esas tres.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema4/img11.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-5(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 Del mismo modo, si una mejora requiere inversión tecnológica que no es posible en el corto plazo, puede plantearse una solución transitoria, como fortalecer formatos, revisar responsables o establecer controles manuales de verificación mientras se implementa una alternativa más robusta. Esta manera de proceder es coherente con el propósito de formular acciones de mejora pertinentes y verificar su cumplimiento (Contaduría General de la Nación, 2025).
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si el diagnóstico muestra que los principales problemas del área contable son: registros tardíos de facturas, comisiones bancarias no contabilizadas y archivos de soporte desorganizados, la priorización podría iniciar por los registros tardíos, porque afectan el período, el cierre y la razonabilidad de varias cuentas a la vez.
              p.mb-3 La segunda prioridad podría ser la organización documental, porque mejora la verificación y el seguimiento. La automatización total del archivo podría considerarse una mejora deseable, pero de menor factibilidad inmediata si la entidad aún no cuenta con herramientas suficientes para implementarla.
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema4/img12.svg')
    Separador
    //- Inicio Tema4.2
    .row.mt-5
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Simplificación y rediseño de actividades
    p(data-aos="fade-left") La simplificación y el rediseño de actividades buscan que el procedimiento contable conserve solo aquellas etapas que realmente contribuyen al logro de su objetivo y al control de los riesgos del proceso. Función Pública relaciona la gestión por procesos con la política de fortalecimiento institucional y simplificación por procesos, y recomienda describir el proceso a partir de sus actividades fundamentales o actividades de éxito, en lugar de recargarlo con listas extensas de pasos que no siempre aportan al resultado esperado. También sugiere apoyarse en diagramas de flujo y herramientas de análisis para detallar con claridad la secuencia de actividades (Función Pública, 2020). Aplicado al campo contable, este criterio implica revisar si existen:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_1_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Actividades duplicadas. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_1_2.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Validaciones repetidas. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_1_3.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Traslados innecesarios de documentos. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_1_4.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Revisiones que no agregan control real. 
          //- Fin Tarjetas
    p(data-aos="fade-left") Rediseñar supone ordenar las actividades de forma más lógica, precisar entradas y salidas del proceso, identificar proveedores de información y verificar si las salidas son consistentes con el objetivo del procedimiento. Función Pública indica precisamente que, al describir el proceso, deben identificarse las entradas, los proveedores y las salidas, y analizar si estas responden a las necesidades esperadas.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Automatización y control interno
    //- Título con imagen
    p(data-aos="fade-left") La automatización del procedimiento contable debe entenderse como un medio para fortalecer el control y no solo como una modernización tecnológica. Función Pública señala que, a partir del esquema de procesos, se definen procedimientos, políticas de operación, sistemas de información, manuales y otros instrumentos que permiten diseñar y establecer controles para gestionar de forma efectiva los riesgos que pueden afectar el cumplimiento de los objetivos.
    p(data-aos="fade-left") De manera complementaria, la Ley 87 de 1993 exige que el control interno se conciba y organice de tal manera que sea intrínseco al desarrollo de las funciones de todos los cargos. En el ámbito contable, la automatización puede reflejarse en:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_2_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Controles de validación de datos. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_2_2.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Alertas sobre documentos pendientes. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_2_3.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Conciliaciones con apoyo de sistemas. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_2_4.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Bloqueos frente a registros incompletos. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_2_5.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Reportes automáticos para revisar saldos atípicos.
          //- Fin Carrusel
    p(data-aos="fade-left") La DIAN, en su procedimiento de cierre contable, establece que deben verificarse saldos atípicos o fuera de rangos normales, que se generen libros borradores para revisar la consistencia de las cifras y que, si se determinan inconsistencias, se realicen ajustes, procesamiento o reproceso de información.
    p(data-aos="fade-left") Además, el mismo procedimiento destaca la necesidad de asegurar la disponibilidad, confiabilidad e integridad de los datos procesados y aplicar mecanismos de control que mitiguen riesgos de acceso, procesamiento y almacenamiento de la información digital (DIAN, 2022).  Esto permite afirmar que la automatización es útil cuando:
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema4/tarjeta4_3_1.svg', style="width: 100px;")            
            p.mb-0 Reduce tareas manuales repetitivas. 
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema4/tarjeta4_3_2.svg', style="width: 100px;")            
            p.mb-0 Mejora la oportunidad de la revisión.
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema4/tarjeta4_3_3.svg', style="width: 100px;")            
            p.mb-0 Hace más confiable la evidencia del proceso. 
    //- Fin Tarjetas     
    p(data-aos="fade-left") Sin embargo, automatizar no reemplaza el juicio contable. Un sistema puede advertir una variación atípica o impedir un registro sin campos completos, pero la evaluación técnica sobre la naturaleza de la diferencia, la procedencia del ajuste o la razonabilidad del saldo sigue siendo responsabilidad del proceso contable y de sus controles. La CGN también recuerda que el control interno contable exige verificación permanente de la existencia y efectividad de controles y evaluación periódica del proceso para formular acciones de mejora y verificar su cumplimiento.
    p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
    p(data-aos="fade-left") Si la entidad recibe extractos bancarios y los compara manualmente con los auxiliares, el procedimiento depende de una revisión intensiva en tiempo y susceptible a omisiones. Un fortalecimiento razonable podría consistir en usar una plantilla o un sistema que:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_4_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Marque automáticamente partidas no coincidentes. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_4_2.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Genere alertas sobre comisiones no registradas. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema4/tarjeta4_4_3.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 Conserve un historial de diferencias pendientes. 
          //- Fin Tarjetas
    p(data-aos="fade-left") El control interno se fortalece no por el simple uso del archivo digital, sino porque la herramienta apoya la detección oportuna, la trazabilidad y el seguimiento de las diferencias (Función Pública, 2025).
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Implementación de cambios
    //- Título con imagen
    .row.mb-10
      .col-lg-7
        p.mt-3(data-aos="fade-left") La implementación de cambios es la fase en la que el rediseño deja de ser una propuesta y se convierte en práctica institucional. La CGN establece que uno de los objetivos específicos del control interno contable es evaluar periódicamente la ejecución del proceso contable para formular acciones de mejora pertinentes y verificar su cumplimiento.
        p.mt-3(data-aos="fade-left") Además, señala que los jefes de control interno evaluarán permanentemente el grado de implementación y efectividad del control interno contable, y que pueden diseñarse y utilizarse instrumentos complementarios de implementación, evaluación y seguimiento (Contaduría General de la Nación, 2025).
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img13.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Implementar cambios en el procedimiento contable implica, por lo menos:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Definir la mejora. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Asignar responsables. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Establecer los instrumentos que permitirán aplicarla. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Comunicarla a quienes intervienen en el proceso. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Verificar si produjo el efecto esperado.
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 En la gestión por procesos de Función Pública, la descripción del proceso debe relacionarse con las expectativas del usuario y con el objetivo del proceso. Por ello, los cambios no deben introducirse de forma aislada, sino articulados con el propósito del procedimiento y con las salidas que se esperan de él.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema4/img15.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-5(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 En términos contables, la implementación también debe ser gradual y verificable. Si el diagnóstico encontró retrasos en el registro, el cambio puede consistir en redefinir tiempos y puntos de validación; si halló errores repetitivos de clasificación, puede requerir una plantilla de apoyo o una revisión previa; y si el problema está en la trazabilidad, puede ser necesario un nuevo formato de seguimiento.
    p.mt-5(data-aos="fade-left") La DIAN muestra, a través de su procedimiento de cierre, que la revisión de cifras, la generación de libros borradores, la realización de ajustes y el reproceso de información forman parte de una secuencia institucional de mejora sobre la información antes del cierre definitivo (DIAN, 2022).
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si el diagnóstico reveló que muchas diferencias se originan porque los soportes llegan tarde al área contable, la implementación del cambio podría:
              ul.lista-ul
                li.d-flex.mt-3
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
                  p.mb-0 Establecer una fecha límite de entrega documental. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
                  p.mb-0 Incorporar una lista de chequeo de recepción. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
                  p.mb-0 Generar un reporte semanal de pendientes. 
              p.mb-3 Para que la mejora sea real, no basta con anunciarla: debe asignarse un responsable, usarse el formato definido y revisarse al cabo de uno o dos cierres si disminuyeron los registros tardíos. Esa lógica responde al enfoque de retroalimentación y mejoramiento continuos señalado por la CGN.
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema4/img16.svg')
    Separador
    //- Inicio Tema4.3
    .row.mt-5
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Evaluación, seguimiento y sostenibilidad de la mejora del procedimiento    
    .row.mb-5.justify-content-center.align-items-center.mt-5
      p(data-aos="fade-left") La mejora del procedimiento contable no termina cuando se rediseña una actividad o se implementa un cambio puntual. Su verdadera utilidad aparece cuando puede evaluarse, seguirse y mantenerse en el tiempo, de manera que el procedimiento no vuelva a caer en las mismas fallas que dieron origen al diagnóstico inicial.
      .col-md-8.col-lg-8
        p(data-aos="fade-left") En este sentido, este tema permite comprender que mejorar un procedimiento no es solo proponer ajustes, sino verificar si esos ajustes realmente fortalecen la oportunidad, la consistencia, la trazabilidad y la confiabilidad de la información contable. Esa visión se articula con la gestión por procesos promovida por Función Pública, que vincula la planeación, ejecución, seguimiento, evaluación y control de las actividades institucionales, y con el control interno contable, cuyo objetivo general es promover información financiera con características cualitativas adecuadas.
        p(data-aos="fade-left") Este tema resulta útil porque enseña a revisar si las mejoras adoptadas tienen correspondencia con la normativa, si producen resultados verificables y si pueden sostenerse más allá de una intervención inicial. En otras palabras, ayuda a pasar de la corrección inmediata al fortalecimiento permanente del procedimiento.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img17.png' style="width: 450px").img-fluid
    p(data-aos="fade-left") Esto es especialmente importante en contabilidad, porque un cambio que no se evalúa puede convertirse en una práctica sin control, y una mejora que no se sigue puede perderse con facilidad frente a nuevas cargas de trabajo, rotación de personal o ausencia de evidencia documental. Por ello, este tema aporta elementos para verificar la efectividad de las acciones implementadas, valorar su permanencia y consolidar procesos contables más estables, controlados y útiles para la toma de decisiones (Ley 87, 1993).
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Alineación normativa, evaluación de resultados y sostenibilidad del procedimiento mejorado
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center.mt-5      
      .col-md-8.col-lg-8
        p(data-aos="fade-left") La alineación normativa del procedimiento mejorado implica revisar si los cambios introducidos conservan coherencia con las exigencias sobre control, documentación, verificación, soportes, razonabilidad de saldos y cierre contable. La Ley 87 de 1993 dispone que el control interno debe integrarse al desarrollo de las funciones y orientarse a proteger los recursos, garantizar la eficacia de las operaciones y asegurar la confiabilidad de la información.
        p(data-aos="fade-left") A su vez, el procedimiento para la evaluación del control interno contable incorporado por la Resolución 347 de 2025 señala, entre sus objetivos, verificar la efectividad de las políticas para el desarrollo del proceso contable, comprobar la existencia de indicadores para evaluar permanentemente la gestión y los resultados, y formular acciones de mejora verificando su cumplimiento. Esto permite entender que una mejora solo tiene sentido si fortalece el procedimiento sin apartarlo de sus obligaciones técnicas y normativas (Ley 87, 1993). La evaluación de resultados permite establecer si el cambio produjo efectos reales sobre el procedimiento. En materia contable, esto significa revisar:
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img18.png' style="width: 450px").img-fluid
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_5_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Sí disminuyeron errores de registro. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_5_2.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Sí se redujeron reprocesos. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_5_3.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Sí mejoró la oportunidad de la contabilización. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_5_4.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Sí las diferencias se explican con mayor rapidez. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta4_5_5.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Sí los saldos muestran mayor consistencia al cierre. 
          //- Fin Carrusel
    p(data-aos="fade-left") El procedimiento PR-ADF-0041 de la DIAN exige revisar la consistencia de la información, identificar saldos atípicos o fuera de rangos normales y efectuar ajustes o reprocesos cuando sea necesario antes del cierre definitivo.
    p(data-aos="fade-left") Por ello, evaluar resultados no consiste en verificar si el nuevo formato existe o si la instrucción fue comunicada, sino en comprobar si la mejora introducida efectivamente elevó la calidad del registro contable y redujo las debilidades detectadas en el diagnóstico (DIAN, 2022). La sostenibilidad del procedimiento mejorado se relaciona con su permanencia en el tiempo.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-5 Una mejora sostenible es aquella que:
        ul.lista-ul
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Puede mantenerse en varios períodos contables. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 No depende exclusivamente de una persona. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Cuenta con evidencia documental. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Ha sido incorporada a la práctica regular del proceso. 
    p(data-aos="fade-left") En este punto, el control interno contable adquiere especial relevancia, porque la CGN exige evaluación periódica, seguimiento permanente y uso de instrumentos complementarios para fortalecer el proceso contable.
    p(data-aos="fade-left") De manera semejante, la gestión por procesos de Función Pública insiste en que los procedimientos deben documentarse con claridad, identificar responsables y facilitar el control de sus actividades. En consecuencia, la sostenibilidad no se limita a conservar una decisión, sino a garantizar que el procedimiento mejorado pueda seguir ejecutándose, revisándose y ajustándose con base en evidencia y aprendizaje institucional (Resolución 347, 2025).
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Una entidad detecta que una de sus principales debilidades es la llegada tardía de soportes al área contable, situación que genera registros extemporáneos y ajustes al cierre. Como mejora, establece una fecha límite de entrega, una lista de chequeo de recepción y un reporte semanal de pendientes.
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema4/img20.svg')
    p.mt-5(data-aos="fade-left") La alineación normativa se verifica al comprobar que el nuevo procedimiento fortalece la trazabilidad y el control documental; en la evaluación de resultados se observa si en los siguientes cierres disminuyen los registros tardíos y los reprocesos; y la sostenibilidad se confirma cuando el control se mantiene durante varios períodos, se conserva la evidencia de su aplicación y el procedimiento continúa funcionando aun cuando cambien los responsables del proceso. Para revisar de forma integrada estos componentes, se presenta la siguiente síntesis:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Alineación normativa
              p Revisar si el procedimiento mejorado conserva correspondencia con reglas de control, soporte, revisión y cierre. Evidencia: procedimiento actualizado, responsables definidos, formatos y controles acordes con la normativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Evaluación de resultados
              p Revisar si la mejora redujo errores, reprocesos, diferencias o demoras. Evidencia: indicadores, reportes comparativos, disminución de hallazgos y mayor consistencia de saldos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Sostenibilidad
              p Revisar si la mejora se mantiene en el tiempo y puede ejecutarse de manera continua. Evidencia: seguimiento periódico, aplicación en varios cierres, evidencia documental y uso estable de controles.
    //- Fin Slideshows
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-12.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono-pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Documentación, socialización y calidad en los procesos contables
            p.mb-0 Se invita a leer el documento Documentación, socialización y calidad en los procesos contables, donde se aborda la importancia de documentar, socializar y evaluar la calidad dentro de los procedimientos contables, especialmente en el contexto institucional colombiano.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/documentacion.docx')"  
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
            )
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema3',
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
