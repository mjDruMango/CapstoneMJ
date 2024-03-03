#node.js image
FROM node:20.11.0

#set working directory
WORKDIR /app

#copy package.json and package-lock.json to the container
COPY package*.json ./

#install dependencies
RUN npm install

#copy current directory to container
COPY . .

#expose react port
EXPOSE 3000

#start react server
CMD ["npm", "start"]

