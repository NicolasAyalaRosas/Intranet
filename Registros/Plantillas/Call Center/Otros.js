window.PLANTILLAS.callcenter["Otros"] = {

    "Llamada Cortada": `Número del que se Comunica: N/A 

Reporte: Llamada cortada.

Solución:

- Llamada finalizada de manera inesperada.
- Número del que provenía la llamada: xxxxxx.`,



    "Numero Equivocado": `Número del que se Comunica:

Reporte: Numero equivocado, se intentaban contactar con: xxxxxx.

Solución:

- Número equivocado.
- Se le explica al Sr./Srita. que el número al que se está contactando es incorrecto.`,



    "Llamada para WM B2C": `Nombre:
OMV y DN:

Reporte: Se comunican solicitando información / soporte para Walmart B2C.

Solución:

- Se le explica al Sr./Srita. que el número al que se está contactando es incorrecto.
- Se comparte el número correcto de Atención a Clientes.`,



    "Plantilla General": `Nombre:  
OMV y DN: 
Reporte: 

Validaciones sistema:

-Se valida en plataforma HUB, que la línea se encuentra en estado xxxxxx.
-Paquete: xxxxxx
-Bolsas:

Roaming xxxxxx 
TN xxxxxx 
RRSS xxxxxx

Validaciones teléfono

-IMEI: xxxxxx
-Equipo: xxxxxx

Posible causa:

- xxxxxx

Solución:

- N/A`,



    "Incidencia Masiva": `Nombre:
OMV y DN:

Reporte: Se comunica Usuario-Distribuidor reportando falla de servicio.

Solución:

- Se le explica al Usuario-Distribuidor que en este momento se esta presentando una afectación masiva que genera afectación al servicio, se le indica que no hay un ETR hasta el momento por lo que deberá estar al pendiente durante el transcurso del día.`,




"Linea Inactiva por falta de vinculacion": `Nombre:  
OMV y DN: 
Reporte: Usuario-Distribuidor reporta que la línea no cuenta con servicio.

Validaciones sistema:

-Se valida en plataforma HUB, que la línea se encuentra en estado xxxxxx.
-Paquete: xxxxxx
-Bolsas: xxxxxx

Posible causa: 

- Se valida con el Usuario-Distribuidor que la numeración del DN termina en xxxxxx, que coincide con la fecha limite para aplicar la vinculación al RNU, adicional el Usuario-Distribuidor confirma no haber realizado el proceso, confirmando adicionalmente a través de nuestra plataforma.

El escenario especifico presentado es:

* En eventos de Voz Saliente: No importa el numero marcado indica que este es incorrecto.
* En eventos de Voz Entrante: Se tiene grabación indicando "Numero marcado se encuentra Fuera de Servicio".
* En datos: Se muestra la notificación como si la terminal hubiera consumido total de bolsas disponibles, sin embargo, aun contamos con disponibilidad de beneficios.

Solución:

- Se informa al Usuario-Distribuidor que deberá aplicar el proceso de vinculación al RNU, para que la línea pueda contar con servicio nuevamente.
`,

};