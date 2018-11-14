FROM node:latest

# Create app directory
RUN mkdir /home/prellone
WORKDIR /home/prellone

# Install app dependencies
COPY package.json .

RUN npm install
RUN npm install react-scripts@1.1.1 yarn@1.12.3 -g

# Bundle app source
COPY . .

RUN npm run build 
RUN yarn global add serve

EXPOSE 3000

CMD [ "npm", "run", "prod" ]
