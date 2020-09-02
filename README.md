# company-starter
An awesome starter for Full Stack JS companies with best practises for all your projects

## Technos we ❤️

Typescript, Lerna, Verdaccio, NestJS, React, Cypress, Pupeeter

Deployed on AWS with the AWS CDK

## Projects 

todos-api : A NestJS API using TypeORM, Postgres deployed as a Lambda with DynamoDB, RDS, SQS

todos-gateway : A NestJS + GraphQL Gateway handling deployed on EC2

todos-web: A React application deployed on CDN and AWS S3

todos-native: A React Native application for Android and iOS

## This repo

A Lerna monorepo published on Verdaccio with shared components using Storybook, shared configuration, NestJS modules, shared interfaces, and many others

## IMPORTANT

When installing one of the package (for example eslint-config), do not forget to redo npm install so you install the peerdependencies of the package (npm i && npm i) => try to improve this 
Also, it would be nice to sort the whole package.json at the end (maybe a script that does both)

## How to use

```bash
# hoist dependencies
npm run lerna:link

# install dependencies
npm run lerna:bootstrap

# list dependencies that have changed
npm run lerna:changed

# list diff with previous version of dependencies that have changed
npm run lerna:diff

# publish dependencies that have changed 
npm run lerna:publish # push your changes first, lerna:publish will increase version + push

# remove remote tag
git push --delete origin @company-starter/my-module@my-version

# remove local tag
git tag -d @company-starter/my-module@my-version

# remove all remote tags of all dependencies
git ls-remote --tags origin | awk '{print "git push --delete origin "$1"\0"}' | xargs -0 bash -c

# remove all local tags of all dependencies
git tag | awk '{print "git tag -d "$1"\0"}' | xargs -0 bash -c
```
