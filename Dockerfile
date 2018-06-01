FROM node:9.11.1-alpine
MAINTAINER HarveyHuang <service@68fen.com>

RUN apk add --no-cache nginx

WORKDIR /app
COPY package.json .
RUN npm install
ADD misc/nginx.conf /etc/nginx/nginx.conf
COPY . .
RUN npm run build
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
