# Url shortener

This repository contains a simple yet effective URL shortening service. It allows users to take long links and convert them into shorter,
more shareable links. This project is based on Elysia Js and utilizes Bun js to provide a quick and reliable solution.

## Features
- URL Shortening: Converts long links into short links for easy use and sharing.
- Redirection: Short links automatically redirect to the original URL.
- Statistics: Basic usage statistics are tracked, such as link clicks and referrals.

## Technologies
- Bun js
- Elysia js
- Mongoose
- Mongodb

## Setup
1. Clone repository
```bash
git clone https://github.com/gioCuesta25/url-shortener.git
```
2. Install dependencies

```bash
cd url-shortener
bun install
```

3. Configure DB and set environment variables

You need to create a mongo db instance using [Mongo Atlas](https://www.mongodb.com/atlas/database). After create the instance you must set the next env variable in the
.env.local file:

- MONGO_PASSWORD
- MONGO_USER
- DB_NAME

4. Run the application
```bash
bun dev
```
The application will be available at http://localhost:3000 or in the port that you wants if you set the PORT env variable
