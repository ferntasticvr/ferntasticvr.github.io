FROM denoland/deno:latest AS build

WORKDIR /app

COPY . .

RUN deno install
RUN deno task build



FROM denoland/deno:latest

WORKDIR /app

COPY --from=build /app/dist .

EXPOSE 1298

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "./dist/server/entry.mjs"]