# alpine is the smallest build
FROM node:alpine as builder_stage
#npm run build starts from /app location
WORKDIR /app
#coping  to /app
COPY package*.json ./

RUN npm install
# copy everything else to /app
COPY . .
# creating build image
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
