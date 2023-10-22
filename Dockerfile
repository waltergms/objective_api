ARG USER=node
ARG WORKSPACE=/home/$USER/app

FROM node:18-alpine AS base

WORKDIR $WORKSPACE

COPY . $WORKSPACE

RUN npm install --production --verbose --progress=true

EXPOSE 3000

CMD ["npm", "run", "start"]
