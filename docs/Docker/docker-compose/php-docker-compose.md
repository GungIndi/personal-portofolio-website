---
sidebar_position: 2
---

# PHP Application Docker Compose

```yaml title='docker-compose.yaml'
services:
  app:
    build: .
    container_name: laravel-app
    working_dir: /var/www
    volumes:
      - .:/var/www
    depends_on:
      - db
    networks:
      - laravel_network

  nginx:
    image: nginx:latest
    container_name: laravel-nginx
    ports:
      - "8000:80"
    volumes:
      - .:/var/www
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app
    networks:
      - laravel_network

  db:
    image: mysql:8.0
    container_name: laravel-db
    restart: always
    environment:
      MYSQL_DATABASE: laravel
      MYSQL_USER: user
      MYSQL_PASSWORD: secret
      MYSQL_ROOT_PASSWORD: root
    ports:
      - "3306:3306"
    networks:
      - laravel_network

networks:
  laravel_network:
    driver: bridge

```