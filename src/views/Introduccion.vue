<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-stretch.mb-4      
      .col-11.col-md-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .bg-color-7.rounded-3.overflow-hidden.h-100
          .row.g-0.align-items-stretch.h-100
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img(src="@/assets/curso/intro/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
            .col-12.col-md-7.d-flex.align-items-center
              .p-4.p-md-5
                p.mb-0 La contabilidad no se reduce al registro de transacciones; es un sistema que debe garantizar información verificable, comparable, oportuna y sustentada. En este marco, la conciliación contable y bancaria, el análisis de diferencias, la revisión de inconsistencias y la validación de soportes permiten comprobar si los registros reflejan fielmente los hechos económicos y cumplen con la normativa colombiana, especialmente la Ley 1314 de 2009 y el Decreto 2420 de 2015.
      .col-8.col-sm-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
        figure.mb-0.w-100.text-center
          img.img-fluid(src="@/assets/curso/intro/img2.png", alt="", style="max-width: 100%; width: 260px;")          
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-11.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Esta temática aborda el examen de la calidad del registro contable y tributario desde una perspectiva técnica y analítica. Su estudio permite identificar errores, omisiones y partidas pendientes, además de fortalecer la trazabilidad documental, la confiabilidad de la información y la mejora de los procedimientos. También responde a exigencias de la DIAN sobre control de diferencias y clasificación contable.      
      .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/intro/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-11.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-start.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Su aprendizaje fortalece criterios de verificación, control y mejoramiento indispensables para una gestión contable responsable. Además, contribuye a reducir riesgos de error, mejorar la respuesta ante requerimientos internos y fiscales y respaldar decisiones organizacionales con información confiable.
</template>

<script>
export default {
  name: 'Introduccion',
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
