FROM node

WORKDIR /backend

COPY package.json /backend/

RUN npm install

COPY . /backend

ARG DEFAULT_DB mongodb

ENV DB $DEFAULT_DB

CMD ["nodemon", "dev"]