# FROM node:10 AS builder

# WORKDIR /frontend

# COPY . .

# RUN yarn build

# FROM nginx:alpine

# #deafault place that nginx uses, can specify your own but you would need to adjust the nginx config
# WORKDIR /usr/share/nginx/html

# COPY --from=builder /frontend/build .

# CMD ["nginx", "-g", "daemon off;"]

FROM node

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
################################################################
#################  LOCAL DOCKERFILE SETTINGS  ##################
################################################################

# FROM node:10.16.0-alpine

# WORKDIR /frontend

# COPY . .

# EXPOSE 3000

# CMD ["yarn", "start"]