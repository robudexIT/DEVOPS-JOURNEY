FROM node

WORKDIR  /frontend

COPY package.json /frontend

RUN npm install

COPY . /frontend

CMD [ "npm", "react-scripts start" ]