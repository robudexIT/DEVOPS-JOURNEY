FROM node

WORKDIR  /app

COPY package.json  /app

RUN npm install

COPY . /app

EXPOSE 80

#This is anonymous volume
VOLUME [ "/temp" ]

CMD ["node", "server.js"]