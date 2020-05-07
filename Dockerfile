FROM node:12.16.3-alpine AS build

WORKDIR /app

ADD . .
RUN yarn install
RUN yarn build

FROM node:12.16.3-alpine

WORKDIR /app

COPY --from=build /app/package.json package.json
COPY --from=build /app/yarn.lock yarn.lock
COPY --from=build /app/.env .env
COPY --from=build /app/build build
COPY --from=build /app/static-host.js static-host.js

RUN yarn install --production

ENV NODE_ENV="production"

EXPOSE 3000

CMD ["node", "static-host.js"]
