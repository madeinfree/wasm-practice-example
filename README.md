# wasm golang practice example

##

![](./img/JayTalk.png)

## 版本

golang version >= 1.11.0

## 目的

觀察 wasm，使用 golang 撰寫簡單 wasm 並且跑在瀏覽器上。

## 指令

```
> GOROOT=./ GOARCH=wasm GOOS=js ./bin/go build -o example.wasm main.go
```
