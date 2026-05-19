<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Proceso de conciliación contable y bancaria
    p(data-aos="fade-left") La conciliación contable y bancaria es un procedimiento de control y verificación que permite confrontar los valores registrados en libros con los reportados por la entidad financiera, con el fin de identificar diferencias, explicarlas y, cuando corresponda, sustentar ajustes o acciones de seguimiento.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img1.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") En el contexto colombiano, este ejercicio adquiere especial importancia porque la Ley 1314 de 2009 orienta la producción de información financiera comprensible, transparente, comparable, pertinente y confiable, mientras que el Decreto 2420 de 2015 compila el marco reglamentario de las normas de contabilidad, información financiera y aseguramiento de la información. A ello se suma que la Ley 87 de 1993 concibe el control interno como parte intrínseca del desarrollo de las funciones, lo que refuerza el valor de la conciliación como práctica de verificación permanente.
        p En procedimientos institucionales colombianos, la conciliación bancaria se describe como la comparación entre extractos bancarios y registros contables o auxiliares de bancos para determinar diferencias, explicar partidas conciliatorias y elaborar un informe que sirva de soporte para la revisión, el archivo y, si aplica, la gestión de ajustes. También se evidencia que suele desarrollarse con periodicidad mensual y que no termina en la simple comparación de saldos, sino en la depuración de partidas, la validación de soportes y la formalización del resultado del proceso.
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Estructura del proceso de conciliación
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") La estructura del proceso de conciliación contable y bancaria parte de una lógica de contraste entre la información registrada por la organización y la información reportada por la entidad financiera.
        p(data-aos="fade-left") En Colombia, la regulación contable define que los libros deben permitir asentar las operaciones, establecer mensualmente el resumen por cuenta con sus movimientos débito y crédito, y apoyarse en auxiliares que hagan posible conocer las transacciones individuales y su verificación. En esa misma línea, los procedimientos institucionales de conciliación bancaria señalan que el proceso inicia con la solicitud del extracto y de los auxiliares, y culmina con el formato de conciliación y sus soportes, lo que permite entender que la conciliación no es un acto aislado, sino un procedimiento con inicio, desarrollo, cierre y evidencia documental (Decreto 2649, 1993). A partir de lo anterior, se identifican los elementos del proceso de conciliación descritos:
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img2.png' style="width: 450px").img-fluid
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Inicio
                        p.card-text.text-center
                        | Solicitud del extracto bancario y de los auxiliares.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Desarrollo
                        p.card-text.text-center
                        | Contraste entre la información contable y la reportada por la entidad financiera.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cierre
                        p.card-text.text-center
                        | Elaboración del formato de conciliación con sus soportes.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Evidencia
                        p.card-text.text-center
                        | Documentación que respalda el proceso realizado.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img3.png', style="max-width: 250px", data-aos="zoom-in").m-auto          
            p(data-aos="fade-right") Detectar diferencias con fundamento documental evita que el análisis se reduzca a una simple comparación de cifras. Para ello, resulta necesario partir de la relación entre el libro mayor y los auxiliares, verificar la consistencia de los saldos iniciales y de los movimientos del período, y definir con claridad hasta dónde llega el proceso de conciliación, qué información examina y qué productos debe dejar como evidencia de control.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Relación entre mayor y auxiliar
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-7(data-aos="fade-left")
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img4.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La relación entre el mayor y el auxiliar es fundamental para comprender cómo se organiza la información contable antes de ser conciliada. El Decreto 2649 de 1993 establece que los libros deben permitir, por una parte, asentar las operaciones y, por otra, establecer mensualmente el resumen de cada cuenta con sus movimientos débito y crédito; además, precisa que deben llevarse los auxiliares necesarios para conocer las transacciones individuales, identificar códigos y permitir el entendimiento completo de la información resumida. De esta manera, el libro mayor cumple una función de síntesis por cuentas, mientras que el auxiliar detalla el origen, la fecha, el tercero, el comprobante y la cuantía específica de cada movimiento (Decreto 2649, 1993).
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 En una conciliación bancaria, esta relación se vuelve especialmente importante porque el saldo reflejado en el mayor debe corresponder al acumulado que proviene de los movimientos registrados en el auxiliar de bancos. El auxiliar permite rastrear cada consignación, cheque, transferencia, nota débito o nota crédito; el mayor resume el comportamiento total de la cuenta.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema1/img5.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
          p.mb-0 Cuando existe una diferencia entre el saldo en libros y el saldo del extracto, la revisión no se realiza únicamente sobre el total de la cuenta. Se requiere descender al auxiliar para ubicar el movimiento específico que origina la diferencia y validar su soporte. Los procedimientos institucionales de conciliación bancaria refuerzan esta lógica al indicar que la confrontación se realiza entre los movimientos registrados en los auxiliares y los valores contenidos en el extracto bancario.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10        
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-0 Si en el mayor la cuenta Bancos presenta un saldo de $ 18.250.000 al cierre del mes, ese valor debe provenir de la suma organizada de los movimientos registrados en el auxiliar de bancos. Si durante la conciliación se observa que el extracto bancario reporta $ 17.950.000, la diferencia de $ 300.000 no se investiga en el mayor, porque allí solo aparece el saldo resumido; la revisión debe hacerse en el auxiliar para verificar, por ejemplo, si existe un cheque girado no cobrado, una comisión bancaria no registrada o una consignación contabilizada y aún no reflejada por el banco. El mayor orienta sobre el saldo global, pero el auxiliar permite explicar técnicamente la diferencia. A continuación, se sintetiza la función de cada registro dentro del proceso de conciliación:
          .col-md-4.bg-color-9.d-flex.align-items-center.justify-content-center(style="background-color: #FDB338;")
            figure.mb-0.p-4
              img(src='@/assets/curso/tema1/img6.svg')
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta02_1.svg', style="width: 100px;")
            h4 Libro mayor
            p.mb-0 Resume mensualmente el movimiento de cada cuenta y permite identificar el saldo contable total que se confronta con el extracto.
        .col-md-4
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta02_2.svg', style="width: 100px;")
            h4 Libro auxiliar
            p.mb-0 Detalla cada transacción y permite ubicar el origen de la diferencia, revisar soportes y justificar partidas conciliatorias.
    //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Saldos iniciales y movimientos del período
    //- Título con imagen
    p(data-aos="fade-left") Los saldos iniciales y los movimientos del período constituyen la base cuantitativa sobre la cual se desarrolla la conciliación. Desde el punto de vista técnico, el saldo inicial de una cuenta corresponde al valor con el que se abre el período y que proviene del cierre anterior; a partir de ese punto se incorporan los débitos y créditos del mes para obtener el nuevo saldo.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Decreto 2649 de 1993 dispone que las cuentas, tanto en los libros de resumen como en los auxiliares, deben totalizarse por lo menos al final de cada mes, determinando su saldo, lo que evidencia que la conciliación requiere continuidad entre un período y otro y no puede construirse sobre cifras aisladas o sin arrastre contable (Decreto 2649, 1993).
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") En el caso específico de la conciliación bancaria, los procedimientos institucionales indican que la revisión parte de los saldos existentes en el auxiliar contable y en el extracto bancario, y que luego se confrontan los movimientos registrados durante el mes. Esto significa que el análisis no se limita a comparar dos saldos finales, sino que exige examinar cómo se llegó a ellos.
        p(data-aos="fade-left") Un saldo inicial correcto puede verse alterado por consignaciones pendientes, transferencias, cheques girados no cobrados, notas débito, notas crédito o registros omitidos. Por esa razón, la revisión de los movimientos del período es indispensable para determinar si la diferencia corresponde a una partida conciliatoria temporal o a un error que exige ajuste contable. 
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img8.png' style="width: 450px").img-fluid
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Una empresa inicia el mes con un saldo en libros de $ 12.000.000 en la cuenta de bancos. Durante el período, registra consignaciones por $ 5.000.000 y pagos por $ 3.200.000, por lo que su saldo contable al cierre es de $ 13.800.000.
              p.mb-3 Sin embargo, al revisar el extracto, aparece un saldo de $ 13.650.000. La diferencia de $ 150.000 obliga a revisar los movimientos del mes. Al examinar el auxiliar, se encuentra una nota débito bancaria por cuota de manejo de $ 50.000 no registrada y una consignación realizada el último día del mes por $ 200.000 que aún no fue abonada por el banco.
              p.mb-3 Así, el análisis de los movimientos permite explicar la diferencia sin perder la continuidad entre el saldo inicial, los registros del período y el saldo final conciliado. A continuación, se presenta la lógica mínima de revisión al confrontar la información contable con el extracto bancario:
          .col-md-4.bg-color-11.d-flex.align-items-center.justify-content-center(style="background-color: #5CABB0;")
            figure.mb-0.p-4
              img(src='@/assets/curso/tema1/img9.svg')
    //- Inicio Infografia
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Saldo inicial del período
              p Corresponde al saldo con el que se inicia el período contable, proveniente del cierre del período anterior.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea1.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea2.png').img125
            .col-lg.text-start
              h3 Registro de débitos y créditos en el auxiliar
              p Se registran cronológicamente todas las transacciones del período (consignaciones, pagos, transferencias, notas débito/crédito, cheques, etc.).
          .row
            .col-lg
              h3 Determinación del saldo final en libros
              p Se totalizan los débitos y créditos del período en el auxiliar para obtener el saldo contable en libros.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea3.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea4.png').img125
            .col-lg.text-start
              h3 Comparación con el saldo del extracto bancario
              p Se confronta el saldo en libros con el saldo reportado por la entidad financiera en el extracto bancario del mismo período.
          .row
            .col-lg
              h3 Revisión de movimientos no coincidentes
              p Se analizan los movimientos que no coinciden entre libros y extracto para identificar su causa.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea5.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea6.png').img125
            .col-lg.text-start
              h3 Identificación de partidas conciliatorias o ajustes
              p Se clasifican y justifican las diferencias como partidas conciliatorias (temporales) o como ajustes contables.
    //- Fin Infografia
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Alcance del proceso de conciliación
    //- Título con imagen
    p(data-aos="fade-left") El alcance del proceso de conciliación contable y bancaria define qué información se revisa, hasta dónde llega la verificación y cuál es el resultado técnico que debe obtenerse. En el procedimiento PR-ADF-0114, la DIAN establece que la conciliación tiene por objeto determinar si existen diferencias entre los saldos y los movimientos reportados en los extractos bancarios y los libros auxiliares contables, así como realizar los trámites correspondientes para su depuración.
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 El proceso inicia con la solicitud y recepción de los extractos bancarios y finaliza con la presentación, identificación, organización y archivo de las conciliaciones junto con sus soportes. Esto implica que no se limita a comparar cifras, sino que incluye la explicación, documentación y cierre formal de las diferencias encontradas. 
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema1/img10.png",  style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", style="max-width:90px")
          p.mb-0 Desde la perspectiva normativa, el Decreto 2649 de 1993 establece que las cuentas deben totalizarse al menos mensualmente, tanto en libros de resumen como en auxiliares, y que los comprobantes deben corresponder con los asientos contables, además de conservarse de forma ordenada. Por su parte, la Ley 87 de 1993 señala que el control interno comprende métodos, procedimientos y mecanismos de verificación orientados a asegurar la confiabilidad de la información.
    p.mt-5(data-aos="fade-left") En consecuencia, el alcance de la conciliación no se limita a la revisión de saldos, sino que incluye la validación de movimientos, soportes, partidas pendientes y evidencias documentales que respalden la razonabilidad del registro contable. Este alcance puede integrarse en los siguientes componentes del proceso:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Inicio y base de verificación
                    p Comprende la solicitud y recepción de extractos, así como la revisión del saldo inicial proveniente del período anterior.                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Desarrollo del análisis
                    p Incluye el análisis de los movimientos del período y la confrontación con el extracto bancario.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Identificación de diferencias
                    p Corresponde a la clasificación de partidas conciliatorias, registros omitidos y valores no contabilizados.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Cierre y soporte documental
                    p Implica la elaboración, organización y archivo de la conciliación con sus respectivos soportes.
    //- Fin Slideshow
    p(data-aos="fade-left") Este enfoque permite identificar si una diferencia corresponde a una partida conciliatoria temporal, a un registro omitido, a un cargo o abono bancario no contabilizado o a una situación que requiere depuración posterior.
    p(data-aos="fade-right") El proceso abarca la revisión del saldo inicial, el análisis de los movimientos del período, la comparación con el extracto, la clasificación de las diferencias y la elaboración del soporte final de conciliación, fortaleciendo el control sobre el efectivo y la trazabilidad de la información contable.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-12.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono-pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 PR-ADF-0114 – procedimiento de conciliación bancaria DIAN
            p.mb-0 Los invitamos a revisar este procedimiento, que orienta el desarrollo de la conciliación bancaria, la identificación de diferencias, la gestión de partidas conciliatorias y la elaboración del informe final.
          .mt-3.mt-lg-0.ps-lg-4            
            //- Se quitó obtenerLink() y se dejó el href directo
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              href="https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Pagadora/Procedimientos/PR-ADF-0114.pdf" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
            )
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Diferencias y partidas conciliatorias
    p(data-aos="fade-left") En el proceso de conciliación contable y bancaria, las diferencias constituyen el punto de partida del análisis técnico. La DIAN establece en su procedimiento PR-ADF-0114 que la conciliación bancaria tiene como propósito determinar si existen diferencias entre los saldos y los movimientos reportados en los extractos bancarios y los registros contables, así como adelantar los trámites requeridos para su depuración.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7                  
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Esto implica que la conciliación no se limita a la comparación de cifras finales, sino que exige revisar la naturaleza de cada diferencia, establecer si corresponde a una partida conciliatoria o a un error de registro y dejar evidencia suficiente del tratamiento aplicado. 
        p Desde la lógica del control contable, una diferencia no debe interpretarse automáticamente como una inconsistencia grave. En muchos casos, estas obedecen a desfases temporales entre el registro en libros y el reconocimiento del movimiento por parte del banco; en otros, se originan en omisiones, cargos no registrados, errores de digitación o soportes pendientes de incorporación. A partir de esta distinción, el análisis de las diferencias permite clasificarlas según su naturaleza:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center
            .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema1/tarjeta03_1.png').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Partidas conciliatorias          
                  p.text-center Diferencias originadas en desfases temporales entre los registros contables y el reconocimiento bancario.
            .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema1/tarjeta03_2.png').w-100                
                .p-4
                  h4.card-title.text-center.mb-4 Errores de registro                  
                  p.text-center Diferencias derivadas de omisiones, cargos no registrados, errores de digitación o soportes no incorporados.
          //- Fin Tarjetas
    p Esta clasificación permite distinguir entre situaciones transitorias y hechos que requieren ajuste, depuración o seguimiento, fortaleciendo la confiabilidad del registro contable y el control sobre el efectivo. 
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Saldo en libros y saldo en bancos
    //- Título con imagen
    p(data-aos="fade-left") A continuación, se presenta pódcast sobre el saldo en libros y el saldo en bancos, destacando sus diferencias, su función dentro de la conciliación bancaria y su importancia para la razonabilidad de la información contable.        
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
      .row.align-items-stretch
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema1/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#fff") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Saldo en libros saldo en bancos
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema1/img12.png')
    //- Fin Podcast
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Al cierre del mes, el auxiliar contable de la cuenta bancaria presenta un saldo de $ 9.850.000. El extracto bancario, sin embargo, reporta un saldo de $ 9.600.000. La diferencia de $ 250.000 no debe asumirse de inmediato como error.
              p.mb-3 Primero se debe revisar si existen operaciones pendientes de reflejo entre una fuente y otra. Si se encuentra un cheque girado por $ 300.000 que aún no ha sido cobrado y una comisión bancaria de $ 50.000 no registrada en libros, se concluye que la diferencia obedece a una combinación de partida conciliatoria temporal y ajuste contable necesario. A continuación, se sintetiza la naturaleza de cada saldo dentro del proceso de conciliación:
          .col-md-4.bg-color-13.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-4
              img(src='@/assets/curso/tema1/img13.svg')
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5
      .col-lg-12.col-md-4.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_1.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Saldo en libros
            p.text-center Valor contable acumulado de la cuenta, determinado a partir de los registros del período (libro mayor y auxiliar contable).
      .col-lg-12.col-md-4.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_2.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Saldo en bancos
            p.text-center Valor reportado por la entidad financiera para la misma fecha de corte (extracto bancario).
      .col-lg-12.col-md-4.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_3.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Diferencia inicial            
            p.text-center Distancia entre ambos saldos que da origen al análisis de partidas conciliatorias, ajustes o seguimientos.
    //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Depósitos en tránsito y cheques pendientes
    //- Título con imagen
    p(data-aos="fade-left") Los depósitos en tránsito y los cheques pendientes constituyen ejemplos clásicos de partidas conciliatorias. Los primeros corresponden a valores ya registrados en libros por la organización, pero que aún no han sido abonados por la entidad financiera en el extracto de la fecha de corte. Los segundos se refieren a cheques o pagos ya reconocidos contablemente, pero que todavía no han sido cobrados o debitados por el banco.
    p(data-aos="fade-right") En ambos casos, la diferencia no surge necesariamente de un error, sino de una diferencia temporal entre el momento del registro contable y el momento del procesamiento bancario. Esta lógica es consistente con el tratamiento que la DIAN da a las partidas conciliatorias al exigir que las diferencias sean identificadas, justificadas y soportadas dentro de la conciliación. El análisis de estas partidas implica los siguientes aspectos:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Fecha del movimiento")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Fecha del movimiento
                p Permite identificar el momento del registro contable frente al procesamiento bancario.
          .py-3.py-md-4(titulo="Comprobante")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_2.png')
              .col-md-6
                h4 Comprobante
                p Corresponde al soporte de egreso o consignación que respalda la operación.
          .py-3.py-md-4(titulo="Soporte bancario")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_3.png')
              .col-md-6
                h4 Soporte bancario
                p Evidencia emitida por la entidad financiera.
          .py-3.py-md-4(titulo="Conciliación anterior")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_4.png')
              .col-md-6
                h4 Conciliación anterior
                p Permite verificar si la partida ya venía en seguimiento.          
    //- Cierres Pestanas horizontales
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") Este análisis exige revisar la fecha del movimiento, el comprobante de egreso o de consignación, el soporte bancario y la conciliación del período anterior. Si un depósito aparece en libros al cierre del mes, pero solo se refleja en el extracto del mes siguiente, debe mantenerse como partida conciliatoria hasta que se perfeccione el abono bancario.
        p(data-aos="fade-left") De forma similar, si un cheque ya fue girado y registrado, pero aún no ha sido cobrado por el beneficiario, su efecto permanece en la diferencia conciliatoria hasta el momento del débito efectivo. Este seguimiento evita eliminar indebidamente partidas aún vigentes y sostiene la trazabilidad del proceso. Desde una perspectiva operativa, estas partidas evidencian que el manejo del efectivo requiere disciplina documental.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img15.png' style="width: 450px").img-fluid
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta05_1.svg', style="width: 100px;")
            h4 Depósito en tránsito
            p.mb-0 Comprobante de consignación y registro contable correspondiente.
        .col-md-4
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta05_2.svg', style="width: 100px;")
            h4 Cheque pendiente
            p.mb-0 Comprobante de egreso, auxiliar y relación de pagos emitidos.
    //- Fin Tarjetas
    p(data-aos="fade-right") Cuando esta trazabilidad no existe, la diferencia deja de ser una simple partida conciliatoria y se convierte en un hecho que requiere revisión más profunda. Por ello, la identificación de depósitos en tránsito y cheques pendientes facilita la conciliación y fortalece el control interno del registro contable.
    .row.mt-5.justify-content-center(data-aos="fade-right")
      .col-12.col-md-11.col-lg-10
        p.p-2.d-inline-block.rounded-1.fw-bold.bg-color-primario(style="background-color: #7FE5D3;") Ejemplo práctico        
        .row.g-0.rounded-4.overflow-hidden(style="background-color: #E9F8F6;")
          .col-md-8.p-4.p-lg-5.d-flex.align-items-center
            div
              p.mb-3 Una empresa registra el 30 de abril una consignación por $ 1.200.000 y conserva el soporte bancario. Al revisar el extracto con corte al mismo día, el valor aún no aparece abonado, por lo que el depósito se clasifica como depósito en tránsito.
              p.mb-3 Sí, además, el 28 de abril se expidió un cheque por $ 480.000 a un proveedor y el extracto todavía no refleja el débito; dicho valor se clasifica como cheque pendiente. Ninguna de estas situaciones implica por sí sola un error contable, pero ambas deben quedar identificadas en la conciliación y revisarse en el período siguiente.
          .col-md-4.bg-color-14.d-flex.align-items-center.justify-content-center
            figure.mb-0.p-4
              img(src='@/assets/curso/tema1/img16.svg')
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Diferencias, análisis preliminar y ajustes
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") Una vez identificadas las diferencias entre el saldo en libros y el saldo en bancos, el análisis preliminar debe orientarse a clasificar cada partida según su naturaleza. El procedimiento PR-ADF-0114 de la DIAN indica que la conciliación busca determinar diferencias entre saldos y movimientos y realizar los trámites correspondientes.
        p(data-aos="fade-left") A su vez, otros procedimientos financieros de la entidad muestran que, una vez recibido el formato de conciliación, debe verificarse si existen o no partidas conciliatorias y proceder a su identificación, organización y archivo. Esto confirma que el análisis preliminar no es una revisión superficial, sino una etapa de clasificación técnica que antecede a la decisión sobre ajustes o seguimientos. En esta fase, el análisis se orienta a partir de los siguientes criterios:
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img17.png' style="width: 450px").img-fluid
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5.mt-5(data-aos="fade-left")
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta06_1.svg', style="width: 100px;")
            h4 Soporte de la diferencia
            p.mb-0 Determina si la partida cuenta con evidencia suficiente.
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta06_1.svg', style="width: 100px;")
            h4 Naturaleza temporal
            p.mb-0 Permite establecer si corresponde a un desfase entre contabilidad y banco.
        .col-md-4.mb-4.mb-md-0
          .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema1/tarjeta06_1.svg', style="width: 100px;")
            h4 Necesidad de corrección
            p.mb-0 Define si se requiere ajuste en el registro contable.
    //- Fin Tarjetas
    P(data-aos="fade-left") Cuando la partida está soportada y obedece a un desfase entre la contabilidad y el banco, se conserva como conciliatoria. Cuando se identifica un cargo bancario no registrado, un abono no incorporado o una omisión en libros, procede el ajuste contable correspondiente.
    .row.mb-5.justify-content-center.align-items-center
      .col-md-5.col-lg-5.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img18.png' style="width: 450px").img-fluid
      .col-md-7.col-lg-7
        p(data-aos="fade-left") Cuando la diferencia carece de respaldo o presenta inconsistencias en valores, fechas o terceros, debe adelantarse una verificación adicional antes de cualquier registro definitivo. Este enfoque evita decisiones apresuradas y favorece el tratamiento responsable de la información.
        p(data-aos="fade-right") El ajuste no constituye una reacción automática frente a cualquier diferencia, sino el resultado de un análisis previo soportado. Solo después de verificar la causa de la diferencia, examinar su evidencia y determinar su efecto sobre el saldo, resulta procedente incorporar el ajuste al registro contable.
        p(data-aos="fade-left") Esta práctica es coherente con la obligación de registrar los hechos económicos con fundamento en comprobantes debidamente soportados y con la necesidad de conservar una conciliación clara, trazable y revisable (Decreto 2649, 1993).
    p(data-aos="fade-right") A continuación, se presenta una guía para clasificar diferencias frecuentes y orientar su tratamiento inicial:
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
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Consignación registrada en libros y no abonada por el banco
                        p.card-text.text-center
                        | Mantener como partida conciliatoria y verificar en el período siguiente.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cheque girado y no debitado por el banco
                        p.card-text.text-center
                        | Mantener como partida conciliatoria y hacer seguimiento.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Comisión bancaria registrada en extracto y no en libros.
                        p.card-text.text-center
                        | Elaborar ajuste contable con soporte.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Transferencia abonada por el banco y no registrada en libros
                        p.card-text.text-center
                        | Registrar el ajuste una vez verificado el soporte.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Diferencia sin soporte claro
                        p.card-text.text-center
                        | Investigar antes de ajustar.
          //- Fin Carrusel
    p(data-aos="fade-right") El estudio de las diferencias y partidas conciliatorias permite comprender que la conciliación bancaria es un ejercicio de análisis y depuración. Al confrontar saldo en libros y saldo en bancos, identificar depósitos en tránsito y cheques pendientes, y desarrollar un análisis preliminar de las diferencias, se fortalece la verificación del registro contable y la sustentación de ajustes de manera técnica y documentada.
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Reporte de la conciliación
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El reporte de la conciliación es la evidencia formal del análisis efectuado sobre los saldos y movimientos comparados entre la contabilidad y el extracto bancario. En el procedimiento PR-ADF-0114, la DIAN señala que el proceso de conciliación finaliza con la presentación, identificación, organización y archivo de las conciliaciones y sus correspondientes soportes.
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 Esto implica que el resultado del ejercicio no se limita a una revisión verbal o a anotaciones dispersas, sino que se consolida en un documento estructurado, verificable y útil para el control posterior. Además, la entidad dispone que las conciliaciones bancarias se elaboren con periodicidad mensual dentro de los diez primeros días hábiles del mes siguiente al mes conciliado, lo que refuerza la necesidad de reportes oportunos, completos y comparables entre períodos.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema1/img20.png", , style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", style="max-width:90px")
          p.mb-0 Desde la perspectiva contable, el reporte cumple una función técnica y una función de control. La función técnica consiste en mostrar cómo se explica la diferencia entre el saldo en libros y el saldo en bancos; la función de control consiste en dejar trazabilidad sobre lo revisado, lo pendiente y lo que debe ajustarse o seguirse en el período siguiente.
    p.mt-5(data-aos="fade-right") Esta lógica es coherente con el Decreto 2649 de 1993, que exige que los soportes se conserven de manera que sea posible su verificación, y que los comprobantes de contabilidad guarden correspondencia con los asientos en los libros auxiliares y en los registros cronológicos de las operaciones (Decreto 2649, 1993).          
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Matriz e informe de conciliación
    //- Título con imagen
    .row.mb-0.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") La matriz de conciliación es el instrumento de trabajo en el que se ordenan los datos fundamentales del ejercicio: saldo en libros, saldo en bancos, movimientos identificados, partidas conciliatorias, diferencias explicadas y acciones a seguir. El informe, por su parte, es el documento que sintetiza el resultado del análisis y deja constancia del estado final de la conciliación.
        p(data-aos="fade-right") En el instructivo IN-ADF-0180, la DIAN precisa que los resultados del ejercicio deben consignarse en el formato “FT-ADF-1512 Conciliación Bancaria” y que, para preparar la conciliación, se requiere reunir extracto bancario, reporte de movimientos, conciliación del mes anterior, comprobantes de egreso, copias de consignaciones y chequera. Esto evidencia que la matriz y el informe no son formatos aislados, sino herramientas que organizan información previamente verificada y soportada. 
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img21.png' style="width: 450px").img-fluid
    p(data-aos="fade-left") En términos prácticos, una matriz de conciliación bien elaborada permite ubicar con rapidez qué partidas son temporales, cuáles exigen ajuste y cuáles deben mantenerse en seguimiento. Por ejemplo, si el saldo en libros es de $ 15.400.000 y el saldo en bancos es de $ 15.050.000, la matriz puede mostrar que existen un depósito en tránsito por $ 500.000 y una comisión bancaria no registrada por $ 150.000. Con esa información, el informe final no se limita a indicar la existencia de una diferencia, sino que explica su origen, identifica el tratamiento dado a cada partida y establece el saldo conciliado. A continuación, se presentan los elementos mínimos que componen una matriz o informe de conciliación:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Identificación del período
                    p Mes o fecha de corte de la conciliación que delimita el alcance temporal del análisis.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Saldo en libros
                    p Valor tomado del auxiliar o del sistema contable, determinado a partir de los registros del período.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Saldo en bancos
                    p Valor reportado en el extracto bancario para la misma fecha de corte.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Partidas conciliatorias
                    p Depósitos en tránsito, cheques pendientes, notas débito o crédito, entre otras diferencias de carácter temporal.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Ajustes requeridos
                    p Cargos o abonos no registrados en libros y otras diferencias que exijan corrección contable.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Soportes revisados
                    p Extractos, comprobantes, consignaciones, conciliación anterior y reportes auxiliares utilizados en la verificación.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_7.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Responsable y revisión
                    p Nombre, cargo, fecha y validación del responsable, que permiten trazabilidad y control del proceso.
    //- Fin Slideshow
    p(data-aos="fade-left") Este enfoque permite que el reporte de conciliación conserve su carácter técnico, documentado y verificable, garantizando la trazabilidad del proceso y facilitando su revisión posterior.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-12.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono-pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 IN-ADF-0180 – instructivo de conciliación bancaria DIAN
            p.mb-0 Los invitamos a conocer este instructivo, que presenta lineamientos prácticos sobre la documentación requerida, los formatos y las actividades necesarias para realizar una conciliación ordenada y verificable.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              href="https://www.dian.gov.co/atencionciudadano/LMDP/Administrativo-y-Financiero/Funcion-Pagadora/Instructivos/IN-ADF-0180.pdf" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
              )
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download    
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Soportes documentales
    //- Título con imagen    
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") Los soportes documentales son el fundamento probatorio del reporte de conciliación. El Decreto 2649 de 1993 dispone que los soportes deben adherirse a los comprobantes de contabilidad o conservarse archivados en orden cronológico y de forma que sea posible su verificación; además, señala que los comprobantes deben prepararse con fundamento en esos soportes, numerarse consecutivamente e indicar fecha, origen, descripción, cuantía y cuentas afectadas.
      .col-md-8.col-lg-8
        p(data-aos="fade-right") A ello se suma el Código de Comercio, que exige la debida correspondencia entre los asientos de los libros y los comprobantes y ordena conservar los libros y papeles contables por al menos diez años. En consecuencia, una conciliación carece de solidez técnica si sus diferencias no pueden rastrearse hasta el soporte que las explica.
        p.p-4.bg-color-15.rounded-4(data-aos="fade-left") En la práctica, los soportes documentales de una conciliación incluyen, como mínimo, el extracto bancario, el reporte de movimientos del auxiliar, la conciliación del mes anterior y los documentos específicos que explican cada partida, como consignaciones, comprobantes de egreso, notas bancarias o relaciones de cheques. El instructivo IN-ADF-0180 enumera este tipo de documentos para la preparación del ejercicio, lo que evidencia que el soporte es una condición para que el reporte sea verificable y tenga valor como evidencia contable y administrativa. A continuación, se presenta la secuencia documental mínima que respalda el reporte de conciliación:
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img22.png' style="width: 450px").img-fluid
    //- Carrusel
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-4")
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Extracto bancario
                    p Documento emitido por la entidad financiera con los movimientos y el saldo del período.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Reporte auxiliar de movimientos
                    p Relación detallada de los movimientos registrados en la contabilidad (auxiliar de bancos).
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Conciliación anterior
                    p Documento del período previo que permite dar continuidad a partidas pendientes.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_4.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Comprobantes y soportes específicos de cada partida
                    p Consignaciones, comprobantes de egreso, notas bancarias, cheques, entre otros, que respaldan cada diferencia.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_5.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Matriz o formato de conciliación
                    p Documento donde se comparan saldos, se identifican diferencias, se clasifican partidas conciliatorias y se proponen ajustes.
                .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                  img(src='@/assets/curso/tema1/tarjeta06_6.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-3 Informe final, revisión y archivo
                    p Informe que consolida el resultado de la conciliación, se revisa, se firma y se archiva junto con todos los soportes.
    //- Fin Carrusel
    p(data-aos="fade-left") Esta secuencia permite asegurar que cada diferencia identificada en la conciliación pueda explicarse mediante una cadena documental clara, organizada y verificable, fortaleciendo el control y la confiabilidad de la información contable.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Recomendaciones y seguimiento
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      p(data-aos="fade-left") El reporte de conciliación no debe cerrarse únicamente con la descripción de las diferencias; también debe incorporar recomendaciones y acciones de seguimiento. El procedimiento PR-ADF-0114 indica que, como política contable, las áreas responsables deben adelantar de forma permanente las acciones necesarias para la depuración de las partidas conciliatorias en el menor tiempo posible.
      .col-md-8.col-lg-8
        p(data-aos="fade-right") Además, establece que las conciliaciones deben realizarse mensualmente dentro de los diez primeros días hábiles del mes siguiente, lo que evidencia que el seguimiento forma parte del alcance del proceso y que la conciliación constituye una herramienta para orientar decisiones correctivas y preventivas. 
        p(data-aos="fade-left") Las recomendaciones pueden dirigirse a distintos niveles: al registro contable, al control documental y al mejoramiento del procedimiento. Algunas se orientan a registrar oportunamente comisiones, abonos o notas bancarias no incorporadas; otras a fortalecer el archivo de consignaciones, comprobantes y relaciones de pagos; y otras a reducir el tiempo entre la ocurrencia del movimiento y su registro o establecer revisiones previas antes del cierre mensual.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img23.png' style="width: 450px").img-fluid
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 La Ley 87 de 1993 respalda esta lógica al señalar que el control interno debe proteger los recursos, prevenir riesgos, detectar y corregir desviaciones y disponer de mecanismos de verificación y evaluación (Ley 87, 1993).
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/tema1/img24.png", , style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", style="max-width:90px")
          p.mb-0 El seguimiento consiste en verificar si las partidas pendientes del período anterior fueron resueltas, si los ajustes propuestos se registraron efectivamente y si persisten diferencias que ameriten una revisión más profunda.
    p.mt-3(data-aos="fade-left") Un ejemplo corresponde a un cheque pendiente que permanece sin cobro por varios meses: en este caso, el informe debe recomendar su revisión específica y dejar constancia en el seguimiento del período siguiente. Esta práctica mejora la trazabilidad, evita la acumulación de partidas sin depuración y fortalece la mejora de los procedimientos de registro contable y tributario. . A continuación, se presentan ejemplos de recomendaciones y seguimiento dentro del reporte de conciliación:
    //- Inicio Accordion    
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Comisión bancaria registrada en extracto y no en libros")
              p.mb-4 Elaborar el ajuste contable con su soporte y, posteriormente, verificar en el mes siguiente que el registro fue efectuado en la contabilidad.              
          .row(titulo="Depósito en tránsito al cierre")
              p.mb-4 Confirmar su abono en el extracto del período siguiente y retirar la partida de la conciliación únicamente cuando el valor aparezca efectivamente reflejado en el banco.
          .row(titulo="Cheque pendiente por varios meses")
              p.mb-4 Revisar el estado del pago, solicitar validación del beneficiario y, con base en ello, definir si continúa como partida conciliatoria o si requiere una gestión adicional.
          .row(titulo="Reincidencia de diferencias por registros tardíos")
              p.mb-4 Revisar la oportunidad del proceso de registro contable y proponer mejoras en los tiempos y responsables del procedimiento para evitar la repetición de la situación.
    //- Fin Accordion
    p(data-aos="fade-left") Este enfoque permite que el reporte de conciliación no solo documente las diferencias identificadas, sino que también incorpore acciones claras, verificables y sujetas a seguimiento, fortaleciendo el control interno y la mejora continua del proceso.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
