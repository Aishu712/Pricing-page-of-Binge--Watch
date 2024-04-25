var t = gsap.timeline()
t.from("#nav",{
  y:-100,
  delay:0.4,
  duration:0.5,
  scrub:0.6
})
t.to("#title",{
  color:"#4359C8",
  duration:0.5
})
t.from("#left h2",{
  x:-800,
  scrub:0.7,
  duration0:0.6


})
t.to("#left span",{
  color:"#3C36A9",
  duration:0.5
})
t.from("#left h4",{
  x:-800,
  scrub:0.7,
  duration:0.6,

})
t.from("#right",{
  x:800,
  scrub:0.7,
  duration:0.4
})
t.from("#left #pricing",{
  scale:0,
  opacity:0,
  scrub:0.7,
  duration:0.4,


})
t.to("#pricing",{
  y:10,
  duration:1.2,
  ease:"in",
  scrub:0.7,
  repeat:-1

})


