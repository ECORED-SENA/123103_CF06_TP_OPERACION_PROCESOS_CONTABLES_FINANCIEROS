<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aplicación de políticas contables y ajuste del registro contable
    p(data-aos="fade-left") Las políticas contables constituyen criterios de referencia para reconocer, medir, presentar y revelar la información financiera de manera uniforme y comparable. En el marco colombiano, el Decreto 2420 de 2015 compila los marcos técnicos normativos aplicables a los preparadores de información financiera de los grupos 2 y 3, y para microempresas establece, entre otros aspectos, la base contable de causación, la no compensación entre partidas, la uniformidad en la presentación y la obligación de revelar información comparativa y resumir las políticas y prácticas contables en las notas a los estados financieros.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img1.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Por ello, el estudio de este capítulo no se limita a revisar reglas formales, sino que busca comprender cómo los criterios contables orientan la calidad, la consistencia y la comparabilidad del registro (Decreto 2420, Anexo 3, 2015).
        p.mt-3(data-aos="fade-left") De igual manera, este capítulo se conecta con la necesidad de ajustar el registro contable cuando se detectan omisiones o inexactitudes. El Anexo 3 del Decreto 2420 señala que los errores de períodos anteriores surgen de no emplear, o emplear incorrectamente, información fiable disponible al momento de preparar los estados financieros, y dispone que su corrección se reconozca en el período en que el error es detectado, junto con la revelación de su naturaleza y monto.
    p(data-aos="fade-left") Así, la aplicación de políticas contables y el ajuste del registro contable se entienden como procesos complementarios: las políticas aportan el criterio y la uniformidad; el ajuste permite corregir el efecto de los errores e incorporar la información de manera razonable, verificable y útil para la toma de decisiones.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-12.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono-pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Anexo 3 del Decreto 2420 de 2015
            p.mb-0 Los invitamos a consultar este anexo, que establece el marco técnico normativo de información financiera para microempresas.
          .mt-3.mt-lg-0.ps-lg-4            
            //- Se quitó obtenerLink() y se dejó el href directo
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76055" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
            )
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    Separador
    //- Inicio Tema3.1
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Criterios de aplicación de políticas contables
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 La aplicación de políticas contables constituye una base importante para que el registro de los hechos económicos conserve uniformidad, coherencia y posibilidad de comparación entre períodos. En Colombia, la Ley 1314 de 2009 orienta la expedición de normas contables e información financiera hacia un sistema único y homogéneo de alta calidad, comprensible, transparente, comparable, pertinente y confiable, útil para la toma de decisiones.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema3/img2.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 A su vez, el Decreto 2420 de 2015 define que los preparadores del Grupo 2 aplican el Anexo 2 y que los del Grupo 3 aplican el Anexo 3, con la posibilidad de que algunas entidades del Grupo 3 opten por el marco del Grupo 2 (Ley 1314, 2009).
    p.mt-5(data-aos="fade-left") Para el desarrollo práctico de este componente, resulta especialmente útil tomar como referencia el Anexo 3, porque allí se establecen criterios claros sobre contabilidad de causación, uniformidad en la presentación, información comparativa, notas a los estados financieros y corrección de errores de períodos anteriores. Estos elementos permiten comprender que una política contable no es un texto aislado, sino un criterio de actuación que orienta cómo reconocer, presentar, revelar y corregir la información contable en la práctica diaria.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Aplicación consistente de criterios
    //- Título con imagen
    p(data-aos="fade-left") Aplicar consistentemente los criterios contables significa que hechos económicos semejantes deben recibir tratamientos semejantes, salvo que exista una razón técnica válida para modificar la forma de presentación o clasificación. El Anexo 3 del Decreto 2420 dispone que una microempresa mantendrá la presentación y clasificación de las partidas en los estados financieros de un período a otro, salvo que un cambio importante en la naturaleza de sus actividades o una revisión de sus estados financieros demuestre que otra presentación sería más apropiada.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Además, exige información comparativa respecto del período anterior para todos los montos presentados, así como para la información descriptiva y narrativa cuando sea relevante (Decreto 2420, Anexo 3, 2015). Desde la operación contable, esta consistencia se refleja en decisiones concretas:        
        ul.lista-ul.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si una entidad reconoce los gastos de servicios públicos como gastos operacionales en un período, no debería tratarlos en el siguiente como mayor valor de un activo sin una justificación técnica.
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Si registra sus ingresos y gastos con base en la causación, debe mantener esa lógica y no pasar a una base de caja por simple conveniencia.
    p(data-aos="fade-left") El Anexo 3 establece precisamente que los estados financieros deben elaborarse utilizando la base contable de causación, es decir, reconociendo los efectos de las transacciones cuando ocurren y no cuando se recibe o paga el dinero.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Una microempresa reconoce mensualmente el gasto de arrendamiento en la cuenta de gastos administrativos con base en la factura y el período de uso del bien. Si en el mes siguiente decide llevar ese mismo concepto a una cuenta distinta sin existir un cambio real en la naturaleza de la operación, se afecta la consistencia del criterio contable.
              p.mb-3 En cambio, si la empresa documenta una modificación en su estructura operativa y justifica técnicamente que el arrendamiento ahora corresponde a un centro de costo de producción, la reclasificación puede ser válida, siempre que quede explicada y revelada.
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema3/img4.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Cambios, excepciones y comparabilidad
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center.mt-5
      p(data-aos="fade-left") La política contable no implica rigidez absoluta. El propio Anexo 3 admite que la presentación y clasificación pueden cambiar cuando una revisión demuestre que otra forma resulta más apropiada para mejorar la calidad de los estados financieros.
      .col-md-8.col-lg-8
        p(data-aos="fade-left") Sin embargo, cuando ello ocurra, las causas del cambio deben informarse en una nota a los estados financieros. Este criterio muestra que el cambio no debe responder a improvisación, sino a una razón técnica sustentada que preserve la utilidad de la información (Decreto 2420, Anexo 3, 2015). La comparabilidad depende de esa disciplina. Si una entidad modifica la forma de presentar una cuenta, de clasificar un gasto o de reconocer determinado hecho económico sin dejar evidencia del motivo y sin explicar el efecto del cambio, el usuario de la información pierde la posibilidad de comparar un período con otro de manera confiable. Por eso, el Anexo 3 exige:
        ul.lista-ul.mb-0.mt-3
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Información comparativa respecto del período anterior para todos los valores monetarios. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 Información descriptiva y narrativa relevante para facilitar el análisis. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 El resumen de políticas y prácticas contables en las primeras notas a los estados financieros. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 La explicación expresa de los cambios ocurridos de un período a otro.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img5.png' style="width: 450px").img-fluid
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 En la práctica, las excepciones deben analizarse con prudencia:
        ul.lista-ul.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 No es lo mismo cambiar una clasificación porque el hecho económico ahora tiene otra naturaleza, que modificarla solo para alterar la apariencia de un rubro. 
          li.d-flex
            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#fd9826")
            p.mb-0 No es correcto intentar corregir una falta de reconocimiento mediante notas. 
    p(data-aos="fade-left") El Anexo 3 advierte que la ausencia de reconocimiento de una partida que cumple los criterios no se rectifica revelando políticas contables ni mediante notas u otro material explicativo. Primero debe efectuarse el reconocimiento o la corrección correspondiente; luego, si procede, se revela el cambio o el error. Para distinguir cuándo corresponde mantener un criterio, efectuar un cambio justificado o corregir un error, se presentan las siguientes situaciones frecuentes:
    //- Inicio Accordion    
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Un mismo hecho económico se presenta igual en varios períodos")
              p.mb-4  Mantener el mismo criterio contable. Esto favorece la comparación entre períodos.
          .row(titulo="Cambia la naturaleza de la operación o la estructura del negocio")
              p.mb-4 Ajustar la clasificación o presentación y revelar la causa del cambio. La comparabilidad se conserva si el cambio se explica.
          .row(titulo="Una partida debió reconocerse y no se registró")
              p.mb-4 Corregir el reconocimiento; no basta con mencionarla en notas. La comparabilidad mejora cuando se corrige y se revela adecuadamente.
          .row(titulo="Se modifica una cuenta sin sustento técnico")
              p.mb-4 No procede como cambio de política; requiere revisión. La comparabilidad se deteriora.
          .row(titulo="Se detecta un error de períodos anteriores")
              p.mb-4 Reconocer la corrección en el período en que se detecta y revelar su naturaleza y monto. Esto permite comprender el efecto del error y su corrección.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Revelación y trazabilidad de la información
    //- Título con imagen
    p(data-aos="fade-left") La revelación completa el tratamiento contable, pero no lo reemplaza. El Anexo 3 dispone que las notas a los estados financieros son parte integral de estos, que deben identificarse adecuadamente y que las primeras notas deben resumir las políticas y prácticas contables y los asuntos de importancia relativa.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img7.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") También exige revelar, cuando sea el caso, la naturaleza y cuantía de asuntos relevantes, y señalar expresamente los cambios contables ocurridos de un período a otro. Esto convierte la revelación en un elemento importante para que el usuario entienda cómo se construyó la información y bajo qué criterios fue preparada (Decreto 2420 Anexo 3, 2015).
        p.mt-3(data-aos="fade-left") La trazabilidad, por su parte, consiste en que cada decisión contable pueda seguirse desde el hecho económico hasta su registro, su presentación y su revelación. En la práctica, esto significa que una política contable debe poder relacionarse con soportes, comprobantes, auxiliares, asientos, estados financieros y notas.
    p(data-aos="fade-left") Cuando esa cadena no existe, la entidad puede tener una política escrita, pero no necesariamente una política aplicada. Por eso, la trazabilidad fortalece el control del registro, facilita la revisión posterior y da respaldo a las decisiones adoptadas frente a errores, reclasificaciones o cambios de criterio. Este enfoque es coherente con la finalidad de la Ley 1314 de producir información transparente, comparable y confiable (Ley 1314, 2009).
    p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
    p(data-aos="fade-left") Una entidad decide reconocer los intereses de una cuenta por cobrar conforme se causan y no solo cuando se reciben. Para que esta política sea trazable, debe existir:
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
                        | Soporte del contrato o documento que origine el interés. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Registro periódico en el auxiliar.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Asiento contable correspondiente.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Reflejo en los estados financieros.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Nota que describa la práctica contable aplicada cuando resulte relevante.
          //- Fin Carrusel
    p(data-aos="fade-left") Si la empresa registra algunos intereses por causación y otros solo al cobro, sin criterio uniforme ni revelación suficiente, se debilitan la trazabilidad, la consistencia y la comprensión de la información.
    p(data-aos="fade-left") Para comprender cómo una política contable pasa del criterio general a la aplicación concreta dentro del registro, se presenta la siguiente secuencia:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Política contable definida
              p Se establecen los criterios que guiarán el reconocimiento, medición, presentación y revelación de la información.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Identificación del hecho económico
              p Se analiza la operación o transacción para determinar su naturaleza y los soportes que la respaldan.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Reconocimiento y medición en el registro
              p Se aplica la política contable para reconocer y medir el hecho económico en los libros y auxiliares.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Presentación en estados financieros
              p La información se incorpora en los estados financieros según la clasificación y formato establecidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Revelación en notas
              p Se explican las políticas aplicadas, los asuntos relevantes y los cambios ocurridos, cuando proceda.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Seguimiento y comparación entre períodos
              p Se verifica la consistencia de la aplicación de la política y se comparan los resultados con períodos anteriores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Nota
              p Esta secuencia explica cómo una política contable se convierte en información útil, verificable y comparable.
    //- Fin Slideshows
    p(data-aos="fade-left") Los criterios de aplicación de políticas contables permiten comprender que la calidad del registro no depende solo de registrar operaciones, sino de hacerlo con uniformidad, sentido técnico y capacidad de explicación. La aplicación consistente de criterios, el tratamiento adecuado de cambios y excepciones, y la revelación con trazabilidad fortalecen la confiabilidad de la información y preparan el terreno para el siguiente desarrollo, relacionado con el ajuste del registro contable frente a errores, omisiones o diferencias detectadas (Ley 1314, 2009).
    Separador
    //- Inicio Tema3.2
    .row.mt-5
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Ajuste del registro contable
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") El ajuste del registro contable corresponde al momento en que la diferencia identificada deja de ser solo una observación técnica y se convierte en una acción concreta sobre la información financiera. En la normativa colombiana, el Decreto 2649 de 1993 dispone que cualquier error u omisión debe salvarse con un nuevo asiento en la fecha en que se advierta y que, antes de emitir estados financieros, deben efectuarse los ajustes necesarios para registrar hechos económicos no reconocidos y corregir asientos hechos incorrectamente.
        p(data-aos="fade-left") En la misma dirección, el marco técnico para microempresas compilado en el Anexo 3 del Decreto 2420 de 2015 señala que las correcciones de errores de períodos anteriores se reconocen en resultados en el mismo período en que el error es detectado y deben revelarse indicando su naturaleza y su monto (Decreto 2649, 1993).
      .col-md-4.col-lg-4.d-flex.justify-content-center        
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img8.png' style="width: 450px").img-fluid
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 En términos prácticos, esto significa que el ajuste no puede asumirse como una simple modificación operativa del sistema ni como una corrección informal del dato. Debe responder a una verificación previa, contar con soporte suficiente, dejar trazabilidad del movimiento y permitir que la información final conserve razonabilidad, objetividad y posibilidad de revisión.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema3/img9.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-5(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 La DIAN, en sus procedimientos de registro y cierre contable, exige que los registros se capturen con la información completa que soporta el asiento, que incluyan una justificación del movimiento y que, cuando se detecten inconsistencias, se realicen los ajustes, el procesamiento o el reproceso de información a que haya lugar antes del cierre definitivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Corrección de errores y omisiones
    //- Título con imagen
    p(data-aos="fade-left") La corrección de errores y omisiones parte de distinguir con claridad la causa de la diferencia.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4        
        ul.lista-ul.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Si se trata de un hecho económico ocurrido y no reconocido, procede registrar la operación pendiente. 
          li.d-flex
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Si el hecho fue reconocido con valor, fecha, cuenta o descripción errada, procede corregir el asiento equivocado mediante un nuevo registro. 
          li.d-flex
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Si el problema se origina en una omisión de información fiable disponible al momento de preparar los estados financieros, el marco técnico lo trata como error de períodos anteriores.
    p.mt-5(data-aos="fade-left") El Anexo 3 del Decreto 2420 define precisamente estos errores como omisiones o inexactitudes derivadas de no usar, o usar incorrectamente, información fiable que estaba disponible y que razonablemente debía haberse tenido en cuenta al elaborar los estados financieros. (Decreto 2420 Anexo 3, 2015).
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") La corrección no debe confundirse con una sustitución silenciosa del dato. El Decreto 2649 exige que el error u omisión se salve con un nuevo asiento en la fecha en que se advierta, y también ordena efectuar ajustes antes de emitir estados financieros para corregir asientos incorrectos y registrar hechos realizados que no hayan sido reconocidos.        
        p(data-aos="fade-left") Este criterio protege la trazabilidad del proceso y evita que la contabilidad pierda evidencia sobre el origen de la corrección (Decreto 2649, 1993).
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si al cierre de junio se detecta que una factura de mantenimiento por $ 1.250.000, recibida y aprobada en mayo, no fue registrada oportunamente, la situación corresponde a una omisión. En ese caso, el ajuste debe reconocer el gasto y la obligación con base en el soporte existente y dejar evidencia de la fecha en que la omisión fue advertida.
              p.mb-3 En cambio, si la factura sí fue registrada, pero por $ 12.500.000, el ajuste no consiste en borrar el asiento inicial, sino en elaborar el nuevo asiento que corrija la cuantía errada y conserve la trazabilidad del proceso (Decreto 2649, 1993).
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema3/img12.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Registro y aprobación del ajuste
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center.mt-5
      p(data-aos="fade-left") El registro del ajuste requiere soporte completo, justificación y adecuada incorporación al sistema contable. En el procedimiento PR-ADF-0037 de la DIAN se indica que, con la información completa que soporta el registro contable, debe capturarse la información en el formato de nota contable y que el registro debe incluir una justificación que describa o detalle el movimiento capturado. El mismo procedimiento señala que, si se encuentran inconsistencias en la información o en los soportes recibidos, debe solicitarse su corrección o complemento antes de realizar el asiento contable. 
      .col-md-8.col-lg-8
        p(data-aos="fade-right") Una vez registrado el ajuste, su aprobación depende de que el saldo resultante sea razonable y consistente. El procedimiento PR-ADF-0041 de la DIAN establece que durante el cierre se generan libros borradores para revisar, analizar y evaluar la consistencia de las cifras. Si se determinan inconsistencias, se deben realizar ajustes y reprocesos de información.
        p(data-aos="fade-left") También señala que las cuentas solo continúan hacia la aprobación del cierre cuando presentan saldos razonables y consistentes, y que en caso contrario debe adelantarse la gestión correspondiente y regresar al procesamiento de la información del período (DIAN, 2022). Para registrar y aprobar un ajuste contable, conviene verificar los siguientes elementos:
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img13.png' style="width: 450px").img-fluid
    //- Inicio Slideshow    
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        .tarjeta.tarjeta--gris.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.align-items-center(titulo="Soporte del ajuste")
              .col-md-6.mb-4.mb-md-0
                h4.ps-5 Soporte del ajuste
                p.ps-5 Factura, extracto, nota, conciliación, comprobante o documento equivalente que sustente la procedencia de la corrección.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/slide02_1.png')
            .row.align-items-center(titulo="Justificación del <br>movimiento")
              .col-md-6.mb-4.mb-md-0
                h4.ps-5 Justificación del movimiento
                p.ps-5 Explicación breve y técnica de la causa del ajuste, que permita dar claridad y trazabilidad al registro.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/slide02_2.png')              
            .row.align-items-center(titulo="Asiento de ajuste")
              .col-md-6.mb-4.mb-md-0
                h4.ps-5 Asiento de ajuste
                p.ps-5 Registro contable que corrige la omisión o el error identificado e incorpora la corrección en libros.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/slide02_3.png')              
            .row.align-items-center(titulo="Revisión del saldo <br> resultante")
              .col-md-6.mb-4.mb-md-0
                h4.ps-5 Revisión del saldo resultante
                p.ps-5 Verificación en auxiliar, libro mayor o borrador de cierre para confirmar razonabilidad y consistencia.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/slide02_4.png')              
            .row.align-items-center(titulo="Aprobación")
              .col-md-6.mb-4.mb-md-0
                h4.ps-5 Aprobación
                p.ps-5 Validación del responsable del proceso o del cierre para autorizar la incorporación definitiva del ajuste.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/slide02_5.png')
        //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Verificación de la efectividad del ajuste
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mt-5      
      p(data-aos="fade-right") La efectividad del ajuste se comprueba cuando la corrección realmente resuelve la diferencia identificada y mejora la razonabilidad del saldo. No basta con registrar una nota contable; es necesario verificar que el asiento afectó las cuentas correctas, que el saldo final quedó consistente con la evidencia disponible y que la situación que originó el ajuste ya no permanece abierta sin explicación.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 El procedimiento de cierre contable de la DIAN dispone que los libros borradores se revisen para analizar la consistencia de las cifras y que el cierre definitivo solo se realice cuando estas reflejen razonablemente los estados financieros (DIAN, 2022).
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema3/img2.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-5(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 Además, cuando la corrección corresponde a errores de períodos anteriores, el Anexo 3 del Decreto 2420 exige reconocer su efecto en resultados en el período en que el error es detectado y revelar la naturaleza del error y el monto de la corrección para cada rubro afectado.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Esto significa que la verificación de la efectividad no se limita al plano operativo del registro, sino que también alcanza la presentación y la revelación de la información. Un ajuste será técnicamente suficiente cuando:     
        ul.lista-ul.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Corrija la cuenta afectada. 
          li.d-flex
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Restablezca la consistencia del saldo. 
          li.d-flex
            i.fas.fa-check-circle.me-3(style="color:#fd9826")
            p.mb-0 Permita explicar con claridad qué ocurrió, cómo se corrigió y qué efecto produjo sobre la información financiera.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si una cuenta por cobrar estaba sobrestimada porque no se había reconocido una nota crédito por $ 400.000, la efectividad del ajuste se verifica cuando el auxiliar, el saldo del libro mayor y el estado de cuenta del tercero quedan alineados con esa nueva realidad.
              p.mb-3 Si después del ajuste el auxiliar continúa mostrando diferencias, o si la nota crédito fue registrada en una cuenta distinta, la corrección no ha sido efectiva y debe revisarse nuevamente. Este control posterior evita que el ajuste sea solo formal y garantiza que cumpla su propósito sobre la calidad del registro (Decreto 2649, 1993).
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0
              img(src='@/assets/curso/tema3/img15.svg')
    Separador
    //- Inicio Tema3.3
    .row.mt-5
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Instrumentos para la corrección contable
    .row.justify-content-center.align-items-stretch.mt-5
      p(data-aos="fade-right") La corrección contable requiere instrumentos que permitan sustentar, registrar, revisar y seguir cada ajuste de manera ordenada. En el marco colombiano, el Decreto 2649 de 1993 dispone que los hechos económicos deben documentarse mediante soportes debidamente fechados y autorizados, que las partidas asentadas en los libros deben estar respaldadas en comprobantes de contabilidad preparados previamente y que cualquier error u omisión debe salvarse con un nuevo asiento en la fecha en que se advierta.
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 Estas exigencias muestran que la corrección contable no se apoya en decisiones informales, sino en documentos y registros que hagan posible la verificación posterior. (Decreto 2649, 1993)
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema3/img16.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 De manera complementaria, el procedimiento de cierre contable de la DIAN indica que deben revisarse reportes previos, verificar saldos atípicos o fuera de rangos normales y adelantar acciones orientadas a lograr la razonabilidad y objetividad de la información contable antes del cierre.
    p.mt-3(data-aos="fade-right") En ese contexto, los instrumentos para la corrección contable cumplen una función operativa y de control: permiten dejar evidencia de la causa del ajuste, de su registro, de su revisión y de su efecto sobre los saldos finales (DIAN, 2022).          
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Comprobante de ajuste
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center.mt-5      
      .col-md-8.col-lg-8
        p(data-aos="fade-right") El comprobante de ajuste es el documento mediante el cual se formaliza la corrección de un error, una omisión, una reclasificación o cualquier otra situación que exija modificar el registro contable. El Decreto 2649 de 1993 establece que las partidas asentadas en los libros deben estar respaldadas por comprobantes de contabilidad elaborados previamente, que dichos comprobantes deben numerarse consecutivamente, indicar fecha, origen, descripción y cuantía de las operaciones, así como las cuentas afectadas con el asiento. Por ello, el comprobante de ajuste no solo respalda la corrección, sino que explica qué se corrige, por qué se corrige y cómo impacta la contabilidad (Decreto 2649, 1993).
        p(data-aos="fade-left") Este instrumento adquiere mayor relevancia cuando se trata de errores detectados después del registro inicial. El mismo Decreto 2649 dispone que cualquier error u omisión debe salvarse con un nuevo asiento en la fecha en que se advirtiere, lo cual significa que la corrección debe quedar reflejada en un comprobante específico y trazable, sin eliminar la evidencia del registro original. En consecuencia, el comprobante de ajuste se convierte en la pieza documental que articula soporte, decisión técnica y nuevo asiento contable.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img17.png' style="width: 450px").img-fluid
    p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
    p(data-aos="fade-right") Si una factura por servicios de mantenimiento fue registrada por $ 4.800.000, pero el soporte correcto demuestra que el valor real era de $ 4.080.000, el comprobante de ajuste debe:
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
                        | Identificar la diferencia de $ 720.000. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Explicar que se trata de una corrección por cuantía errada. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Señalar las cuentas afectadas. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        p.card-text.text-center
                        | Relacionar el soporte que respalda la modificación.
          //- Fin Carrusel
    p(data-aos="fade-right") De esta manera, la corrección no queda como una simple variación en el sistema, sino como una actuación contable debidamente justificada y verificable.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Formatos y plantillas de registro
    //- Título con imagen
    p(data-aos="fade-left") Los formatos y plantillas de registro son herramientas de estandarización que facilitan la captura ordenada de la información necesaria para reconocer o corregir un hecho económico. Aunque la normativa no impone un único modelo documental para todas las entidades, sí exige que existan soportes, comprobantes, auxiliares y registros que permitan conocer las transacciones individuales, identificar su origen y verificar la correspondencia entre el hecho económico y el asiento realizado.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          p Bajo esa lógica, el uso de formatos internos favorece el cumplimiento de los requisitos mínimos de claridad, consistencia y verificabilidad. Esta es una inferencia práctica basada en las exigencias documentales del Decreto 2649 de 1993.
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          
          .col-lg
            p(data-aos="fade-left") En el ámbito institucional, el listado maestro de documentos públicos de la DIAN evidencia que la entidad opera con procedimientos, manuales e instrumentos documentales para distintos tipos de registros contables y cierres, lo que muestra la importancia de contar con soportes estandarizados para cada proceso.
        p.mt-3(data-aos="fade-left") De forma coherente, el procedimiento de cierre contable de la DIAN exige revisar reportes previos y verificar la razonabilidad de la información antes de aprobar el cierre, lo que refuerza la utilidad de formatos que reúnan datos homogéneos y faciliten la revisión técnica. 
    p(data-aos="fade-left") Para apoyar la organización de la información y la revisión posterior del ajuste, pueden utilizarse los siguientes instrumentos documentales:
    //- Carrusel
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-4")
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema3/tarjeta03_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Formato de ajuste contable
                    p Incluye fecha, descripción del error, cuentas afectadas, valor y soporte relacionado. Estandariza la documentación del ajuste.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema3/tarjeta03_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Plantilla de revisión de soportes
                    p Contiene relación de facturas, extractos, notas, comprobantes y observaciones. Facilita verificar la evidencia antes de corregir.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema3/tarjeta03_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Auxiliar de movimientos
                    p Registra fecha, tercero, concepto, débito, crédito y saldo. Permite identificar el efecto del ajuste sobre la cuenta.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema3/tarjeta03_4.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Formato de seguimiento
                    p Incluye estado del ajuste, responsable, fecha de revisión y resultado. Ayuda a verificar si la corrección fue ejecutada y cerrada.
    //- Fin Carrusel
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Control y trazabilidad documental
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center.mt-5      
      .col-md-8.col-lg-8
        p(data-aos="fade-left") El control y la trazabilidad documental permiten seguir el recorrido completo de una corrección contable, desde la detección de la diferencia hasta su registro definitivo y su efecto en los saldos. El Decreto 2649 de 1993 dispone que los soportes deben adherirse a los comprobantes o conservarse archivados en orden cronológico y de tal manera que sea posible su verificación, y también exige que exista debida correspondencia entre los comprobantes y los asientos en libros auxiliares y cronológicos.
        p.p-4.bg-color-10.rounded-4(data-aos="fade-right") Esto significa que la corrección contable no termina con el asiento de ajuste; debe quedar conectada con la evidencia que la originó y con el registro que la materializa.        
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img19.png' style="width: 450px").img-fluid
      p(data-aos="fade-left") Desde la perspectiva del cierre, la trazabilidad también se relaciona con la razonabilidad y la consistencia de la información final. El procedimiento PR-ADF-0041 de la DIAN señala que la Coordinación de Contabilidad realiza seguimiento a las actividades del cierre para asegurar la disponibilidad, confiabilidad e integridad de los datos procesados, y que antes del cierre deben verificarse saldos atípicos y la consistencia de la información a incorporar. Por ello, el control documental de los ajustes no solo protege la evidencia histórica, sino que permite demostrar que la corrección fue revisada, aprobada y efectivamente incorporada al proceso contable (DIAN, 2022).
    p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico
    p(data-aos="fade-right") Si una nota crédito por devolución en compras fue omitida y luego se registra mediante ajuste, la trazabilidad documental exige poder ubicar:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 La nota crédito. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 El comprobante de ajuste. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 El auxiliar donde se reflejó la modificación. 
              .col-md-3.mb-4.mb-md-0
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  figure.mb-4
                    img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3                  
                  p.mb-0 El saldo final corregido de la cuenta afectada. 
          //- Fin Tarjetas
    p(data-aos="fade-left") Si alguno de esos eslabones falta, la entidad puede haber modificado el dato, pero no podrá demostrar con suficiencia el origen ni la validez de la corrección (Decreto 2649, 1993).          

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
