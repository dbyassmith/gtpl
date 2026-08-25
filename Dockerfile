FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@11.19.0 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build-docker

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/build ./build

EXPOSE 3000

RUN apk add --no-cache tini
ENTRYPOINT ["tini", "--"]
CMD ["node", "./build"]
