FROM node:16.17-alpine3.15

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

ENV NODE_ENV development

CMD ["npm", "run", "dev"]
