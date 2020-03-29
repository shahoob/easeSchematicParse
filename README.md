# easeSchematicParse ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/shahoob/easeSchematicParse/Node.js%20Package?logo=github) ![GitHub package.json version](https://img.shields.io/github/package-json/v/shahoob/easeSchematicParse?label=%20&logo=github) ![npm](https://img.shields.io/npm/v/easeschematicparse?label=%20&logo=npm) ![GitHub closed issues](https://img.shields.io/github/issues-closed/shahoob/easeSchematicParse?logo=github) ![David](https://img.shields.io/david/shahoob/easeSchematicParse) ![npm bundle size](https://img.shields.io/bundlephobia/min/easeschematicparse?logo=npm) ![GitHub repo size](https://img.shields.io/github/repo-size/shahoob/easeSchematicParse?logo=github) 
A package for parsing "schematic versioning" versions, easily. ![GitHub stars](https://img.shields.io/github/stars/shahoob/easeSchematicParse?logo=github&style=social) hey! what are u doin' there?

## About

The name sounds a bit weird right?

This package, allows you to parse schematic versions, including rebuilding them!

It's also written in TypeScript. For the first time!

### Install

```
npm i easeschematicparse
```
or
```
npm install easeschematicparse
```

### Usage

NOTE: You can't use typescript from it.

```javascript
const { parse, reBuild } = require('easeSchematicParse');

// Parse
const ver = parse('1.0.0');
console.log(ver);

/*
{
    major: "1",
    minor: "0",
    patch: "0"
}
*/

// Rebuild
let newVer = reBuild(ver);
console.log(newVer);

/*
1.0.0
/*

```
