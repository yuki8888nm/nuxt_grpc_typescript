### SETUP
作業ディレクトリを `$WORKDIR` とします。

``` bash
cd $WORKDIR
export GOPATH=$WORKDIR
cd src
git clone https://github.com/yuki8888nm/nuxt_grpc_typescript.git
cd nuxt_grpc_typescript
```

### SETUP FOR Golang
``` bash
bash get_go_deps.sh
bash protogen.sh
```

### run Nuxt.js project
``` bash
npm run dev
```

### run Golang server
``` bash
go run go/exampleserver/exampleserver.go
```
