FROM node

WORKDIR /backend

COPY package.json /backend/

RUN npm install

COPY . /backend

ARG DEFAULT_DB mongodb

ENV DB $DEFAULT_DB
ENV BACKENDPORT 80

ENV DB_USER root
ENV DB_PASSWORD password

CMD ["npm", "run","dev"]