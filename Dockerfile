# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR . /

COPY . /

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]