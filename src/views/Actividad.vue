<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>  
  </template>
<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conciliación, control y mejora continua del registro contable',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión del proceso de conciliación contable y bancaria, la identificación de errores e inconsistencias, el ajuste del registro contable y el mejoramiento de procedimientos, mediante un cuestionario de selección múltiple aplicado a situaciones del entorno organizacional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del proceso de conciliación contable y bancaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confrontar los valores registrados en libros con los reportados por la entidad financiera para identificar y explicar diferencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Generar los comprobantes de nómina de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Calcular los impuestos mensuales que debe pagar la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los libros auxiliares del sistema contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Dentro de la conciliación bancaria, ¿qué función cumple el libro auxiliar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Resume mensualmente el movimiento global de todas las cuentas de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplaza al extracto bancario en caso de pérdida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Detalla el origen, la fecha, el tercero y la cuantía específica de cada movimiento, permitiendo ubicar el origen de las diferencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aprueba automáticamente los ajustes propuestos en la balanza de comprobación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se clasifica una consignación que ya fue registrada en los libros de la organización pero que aún no aparece abonada en el extracto bancario a la fecha de corte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cheque pendiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Error de contabilización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nota débito no reconocida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depósito en tránsito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es la "matriz de conciliación"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un documento que consolida los estados financieros anuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El instrumento de trabajo donde se ordenan los saldos, movimientos, partidas conciliatorias y acciones a seguir.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una herramienta exclusiva para liquidar la nómina electrónica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El reporte que envía el banco con los cobros por comisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Si una empresa compra papelería por $ 850.000 y el asiento queda registrado por $ 8.500.000, ¿a qué tipo de situación corresponde?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificación incorrecta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Error de contabilización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depósito en tránsito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué situación se presenta cuando una factura de servicio de energía aprobada no se contabiliza en el sistema antes del cierre del mes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omisión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Duplicado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ajuste por causación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificación incorrecta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito de la "matriz de inconsistencias" en el reporte de hallazgos contables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir como extracto bancario interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autorizar el pago a los proveedores de forma automática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el comprobante de ajuste en el software contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar de manera ordenada cada diferencia detectada, su descripción, el soporte y la acción propuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elementos constituyen la base cuantitativa sobre la cual se desarrolla y analiza de forma completa una conciliación bancaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente los saldos finales reportados al cierre del año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los saldos iniciales del período junto con los débitos y créditos (movimientos) registrados durante el mes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente los cheques girados que ya fueron cobrados por los proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las políticas de contratación del área financiera',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué debe incluirse en el informe final de conciliación además de las diferencias encontradas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto de ventas del próximo año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una lista de los proveedores que llamaron por teléfono.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Acciones de seguimiento y recomendaciones para limpiar las partidas pendientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La hoja de vida del contador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuándo se considera que un ajuste contable fue realmente efectivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al imprimir el documento de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando el gerente firma la conciliación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando se cambia de banco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando la corrección elimina la diferencia y refleja el saldo real en los libros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué instrumento documental formaliza la corrección de un error, explicando qué se corrige, por qué y cómo impacta la contabilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El recibo de caja menor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La factura de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El comprobante de ajuste.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La declaración de renta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En el diagnóstico de un procedimiento contable, ¿qué indica la presencia de un "cuello de botella"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que una etapa concreta concentra demoras, aprobaciones acumuladas o dependencia excesiva de una persona.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que la empresa tiene demasiados empleados en el área de contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el software funciona de manera completamente automática.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no existen errores de contabilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Al mejorar un proceso contable, ¿cómo debe entenderse correctamente la automatización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como la eliminación total del área contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como un medio para fortalecer el control y reducir tareas manuales, sin reemplazar el juicio técnico del contador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como la compra de computadores más rápidos para digitar facturas a mano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como una forma de evadir la normativa tributaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué significa evaluar la "factibilidad de mejora" de un procedimiento contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurarse de que el cambio solo se haga si es completamente gratis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Preguntarles a los clientes si están de acuerdo con el cambio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar si la solución puede aplicarse realmente con los recursos, medios y condiciones disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Priorizar únicamente las fallas que afectan el pago de nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuáles son los tres componentes fundamentales para evaluar y sostener una mejora en el procedimiento contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alineación normativa, evaluación de resultados y sostenibilidad del procedimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Simplificación de impuestos, contratación de personal y aumento de salarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compra de <i>software </i>, eliminación de formatos y reducción de controles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cambio de gerente, auditoría externa y renovación de equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el primer paso en la secuencia para la socialización institucional de mejoras contables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar sanciones a quienes cometan errores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivar los manuales contables antiguos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comprar un nuevo  <i>software</i> en la nube.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificación y planificación de los cambios que deben incorporarse.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'En la fase de socialización, ¿por qué es indispensable "verificar la aplicación del cambio"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para comprobar si el equipo lo está utilizando y si produjo el efecto esperado sobre la calidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para decidir a qué empleado se debe despedir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para archivar el manual de procedimientos en la biblioteca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para justificar el presupuesto gastado en la capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la utilidad principal de documentar los procedimientos contables mediante manuales, formularios y flujos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumir más papel en la oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar la memoria institucional, estandarizar el proceso y facilitar la trazabilidad y consulta posterior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el trabajo de la gerencia financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que los auditores revisen la contabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Según la perspectiva de calidad y mejora continua, ¿qué etapas conforman el ciclo PHVA aplicado a los procesos contables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Planear, Hacer, Verificar, Actuar (ejecutar, verificar resultados y corregir/ajustar).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planear, Hacer, Vender, Auditar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preguntar, Hablar, Valorar, Archivar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar, Habilitar, Validar, Aprobar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué se logra al sostener un sistema contable con control documental, indicadores y mejora continua en el tiempo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el procedimiento dependa exclusivamente del conocimiento de una sola persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que no se requieran más comprobantes de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que las políticas contables puedan cambiarse diariamente sin justificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la empresa reduzca errores, reprocesos y pérdidas de tiempo, fortaleciendo la confiabilidad y la eficacia operativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
