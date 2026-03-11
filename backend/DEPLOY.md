# Despliegue en Render con PostgreSQL

1. Crea una base de datos PostgreSQL en Render y copia la URL de conexión.
2. Crea un servicio web en Render y sube el backend.
3. Configura las variables de entorno:
   - `POSTGRES_URL`: URL de conexión PostgreSQL
   - `JWT_SECRET`: tu secreto JWT
   - `GEMINI_API_KEY`: tu API key de Gemini
4. Render detectará el archivo `render.yaml` y usará los comandos de build y start.
5. El backend se conectará automáticamente a PostgreSQL y funcionará en Render.

**Nota:** El frontend puede desplegarse como un servicio estático en Render o Netlify, y debe apuntar al endpoint del backend en Render.
