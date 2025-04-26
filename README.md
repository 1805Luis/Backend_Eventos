# Proyecto de Microservicios: Venta de Entradas a Eventos

Este proyecto utiliza una arquitectura de microservicios para gestionar la venta de entradas a eventos. Cada microservicio está aislado y se comunica a través de un **API Gateway** que centraliza las peticiones. Los microservicios son los siguientes:

- **Usuarios**: Gestión de usuarios (nombre, DNI y contraseña).
- **Eventos**: Gestión de eventos (información sobre eventos, asientos disponibles, precios).
- **Reservas**: Gestión de reservas de entradas.
- **Bases de Datos**:
  - **MongoDB**: Para gestionar eventos.
  - **PostgreSQL**: Para gestionar usuarios.
  - **MariaDB**: Para gestionar reservas.

## Arquitectura

La arquitectura está compuesta por los siguientes servicios:

- **API Gateway**: Expondrá las rutas de acceso a los microservicios. Se encuentra en el puerto 3000.
- **Microservicio de Usuarios**: Expuesto en el puerto 3002.
- **Microservicio de Eventos**: Expuesto en el puerto 3001.
- **Microservicio de Reservas**: Expuesto en el puerto 3004.
- **Bases de Datos**:
  - **MongoDB**: Base de datos para los eventos, expuesto en el puerto 27020.
  - **PostgreSQL**: Base de datos para los usuarios, expuesto en el puerto 5432.
  - **MariaDB**: Base de datos para las reservas, expuesto en el puerto 3307.

## Requisitos

- Docker
- Docker Compose

## Configuración

El archivo `docker-compose.yml` define la infraestructura de la siguiente manera:

## Redes

Se utiliza una red personalizada `server_net` con la siguiente configuración de direcciones IP:

## Instrucciones para Levantar el Proyecto

1. Asegúrate de tener Docker y Docker Compose instalados.
2. Clona este repositorio.
3. En la raíz del proyecto, ejecuta: `docker-compose up --build`


