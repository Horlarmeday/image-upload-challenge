# imapctMarket Challenge
> This project is a simple implementation of an image upload app.

## Prerequisites
You need to have the following installed on your local development system before you can 
go ahead with this project (except you want to develop using docker).

- [Nodejs](https://nodejs.org/en/download/current/) _at least 10.16.0 or later version_
- [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

## Installation

```bash
yarn install
```

## Usage
#### development
For developmental purpose, run the following commands
```bash
npm run start:dev
```
#### test
To run test, run below command
```bash
npm run test
```
#### production
For production, run below command
```bash
npm run start
```
#### Docker (recommended)
For docker, run the following commands

```bash
docker-compose up -d
```

## Structure
This project is structured in modules. Images module

### Images Module
The Images module contains information about an image. The files in this module include
images controller, entity, routes, validations and interfaces.

## Features
The features of this project include the following.

- Upload an image and created two (200x200) and (300x300) thumbnails
- Get an image and its associated thumbnails
- Get all images


## API Documentation
The API documentation for testing the endpoints is located <a href="https://documenter.getpostman.com/view/9548350/TzK15Zoj">here</a>

## License
[ISC](https://choosealicense.com/licenses/mit/)