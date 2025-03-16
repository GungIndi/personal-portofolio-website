---
sidebar_position: 3
---

# PHP Dockerfile

```docker title='Dockerfile'
# Use official PHP image with necessary extensions
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd mbstring zip pdo pdo_mysql exif

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Ensure .env exists
RUN cp .env.example .env || true

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

# Set correct permissions
RUN chown -R www-data:www-data /var/www && \
    find /var/www/ -type d -exec chmod 755 {} \; && \
    find /var/www/ -type f -exec chmod 644 {} \; && \
    chmod -R 775 storage bootstrap/cache database

# Switch to www-data user
USER www-data
    
# Generate application key
RUN php artisan key:generate

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]


# Below is Optional if you want to add startup script
# COPY start.sh /start.sh
# RUN chmod 755 /start.sh
# ENTRYPOINT [ "./start.sh" ]
```


## How to

### Identify Laravel Requirements
1. PHP version and extensions (Check `composer.json` → `require.php`, or `php -v`, or `composer show --platform`)
2. PHP extensions (Run `composer install` and note missing extensions)
3. Or Just copy your composer.json, and then ask GPT
4. Database (MySQL, PostgreSQL, SQLite, etc.)
5. Web server (Nginx or Apache)
6. Dependencies (Node.js, npm/Yarn, Composer, Redis, etc.)


### Select Base Image
- `php:8.2-fpm` → For Laravel with Nginx
- `php:8.2-apache` → For Laravel with Apache
- `php:8.2-cli` → For CLI usage

### Install Composer Dependencies
```Dockerfile
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader
```

### Set Up Laravel Permissions
Laravel needs the `storage/` and `bootstrap/cache/` folders to be writable:
```Dockerfile
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage \
    && chmod -R 775 /var/www/bootstrap/cache
```

###  Set Environment Variables & Optimize
1. Use `.env` file (via docker-compose).
2. Optimize Laravel for production:
```Dockerfile
RUN php artisan config:cache && php artisan route:cache
```

### Startup Command
```Dockerfile
CMD ["php-fpm"]
# or
CMD ["apache2-foreground"]
```