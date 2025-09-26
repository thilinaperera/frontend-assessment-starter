FROM node:22.20-alpine3.22 as base
RUN corepack enable
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install
COPY ./ /app
RUN npm run build
ENV PORT=5001
EXPOSE 5001

CMD /bin/sh -c "npm run preview"