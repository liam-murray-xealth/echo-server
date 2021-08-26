ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine

ENV PORT=3333
EXPOSE ${PORT}

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install --only=production

# Source
COPY . .
RUN npm run build

CMD ["npm", "start"]
