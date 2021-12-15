FROM node

RUN mkdir /usr/src/reactapp
COPY . /usr/src/reactapp

WORKDIR /usr/src/reactapp
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]