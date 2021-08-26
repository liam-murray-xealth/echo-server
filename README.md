# Echo server

## Quickstart

```bash
./build-docker.sh
docker run -p 3333:3333 echo-server
```

```bash
brew install telnet
telnet 127.0.0.1 3333
```

Used `ctrl-]` to exit telnet

To use another port

```bash
docker run -p 3335:3335 -e "PORT=3335" echo-server
```

## GitHub action workflow

To pull after workflow completes and pushes image

```bash
docker pull ghcr.io/<GITHUBREPO>/echo-server:latest
```

Or just run it and it will pull for you

```bash
docker run -p 3335:3335 -e "PORT=3335" ghcr.io/<GITHUBREPO>/echo-server:latest
```

See [Working with GitHub Packages Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

## Initial setup

This project was setup using `tsc init`

```bash
npm i typescript --save-dev
npx tsc --init
```

Update `tsconfig.json` (e.g. set output to `.dist`)

Add prettier, gitignore, etc.
