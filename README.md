# Derek Gygax Porfolio

> Portfolio for Derek Gygax

## Database is postgres on Vercel
## Using Prisma as your ORM

```
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



```

## Prerequisites

- Node 18.8.0+
- npm 8.18.0+

## Install/Use Node 18

```
nvm install 18
nvm use 18
```

## Install Dependencies
### Need to do the extra install next-intl@3.0.0-beta.19 because it is still in beta
```
npm install
```

## Build Project

```
npm run build
```

## Launch built project. After having built

```
npm start
```

## Run Dev Server

```
npm run dev
```
