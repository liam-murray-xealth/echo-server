

   
# docker run -it gitpod/workspace-full bash
FROM gitpod/workspace-full

# docker run -it --entrypoint /bin/bash node:17-bullseye
# FROM node:17-bullseye

USER rootgi
RUN apt-get update \
  & apt-get install -y telnet

USER gitpod


