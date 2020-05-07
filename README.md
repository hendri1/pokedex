### Running at Github Pages
(https://hendri1.github.io/pokedex/)[Pokedex]

<p align="center">
  <a href="https://github.com/hendri1/pokedex/releases/tag/v0.1.2">
    <img
      src="https://img.shields.io/static/v1.svg?label=version&message=v0.1.2&style=flat&color=67c23a"
      alt="version"
    />
  </a>
</p>

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/hendri1/pokedex/releases).

### Run Local

#### Requirement
- Node.js : v12.16.3
- NPM : v6.14.4
- Yarn : v1.22.4

#### Step
```
- Yarn install
- cp .env.example .env
- Yarn start
```

Default run at http://localhost:3000

### Run With Docker
```
- cp .env.example .env
- docker build -t pokedex:latest .
- docker run -p 3000:3000 pokedex:latest
```

### Maintainers

<p>
  <a href="https://github.com/hendri1">
    <img
      width="50"
      src="https://avatars2.githubusercontent.com/u/12600578?s=460&u=84e522a8f40ab0fa0951f190af6dbab6f6daaa7e&v=4"
      alt="Hendri Faisal"
    />
  </a>
</p>