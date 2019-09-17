FROM node:11-alpine

RUN mkdir /frontend
RUN set -ex

COPY ./package.json /frontend
COPY ./package-lock.json /frontend

WORKDIR /frontend

RUN npm install

COPY ./.eslintrc.json /frontend
COPY ./.eslintignore /frontend

ADD ./src /frontend/src
ADD ./public /frontend/public
