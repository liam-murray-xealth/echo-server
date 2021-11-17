ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine

ENV PORT=3333
EXPOSE ${PORT}

ENV HEALTH_PORT=3334
EXPOSE ${HEALTH_PORT}

WORKDIR /app

# Dependencies
COPY package*.json ./
#RUN npm install --only=production
RUN npm install 

# Source
COPY . .
RUN npm run build && npm prune --production

CMD ["npm", "start"]
