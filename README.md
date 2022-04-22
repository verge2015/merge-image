# merge-image

merge-image is NodeJS Code for merging two image.

## Version of npm and NodeJS
```bash
 NodeJS v14.19.1
 npm 6.14.16
```

## Checking your version of npm and Node.js
```bash
 node -v
 npm -v
```

## Packages
```bash
 images
```

## Installation
```bash
 npm i images
```

## Usage
```bash
 node index.js
```

## Source Code
```javascript
const images = require("images");

//Background-Image Directory
images("./resources/background-image.jpg") 
//Transparent Size, Directory and Location(x,y)
.size(500).draw(images("./resources/transparent-image.png") , 130, 30) 
//Merge-Image Directory
.save("./output/merged-image.png"); 

console.log("File Written")
```

