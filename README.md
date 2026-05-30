# Práctica Cloud - API Externa con Node.js

## Descripción del proyecto

Este proyecto consiste en una aplicación web que consume una API real en la nube.  
La aplicación permite al usuario escribir el nombre de una ciudad y consultar información meteorológica actual mediante una petición al backend.

El backend está desarrollado con Node.js y Express. Este servidor recibe la ciudad enviada desde el formulario, busca sus coordenadas y realiza una petición a la API pública de Open-Meteo. La respuesta se recibe en formato JSON y se muestra al usuario en la interfaz web.

El proyecto fue desarrollado como parte de la práctica de Cómputo en la Nube, aplicando los conceptos de tipos de servicios en la nube, plataformas tecnológicas, seguridad e interoperabilidad.

---

## Tecnologías utilizadas

- Node.js
- Express
- HTML
- CSS
- JavaScript
- API pública de Open-Meteo
- JSON
- GitHub
- Render / Vercel / Heroku

---

## Servicio en la nube utilizado

En este proyecto se consume la API pública de Open-Meteo, la cual permite obtener información meteorológica actual mediante peticiones HTTP.

El backend envía una solicitud a la API usando las coordenadas de una ciudad seleccionada por el usuario. La API responde en formato JSON con datos como temperatura, velocidad del viento, dirección del viento, código de clima y hora de medición.

Aunque esta API no requiere una API Key, sigue siendo un servicio externo real en la nube, ya que la aplicación obtiene información desde un sistema externo mediante internet.

---

## Funcionamiento general

1. El usuario entra a la aplicación web.
2. Escribe el nombre de una ciudad disponible.
3. El frontend envía la ciudad al backend mediante una petición HTTP.
4. El backend identifica las coordenadas de la ciudad.
5. El servidor realiza una petición a la API externa de Open-Meteo.
6. La API responde con datos meteorológicos en formato JSON.
7. El backend procesa la información recibida.
8. El frontend muestra la temperatura, velocidad del viento, dirección del viento y hora de medición.

---

# Análisis Cloud

## Tipos de Servicio 5.2

En este proyecto se pueden identificar diferentes tipos de servicios en la nube: IaaS, PaaS y SaaS/API.

### IaaS - Infrastructure as a Service

La infraestructura como servicio se refiere al uso de recursos físicos o virtuales en la nube, como servidores, redes, almacenamiento y máquinas virtuales.

En este proyecto no se administra directamente una máquina virtual, ya que la infraestructura es proporcionada por la plataforma de despliegue. Sin embargo, internamente la aplicación se ejecuta sobre servidores y recursos en la nube administrados por el proveedor.

Ejemplos relacionados con el proyecto:

- Servidores virtuales donde se ejecuta la aplicación.
- Recursos de red y almacenamiento usados por la plataforma de despliegue.
- Infraestructura física de centros de datos administrada por proveedores cloud.

---

### PaaS - Platform as a Service

La plataforma como servicio permite desplegar aplicaciones sin tener que administrar directamente servidores, sistemas operativos o infraestructura física.

En este proyecto, la aplicación puede desplegarse en una plataforma como Render, Vercel o Heroku. Estas plataformas permiten subir el código desde GitHub, instalar dependencias, ejecutar el servidor Node.js y generar una URL pública para acceder a la aplicación.

Ejemplo en este proyecto:

- Render, Vercel o Heroku funcionan como PaaS porque proporcionan el entorno necesario para ejecutar la aplicación web en producción.

El desarrollador solo se encarga del código, mientras que la plataforma administra el servidor, el sistema operativo, la red y parte de la configuración del entorno.

---

### SaaS / API - Software as a Service

El software como servicio consiste en utilizar una aplicación o servicio externo listo para usarse mediante internet.

En este proyecto se consume la API de Open-Meteo, que proporciona datos meteorológicos reales. La aplicación no calcula el clima por sí misma, sino que obtiene la información desde un servicio externo en la nube.

Ejemplo en este proyecto:

- Open-Meteo API funciona como un servicio externo en la nube.
- La aplicación consume sus datos mediante peticiones HTTP.
- El servicio devuelve información meteorológica lista para utilizarse.

---

## Estándares e Interoperabilidad 5.4

La interoperabilidad permite que diferentes sistemas puedan comunicarse entre sí, aunque estén construidos con tecnologías distintas.

En este proyecto, los datos entre el frontend, el backend y la API externa viajan en formato JSON.

JSON significa JavaScript Object Notation. Es un formato ligero para el intercambio de datos. Se utiliza ampliamente en aplicaciones web porque es fácil de leer, fácil de generar y compatible con muchos lenguajes de programación como JavaScript, Python, PHP, Java y otros.

Cuando el usuario escribe una ciudad, el frontend envía una petición al backend con un cuerpo en formato JSON:

```json
{
  "ciudad": "Tampico"
}