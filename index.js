const images = require("images");

//Background-Image Directory
images("./resources/background-image.jpg") 
//Transparent Size, Directory and Location(x,y)
.size(500).draw(images("./resources/transparent-image.png") , 130, 30) 
//Merge-Image Directory
.save("./output/merged-image.png"); 

console.log("File Written")