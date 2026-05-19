<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    
    .row.justify-content-center.align-items-center    
      .col-lg-9.order-2.order-lg-1(data-aos="fade-left")
        .bg-color-7
          .row.align-items-center            
            .col-lg-5.px-0
              figure.mb-0
                img(src="@/assets/curso/intro/img1.png", style="width:100%; height:100%; object-fit:cover; min-height: 250px;")            
            .col-lg-7.p-4.p-lg-5
              p.mb-0 La contabilidad no se reduce al registro de transacciones; es un sistema que debe garantizar información verificable, comparable, oportuna y sustentada. En este marco, la conciliación contable y bancaria, el análisis de diferencias, la revisión de inconsistencias y la validación de soportes permiten comprobar si los registros reflejan fielmente los hechos económicos y cumplen con la normativa colombiana, especialmente la Ley 1314 de 2009 y el Decreto 2420 de 2015.
      .col-10.col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img.img-fluid(src="@/assets/curso/intro/img2.png", data-aos="zoom-in", style="max-width: 300px").mx-auto    
    .row.justify-content-center.align-items-stretch.mt-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
          p.mb-0 Esta temática aborda el examen de la calidad del registro contable y tributario desde una perspectiva técnica y analítica. Su estudio permite identificar errores, omisiones y partidas pendientes, además de fortalecer la trazabilidad documental, la confiabilidad de la información y la mejora de los procedimientos. También responde a exigencias de la DIAN sobre control de diferencias y clasificación contable.
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img(src="@/assets/curso/intro/img3.png", alt="", style="height:100%; object-fit:cover;").w-100      
      .col-lg-4(data-aos="fade-left")      
        .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono comunicación" style="max-width:90px")
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
