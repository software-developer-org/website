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

# Deploying to Google Cloud

1. Installing Google Cloud SDK 

- Source for [debian/ubuntu installation](https://cloud.google.com/sdk/docs/quickstart#deb)
```
$ echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
```

```
$ curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
```
```
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
```
```bash
cd <reponame> # change into your repo directory (e.g website)
```
```bash
# Run 
npm install
```
4. Deploy App to Google Cloud from IDE or Terminal
```bash
# Run
gcloud app deploy
```
```bash
# Output after running command:
descriptor:      [/xxxx/xxxxxx/xxxxx/website/app.yaml]
source:          [/xxxx/xxxxxx/xxxxx/website]
target project:  [website-306411]
target service:  [default]
target version:  [20210318t124237]
target url:      [https://website-306411.ey.r.appspot.com]
```
```bash
Do you want to continue (Y/n)?  Y # proceed with Y
```
```bash
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

TODO: 

Deploying from Cloud Shell




# Key Files

TODO: 
- view engine
  - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_view_engine_should_i_use
- creating and using template
  - https://expressjs.com/en/guide/using-template-engines.html



