FROM node:16

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3030

VOLUME [ "/node_modules" ]

CMD ["npm", "start"]