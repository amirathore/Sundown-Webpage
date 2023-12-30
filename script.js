function elemcard(){
  var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-card");
elemc.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

}
elemcard()

function textimg(){
  var f = document.querySelector(".first");
  var s = document.querySelector(".sec");
  var t = document.querySelector(".third");
  var img = document.querySelector(".img");
  var cl = document.querySelector(".cl");
  f.style.color = "#fff";
  var texchange = document.querySelector(".tex-change");
  
  s.addEventListener("click", function () {
    s.style.color = "#fff";
    t.style.color = "";
    f.style.color = "";
  
    texchange.innerHTML =
      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.  ";
    cl.style.marginLeft = "60px";
    img.style.backgroundImage =
      "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp)";
    img.style.transition = "all ease 1s"
  });
  t.addEventListener("click", function () {
    s.style.color = "";
    t.style.color = "#fff";
    f.style.color = "";
    texchange.innerHTML =
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need";
    cl.style.marginLeft = "130px";
    img.style.backgroundImage =
      "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg)";
  });
  f.addEventListener("click", function () {
    s.style.color = "";
    t.style.color = "";
    f.style.color = "#fff";
    cl.style.marginLeft = "";
    texchange.innerHTML =
      "Our team works with our clients to refine and concept into an executable design. a final design that encompasses the brand narrative to bring stories to life and providdesign solutions from concept, design, and architectural drawings to 3D renderings.";
    img.style.backgroundImage =
      "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg)";
  });

}
textimg()


var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
}

)

tl.to("#loader h3 ",{
     opacity:0,
     x:-10,
     stagger:-0.1,
     duration:1
})
tl.to("#loader",{
  opacity:0
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5
})
 tl.to("#loader",{
  display:"none"
 })