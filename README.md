# Vitessce-Link
Vitessce-Link provides an interface to experience [Vitessce](https://github.com/vitessce/vitessce/) with mixed reality.  

### Local development
`Install pnpm` following these [instructions](https://pnpm.io/installation) and `cd` into the the project directory
```
    pnpm install
    pnpm start

```

### Linting
Project uses [biome](https://biomejs.dev/) for linting.
``` 
    npx @biomejs/biome format --write ./src
```
### Deployment
```
    pnpm build
```