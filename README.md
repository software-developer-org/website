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

## Resources

- [Express app skeleton generator](https://expressjs.com/en/starter/generator.html)

# Folder Structure in Express-Generator

By default the express-generator starts off with 4 folders.

> **bin**
>
> The bin folder contains the executable file that starts your app. It starts the server (on port 3000, if no alternative is supplied) and sets up some basic error handling. You don’t really need to worry about this file, because npm start will run it for you.
> public

> **public**
>
> The public folder is one of the important ones: ​everything​ in this folder is accessible to people connecting to your application. In this folder, you’ll put JavaScript, CSS, images, and other assets that people need when they load your website.

> **routes**
>
> The routes folder is where you’ll put your router files. The generator creates two files, index.js and users.js, which serve as examples of how to separate out your application’s route configuration.

> **views**
>
> The views folder is where you have the files used by your templating engine. The generator will configure Express to look in here for a matching view when you call the render method.

Ressource:

- [reate-new-express-js-apps-with-express-generator](https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/)

# Deploying to Google Cloud

1. Installing Google Cloud SDK

- Source for [installation](https://cloud.google.com/sdk/docs/quickstart#deb)
  - Note: Be sure to choose the right Operating System

```bash
$ echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

$ curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

$ sudo apt-get update && sudo apt-get install google-cloud-sdk
```

2. Initializing Google Cloud Shell

- NOTE: Must only be done one time, if Google Cloud SDK wasn't used before.

```bash
# In your terminal run:

gcloud init

# follow instructions for login
```

3. Clone GitHub Repo into Your Home Directory

- Also refer to this [guide for deployment](https://levelup.gitconnected.com/how-to-deploy-your-node-js-app-with-google-2cd3771d5b21).

```bash
git clone https://github.com/software-developer-org/website

cd <reponame> # change into your repo directory (e.g website)

# Run
npm install
```

4. Deploy App to Google Cloud

```bash
# Run
gcloud app deploy


# Output after running command:
descriptor:      [/xxxx/xxxxxx/xxxxx/website/app.yaml]
source:          [/xxxx/xxxxxx/xxxxx/website]
target project:  [website-306411]
target service:  [default]
target version:  [20210318t124237]
target url:      [https://website-306411.ey.r.appspot.com]


Do you want to continue (Y/n)?  Y # proceed with Y


File upload done.
Updating service [default]...done.
Setting traffic split for service [default]...done.
Deployed service [default] to [https://website-306411.ey.r.appspot.com]

# Deployment finished
```

You can view the website in your browser:

- https://website-306411.ey.r.appspot.com

```bash
# or enter:
gcloud app browse

Opening [https://website-306411.ey.r.appspot.com] in a new tab in your default browser.
```

# Templates

- In this project, [PugJs](https://pugjs.org/api/getting-started.html) is used as view engine.
- Your are able to create a base layout (eg. layout.pug) for all served pages. In this template you specify a `block` containing default elements.
  - Blocks can display default content or may be replaced by child blocks, which inherit behavior from the parent block.

```bash
doctype html
html
  head
    title= 'software-developer.org'
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block header        # defining a block
      div.header Header # default element for extending files
    block blogNavigation
      div.blogNavigation Blog Navigation
    block main
      div.main Main Content
    block impressum
      div.impressum Impressum
```

- Use `extends` keyword in files (like on about.pug or index.pug) to inherit the base template and to modify default elements and display actual content.

```bash
# e.g. index.pug
extends layout    # inherit base layout with all blocks from layout template

block main        # redefine inherited block
  div.main
    h1 #{title}   # actual content

# all other blocks (header, blogNavigation, impressum) will also be displayed on the actual page.

```

## Resources for Pug, Templates and CSS

- [overview of of different view engines](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_view_engine_should_i_use)
- [creating and using templates in express.js](https://expressjs.com/en/guide/using-template-engines.html)
- [css-grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [pug: getting started](https://pugjs.org/api/getting-started.html)
- [pug-engine: templates and inheritance](https://pugjs.org/language/inheritance.html)
