FROM node:16-alpine3.15 AS common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

# Development Build Stage
FROM commom-build-stage AS development-build-stage


ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production Build Stage
FROM commom-build-stage AS production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
