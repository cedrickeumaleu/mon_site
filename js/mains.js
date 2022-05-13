   // Modal Image Gallery
   function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }


//   document.addEventListener("DOMContentLoaded", function(event) 
// {
// 	//document is fully loaded 
//      /*Modal*/

//   // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("btn_modal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {

//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




// })

const txtAnim = document.querySelector('text-center')

new typewriter(txtAnim,{
    deleteSpeed:20
})
.typeString('moi\'est Cedrick Keumaleu')
.pauseFor(300)
.typeString('<strong>,Dev Full-stack</strong>')
.pause(1000)
.deleteChars(13)
.start()

//animation couverture
const titreSpans = docoment.querysellectorAll('h3 span');
const btns = document.querysellectorAll('.btn-btn');
const logo = document.querysellector('.logo');
const medias = document.querysellectorAll('.bulle');


window.addEventlistener('load',()=> {
const TL = gsap.timeline({paused:true});

TL
.staggerFrom(titreSpans, 1, {top:-50, opacity:0, ease:"power2.out"}, 0.3)
.staggerFrom(btns, 1, { opacity:0, ease:"power2.out"}, 0.3, '-=1')

TL.play();
})

// parallax script scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
 
// gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
// gsap.set('.scrollDist', {width:'100%', height:'200%'})
// gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})

//     .fromTo('.parallaxsiel', {y:-10},{y:-100}, 0)
//     .fromTo('.parallaxmontagne1', {y:-30},{y:-250}, 0)
//     .fromTo('.parallaxmontagne2', {y:-50},{y:-600}, 0)

// $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
// $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
// $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); })