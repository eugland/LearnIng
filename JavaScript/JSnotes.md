# Udacity Javascript fullstack debeloper coourse

Some useful typescript init configs
```JSON
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "tests"]
}
```

An example Typescript nodejs initializer
```JSON
{
  "name": "nodedemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "src/main.ts",
    "test": "echo \"Error: no test specified\" && exit 1",
    "prettier": "prettier --config .prettierrc 'src/**/*.js' --write",
    "build": "npx tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^16.7.0",
    "@typescript-eslint/eslint-plugin": "^4.29.2",
    "@typescript-eslint/parser": "^4.29.2",
    "eslint": "^7.32.0",
    "eslint-plugin-prettier": "^3.4.1",
    "eslint-config-prettier": "^8.3.0",
    "ts-node": "^10.2.1",
    "prettier": "^2.3.2",
    "typescript": "^4.3.5"
  }
}
```
Know your types: 
| Type      | Usage |
| ----------- | ----------- |
| never | A usuful return type for handling errors |
| unknown | a favorite for type assertions |
| null | When an object does not yet exist |
| any | Using this type defeats the purpose of typing |
| void | a return type for when there is nothing to return |
| underfined | when the variable  exists but no value has been assigned |


If missing type definition, go to 
- ./types/3rdparty
-  create an index.d.ts
- let's say we want to add multiply(a, b) to loadash 
```java  
import _ from 'lodash';
declare module 'lodash' {
  interface LoDashStatic {
    multiply(multiplier: number, multiplicant: number): number
  }
}

```
- turn on typeRoots : ["./types]; in tsconfig

## Jasmine
```
├── node_modules
├── spec
│      ├──  support
│      └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```
## Do the thing you know for testing

```Javascript
customProcessor

npm i supertest

describe('Test endopoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  })
});
```

## Set up and take down with Jasmine
BeforeEach, afterEach, use x in front to skip, or f to focus

## HTTP Response status code
- 100 - 199: information, 100 continue
- 200 - 299: successful request, 200 OK, 201 created
- 300 - 399: request was redirected: 301 Moved permanently, 307 temp redirect. 
- 400 - 499: client side error: 400bad, 401 unauth, 405 meth not allowed
- 500 - 599: server side erorr: 500 internal server error



