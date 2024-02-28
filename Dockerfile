#Start FROM a baseline image of node v21.6.1
FROM node:21.6.1

#Set up a WORKDIR for application in the container and set it to /usr/src/app.
WORKDIR /usr/src/app

# install dependencies into 
COPY . . 
RUN npm install 
RUN npm run build

# run the app
EXPOSE 3000
#entrypoint where we will run node
ENTRYPOINT ["node", "./src/index.js"]
