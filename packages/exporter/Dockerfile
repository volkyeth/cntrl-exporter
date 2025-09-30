FROM node:24-alpine3.21

RUN apk update && apk add git zip
RUN npx create-cntrl-site@latest cntrl-template
RUN cd cntrl-template && npm install && cd /
RUN mkdir /exporter
COPY server.ts /exporter
COPY package.json /exporter
COPY tsconfig.json /exporter
WORKDIR /exporter
RUN npm install && npm run build
CMD npm run start