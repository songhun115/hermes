// 스크롤 트리거 플러그인 활성화 
gsap.registerPlugin(ScrollTrigger);
var tl1 = gsap.timeline();

tl1.from(".section2 > .section_text > .content_intro",{
  scrollTrigger:{
    trigger:".section2 > .section_text > .content_intro",
  },
  y:200
});

var tl2 = gsap.timeline();
tl2.from(".section2 > .section_img > .img_box > .section2_img_list > .section2_img_item",{
  scrollTrigger:{
    trigger:".section2 > .section_text > .content_intro",
    markers:true
  },
  y:200,
  duration:1,
  stagger:{
    amount:1.5
  }
})

