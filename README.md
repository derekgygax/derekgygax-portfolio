# Derek Gygax Porfolio

> Portfolio for Derek Gygax

## Database is postgres on Vercel OR local

```
  To start the local databse
    brew services start postgresql

  Log on to postgres on the command line
    psql postgres
  List databases
    \l
  Choose database 'porfolio'
    \c portfolio
  List tables
    \dt
```
## Using Prisma as your ORM

```
  npx prisma init // First creates the prisma things you need to attach to database
  npx prisma db pull // pull an already made database back into a schema in prisma
  npx prisma studio // shows the database in a webpage so you can pick it apart
  npx prisma generate  // MUST DO EVERY TIME YOU CHANGE THE DB

  To update the database with Prisma
  --update the schema manually
  npx prisma format  // Formats the schema or something
  IF IN DEV
  npx prisma migrate dev --name {MIGRATION NAME YOU CHOOSE}    // to push schema to DEV
  Review it --chat gpt said we should
  IF IN PRODUCTION
  npx prisma migrate dev --create-only
  npx prisma migrate deploy

  UPDATE THE CLIENT!
  npx prisma generate

  
  push the schema to the DB
  npx prisma db push

  Pushing your load-data.sql up to vercel
  psql "postgres://default:RxvmfXI46kKp@ep-quiet-butterfly-38559534-pooler.us-east-1.postgres.vercel-storage.com/verceldb" < db/load-data.sql

```

## Prerequisites

- bun 1.0.25+

## Install and use bun 1.0.25

```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.25"

-Follow the commands the terminal prints out
```

## Install Dependencies

```
bun install
```

## Run Dev Server

```
bun run dev
```

## Build Project

```
bun run build
```

## Start built project

```
bun start
```

## Getting Started

```
bun dev
```