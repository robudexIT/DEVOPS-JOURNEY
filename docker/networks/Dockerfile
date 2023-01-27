FROM node

WORKDIR /app

COPY package.json .

RUN npm install

ARG Default_DB mongodb

ENV DB $Default_DB

RUN echo "The database name id ${DB}"

COPY . .

CMD ["node", "app.js"]