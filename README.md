`#react` `#node` `#mongodb` `#sass` `#service-workers` `#assembler-institute-of-technology` `#master-in-software-engineering`

# React E-commerce <!-- omit in toc -->

Amazén is a full javascript project with which I put my knowledge and learning into practice. 
Application focused with user roles and administrator panel to manage users and content.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Instructions](#instructions)
- [Available Scripts](#available-scripts)
- [Author](#author)
- [License](#license)

## Visit the E-comerce website

#### [Amazén.es](https://amazen.dtpf.es/)

## Getting Started

First, you have to clone and install the backend:

```bash
$ git clone https://github.com/DTPF/amazen-ecommerce-node.git
$ npm i & npm run dev
```

Rename the config-example.js and env-example.js removing '-example', and configure this files with your server environment.

Make sure you have active Mongodb service.

Now clone and install the frontend:

```bash
$ git clone https://github.com/DTPF/amazen-ecommerce.git
$ npm i & npm start
```

The app will be run by default in the following url: `http://localhost:3000/`

## Instructions

Throughout this week you will start creating the dashboard of your e-commerce. We will start this pill with the contents given during the class, and scalate as we get deepen into the information.

The `main` branch of the future repos will have the favourite class solution of the previous pill so that you can get started with it, should you get stucked at any stage.


### App features

I have created the application focusing on performance on functionalities.
I have applied Lazy Load throughout the project, I have also implemented the Service Workers for improve the performance.
For data persistence I use a backend with node.js and Mongodb.

#### Wireframes

##### Public web
<img src='/src/resources/wireframes/landscape-1.png' width='600'>
<img src='/src/resources/wireframes/landscape-2.png' width='600'>
<img src='/src/resources/wireframes/landscape-3.png' width='600'>
<img src='/src/resources/wireframes/portrait-1.png' height='600'>
<img src='/src/resources/wireframes/portrait-2.png' height='600'>

##### Admin web
<img src='/src/resources/wireframes/landscape-admin-1.png' width='600'>
<img src='/src/resources/wireframes/landscape-admin-2.png' width='600'>
<img src='/src/resources/wireframes/portrait-admin.png' height='600'>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Author

##### [David T. Pizarro Frick](https://www.linkedin.com/in/david-tomas-pizarro-frick/)

## License

Licensed under the [MIT License](./LICENSE).
