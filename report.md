# Reporte de Proyecto: AI Study Summarizer

## 1. Introducción

En el presente documento se describe el desarrollo de una aplicación web denominada "AI Study Summarizer". Su propósito es facilitar el proceso de estudio mediante la generación automática de resúmenes educativos a partir de textos extensos. El sistema está dirigido a estudiantes y profesionales que necesitan sintetizar información de manera rápida y precisa.

## 2. Definición del problema

La lectura de artículos, apuntes y documentos largos consume tiempo y dificulta la extracción de ideas clave. Los métodos tradicionales de estudio suelen requerir que el usuario identifique manualmente los puntos importantes, lo cual es tedioso y propenso a omisiones. Se necesita una herramienta que automatice la síntesis de contenido para optimizar el tiempo de aprendizaje.

## 3. Objetivo del proyecto

El objetivo principal es construir una plataforma que permita a los usuarios registrarse, autenticarse y enviar fragmentos de texto para obtener resúmenes en forma de puntos clave. La generación de resúmenes se realiza mediante un modelo de inteligencia artificial (Google Gemini), integrado al backend de la aplicación.

## 4. Descripción de la solución

Se diseñó una aplicación de arquitectura cliente-servidor. El frontend proporciona formularios de registro e inicio de sesión, así como una interfaz para enviar texto y visualizar los resúmenes obtenidos. El backend expone una API REST que gestiona usuarios y procesa solicitudes de resumen. Las solicitudes de texto se reenvían a la API de Google Gemini, y la respuesta se guarda en la base de datos asociada al usuario.

## 5. Arquitectura del sistema (frontend, backend e integración de IA)

- **Frontend**: Página HTML con JavaScript vanilla que ofrece un diseño sencillo y funcional. Realiza peticiones `fetch` a los endpoints del servidor.
- **Backend**: Servidor Node.js con Express, que maneja rutas para registro, inicio de sesión, generación de resúmenes y recuperación de datos. Utiliza middleware para autenticación JWT y operaciones de bases de datos con Mongoose.
- **Integración de IA**: El backend emplea la librería `axios` para comunicarse con la API de Google Gemini. Se envía un prompt específico solicitando cinco puntos clave, y el resultado se almacena en MongoDB.

## 6. Tecnologías utilizadas

- Node.js y Express para el servidor.
- MongoDB con Mongoose para persistencia de datos.
- JSON Web Tokens (JWT) para autenticación.
- BCrypt para el hash de contraseñas.
- Axios para llamadas HTTP externas.
- Google Gemini como modelo de lenguaje.
- HTML, CSS y JavaScript puro para el frontend.

## 7. Implementación del sistema

La implementación se estructuró en carpetas claras (models, controllers, routes, middleware, utils). Se definieron esquemas Mongoose para usuarios y resúmenes. Los controladores manejan la lógica de negocio, mientras que las rutas exponen los servicios. El middleware `auth` valida tokens en las rutas privadas. Se incluyó una función `generateSummary` que encapsula la lógica de llamada a Gemini.

## 8. Resultados obtenidos

El sistema permite a un usuario registrarse y autenticarse correctamente. Tras iniciar sesión, el usuario puede enviar cualquier texto a la ruta de resumen; la aplicación responde con un conjunto de cinco puntos clave generados por el modelo de IA. Los resúmenes se almacenan y pueden recuperarse en cualquier momento. Se comprobó la seguridad básica mediante hashing de contraseñas y verificación JWT.

## 9. Conclusión

El proyecto "AI Study Summarizer" demuestra cómo integrar tecnologías web tradicionales con modelos de inteligencia artificial para resolver un problema concreto de productividad estudiantil. La arquitectura modular facilita su mantenimiento y expansión futura (por ejemplo, añadir soporte para más formatos o mejorar la interfaz). La aplicación cumple los objetivos planteados y proporciona una base sólida para desarrollos posteriores.

---

# English Version

## 1. Introduction

This document describes the development of a web application called "AI Study Summarizer." Its purpose is to facilitate the study process by automatically generating educational summaries from lengthy texts. The system is aimed at students and professionals who need to synthesize information quickly and accurately.

## 2. Problem Definition

Reading articles, notes, and long documents takes time and makes it difficult to extract key ideas. Traditional study methods often require the user to manually identify important points, which is tedious and prone to omissions. A tool is needed to automate content synthesis in order to optimize learning time.

## 3. Project Objective

The main objective is to build a platform that allows users to register, authenticate, and submit text snippets to receive summaries in the form of key points. Summaries are generated using an artificial intelligence model (Google Gemini) integrated into the application's backend.

## 4. Description of the Solution

A client-server architecture application was designed. The frontend provides registration and login forms, as well as an interface to submit text and view the obtained summaries. The backend exposes a REST API that manages users and processes summary requests. Text requests are forwarded to the Google Gemini API, and the response is stored in the database associated with the user.

## 5. System Architecture (Frontend, Backend and AI Integration)

- **Frontend**: HTML page with vanilla JavaScript offering a simple, functional design. It makes `fetch` requests to the server endpoints.
- **Backend**: Node.js server with Express, handling routes for registration, login, summary generation, and data retrieval. It uses middleware for JWT authentication and database operations with Mongoose.
- **AI Integration**: The backend uses the `axios` library to communicate with the Google Gemini API. A specific prompt requesting five key points is sent, and the result is stored in MongoDB.

## 6. Technologies Used

- Node.js and Express for the server.
- MongoDB with Mongoose for data persistence.
- JSON Web Tokens (JWT) for authentication.
- BCrypt for password hashing.
- Axios for external HTTP calls.
- Google Gemini as the language model.
- HTML, CSS, and pure JavaScript for the frontend.

## 7. System Implementation

The implementation was structured into clear folders (models, controllers, routes, middleware, utils). Mongoose schemas were defined for users and summaries. Controllers handle business logic, while routes expose the services. The `auth` middleware validates tokens on private routes. A function `generateSummary` was included to encapsulate the Gemini call logic.

## 8. Results Obtained

The system allows a user to register and authenticate correctly. After logging in, the user can send any text to the summary endpoint; the application responds with a set of five key points generated by the AI model. Summaries are stored and can be retrieved at any time. Basic security was verified through password hashing and JWT verification.

## 9. Conclusion

The "AI Study Summarizer" project demonstrates how to integrate traditional web technologies with artificial intelligence models to solve a concrete problem of student productivity. The modular architecture facilitates maintenance and future expansion (for example, adding support for more formats or improving the interface). The application meets the stated objectives and provides a solid foundation for further development.

