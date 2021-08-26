#!/usr/bin/env bash
#
# For testing locally
#
IMAGE_NAME=echo-server

: ${GIT_HASH:=$(git rev-parse --short HEAD)}

#DEBUG_ARGS="--no-cache --progress plain"

# <commit-hash>
echo "Building $IMAGE_NAME:$GIT_HASH"
docker build $DEBUG_ARGS --build-arg TAG=$GIT_HASH -t "$IMAGE_NAME:$GIT_HASH" .

VERSION=latest
echo "Tagging $IMAGE_NAME:$GIT_HASH => $VERSION"
docker tag $IMAGE_NAME:$GIT_HASH $IMAGE_NAME:$VERSION
