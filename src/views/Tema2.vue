<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Identificación de errores, omisiones e inconsistencias contables
    p(data-aos="fade-left") La identificación de errores, omisiones e inconsistencias contables constituye una labor importante dentro del control del registro, porque permite establecer si la información reconocida en libros representa de manera razonable los hechos económicos, si cuenta con soporte suficiente y si conserva coherencia con los criterios técnicos de clasificación, medición y presentación.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-7(data-aos="fade-left")
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img1.png', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 En Colombia, esta revisión se articula con la finalidad del sistema de control interno, que busca proteger los recursos, garantizar la confiabilidad de la información y disponer de mecanismos de verificación y evaluación, así como con las reglas contables que exigen soportes, comprobantes y registros verificables. Desde esta perspectiva, examinar errores e inconsistencias no es una actividad secundaria del cierre, sino una práctica permanente de aseguramiento de la calidad del dato contable y de fortalecimiento de la trazabilidad documental (Ley 87, 1993).
    p(data-aos="fade-left") Esta revisión también resulta relevante en el ámbito tributario, donde la DIAN reconoce la existencia de errores e inconsistencias formales que deben corregirse y establece que, cuando la información o los soportes presentan inconsistencias que impiden el registro, debe solicitarse su corrección antes de continuar.
    Separador
    .row.mt-5
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Tipología de errores e inconsistencias
    p(data-aos="fade-left") La identificación de errores e inconsistencias contables forma parte del control del registro, porque permite establecer si la información incorporada en libros es verificable, coherente con sus soportes y razonable frente a los hechos económicos que pretende representar.
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-4.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el sector público colombiano, la Ley 87 de 1993 define el control interno como el conjunto de planes, métodos, procedimientos y mecanismos de verificación y evaluación orientados a que las operaciones y la administración de la información se realicen conforme a las normas vigentes. En esa misma línea, la DIAN exige revisar la consistencia de las cifras, efectuar ajustes cuando se determinen inconsistencias y aprobar las cuentas solo cuando presenten saldos razonables y consistentes (Ley 87, 1993).
    p(data-aos="fade-right") Desde la técnica contable, no todas las fallas del registro tienen la misma naturaleza. El marco para microempresas compilado en el Decreto 2420 de 2015 señala que los errores de periodos anteriores comprenden omisiones e inexactitudes surgidas por no emplear, o por usar incorrectamente, información fiable disponible al momento de preparar los estados financieros, y ordena reconocer la corrección cuando el error es detectado. De manera complementaria, la DIAN reconoce errores e inconsistencias informativas en materia tributaria, como los relativos al NIT, nombre, concepto del tributo, año o período gravable y actividad económica. A continuación, se integran las principales categorías de fallas del registro contable:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Errores de contabilización
                        p.card-text.text-center
                        | Fallas en cuantía, cuenta, fecha, descripción o correspondencia con el soporte.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Omisiones
                        p.card-text.text-center
                        | Hechos económicos no registrados en la contabilidad.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Duplicidades
                        p.card-text.text-center
                        | Registro repetido de una misma operación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Clasificaciones incorrectas
                        p.card-text.text-center
                        | Uso de cuentas que no corresponden a la naturaleza del hecho económico.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Inconsistencias en soportes
                        p.card-text.text-center
                        | Falta de respaldo, errores en documentos o incumplimiento de requisitos formales.
          //- Fin Carrusel
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Errores de contabilización
    //- Título con imagen
    p(data-aos="fade-left") Los errores de contabilización se presentan cuando el hecho económico sí fue registrado, pero el asiento quedó afectado por una falla en la cuantía, la cuenta utilizada, la fecha, la descripción o la correspondencia con el soporte.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure          
          img(src='@/assets/curso/tema2/img3.png' style="width: 450px").img-fluid
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") El Decreto 2649 de 1993 dispone que los hechos económicos deben documentarse mediante soportes debidamente fechados y autorizados, que las partidas asentadas en los libros deben estar respaldadas en comprobantes de contabilidad elaborados previamente y que cualquier error u omisión debe salvarse con un nuevo asiento en la fecha en que se advierta. Esto indica que el error de contabilización no elimina la existencia del hecho económico, pero sí compromete la calidad técnica del registro (Decreto 2649, 1993).
        p(data-aos="fade-left") Además, antes de emitir estados financieros, la administración debe cerciorarse de que se cumplen afirmaciones como existencia, integridad, valuación, presentación y revelación. Por ello, si un valor quedó mal registrado, si la cuenta no corresponde a la naturaleza del hecho o si la descripción no permite entender la transacción, se afecta la razonabilidad de la información y procede la revisión del asiento y su corrección. El mismo Decreto 2649 señala que antes de emitir estados financieros deben efectuarse los ajustes necesarios para registrar hechos no reconocidos y corregir asientos elaborados incorrectamente.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si una entidad compra papelería por $ 850.000 y el asiento contable queda registrado por $ 8.500.000, la operación existe y tiene soporte, pero el registro presenta un error de contabilización por cuantía equivocada.
              p.mb-3 De manera similar, cuando una comisión bancaria se registra en una cuenta de propiedad, planta y equipo en lugar de una cuenta de gasto financiero, el hecho económico ocurrió, pero su reconocimiento contable no refleja adecuadamente su naturaleza. En ambos casos, la corrección debe quedar respaldada por soportes, comprobantes y un nuevo asiento que deje trazabilidad de la modificación (Decreto 2649, 1993). 
          .col-md-4.bg-color-16.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img4.svg')        
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Omisiones, duplicados y clasificaciones incorrectas
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mt-5
      .col-11.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Las omisiones se presentan cuando un hecho económico ocurrido no fue reconocido en la contabilidad pese a que existía información suficiente para hacerlo. Las clasificaciones incorrectas aparecen cuando la operación sí fue registrada, pero en una cuenta o rubro que no corresponde a su esencia económica.
      .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema2/img5.png", alt="Revisión de documentos", style="width: 100%; height: 100%; object-fit: cover;")
      .col-11.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-start.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="Icono contabilidad", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Los duplicados, por su parte, suelen identificarse cuando una misma operación se registra dos veces, generando sobreestimaciones de saldos o resultados. Su detección se apoya en los principios de integridad, valuación y presentación, así como en la revisión de soportes, comprobantes y auxiliares (Decreto 2420, Anexo 3, 2015).
    p.mt-5(data-aos="fade-left") La DIAN, en su procedimiento de cierre contable, exige revisar libros borradores para analizar y evaluar la consistencia de las cifras. Si se determinan inconsistencias, deben realizarse ajustes, procesamiento o reproceso de la información. También dispone que, antes del cierre, se verifique si alguna subcuenta presenta saldos atípicos o fuera de rangos normales y que la aprobación de las cuentas solo proceda cuando los saldos sean razonables y consistentes.
    p(data-aos="fade-right") Esto implica que omisiones, duplicados y clasificaciones incorrectas no solo afectan la exactitud del dato, sino que pueden impedir un cierre contable confiable.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si una factura de servicio de energía del mes fue recibida y aprobada, pero no se registró antes del cierre, existe una omisión. Si esa misma factura se contabiliza dos veces por error del sistema o por doble digitación, se genera un duplicado.
              p.mb-3 Si el gasto de mantenimiento corriente de un equipo se registra como mayor valor del activo, se presenta una clasificación incorrecta. Aunque las tres situaciones son distintas, todas afectan la integridad o la presentación de la información y deben corregirse con base en el soporte revisado. A continuación, se presenta la tipología de errores e inconsistencias contables con su descripción, efecto y acción inicial:
          .col-md-4.bg-color-17.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img6.png')
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3.mb-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img7.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Error de contabilización")
              p.mb-4 La operación se registró, pero con valor, fecha, descripción o cuenta errada, lo que genera distorsión del saldo o del rubro afectado; se requiere revisar el soporte y elaborar el asiento de corrección.              
          .row(titulo="Omisión")
              p.mb-4 La operación ocurrió, pero no fue reconocida en libros, generando subestimación de saldos, activos, pasivos, ingresos o gastos; se debe verificar el soporte y registrar el hecho económico pendiente.
          .row(titulo="Duplicado")
              p.mb-4 La misma operación aparece reconocida más de una vez, generando sobrestimación de saldos o resultados; se requiere identificar el doble registro y depurarlo con trazabilidad.
          .row(titulo="Clasificación incorrecta")
              p.mb-4 La operación fue llevada a un rubro que no corresponde, generando presentación inadecuada de la información; se debe reclasificar según la naturaleza del hecho económico.
          .row(titulo="Inconsistencia documental")
              p.mb-4 El registro no coincide con soporte, comprobante o auxiliar, generando riesgo de registro improcedente o no verificable; se debe solicitar aclaración o completar la evidencia antes del cierre.
    //- Fin Accordion
    P(data-aos="fade-left") Esta tipología permite distinguir la naturaleza de cada falla, su efecto sobre la información y la acción inicial que debe adelantarse durante la revisión contable, fortaleciendo la calidad del registro y la confiabilidad del cierre.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Criterios para su identificación
    //- Título con imagen
    p(data-aos="fade-left") La identificación de errores e inconsistencias debe apoyarse en criterios verificables y no solo en la observación general del saldo. Un primer criterio es la existencia de soporte suficiente, debidamente fechado y autorizado.
    p(data-aos="fade-right") Otro criterio consiste en comprobar que el comprobante de contabilidad haya sido preparado con fundamento en ese soporte y que guarde la debida correspondencia con los asientos en libros y auxiliares. También debe verificarse que los libros permitan conocer las transacciones individuales, que las cuentas se totalicen con su saldo y que los documentos permanezcan organizados para su consulta y verificación (Decreto 2649, 1993).  Un segundo criterio consiste en revisar el registro a la luz de las afirmaciones contables.
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Existencia
                        p.card-text.text-center
                        | Si una transacción registrada no puede probarse, se compromete la existencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Integridad
                        p.card-text.text-center
                        | Sí ocurrió, pero no fue reconocida; se afecta la integridad.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Valuación
                        p.card-text.text-center
                        | Si fue reconocida por una cuantía equivocada, se altera la valuación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Presentación y revelación
                        p.card-text.text-center
                        | Si se llevó a una cuenta incorrecta, se compromete la presentación y revelación.
          //- Fin Carrusel
    p(data-aos="fade-left") Adicionalmente, la DIAN exige que los cierres se realicen sobre cifras consistentes y razonables, y que cuando se detecten inconsistencias, se hagan los ajustes o reprocesos necesarios. Por ello, la identificación técnica del error exige cruzar registro, soporte, comprobante, auxiliares y comportamiento del saldo antes de decidir la corrección.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Durante la revisión mensual, el auxiliar refleja un pago a proveedor por $ 2.400.000, pero la factura soporte corresponde a $ 2.040.000. El comprobante existe, pero el valor del asiento no coincide con el soporte.
              p.mb-3 En este caso, el criterio documental permite detectar una inconsistencia; el criterio de valuación confirma que la cuantía no es apropiada; y el cruce con auxiliares y cierre contable permite definir si se trata de un error de digitación, un duplicado parcial o una mala elaboración del comprobante. A continuación, se presenta una secuencia de revisión para la detección técnica de errores e inconsistencias:
          .col-md-4.bg-color-18.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img8.svg')
        //- Inicio Infografia
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-8
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg
              h3 Soporte
              p Verificar que exista, esté fechado, autorizado y corresponda al hecho económico.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/linea1.png').img125
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/linea2.png').img125
            .col-lg.text-start
              h3.mt-3 Comprobante
              p Confirmar que se haya elaborado con base en el soporte y que coincida con el registro.
          .row.align-items-center
            .col-lg
              h3 Registro en libros y auxiliares
              p Revisar que refleje correctamente la operación en cuenta, valor y fecha.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/linea3.png').img125
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/linea4.png').img125
            .col-lg.text-start
              h3.mt-3 Afirmaciones contables
              p Evaluar existencia, integridad, valuación y presentación del registro.
          .row.align-items-center
            .col-lg
              h3 Consistencia del saldo
              p Analizar comportamiento del saldo frente al cierre contable y detectar variaciones atípicas.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/linea5.png').img125
    //- Fin Infografia
    p.mt-3(data-aos="fade-left") Esta secuencia permite que la identificación de errores e inconsistencias se base en la confrontación ordenada entre registro, soporte, criterio contable y evidencia de cierre, fortaleciendo la calidad y confiabilidad de la información contable.
    Separador
    .row.mt-5
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Verificación y análisis de diferencias
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") La verificación y el análisis de diferencias constituyen una etapa necesaria para determinar si la información registrada en la contabilidad es consistente con los   soportes, los auxiliares, los reportes de terceros y los documentos de cierre.
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img9.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p En la DIAN, el procedimiento de cierre contable exige analizar que el saldo reflejado en cada cuenta corresponda a su naturaleza y que, para aprobar una cuenta, los saldos sean razonables y consistentes. De forma semejante, varios procedimientos contables de la entidad indican que, cuando las diferencias se encuentran justificadas, puede continuarse con la aprobación y el cierre.
        p.mb-0 Esto implica que la diferencia no se estudia únicamente para detectar un error, sino para verificar su razonabilidad, su explicación y su efecto sobre la cuenta (DIAN, 2022).  Desde la perspectiva del control del registro, la verificación de diferencias implica los siguientes aspectos:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_1_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Contraste de fuentes
                        p.card-text.text-center
                        | Comparación entre contabilidad, soportes, auxiliares y reportes de terceros.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_1_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Confirmación de saldos o movimientos
                        p.card-text.text-center
                        | Validación directa de valores cuando existen dudas o diferencias.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_1_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Revisión de soportes
                        p.card-text.text-center
                        | Análisis de documentos que respaldan los registros contables.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_1_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Naturaleza de la diferencia
                        p.card-text.text-center
                        | Determinación de si obedece a situación temporal, omisión, clasificación o inconsistencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_1_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Decisión técnica
                        p.card-text.text-center
                        | Definición de si procede ajuste, reclasificación, seguimiento o cierre.                        
          //- Fin Carrusel
    p(data-aos="fade-left") Esta lógica se articula con la Ley 87 de 1993, según la cual el control interno comprende mecanismos de verificación y evaluación sobre las operaciones, la administración de la información y los recursos, y con el Decreto 2649 de 1993, que exige soportes verificables, comprobantes previos y correspondencia entre libros y documentos (Ley 87, 1993).
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Confirmación con clientes, proveedores y bancos
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") La verificación y el análisis de diferencias constituyen una etapa necesaria para determinar si la información registrada en la contabilidad es consistente con los soportes, los auxiliares, los reportes de terceros y los documentos de cierre.
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img10.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p En la DIAN, el procedimiento de cierre contable exige analizar que el saldo reflejado en cada cuenta corresponda a su naturaleza y que, para aprobar una cuenta, los saldos sean razonables y consistentes; de forma semejante, varios procedimientos contables de la entidad indican que, cuando las diferencias se encuentran justificadas, puede continuarse con la aprobación y el cierre.
        p.mb-0 Esto muestra que la diferencia no se estudia solo para detectar un error, sino para verificar su razonabilidad, su explicación y su efecto sobre la cuenta (DIAN, 2022).
    .row.justify-content-center.align-items-stretch.mt-5
      .col-11.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Desde la perspectiva del control del registro, verificar diferencias implica contrastar fuentes, confirmar saldos o movimientos cuando sea necesario, revisar soportes y establecer si la variación obedece a una situación temporal, a una omisión, a una clasificación inadecuada o a una inconsistencia que impida continuar con el proceso contable.
      .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema2/img11.png", alt="Revisión de documentos", style="width: 100%; height: 100%; object-fit: cover;")
      .col-11.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-start.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="Icono contabilidad", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Esta lógica se articula con la Ley 87 de 1993, según la cual el control interno comprende mecanismos de verificación y evaluación sobre las operaciones, la administración de la información y los recursos, y con el Decreto 2649 de 1993, que exige soportes verificables, comprobantes previos y correspondencia entre libros y documentos (Ley 87, 1993).
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Confirmación con clientes, proveedores y bancos
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") La confirmación con terceros es una técnica útil para verificar diferencias cuando el registro interno no basta por sí solo para explicar el saldo o el movimiento observado.
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img12.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p En materiales oficiales alojados por Función Pública sobre NIA 505, se describe la confirmación externa como evidencia obtenida directamente de un tercero en forma escrita, electrónica u otro medio, y el Anexo 4 del Decreto 2420 de 2015 remite expresamente a la NIA 505 “Confirmaciones externas”. En términos prácticos, esto respalda el uso de solicitudes de confirmación para contrastar saldos con clientes, proveedores o bancos cuando se requiere corroborar información registrada o aclarar diferencias detectadas en el proceso contable.
        p.mb-0 Aplicada al control del registro, la confirmación con clientes puede utilizarse para verificar cuentas por cobrar, anticipos o abonos pendientes; la confirmación con proveedores puede servir para revisar cuentas por pagar, notas crédito, pagos aplicados o diferencias entre factura y registro; y la confirmación con bancos permite corroborar saldos, cargos, abonos, cheques pendientes u otros movimientos reflejados en el extracto.
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_1.svg', style="width: 100px;")
            h4 Clientes
            p.mb-0 Verificar cuentas por cobrar, anticipos o abonos pendientes.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_2.svg', style="width: 100px;")
            h4 Proveedores
            p.mb-0 Revisar cuentas por pagar, notas crédito, pagos aplicados o diferencias entre factura y registro.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_3.svg', style="width: 100px;")
            h4 Bancos
            p.mb-0 Corroborar saldos, cargos, abonos, cheques pendientes u otros movimientos reflejados en el extracto.
    //- Fin Tarjetas         
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img13.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-right")
        p Cuando se utiliza esta técnica, conviene que la solicitud de confirmación identifique el tercero, el período, el valor o movimiento objeto de revisión y el propósito de la consulta. También resulta importante conservar la respuesta recibida como soporte del análisis.
        p.mb-0 Si el tercero confirma la cifra, la diferencia puede atribuirse a un problema de registro interno, de corte o de clasificación; si la niega o informa otro valor, se abre una verificación adicional sobre soportes, fechas, notas, pagos o aplicaciones. Así, la confirmación no reemplaza la revisión documental, pero sí la fortalece y aporta una evidencia adicional para decidir si procede ajuste, reclasificación o seguimiento.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-12.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono-pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Anexo 4 del Decreto 2420 de 2015
            p.mb-0 Los invitamos a revisar este anexo, que incorpora las normas de aseguramiento de la información y orienta la obtención de evidencia suficiente y adecuada para respaldar procesos de verificación, confirmación y análisis de diferencias contables.
          .mt-3.mt-lg-0.ps-lg-4            
            //- Se quitó obtenerLink() y se dejó el href directo
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76026" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
            )
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Al cierre del mes, la empresa registra una cuenta por pagar a un proveedor por $ 6.250.000, pero el proveedor remite un estado de cuenta por $ 6.600.000. Antes de ajustar, conviene solicitar confirmación del saldo y revisar si la diferencia obedece a una factura no registrada, a una nota débito aplicada por el proveedor o a un pago que aún no ha sido reconocido por una de las partes.
              p.mb-3 Si el proveedor confirma que existe una factura adicional por $ 350.000 debidamente emitida antes del cierre, la diferencia deja de ser una variación genérica y se convierte en un hecho concreto que debe analizarse documentalmente para decidir su reconocimiento.
          .col-md-4.bg-color-18.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img14.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Validación documental y cruce de información
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") La validación documental es el núcleo de la verificación contable, porque ningún análisis de diferencias es sólido si no puede relacionarse con soportes, comprobantes y libros auxiliares. El Decreto 2649 de 1993 señala que los soportes deben conservarse de tal manera que sea posible su verificación; además, dispone que las partidas asentadas en los libros deben estar respaldadas por comprobantes de contabilidad elaborados previamente, con fecha, origen, descripción, cuantía y cuentas afectadas.
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img15.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p(data-aos="fade-left") Asimismo, estos comprobantes deben guardar la debida correspondencia con los asientos en los libros auxiliares y cronológicos, exigencia que también se encuentra en el Código de Comercio (Decreto 2649, 1993).
        p(data-aos="fade-left") Por ello, el cruce de información no puede limitarse a comparar saldos finales. Debe involucrar facturas, comprobantes de egreso o ingreso, extractos, auxiliares, conciliaciones anteriores, notas contables, reportes del sistema y, cuando corresponda, documentos tributarios.
        p.mb-0 En la DIAN, los procedimientos de registro y cierre contable indican que la totalidad de los documentos deben quedar registrados oportunamente y en orden cronológico, y que si se detectan inconsistencias en la información se deben solicitar correcciones o complementos antes de continuar con el registro o el cierre. Esto refuerza la idea de que validar y cruzar información no es una condición opcional, sino necesaria para construir saldos razonables. A continuación, se presentan las fuentes documentales utilizadas en la validación y cruce de información:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Auxiliar contable
                    p Permite revisar el detalle de movimientos por fecha, tercero, valor y cuenta, lo que facilita detectar errores de registro, omisiones o duplicados.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Comprobante de contabilidad
                    p Permite verificar el soporte del asiento, la fecha, la descripción y las cuentas afectadas, confirmando la procedencia formal del registro.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Factura, cuenta de cobro o documento equivalente
                    p Permite comprobar la existencia del hecho económico y su cuantía, validando la operación frente al registro realizado.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Extracto bancario o estado de cuenta
                    p Permite contrastar saldos y operaciones con evidencia externa reportada por terceros.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Conciliación anterior
                    p Permite verificar partidas pendientes, continuidad y depuración de diferencias.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Reportes del sistema o cierre
                    p Permite analizar saldos del período, comportamiento de la cuenta, razonabilidad, consistencia y necesidad de ajustes.
    //- Fin Slideshow
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Si una cuenta de gasto muestra $ 4.980.000 en el auxiliar, pero los soportes suman $ 4.890.000, el cruce de información obliga a revisar si existe un comprobante mal elaborado, una factura cargada dos veces o una diferencia de digitación.
              p.mb-3 En este caso, el auxiliar señala el valor acumulado, el comprobante permite ubicar el asiento concreto y los soportes externos ayudan a determinar cuál cifra refleja realmente el hecho económico.
          .col-md-4.bg-color-16.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img16.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Análisis de causas de las diferencias
    //- Título con imagen
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Una vez verificada la información y confirmada la existencia de una diferencia, el paso siguiente es analizar su causa. En el procedimiento PR-ADF-0114, la DIAN establece que la conciliación bancaria tiene por objeto determinar si existen diferencias entre los saldos y los movimientos reportados en extractos o informes y los libros auxiliares contables, y realizar los trámites correspondientes para su depuración.
        p(data-aos="fade-left") El mismo procedimiento señala que las conciliaciones deben presentarse, identificarse, organizarse y archivarse con sus soportes, y que las partidas conciliatorias pendientes deben revisarse para analizar cada una y adelantar acciones de depuración en el menor tiempo posible. Esto evidencia que el análisis causal es la base para decidir qué diferencia permanece temporalmente, cuál debe corregirse y cuál exige una gestión adicional. En términos técnicos, la causa de una diferencia puede ubicarse en los siguientes grupos:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Contraste de fuentes
                        p.card-text.text-center
                        | Desfase entre el registro contable y el reconocimiento por parte del tercero.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Omisiones de registro
                        p.card-text.text-center
                        | Hechos económicos no reconocidos en la contabilidad.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Errores de registro
                        p.card-text.text-center
                        | Fallas en cuantía, fecha o cuenta utilizada.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Problemas de soporte
                        p.card-text.text-center
                        | Falta de evidencia o inconsistencias en los documentos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Aplicaciones parciales
                        p.card-text.text-center
                        | Pagos o notas aplicados de forma incompleta.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta03_2_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Diferencias justificadas
                        p.card-text.text-center
                        | Valores distintos que corresponden a la naturaleza de la operación.
          //- Fin Carrusel
    p(data-aos="fade-left") Esta clasificación es coherente con los criterios de razonabilidad y consistencia exigidos por la DIAN para aprobar las cuentas en el cierre, y con la obligación de que los registros se soporten adecuadamente y sean verificables (DIAN, 2022). El análisis de la causa evita decisiones mecánicas. No toda diferencia exige un ajuste inmediato.          
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5.mt-5(data-aos="fade-right")
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_1.svg', style="width: 100px;")
            h4 Diferencia temporal
            p.mb-0 Mantener como partida pendiente con seguimiento.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_2.svg', style="width: 100px;")
            h4 Omisión o clasificación errada
            p.mb-0 Procede la corrección contable.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema2/tarjeta04_3.svg', style="width: 100px;")
            h4 Diferencia sin soporte suficiente
            p.mb-0 Ampliar la revisión antes de registrar modificaciones.            
    //- Fin Tarjetas
    p(data-aos="fade-left") Este enfoque fortalece el control del registro, mejora la trazabilidad y permite identificar no solo qué falló, sino por qué falló y en qué punto del proceso se originó la diferencia (Ley 87, 1993).
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Al revisar una cuenta por cobrar, el auxiliar presenta un saldo de $ 12.300.000, mientras que el estado de cuenta del cliente refleja $ 11.900.000. Después de validar los soportes, se encuentra que existe una nota crédito por $ 400.000 emitida antes del cierre, pero aún no contabilizada. En este caso, la causa de la diferencia no es un problema del cliente ni una falla del sistema externo, sino una omisión interna en el reconocimiento de la nota crédito. El análisis causal permite sustentar el ajuste y evitar que la diferencia permanezca sin explicación en el siguiente período.
          .col-md-4.bg-color-16.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img17.svg')
    .row.mt-5
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Reporte de hallazgos contables
    p(data-aos="fade-left") El reporte de hallazgos contables es el medio mediante el cual se documentan, organizan y comunican las diferencias, errores, omisiones o inconsistencias detectadas durante la revisión del registro. Su importancia radica en que convierte la observación técnica en evidencia verificable y útil para la corrección, el seguimiento y el mejoramiento de los procedimientos. En Colombia, esta lógica se relaciona con la Ley 87 de 1993, que concibe el control interno como un conjunto de métodos, procedimientos y mecanismos de verificación y evaluación para proteger los recursos, garantizar la confiabilidad de la información y facilitar la adopción de decisiones; además, el Decreto 2649 de 1993 exige que los registros estén respaldados por comprobantes y soportes conservados de manera que puedan verificarse (Ley 87, 1993).
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") El reporte de hallazgos contables es el medio mediante el cual se documentan, organizan y comunican las diferencias, errores, omisiones o inconsistencias detectadas durante la revisión del registro. Su importancia radica en que convierte la observación técnica en evidencia verificable y útil para la corrección, el seguimiento y el mejoramiento de los procedimientos. En Colombia, esta lógica se relaciona con la Ley 87 de 1993, que concibe el control interno como un conjunto de métodos, procedimientos y mecanismos de verificación y evaluación para proteger los recursos, garantizar la confiabilidad de la información y facilitar la adopción de decisiones; además, el Decreto 2649 de 1993 exige que los registros estén respaldados por comprobantes y soportes conservados de manera que puedan verificarse (Ley 87, 1993).
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img18.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")        
        p.mb-0 En esa perspectiva, el hallazgo contable no debe entenderse solo como una falla detectada, sino como una situación analizada que requiere clasificación, sustento documental, definición de tratamiento y, en muchos casos, seguimiento posterior. La DIAN, en su procedimiento de cierre contable, dispone revisar la consistencia de las cifras, analizar si los saldos corresponden a su naturaleza y efectuar ajustes, reprocesos o reclasificaciones cuando se determinen inconsistencias; por su parte, el procedimiento de registro con incidencia en el cierre señala que, si la información recibida presenta inconsistencias en soportes o requisitos, debe solicitarse su corrección antes de continuar. Estas reglas muestran que reportar hallazgos no es una formalidad adicional, sino una práctica necesaria para sustentar decisiones y evitar que los errores se mantengan sin tratamiento (DIAN, 2022).   
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Matriz de inconsistencias
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      p La matriz de inconsistencias es un instrumento de organización que permite registrar de manera ordenada cada diferencia detectada, su descripción, la fuente que la origina, el posible efecto sobre la información y la acción que debe emprenderse. Aunque la norma no impone un único formato, sí exige que los soportes, comprobantes y registros puedan verificarse y que la información sea suficientemente trazable. Por ello, la matriz resulta útil para reunir en un solo documento la evidencia mínima del análisis y facilitar la revisión por parte del contador, del responsable del proceso o del control interno (Decreto 2649, 1993).
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img19.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")        
        p.mb-0 Desde una perspectiva técnica, la matriz no debe limitarse a describir la anomalía. También conviene que identifique la cuenta afectada, el período, el tercero relacionado, el soporte revisado, la clasificación preliminar del hallazgo y la acción propuesta, por ejemplo: ajuste, reclasificación, solicitud de soporte adicional o seguimiento. Esta forma de documentar es coherente con el procedimiento de cierre contable de la DIAN, que exige analizar la consistencia de las cifras y aprobar las cuentas solo cuando los saldos sean razonables; asimismo, el procedimiento de la CGN para evaluación del control interno contable señala que el objetivo del control interno contable es promover información financiera con características cualitativas adecuadas y gestionar los riesgos del proceso contable, lo cual supone identificar y tratar oportunamente las situaciones que comprometen esa calidad.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Durante la revisión del cierre mensual se identifican tres situaciones: una comisión bancaria no registrada, una factura contabilizada dos veces y una cuenta por cobrar cuyo saldo no coincide con el estado de cuenta del cliente. En lugar de dejar estas observaciones dispersas en correos o notas de revisión, la matriz de inconsistencias permite consignarlas una por una, indicar el valor comprometido, señalar el soporte revisado y definir si corresponde ajuste, depuración o confirmación con tercero. De ese modo, la revisión gana orden, trazabilidad y posibilidad real de seguimiento (DIAN, 2022).
              p.mb-3 La siguiente tabla presenta una propuesta básica de campos para organizar una matriz de inconsistencias contables. Su finalidad es facilitar el registro ordenado de los hallazgos y apoyar su análisis posterior con base en evidencia documental.
          .col-md-4.bg-color-16.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img20.svg')
    //- Inicio Tabla
    .row.justify-content-center.mt-5
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Estructura sugerida de una matriz de inconsistencias contables
        .tabla-a
          table
            thead
              tr
                th(style="width: 20%") Campo
                th(style="width: 40%") Contenido esperado
                th(style="width: 40%") Utilidad en el análisis
            tbody
              tr
                td Fecha de identificación
                td Día en que se detecta la situación.
                td Permite ubicar el hallazgo en el proceso de revisión.
              tr
                td Cuenta o rubro afectado
                td Cuenta contable relacionada.
                td Delimita el impacto sobre la información.
              tr
                td Descripción de la inconsistencia
                td Explicación breve del hecho observado.
                td Resume la situación detectada.
              tr
                td Soporte revisado
                td Factura, comprobante, extracto, auxiliar, nota, entre otros.
                td Sustenta la verificabilidad del hallazgo.
              tr
                td Tipo de hallazgo
                td Error, omisión, duplicado, clasificación incorrecta, diferencia pendiente.
                td Facilita su clasificación técnica.
              tr
                td Acción propuesta
                td Ajuste, reclasificación, solicitud de información, seguimiento.
                td Orienta la respuesta inicial.
              tr
                td Responsable
                td Área o persona encargada de la gestión.
                td Define trazabilidad y control.
              tr
                td Estado
                td Pendiente, en trámite, corregido, verificado.
                td Permite seguimiento.
    //- FinTabla
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Informe de diferencias y ajustes requeridos
    //- Título con imagen
    p(data-aos="fade-left") El reporte de hallazgos contables es el medio mediante el cual se documentan, organizan y comunican las diferencias, errores, omisiones o inconsistencias detectadas durante la revisión del registro. Su importancia radica en que convierte la observación técnica en evidencia verificable y útil para la corrección, el seguimiento y el mejoramiento de los procedimientos.
    .row.justify-content-center.align-items-stretch.mt-5
      .col-11.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 En Colombia, esta lógica se relaciona con la Ley 87 de 1993, que concibe el control interno como un conjunto de métodos, procedimientos y mecanismos de verificación y evaluación para proteger los recursos, garantizar la confiabilidad de la información y facilitar la adopción de decisiones. Además, el Decreto 2649 de 1993 exige que los registros estén respaldados por comprobantes y soportes conservados de manera que puedan verificarse (Ley 87, 1993). 
      .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema2/img21.png", alt="Revisión de documentos", style="width: 100%; height: 100%; object-fit: cover;")
      .col-11.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-start.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="Icono contabilidad", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En esta perspectiva, el hallazgo contable no se limita a una falla detectada, sino que corresponde a una situación analizada que requiere clasificación, sustento documental, definición de tratamiento y, en muchos casos, seguimiento posterior.          
    p.mt-5(data-aos="fade-left") La DIAN dispone revisar la consistencia de las cifras, analizar si los saldos corresponden a su naturaleza y efectuar ajustes, reprocesos o reclasificaciones cuando se determinen inconsistencias. Asimismo, establece que, si la información presenta inconsistencias en soportes o requisitos, debe solicitarse su corrección antes de continuar. Esto evidencia que el reporte de hallazgos constituye una práctica necesaria para sustentar decisiones y evitar que los errores permanezcan sin tratamiento (DIAN, 2022).    
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico 1
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 La matriz de inconsistencias es un instrumento de organización que permite registrar de manera ordenada cada diferencia detectada, su descripción, la fuente que la origina, el posible efecto sobre la información y la acción que debe emprenderse.
              p.mb-3 Aunque no existe un formato único, se requiere que los soportes, comprobantes y registros sean verificables y que la información conserve trazabilidad. Por ello, la matriz permite reunir en un solo documento la evidencia del análisis y facilitar su revisión (Decreto 2649, 1993).
              p.mb-3 Desde una perspectiva técnica, la matriz debe incluir elementos como cuenta afectada, período, tercero relacionado, soporte revisado, clasificación preliminar del hallazgo y acción propuesta, como ajuste, reclasificación, solicitud de soporte adicional o seguimiento.
          .col-md-4.bg-color-19.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-0
              img(src='@/assets/curso/tema2/img22.svg')    
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico 2
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-12.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Durante la revisión del cierre mensual se identifican tres situaciones: una comisión bancaria no registrada, una factura contabilizada dos veces y una cuenta por cobrar cuyo saldo no coincide con el estado de cuenta del cliente.
    p.mt-5(data-aos="fade-left") La matriz de inconsistencias permite consignarlas de manera ordenada, indicar el valor comprometido, señalar el soporte revisado y definir si corresponde ajuste, depuración o confirmación con tercero, fortaleciendo la trazabilidad y el seguimiento (DIAN, 2022). A continuación, se presenta la estructura de una matriz de inconsistencias contables:              
    //- Carrusel
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-4")
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Fecha de identificación
                    p Día en que se detecta la situación, lo que permite ubicar el hallazgo en el proceso de revisión.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Cuenta o rubro afectado
                    p Cuenta contable relacionada, que delimita el impacto sobre la información.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Descripción de la inconsistencia
                    p Explicación breve del hecho observado que resume la situación detectada.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_4.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Soporte revisado
                    p Factura, comprobante, extracto, auxiliar, nota, entre otros, que sustentan la verificabilidad.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_5.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Tipo de hallazgo
                    p Error, omisión, duplicado, clasificación incorrecta o diferencia pendiente, facilitando su clasificación técnica.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_6.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Acción propuesta
                    p Ajuste, reclasificación, solicitud de información o seguimiento, orientando la respuesta inicial.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_7.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Responsable
                    p Área o persona encargada de la gestión, que define trazabilidad y control.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema2/tarjeta07_8.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Estado
                    p Pendiente, en trámite, corregido o verificado, permitiendo el seguimiento.
    //- Fin Carrusel
    p(data-aos="fade-left") Este enfoque permite documentar los hallazgos de manera ordenada, verificable y útil para el control, el análisis posterior y la mejora del proceso contable.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Comunicación y seguimiento de hallazgos
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img23.png' style="width: 450px").img-fluid
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p La comunicación de hallazgos contables es necesaria para que la información detectada no se quede en el ámbito individual del revisor, sino que llegue al responsable del registro, al área que aporta el soporte o al nivel de control que deba conocerla. La Ley 87 de 1993 vincula el control interno con la protección de los recursos, la confiabilidad de la información y la adopción de medidas preventivas y correctivas; en esa medida, comunicar hallazgos forma parte del control porque hace posible que la entidad reaccione a tiempo frente a errores, omisiones o deficiencias de procedimiento (Ley 87, 1993).
        p.mb-0 El seguimiento consiste en verificar si la acción propuesta fue ejecutada, si el ajuste se registró correctamente, si el soporte faltante fue aportado o si la diferencia pendiente ya fue aclarada. El procedimiento de la CGN incorporado por la Resolución 347 de 2025 enfatiza la retroalimentación y el mejoramiento continuo dentro del control interno contable, y plantea que el sistema debe gestionar riesgos y promover información financiera con las características cualitativas definidas por el marco normativo aplicable.
    .row.justify-content-center.align-items-stretch.mt-5
      .col-11.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 De manera complementaria, la DIAN exige que, cuando se detectan inconsistencias, estas se atiendan mediante ajustes, reprocesos o correcciones antes de consolidar el cierre. Por ello, el seguimiento no es una etapa opcional, sino una prolongación del reporte del hallazgo (Contaduría General de la Nación, 2025).
      .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema2/img24.png", alt="Revisión de documentos", style="width: 100%; height: 100%; object-fit: cover;")
      .col-11.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-start.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="Icono contabilidad", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En términos prácticos, comunicar y hacer seguimiento a los hallazgos permite identificar patrones. Si una misma inconsistencia aparece de forma reiterada, como registros tardíos de comisiones bancarias, doble contabilización de facturas o soportes incompletos de egresos, se evidencia una debilidad del procedimiento. En este caso, el hallazgo deja de ser una corrección puntual y se convierte en insumo para la mejora continua del proceso contable.    
    //- Inicio Accordion    
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Comisión bancaria no registrada")
              p.mb-4  Informar al responsable del registro contable, elaborar el ajuste con soporte bancario y verificar en el siguiente corte que el ajuste fue contabilizado.        
          .row(titulo="Factura duplicada")
              p.mb-4 Comunicar al contador o revisor del cierre, depurar el doble registro, dejar trazabilidad y confirmar que el saldo quedó corregido.
          .row(titulo="Soporte incompleto de un egreso")
              p.mb-4 Solicitar el documento faltante al área origen, suspender la aprobación hasta completar la evidencia y revisar que el soporte se anexe y el comprobante quede completo.
          .row(titulo="Diferencia con saldo de proveedor")
              p.mb-4 Remitir solicitud de confirmación o revisión, verificar estado de cuenta y soportes, y definir si procede ajuste o continuidad del seguimiento.
    //- Fin Accordion
    p(data-aos="fade-left") A continuación, se presenta la secuencia del reporte de hallazgos contables:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Detección de la diferencia
                        p.card-text.text-center
                        | Se identifica una diferencia, error, omisión o inconsistencia en los registros.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Registro en la matriz de inconsistencias
                        p.card-text.text-center
                        | Se documenta el hallazgo en la matriz, consignando la información clave.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Revisión de soportes y análisis técnico
                        p.card-text.text-center
                        | Se revisan los soportes relacionados y se analiza técnicamente la diferencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Definición de ajuste, reclasificación o seguimiento
                        p.card-text.text-center
                        | Se determina la acción necesaria: ajuste contable, reclasificación o seguimiento.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Elaboración del informe de diferencias
                        p.card-text.text-center
                        | Se consolida la información y se elabora el informe con los hallazgos y conclusiones.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Comunicación al responsable del proceso
                        p.card-text.text-center
                        | Se presenta el informe y las acciones propuestas al responsable correspondiente.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta08_7.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Verificación de la acción ejecutada
                        p.card-text.text-center
                        | Se verifica que la acción se haya ejecutado correctamente y que la diferencia haya quedado resuelta.
          //- Fin Carrusel
    p(data-aos="fade-left") El estudio de los errores, omisiones e inconsistencias contables permite comprender que la calidad del registro no depende únicamente de que una operación esté digitada o incorporada en el sistema, sino de que pueda verificarse, explicarse y sostenerse con evidencia suficiente.
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
