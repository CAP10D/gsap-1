//section1 animation
var tl=gsap.timeline()
tl.from(".nav h1,.nav h4",{
    y:-25,
    delay:0.8,
    duration:0.8,
    opacity:0,
    stagger:0.1,
})
tl.from(".nav button",{
    opacity:0,
})
tl.from(".center-part1 h1",{
    x:-70,
    opacity:0,
    duration:0.4,
    // delay:0.2,

},"-=0.3")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5,
    delay:0.2,

})
tl.from(".center-part1 .button2",{
    opacity:0,
    delay:0.3, 
})
tl.from(".center-part2 img",{
    opacity:0,
},"-=1.5")
tl.from(".end img",{
    y:30,
    opacity:0,
    duration:0.3,
    stagger:0.2,
})

//section2 animation
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        markers:true,
        scroller:"body",
        start:"top 50%",
        end:"top -20%",
        scrub:1

    }
})
tl2.from(".section-services h1,.section-services p",{
    x:-20,
    opacity:0,
    stagger:0.1
})
tl2.from(".box1.left.white",{
    x:-100,
    opacity:0,
    duration:0.5,
},"same1")
tl2.from(".box1.right.black",{
    x:100,
    opacity:0,
    duration:0.5,
},"same1")
tl2.from(".box1.left.black",{
    x:-100,
    opacity:0,
    duration:0.5,
},"same2")
tl2.from(".box1.right.white",{
    x:100,
    opacity:0,
    duration:0.5,
},"same2")
