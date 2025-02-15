---
sidebar_position: 9
---

# NGINX

NGINX is basically a web server that also functions as a reverse proxy, load balancer, and HTTP cache.

### NGINX Config

```sh title='/etc/nginx/nginx.conf'

# Control how many paralel processes to handle request (usually equal to cpu cores)
worker_processes auto;

events {
    worker_connections 768;             # How many asynchronous connection 
    multi_accept on;                    # Accept multiple connections at once 
}

# traffic-handled block
http {

    include /etc/nginx/mime.types;      # defines mime types to be served correctly
    include /etc/nginx/conf.d/*.conf;   # load another config file (used for additional rules)
    include /etc/nginx/sites-enabled/*; # Loads virtual host configurations (server blocks)


    # upstream block (backend cluster that will handle request forwarded by nginx)
    upstream app_cluster {
        least_conn;                     # load balancing algorithms
        app1 127.0.0.1:3000;            # example
        app2 127.0.0.1:3001;            # example
        app3 127.0.0.1:3002;            # example
    }

    # rate limiting
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;

    # Server Block
    server {
        listen 80;                      # the port server that accept request 
        server_name gungindikusuma.xyz; # which domain/ip this block should respond

        # routing block (static file)
        location / {
            root /var/www/html;         # Sets the root directory.
            index index.html;
        }

        # routing block (proxying request)
        location /api/ {

            # which app the traffic will be forwarded
            proxy_pass http://app_cluster;

            # Forward client information to the backend
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-PORT $server_port;

            # Forward client browser and session information
            proxy_set_header User_Agent $http_user_agent;
            proxy_set_header Cookie $http_cookie;
            proxy_set_header Accept-Language $http_accept_language;
            proxy_set_header Referer $http_referer;

            # Forward client's authorization data
            proxy_set_header Authorization $http_authorization;

            # Custom headers
            proxy_set_header X-Custom-Header "AppSpecificValue";
        }
    }
}
```

### Reverse proxy with SSL Certificate

Search for `/etc/nginx/nginx.conf` and replace the same section with the config below

```sh title='/etc/nginx/nginx.conf'
server {
    listen 80;

    # Enforce HTTPS (Redirect HTTP to HTTPS)
    location / {
    // highlight-next-line
        return 301 https://$host$request_uri;
    }
}

server {
    // highlight-next-line
    listen 443 ssl;

    // highlight-next-line
    ssl_certificate /etc/nginx/[CERTIFICATE_FILE].pem;
    // highlight-next-line
    ssl_certificate_key /etc/nginx/[PRIVATE_KEY_FILE].key;

    server_name [YOUR_DOMAIN];

    location / {
        proxy_pass http://[YOUR_APP];
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```