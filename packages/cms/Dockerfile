FROM node:16-alpine AS DEV

WORKDIR /opt/

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ARG PUBLIC_URL
ENV PUBLIC_URL=${PUBLIC_URL}
ENV PATH /opt/node_modules/.bin:$PATH

COPY ./package.json ./
RUN yarn config set network-timeout 600000 -g
RUN yarn install

COPY ./ .
RUN yarn build

CMD ["yarn", "develop"]

FROM DEV as PROD

CMD ["yarn", "start"]
