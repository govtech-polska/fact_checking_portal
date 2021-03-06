FROM node:12.13.0-alpine
ARG API_URL
ARG APP_URL
ARG GOOGLE_SITE_KEY
ARG GOOGLE_SECRET_KEY
ENV API_URL=${API_URL}
ENV APP_URL=${APP_URL}
ENV GOOGLE_SITE_KEY=${GOOGLE_SITE_KEY}
ENV GOOGLE_SECRET_KEY=${GOOGLE_SECRET_KEY}

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app
RUN yarn
RUN yarn build
EXPOSE 5000
ENTRYPOINT ["yarn", "start", "-p", "5000"]
