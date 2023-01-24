# FROM node

# WORKDIR /app

# COPY . /app

# RUN npm install


# EXPOSE 80 

# CMD ["node", "server.js"]

#optimize code below.

FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app/

EXPOSE 80

CMD ["node", "server.js"]