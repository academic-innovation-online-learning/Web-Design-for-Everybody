function pickImage(){
    options = ["bacon_in_the_woods.png", "munising.jpg","bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src",randomImg)
    img.setAttribute("alt","")

}


function setImages(){
    options = ["bacon_in_the_woods.png", "bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    currentImages = document.querySelectorAll(".flex img")
    for (var i = 0; i < xs.length; i++) { 
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        i.setAttribute("src",randomImg)
        i.setAttribute("alt","")    
    }

}
