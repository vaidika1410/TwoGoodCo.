function init(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  

}

init()

let tl = gsap.timeline()
function loading(){
  tl.from("nav .nav-left",{
    y:-20,
    opacity:0
  })
  tl.from("nav .nav-right", {
    y:-10,
    opacity:0,
    duration:0.2
  })
  tl.from(".page1 .text h1", {
    duration:0.4,
    y:200,
    stagger:0.3,
    opacity:0
  })
  tl.from(".page1 .video", {
    opacity:0,
  })
} 
loading()


//navigation bar animation on scrolling
function navLeft(){
  gsap.to("nav .nav-left svg", {
    transform: "translateY(-100%)",
    scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top 0%",
      end:"top -5%",
      scrub:true
    }
  })
  gsap.to("nav .nav-left .svg2", {
    transform: "translateY(-170%)",
    scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top 0%",
      end:"top -5%",
      scrub:true
    }
  })
  
}
navLeft()

function navigations(){
  gsap.to("nav .navigations", {
    y:-30,
    opacity:0,
    scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      // markers:true,
      start:"top 8%",
      end:"top -2%",
      scrub:true
    }
  })
}
navigations()


function playcrsr(){
  var video = document.querySelector(".page1 .video .video-overlay")
  var play = document.querySelector(".page1 .video .play")

  video.addEventListener("mousemove", function(dets){
    gsap.to(play, {
      x:dets.x,
      y:dets.y
    })
  })
  video.addEventListener("mouseenter", function(dets){
    gsap.to(play, {
      scale:1,
      opacity:1
    })
  })
  video.addEventListener("mouseleave", function(dets){
    gsap.to(play, {
      scale:0,
      opacity:1
    })
  })
}

playcrsr()


function page2Sections(){
  gsap.from(".page2 .sections .section", {
    opacity:0,
    // durations:0.5,
    stagger:0.3,
    scrollTrigger:{
      trigger:".page2 .section",
      scroller:".main",
      // markers:true,
      start:"top 60%"
    }
  })
  gsap.from(".page2 .sections .section .details", {
    opacity:0,
    // durations:0.5,
    stagger:0.3,
    scrollTrigger:{
      trigger:".page2 .section .details",
      scroller:".main",
      // markers:true,
      start:"top 80%"
    }
  })
}
page2Sections()


//page 2 image details section
function details(){
  var dets1 = document.querySelector(".page2 #details1")
  var dets2 = document.querySelector(".page2 #details2")
  var dets3 = document.querySelector(".page2 #details3")

  var items1 = document.querySelector(".page2 #details1 .details-items")
  var items2 = document.querySelector(".page2 #details2 .details-items")
  var items3 = document.querySelector(".page2 #details3 .details-items")


  var header1 = document.querySelector(".page2 #details1 .details-header")
  var header2 = document.querySelector(".page2 #details2 .details-header")
  var header3 = document.querySelector(".page2 #details3 .details-header")

  header1.addEventListener("mouseenter", function(){
    gsap.to(dets1, {
      height:"35vh",
      duration:0.3
    })
    gsap.from(items1, {
      opacity:0,
      duration:0.3,
      delay:0.2
    })
  })

  header1.addEventListener("mouseleave", function(){
    gsap.to(dets1, {
      height:"7.4vh",
      duration:0.3
    })
  })

  header2.addEventListener("mouseenter", function(){
    gsap.to(dets2, {
      height:"35vh",
      duration:0.3
    })
    gsap.from(items2, {
      opacity:0,
      duration:0.3,
      delay:0.2
    })
  })

  header2.addEventListener("mouseleave", function(){
    gsap.to(dets2, {
      height:"7.4vh",
      duration:0.3,
    })
  })
  
  header3.addEventListener("mouseenter", function(){
    gsap.to(dets3, {
      height:"35vh",
      duration:0.3
    })
    gsap.from(items3, {
      opacity:0,
      duration:0.3,
      delay:0.2
    })
  })

  header3.addEventListener("mouseleave", function(){
    gsap.to(dets3, {
      height:"7.4vh",
      duration:0.3
    })
  })
}

details()

//page3 products animation
function page3Products(){
  gsap.from(".page3 .products .pl1",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:".page3 .products .pl1",
      scroller:".main",
      // markers:true,
      start:"top 70%"
    }
  }
  )
  gsap.from(".page3 .products .pl2",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:".page3 .products .pl2",
      scroller:".main",
      // markers:true,
      start:"top 70%"
    }
  }
  )
}
page3Products()


function page4messages(){

var underline1 = document.querySelector(".message-section .underline1")
var underline2 = document.querySelector(".message-section .underline2")
var underline3 = document.querySelector(".message-section .underline3")
var underline4 = document.querySelector(".message-section .underline4")
var underline5 = document.querySelector(".message-section .underline5")

var message1 = document.querySelector(".message-section1")
var message2 = document.querySelector(".message-section2")
var message3 = document.querySelector(".message-section3")
var message4 = document.querySelector(".message-section4")
var message5 = document.querySelector(".message-section5")

var dot1 = document.querySelector(".message-section .dot1")
var dot2 = document.querySelector(".message-section .dot2")
var dot3 = document.querySelector(".message-section .dot3")
var dot4 = document.querySelector(".message-section .dot4")
var dot5 = document.querySelector(".message-section .dot5")

var textmsg1 = document.querySelector(".message1")
var textmsg2 = document.querySelector(".message2")
var textmsg3 = document.querySelector(".message3")
var textmsg4 = document.querySelector(".message4")
var textmsg5 = document.querySelector(".message5")

message1.addEventListener("click", function(){
  underline1.style.opacity = 1
  underline1.style.left = 0
  underline2.style.opacity = 0
  underline3.style.opacity = 0
  underline4.style.opacity = 0
  underline5.style.opacity = 0
  dot1.innerHTML = "●"
  dot2.innerHTML = "○"
  dot3.innerHTML = "○"
  dot4.innerHTML = "○"
  dot5.innerHTML = "○"

  textmsg1.style.opacity=1
  textmsg2.style.opacity=0
  textmsg3.style.opacity=0
  textmsg4.style.opacity=0
  textmsg5.style.opacity=0
  gsap.from(".textmessage h1", {
    y:200,
    opacity:0,
    rotate:5,
  })
})
message2.addEventListener("click", function(){
  underline2.style.opacity = 1
  underline2.style.left = 0
  underline1.style.opacity = 0
  underline3.style.opacity = 0
  underline4.style.opacity = 0
  underline5.style.opacity = 0
  dot2.innerHTML = "●"
  dot1.innerHTML = "○"
  dot3.innerHTML = "○"
  dot4.innerHTML = "○"
  dot5.innerHTML = "○"

  textmsg2.style.opacity=1
  textmsg1.style.opacity=0
  textmsg3.style.opacity=0
  textmsg4.style.opacity=0
  textmsg5.style.opacity=0
  gsap.from(".textmessage h1", {
    y:200,
    opacity:0,
    rotate:5,
  })
})
message3.addEventListener("click", function(){
  underline3.style.opacity = 1
  underline3.style.left = 0
  underline2.style.opacity = 0
  underline1.style.opacity = 0
  underline4.style.opacity = 0
  underline5.style.opacity = 0
  dot3.innerHTML = "●"
  dot1.innerHTML = "○"
  dot2.innerHTML = "○"
  dot4.innerHTML = "○"
  dot5.innerHTML = "○"

  textmsg3.style.opacity=1
  textmsg2.style.opacity=0
  textmsg1.style.opacity=0
  textmsg4.style.opacity=0
  textmsg5.style.opacity=0
  gsap.from(".textmessage h1", {
    y:200,
    opacity:0,
    rotate:5,
  })
})
message4.addEventListener("click", function(){
  underline4.style.opacity = 1
  underline4.style.left = 0
  underline2.style.opacity = 0
  underline3.style.opacity = 0
  underline1.style.opacity = 0
  underline5.style.opacity = 0
  dot4.innerHTML = "●"
  dot2.innerHTML = "○"
  dot3.innerHTML = "○"
  dot5.innerHTML = "○"
  dot1.innerHTML = "○"

  textmsg4.style.opacity=1
  textmsg2.style.opacity=0
  textmsg3.style.opacity=0
  textmsg1.style.opacity=0
  textmsg5.style.opacity=0
  gsap.from(".textmessage h1", {
    y:200,
    opacity:0,
    rotate:5,
  })
})
message5.addEventListener("click", function(){
  underline5.style.opacity = 1
  underline5.style.left = 0
  underline2.style.opacity = 0
  underline3.style.opacity = 0
  underline4.style.opacity = 0
  underline1.style.opacity = 0
  dot5.innerHTML = "●"
  dot2.innerHTML = "○"
  dot3.innerHTML = "○"
  dot4.innerHTML = "○"
  dot1.innerHTML = "○"

  textmsg5.style.opacity=1
  textmsg2.style.opacity=0
  textmsg3.style.opacity=0
  textmsg4.style.opacity=0
  textmsg1.style.opacity=0
  gsap.from(".textmessage h1", {
    y:200,
    opacity:0,
    rotate:5,
  })
})
}
page4messages()


function page6(){
var page5 = document.querySelector(".page5")
var page6 = document.querySelector(".page6-part2")
var email = document.querySelector(".page6 .email")
var label = document.querySelector(".email label")
var input = document.querySelector(".email input")
var arrow1 = document.querySelector(".page6 .email .arrow1")
var arrow2 = document.querySelector(".page6 .email .arrow2")

email.addEventListener("click", function(){
  label.innerHTML = ""
  arrow1.style.opacity = 0
  arrow2.style.opacity = 1
  arrow2.innerHTML = "↵"
})
page6.addEventListener("click", function(){
  label.innerHTML = "enter your email address for good"
  arrow1.style.opacity = 1
  arrow2.style.opacity = 0
})
page5.addEventListener("click", function(){
  label.innerHTML = "enter your email address for good"
  arrow1.style.opacity = 1
  arrow2.style.opacity = 0
})
arrow1.addEventListener("click", function(){
  label.innerHTML = ""
  arrow1.style.opacity = 0
  arrow2.style.opacity = 1
})
arrow2.addEventListener("click", function(){
  label.innerHTML = "enter your email address for good"
  arrow1.style.opacity = 1
  arrow2.style.opacity = 0
})
}

page6()

function page6icon(){
gsap.from(".page6 .center .icon i", {
  opacity:0,
  stagger:0.2,
  delay:5,
  rotate:10,
  scrollTrigger:{
    trigger:".page6 .center .icon i",
    scroller:".main",
    start:"top 80%",
    end:"top 90%",
    scrub:2
  }
})
}


page6icon()


function page4(){
  
gsap.from(".page4 .page4header .border", {
  x:-1800,
  duration:1,
  scrollTrigger:{
    trigger:".page4 .page4header",
    scroller:".main",
    start:"top 60%"
  }
})
gsap.from(".page4 .messages-header", {
  opacity:0,
  scrollTrigger:{
    trigger:".page4 .messages-header",
    scroller:".main",
    start:"top 50%"
  }
})
gsap.from(".page4 .messages h1", {
  y:200,
  rotate:5,
  scrollTrigger:{
    trigger:".page4 .messages",
    scroller:".main",
    start:"top 50%"
  }
})
}

page4()

function page5anime(){
  gsap.from(".page5 .sections", {
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
      trigger:".page5 .sections",
      scroller:".main"
    }
  })
}
page5anime()

function email(){
  gsap.from(".page6 .email",{
    opacity:0,
    scrollTrigger:{
      trigger:".page6 .email",
      scroller:".main",
      start:"top 60%"
    }
  })
  gsap.from(".page6 .email img",{
    opacity:0,
    delay:0.2,
    scrollTrigger:{
      trigger:".page6 .email img",
      scroller:".main",
      start:"top 60%"
    }
  })
}

email()

//------------------------------------


// menu.addEventListener("mouseenter", function(){
//   gsap.to(menuHam1,{
//     y:1,
//     scaleX:1.2,
//     duration:0.1
//   })
//   gsap.to(menuHam2,{
//     y:-1,
//     scaleX:1.2,
//     duration:0.1
//   })
// })
// menu.addEventListener("mouseleave", function(){
//   gsap.to(menuHam1,{
//     y:0,
//     duration:0.1,
//     scaleX:1,
//   })
//   gsap.to(menuHam2,{
//     y:0,
//     scaleX:1,
//     duration:0.1
//   })
// })

function menu(){

var tl = gsap.timeline()

var navHeader = document.querySelector(".nav-header")
var menu = document.querySelector(".menu .menu-overlay")
var menuCross = document.querySelector(".menu i")
var menuHam1 = document.querySelector(".menu .ham1")
var menuHam2 = document.querySelector(".menu .ham2")
var nav = document.querySelector("nav")
var navRight = document.querySelector("nav .navigations-right")

tl.pause()

tl.to(navHeader,{
  y:0,
}, "equal")
tl.to(nav,{
  backgroundColor:"black",
  color:"white",
}, "equal")
tl.to(menuHam1,{
  duration:-1,
  scale:0,
}, "equal")
tl.to(menuHam2,{
  duration:-1,
  scale:0,
}, "equal")
tl.to(navRight,{
  backgroundColor:"black"
}, "equal")
tl.to(menuCross, {
  scale:1,
  color:"white"
}, "equal")
tl.from(".nav-header #section .text h1, span",{
  y:100,
  duration:0.4
})
tl.from(".nav-header .sections .section",{
  opacity:0,
  stagger:-0.1,
  scaleY:0.5
})

  menu.addEventListener("click", function(){
    tl.play()
  })
  
  menuCross.addEventListener("click", function(){
    // gsap.to(navHeader, {
    //   y:-900,
    // })
    // gsap.to(nav,{
    //   backgroundColor:"#F7F7F7",
    //   color:"black",
    // })
    gsap.to(menuHam1,{
      scale:1,
      opacity:1
    })
    gsap.to(menuHam2,{
      scale:1,
      opacity:1
    })
    // gsap.to(navRight,{
    //   backgroundColor:"#F7F7F7"
    // })
    // gsap.to(menuCross, {
    //   scale:0,
    //   color:"white"
    // })
    tl.reverse()
  })
  
}
menu()


function cart(){
  var cart = document.querySelector(".cart .cart-overlay")
  var cartCross = document.querySelector(".cart #close")
  var cartHeader = document.querySelector(".cart-header")
  var nav = document.querySelector("nav")
  var navRight = document.querySelector("nav .navigations-right")

  var t = gsap.timeline()
  t.pause()


  t.to(cartHeader,{
    y:0,
  }, "equal")
  t.to(nav,{
    backgroundColor:"black",
    color:"white",
  }, "equal")
  t.to(navRight,{
    backgroundColor:"black",
    color:"white"
  }, "equal")
  t.from(".cart-header .cart .text, .button",{
    opacity:0,
    y:20,
  })
  t.to(cart,{
    opacity:0,
    scale:0
  }, "equal")
  t.to(cartCross,{
    opacity:1,
    scale:1,
    color:"#F7F7F7"
  }, "equal")


  cart.addEventListener("click", function(){
    t.play()
  })
  cartCross.addEventListener("click", function(){
    t.reverse()
  })
}

cart()