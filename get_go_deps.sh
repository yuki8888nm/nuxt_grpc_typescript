#!/usr/bin/env bash

echo "Installing go dependencies..."
DEP=`command -v dep`
if [[ "$DEP" == "" ]]; then
  echo "Cannot find golang's package manager 'dep'. Please follow https://github.com/golang/dep#setup"
  exit -1
fi
cd go
dep ensure

echo "Installing Protobuf to Golang compiler..."
go get -u github.com/golang/protobuf/protoc-gen-go
go get -u github.com/improbable-eng/grpc-web/go/grpcweb
