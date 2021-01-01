# [Readdit](https://readdit.net/)

Welcome to Readdit. After spending many nights staying up reading stories on `r/nosleep` I decided that maybe 
all this phone blue light isn't good for my quality of sleep. I recently bought a Kindle to help me get more into
reading and ended up longing for an easier way to read my Reddit stories on the beautiful E-Ink display.

Readdit essentially takes the HTML/CSS from the desired Reddit posts, treats them as chapters, and converts them 
to an `.epub` format. Pretty simple.

### Project Setup

Readdit currently uses a React/MobX frontend located in the `client` directory. The "backend" uses Firebase functions.

Currenty the only API endpoint uses the [epub-gen](https://www.npmjs.com/package/epub-gen) to do the actual conversion.
I'm working on reverse-engineered version of this library that will run in the browser ([here](https://github.com/brannonjames/epub-browser)), so a future iteration might see
the removal of there functions altogether.

### Getting up and running

You can check out the live version [here.](https://readdit.net/)

1. Clone this repository

2. `cd readdit`

3. `npm install`

4. `npm run api-dev` to serve the Functions emulator locally.

5. `npm run client-dev` runs the webpack development server that comes built into create-react-app.

6. That's basically it. `client` and `function` directories have their own `package.json` files to do more specific things.

---
**NOTE**

To run the Functions API emulator, you'll need the [Firebase CLI](https://firebase.google.com/docs/cli) installed globally.  

Install with `npm install -g firebase-tools`

---

### How to contribute

I'm going to try to keep the Issues section as up to date as possible with bugs/features. 

Any ideas? Create an Issue for discussion :)

If you feel like working on something leave a comment on the Issue so others know it's being worked on.

When you submit a PR for the `client` directory, head on over to the [Live Preview Action](https://github.com/brannonjames/readdit/actions?query=workflow%3A%22Deploy+to+Preview+Channel%22)
Navigate to your commit then "Deploy Preview". You should see a link to a live preview of your branch.

Any questions just ask!
    
