gsap.from('.section2 > .section_text ', {
  scrollTrigger:{
    trigger:".section2 > .section_text",
    markers:true,
    end:"bottom 10%"
  },
  y:200,
  duration:0.3
  });


var tl = gsap.timeline({
  scrollTrigger:{
    markers:true,
    end:"bottom 10%",
  },
  repeatDelay:1
});

tl.from(".section2_img_item", {
  scrollTrigger:{
    trigger:".section2_img_item",
    markers:true,
    end:"bottom 10%",
  },
  y:300,
    duration:1,
    stagger:0.1
});

gsap.from('.section4 > .section_text ', {
  scrollTrigger:{
  trigger:".section4 > .section_text",
  markers:true,
  end:"bottom 10%",
  },
  y:200,
    duration:0.3
});

