//READ MORE and READ LESS BUTTON FUNCTIONS (JQUERY)

$(document).ready(function() {
  // When the button with id "toggle" is clicked
  $("#toggle").click(function() {
    // Get the current text of the button
    var elem = $("#toggle").text();

    // Check if the button text is "Read More"
    if (elem == "Read More") {
      // Change the button text to "Read Less"
      $("#toggle").text("Read Less");
      
      // Slide down (show) the content with id "text1"
      $("#text1").slideDown();
    } else {
      // Change the button text back to "Read More"
      $("#toggle").text("Read More");
      
      // Slide up (hide) the content with id "text1"
      $("#text1").slideUp();
    }
  });

  $("#toggle1").click(function() {
    var elem = $("#toggle1").text();
    if (elem == "Read More") {
      $("#toggle1").text("Read Less");
      $("#text2").slideDown();
    } else {
      $("#toggle1").text("Read More");
      $("#text2").slideUp();
    }
  });

  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
      $("#toggle2").text("Read Less");
      $("#text3").slideDown();
    } else {
      $("#toggle2").text("Read More");
      $("#text3").slideUp();
    }
  });


$("#toggle3").click(function() {
  var elem = $("#toggle3").text();
  if (elem == "Read More") {
    $("#toggle3").text("Read Less");
    $("#text4").slideDown();
  } else {
    $("#toggle3").text("Read More");
    $("#text4").slideUp();
  }
});


$("#toggle4").click(function() {
  var elem = $("#toggle4").text();
  if (elem == "Read More") {
    $("#toggle4").text("Read Less");
    $("#text5").slideDown();
  } else {
    $("#toggle4").text("Read More");
    $("#text5").slideUp();
  }
});

$("#toggle5").click(function() {
  var elem = $("#toggle5").text();
  if (elem == "Read More") {
    $("#toggle5").text("Read Less");
    $("#text6").slideDown();
  } else {
    $("#toggle5").text("Read More");
    $("#text6").slideUp();
  }
});


//EMAIL.JS FUNCTION

// Get a reference to the button element with the id 'button'
const btn = document.getElementById('button');

// Add an event listener to the form with the id 'form' for the 'submit' event
document.getElementById('form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Set the text of the button to 'Sending...' to indicate that the form is being processed
  btn.value = 'Sending...';

  // Define the email service ID and template ID for sending the email
  const serviceID = 'default_service';
  const templateID = 'template_ztv0owj';

  // Use the emailjs library to send the form data
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // When the email is successfully sent, set the text of the button back to 'Send Email'
      btn.value = 'Send Email';

      // Show an alert to indicate that the email was sent successfully
      alert('Sent!');

      // Clear all form fields
      clearFormFields();
    }, (err) => {
      // If there is an error sending the email, set the text of the button back to 'Send Email'
      btn.value = 'Send Email';

      // Show an alert with the error message in JSON format
      alert(JSON.stringify(err));
    });
});

// Function to clear all form fields after successful submission
function clearFormFields() {
  const form = document.getElementById('form');
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type !== 'submit') {
      elements[i].value = '';
    }
  }
}
});


let TestimonialImgs = [{id: 0, image_url: "images/RhysPhoto.png"},        
         {id: 1, image_url: "images/KatyPhoto.png"},
         {id: 2, image_url: "images/AlannaPhoto.png"},
         {id: 3, image_url: "images/JoePhoto.png"},
         {id: 4, image_url: "images/RichardPhoto.png"},
         {id: 5, image_url: "images/SharonPhoto.png"},
        ];

//MANUAL slideshow
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	
  //Change the slide_index
  if (slideIndex < TestimonialImgs.length - 1) {
    slideIndex++;//Increase the index by 1
  } else {
    slideIndex = 0;
  }
  
  //Change the image source for the img
  document.getElementById("manual-slide-image").src = TestimonialImgs[slideIndex].image_url; 
}


function previousSlide() {
	
  //Change the slide_index
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = TestimonialImgs.length - 1;
  }
  
  //Change the image source for the img
  document.getElementById("manual-slide-image").src = TestimonialImgs[slideIndex].image_url; 
}