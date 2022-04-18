# just-example

- just-example-api (`api/`)
- just-example-ui (`ui/`)

## just-example-api (`api/`)

from [Spring Initializr](https://start.spring.io/).

slight changes: using spring-boot-starter-web and spring-boot-devtools.

```
$ ./gradlew --no-daemon :bootRun
```

## just-example-ui (`ui/`)

from & with [Create React App and react-scripts](https://create-react-app.dev/).

slight changes: using Axios, calling just-example-api above via Webpack Dev Server proxy.

```
$ BROWSER=none yarn start
```
