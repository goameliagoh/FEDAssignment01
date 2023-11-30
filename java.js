let slideIndex = 1;        // To represent the current slide
showSlides(slideIndex);    // Calling the slideshow function to displau first slide 

// Next/previous controls
function plusSlides(n) {    //this is a function, accepting n values. This function is called WHENEVER user clicks on the arrow. 
  showSlides(slideIndex += n);    //slideshow function is called, but this time, the index changes according to the n value. so now the new slide that is showing is an updated slide as compared to the index being 1
}

// Thumbnail image controls
function currentSlide(n) {      //Another function taking n value b4 calling show slides functiona nd setting a certain image. Function is called whenever user clicks!
  showSlides(slideIndex = n);
}

// Automatic slideshow here tilll.....
let slideInterval;   //declaring a variable called slideInterval

function startSlideShow() {
  slideInterval = setInterval(function() {    // setInterval is a JS function that repeatedly callls another function/execute a code snippet at a specified interval which in this case is 2 seconds
    plusSlides(1);                            // This is the code carried out hence advancing to the next slide 
  }, 2000);                                   // Change slide every 2000 milliseconds (2 seconds)
}

function stopSlideShow() {
  clearInterval(slideInterval);                  //clearInterval is JS function that stops the interval set by setInterval. In simpler terms, when you setInterval, you get a value that is returned to you. So then slideInterval = that particular value. But when you use clearInterval(slideInterval), you r getting rid of the slideInterval aka that particular value
}
//Till here is auto slide show + the point of setting and then clearing the intervlas is so thaat your images can keep switching automatically 




// Event listeners for pause/resume on hover
document.querySelector('.slideshow-container').addEventListener('mouseover', stopSlideShow);  //Saying that when mouse is over the slideshow container, start the slideshow. But when mouse is out of the slide show container, stop the slideshow
document.querySelector('.slideshow-container').addEventListener('mouseout', startSlideShow);  // the slide show container is in your html 


function showSlides(n) {                                       //function to show the slides
  let i;                                                       // declaring variable i 
  let slides = document.getElementsByClassName("mySlides");    // Making variable called 'slides' which = all your images in html under class 'mySlides'. thats what the getElements mean 
  let dots = document.getElementsByClassName("dot");           // same concept as above, just storing dots 

  if (n > slides.length) {slideIndex = 1}  //n represents the index of the current slide it is on +  saying that if n > total num of slides (slides.length), then slideIndex = 1 (first slide)
  if (n < 1) {slideIndex = slides.length}  // if n lesser than 1, slideIndex will = number of slides (loop back to last slide)
  // ALL THESE ENSURE THT THE SLIDEINDEX STAYS WITHIN THE TOTAL NUMBER OF SLIDES 

  for (i = 0; i < slides.length; i++) {  //Going through each image since slides = the diff images stored under the class mySlides
    slides[i].style.display = "none";     // This function hides all the slides when looping 
}


  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //dots[i].className refers to the dot in the 'i'th position in your class of CSS. Then this replace active with ' ' is just making all the dots inititally to be non active, so they dont get the special color that a dot has when it is active (when hovered over, as styled in ur CSS). This ensures that ONLY when hover oveer, then thyey will have the special color
}
  slides[slideIndex-1].style.display = "block";  //Just now, all images are hidden. By now when you use the display function and block on your image, that particular image is now visible! Then when the function showSlides gets called again, then repeat process. 1st for loop, all images hidden, then use block and show another image etc etc. BTW, the function will call again when user clicks the arrow button! since this part of code is for the ownself scorlling and not automatic slide show
  dots[slideIndex-1].className += " active";     //  dots[slideIndex-1] represents the specifi dot in your collection of dots. the slideIndex part represent current slide then the slideIndex-1 represents the dot that is associated with that image. so then you += active so that now, it has the special color that you styled the dots to have when it is acitve. 
}

// Start the slideshow for the automatic one
startSlideShow();



// For Pop Up
// This code runs when the entire webpage has finished loading
window.addEventListener("load", function(){   // window represents the browser, addEventListener means listens for events on HTML.  "Listening for events" in the context of JavaScript means waiting for a specific action or occurrence to happen, and then responding to it with some code. && "load" is the event JS is listening for 
  
  setTimeout(                  // just saying that After 2000 milliseconds (2 seconds), carry out the open function
      function open(event){    //Function to open 
          document.querySelector(".popup").style.display = "block"; // Find HTML element with the class "popup" and change its display style to "block"
      },
      2000 
  );
});

// When an HTML element with the ID "close" is clicked
document.querySelector("#close").addEventListener("click", function(){  // document.querySelector is a method in JavaScript that allows u to select the first element in the document (the HTML page) that matches a specified CSS selector. you can perform various operations on that element
  // Is saying to find the HTML element with the class "popup" and change its display style to "none" (hide it)
  document.querySelector(".popup").style.display = "none";
});



