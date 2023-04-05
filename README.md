# carpark-lots-sg

This is a Carpark Availability Checker Web Application to track carparks' lots in Singapore. 

### Installation
1. Clone the respository by using the command ```git clone https://github.com/iiam33/carpark-lots-sg.git```
2. Change the directory into the Vue project by using the command ```cd carpark_lots```
3. Then, run the following command to install 
 
``` bash
$ npm install
```

or

``` bash
$ yarn install
```
### Usage
1. Run the following commands to run and serve the web app

``` bash
$ npm run serve
```

or 

``` bash
$ yarn serve
```
2. Navigate to http://localhost:8080. The app will automatically reload if you change any of the source files.

### Build

1. Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
$ npm run build
```

or

```bash
$ yarn build
```

### Docker
1. To build a docker image for this web app

```bash
$ docker build -t carpark-lots:latest .
```

2. To run the docker image
3. 
```bash
$ docker run carpark-lots:latest
```

