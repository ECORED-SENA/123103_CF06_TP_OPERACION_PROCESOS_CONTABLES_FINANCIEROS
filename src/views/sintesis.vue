<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Operación de procesos contables y financieros
        p.mb-0
          | Síntesis:           
          | Conciliación, control y mejora continua del registro contable
    p.mt-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  de conciliación, control y mejora continua del registro contable con seis áreas principales: proceso de conciliación contable y bancario, identificación de errores y omisiones, verificación y análisis de diferencias, reporte de hallazgos contables, aplicación de políticas contables y mejora continua del procedimiento. Cada área incluye acciones como comparación de libros y extractos, revisión de registros, análisis de causas, documentación de hallazgos, ajustes y seguimiento de mejoras.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
