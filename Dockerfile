FROM node:12.13.0-alpine
ARG API_URL
ARG APP_URL
ENV API_URL=${API_URL}
ENV APP_URL=${APP_URL}

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app
RUN yarn
RUN yarn build
EXPOSE 5000
ENTRYPOINT ["yarn", "start", "-p", "5000"]
