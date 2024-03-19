
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.postgresql.org/" target="blank"><img src="url_de_la_imagen_postgresql" width="200" alt="PostgreSQL Logo" /></a>
</p>

<p align="center">
  <a href="https://www.docker.com/" target="blank"><img src="url_de_la_imagen_docker" width="200" alt="Docker Logo" /></a>
</p>


# Base de API completa con autenticación, PostgreSQL y Docker por Marcos Ortiz

Bienvenido a la Base de API completa con autenticación, PostgreSQL y Docker. Esta base te proporciona un punto de partida para iniciar tu proyecto Backend desde cero, con toda la funcionalidad de autenticación ya configurada.

## Características principales:

- Autenticación completa implementada con @nestjs/jwt, @nestjs/passport, @types/passport-jwt, passport y passport-jwt.
- Base de datos PostgreSQL configurada y lista para usar.
- Configuración Dockerizada para una fácil gestión y despliegue de tu aplicación.

¡Pasos para construir la aplicación y ahorra tiempo en la configuración inicial!

</p>


1. Clonar proyecto
2. `yarn install`
3. Clonar el archivo `.env.template` y renombrarlo a `.env`
4. Cambiar las variables de entorno
5. Levantar la base de datos

```
docker-compose up -d
```

6. Levantar: `yarn start:dev`
