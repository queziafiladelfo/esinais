# Usar a imagem do Node.js para construir o projeto
FROM node:20.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Usar o NGINX para servir a aplicação
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
