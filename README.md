# PnP React Hooks Docs

Documentation site for [pnp-react-hooks](https://github.com/SuperioOne/pnp-react-hooks) package. This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```shell
$ npm install
```

## Local Development

```shell
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```shell
$ USE_SSH=true
$ npm deploy
```

Not using SSH:

```shell
$ GIT_USER=<Your GitHub username>
$ npm deploy
```