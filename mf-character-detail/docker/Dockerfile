# Stage 1: build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        add_header Access-Control-Allow-Origin "*" always; \
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always; \
        add_header Access-Control-Allow-Headers "Content-Type, Authorization" always; \
        if ($request_method = OPTIONS) { \
            return 204; \
        } \
        try_files $uri /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
