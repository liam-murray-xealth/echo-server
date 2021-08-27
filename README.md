# Echo server

Runs TCP echo service as well as simple HTTP health service

## Quickstart

```bash
./build-docker.sh
docker run -p 3333:3333 -p 3334:3334 echoserver
```

```bash
brew install telnet
telnet 127.0.0.1 3333
```

Used `ctrl-]` to exit telnet

To use another port

```bash
docker run -p 3335:3335 -e "PORT=3335" echoserver
```

Hit health service

```bash
curl localhost:3334
```

## GitHub action workflow

To login

```bash
docker login ghcr.io -u <GITHUBUSER> --password-stdin < ~/.github_token
```

To pull after workflow completes and pushes image

```bash
docker pull ghcr.io/<GITHUBUSER>/echoserver:latest
```

Or just run it and it will pull for you

```bash
docker run -p 3335:3335 -e "PORT=3335" ghcr.io/<GITHUBUSER>/echoserver:latest
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
