# Personal portfolio

## Created with React
- npx create-react-app my-app
- cd react-porfolio
- npm start

## Hosted with Github Pages
- npm install gh-pages --save-dev
-- package.json  
  + "homepage": "https://dimitrov93.github.io/my-resume",

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
}

--- git remote add origin https://github.com/dimitrov93/my-resume.git
---- npm run deploy
