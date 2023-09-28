FROM golang:1.21.1 AS builder

WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . ./

RUN go build -o bin/app ./cmd

CMD ["bin/app"]