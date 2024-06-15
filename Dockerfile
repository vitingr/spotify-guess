FROM node:18-alpine

ENV PORT 8000
ENV NODE_OPTIONS=--max_old_space=4096

WORKDIR /app

COPY . /app

CMD ["bin/sh", "-c", "yarn start"]
