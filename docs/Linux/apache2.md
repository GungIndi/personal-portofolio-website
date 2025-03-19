---
sidebar_position: 10
---

# Apache2

Apache2 is an open-source web server that allows hosting websites and applications with support for modules, reverse proxy, and load balancing.

## Apache2 Configuration
The primary configuration file is `/etc/apache2/apache2.conf`. It controls global settings:
```sh title='/etc/apache2/apache2.conf'
# Global Configuration
Timeout 300
KeepAlive On
MaxKeepAliveRequests 100
KeepAliveTimeout 5

# Process Control
<IfModule mpm_prefork_module>
    StartServers 5
    MinSpareServers 5
    MaxSpareServers 10
    MaxRequestWorkers 150
    MaxConnectionsPerChild 3000
</IfModule>

# Enable required modules
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule rewrite_module modules/mod_rewrite.so
```
Custom configurations are typically placed in `/etc/apache2/sites-available/` and enabled with `a2ensite`, you have a full customizable service layer that you can configure, below is some way you can configure apache2

### Serving Static Files

To serve simple static files from Apache, configure a virtual host file like below

```sh title='/etc/apache2/sites-available/static-site.conf'
<VirtualHost *:80>
    ServerName static.example.com
    DocumentRoot /var/www/static

    <Directory /var/www/static>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
Enable config file and restart the apache server:
```sh
sudo a2ensite static-site.conf
sudo systemctl restart apache2
```

### Reverse Proxy with Load Balancing

configure Apache2 as a reverse proxy with load balancing, just create a new virtual host file like below

```sh title='/etc/apache2/sites-available/reverse-proxy.conf'
<VirtualHost *:80>
    ServerName example.com
    ProxyPreserveHost On
    ProxyPass / http://backend_cluster/
    ProxyPassReverse / http://backend_cluster/

    <Proxy balancer://backend_cluster>
        BalancerMember http://127.0.0.1:3000 loadfactor=1
        BalancerMember http://127.0.0.1:3001 loadfactor=2
        BalancerMember http://127.0.0.1:3002 loadfactor=1
    </Proxy>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Enable the configuration and restart Apache:

```sh
sudo a2ensite reverse-proxy.conf
sudo systemctl restart apache2
```

### SSL Configuration

To enable SSL, you simply just create an SSL-enabled virtual host file like below

```sh title='/etc/apache2/sites-available/ssl-site.conf'
<VirtualHost *:443>
    ServerName example.com
//highlight-start
    SSLEngine on
    SSLCertificateFile /etc/apache2/ssl/example.com.crt
    SSLCertificateKeyFile /etc/apache2/ssl/example.com.key
//highlight-end

    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Enable the configuration and restart Apache:
```sh
sudo a2ensite ssl-site.conf
sudo systemctl restart apache2
```

### Virtual Hosts for Multiple Websites

To host multiple websites, just create separate virtual host files.

Example 1:
```sh title='/etc/apache2/sites-available/example1.conf'
<VirtualHost *:80>
    ServerName example1.com
    DocumentRoot /var/www/example1

    <Directory /var/www/example1>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Example 2:
```sh title='/etc/apache2/sites-available/example2.conf'
<VirtualHost *:80>
    ServerName example2.com
    DocumentRoot /var/www/example2

    <Directory /var/www/example2>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Like usual, enable the site and restart apache2
```sh
sudo a2ensite example1.conf example2.conf
sudo systemctl restart apache2
```

### Enabling Required Modules

To enable necessary modules, run:

```sh
sudo a2enmod proxy proxy_http ssl rewrite headers
sudo systemctl restart apache2
```