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
// This window.addeventlistener runs when the entire webpage has finished loading/it waits for the webpage to finish loading before it executes the code. Why? Is because it needs to ensure that all HTML, CSS, images r fully loaded b4 it runs
window.addEventListener("load", function(){
  document.querySelector("#openModal").addEventListener("click", function(){   /* is adding an event listener to the HTML with ID of 'openModal'. It will listen for click event on that, and when the 'openModal' is clicked, the code inside this would be executed */
    document.querySelector(".modal").style.display = "block";     /* this would chnage the CSS style f HTML that is from 'modal' class and it sets the display property to block aka making it visible */
  });

  document.querySelector(".close").addEventListener("click", function(){   /* here is similar to above, but this time, event listener is add to HTML element with class 'close' and only when the class 'close' is clicked, then code inside executes */
    document.querySelector(".modal").style.display = "none";               /* will change css style of html element belonging to class 'modal' by setting display property to none, which hides it */
  });

  document.querySelector(".modal").style.display !== "none" && setTimeout(  
    function closeModal() {
      document.querySelector(".modal").style.display = "none";
    },
    1000 
  );     /* this entire code above is firstly checking if current display style of element from class 'modal' is NOT EQUALS TO none. if visible, then will move on to next part.*/
         /* setTimeout is to delay execution of function by a certain amount of time, in miliseconds */
         /* closeModal is to change the display style of modal to NONE after a 1 second delay, 1 second is 1000 millisecond */
});
// When an HTML element with the ID "close" is clicked
document.querySelector("#close").addEventListener("click", function(){  /* adding eventlistener again for HTML element with ID of 'close'. So it will just listen for a click event on it. And when close is clicked, then code inside executed */
  document.querySelector(".popup").style.display = "none";  /* this line change css style of HTML element from class 'popup' and it will hide the pop up by setting display property to none */
});



