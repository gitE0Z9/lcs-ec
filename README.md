# lsc-ec
湛積(LSC)作業 電商API

## Tech stack

- typescript
- express
- mongoose
- passport(local, jwt)
- dotenv
- swagger-ui-express
- swagger-autogen

## Function

### SignUp

`POST /api/v1/user`

### Login

`POST /api/v1/auth/jwt`

### Get user info

`GET /api/v1/user/<id>`


### Browse goods

`GET /api/v1/goods?cursor=<cursor>`


### Post goods

`POST /api/v1/goods`

## Command

### Develop

`yarn dev`

### Build

`yarn build`

### Start

`yarn start`

visit http://localhost:3000

### Generate swagger documentation

`yarn build:doc`

Manually built, should execute each time updated

visit http://localhost:3000/docs
