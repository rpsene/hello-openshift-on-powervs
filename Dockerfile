#
#    Copyright (C) 2020 IBM Corporation
#
#    Rafael Sene <rpsene@br.ibm.com> - Initial implementation.
#    
#    Yet another OpenShift Hello-World
#

FROM node:9.4.0-alpine

COPY app.js .

COPY package.json .

RUN npm install &&\
    apk update &&\
    apk upgrade

EXPOSE  8080

CMD node app.js