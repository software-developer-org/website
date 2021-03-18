# The Website of software-developer.org

A site containing blogs about technologies and software development, adressed to developers.

# Getting Started

## Installation

Run `npm install` to install all packages.

## Run Website

Run website you can:

```bash
# either start ...
npm start
# ... or start in debug mode
DEBUG=website:* npm start
# now open localhost:3000 in your browser
```

# Resources

- [Express app skeleton generator](https://expressjs.com/en/starter/generator.html)


# Folder Structure in Express-Generator

By default the express-generator starts off with 4 folders.

> **bin**
>
>The bin folder contains the executable file that starts your app. It starts the server (on port 3000, if no alternative is supplied) and sets up some basic error handling. You don’t really need to worry about this file, because npm start will run it for you.
public

> **public**
>
>The public folder is one of the important ones: ​everything​ in this folder is accessible to people connecting to your application. In this folder, you’ll put JavaScript, CSS, images, and other assets that people need when they load your website.

> **routes**
>
>The routes folder is where you’ll put your router files. The generator creates two files, index.js and users.js, which serve as examples of how to separate out your application’s route configuration.

> **views**
>
>The views folder is where you have the files used by your templating engine. The generator will configure Express to look in here for a matching view when you call the render method.

Ressource: 
- [reate-new-express-js-apps-with-express-generator](https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/)

# Key Files

TODO: 
- view engine
  - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_view_engine_should_i_use
- creating and using template
  - https://expressjs.com/en/guide/using-template-engines.html

# Deploying to Google Cloud


TODO:
- instructions
- links


