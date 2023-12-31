
    // /* / <!-- \\\\\\\\\\\\\\\ * start//////////////////// -->/  */
    document.querySelector("body").style.display = "block"
        // allBtn.style.setProperty()
        let cursor = document.querySelector(".cursor")
  var timeout;
  document.addEventListener("mousemove",(e)=>{
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
  })
    /* / <!-- \\\\\\\\\\\\\\\ * end  //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ nav start//////////////////// -->/  */
    let tl = gsap.timeline()
     gsap.from(".nav",{
        y:-100,
        duration:1,
        delay:1,
        stagger:0.2,
        opacity:0,
     })
    /* / <!-- \\\\\\\\\\\\\\\ nav end  //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box1 start//////////////////// -->/  */
    gsap.to("#box1,nav",{
        opacity:1,
    })
    var typed = new Typed('span', {
      strings: ['Programmer', 'fronted Developer','Designer'],
      typeSpeed: 100,
      backSpeed:150,
      loop: true,
    });
    var typed = new Typed('.span', {
      strings: ['Programmer', 'fronted Developer','Designer'],
      typeSpeed: 100,
      backSpeed:150,
      loop: true,
    });
    var bo = gsap.timeline({scrollTrigger:{
    trigger:".box1",
    start:"0% 95%",
    end:"50% 59%",
    scrub:5,
   }})
       gsap.from(".box .boxtext",{
        x: 100,
        opacity:0,
        duration:1.5,
        stagger:.5,
        scrollTrigger:{
            trigger:".box",
            scroller:"body",
            
            start:'top 70%',
            end:'top 40%',
            scrub: 1,
        delay:2,
        }
    })
    gsap.from(".box .boxtext2",{
        x: -100,
        opacity:0,
        duration:1.5,
        stagger:.5,
        scrollTrigger:{
            trigger:".box",
            scroller:"body",
            
            start:'top 70%',
            end:'top 40%',
            scrub: 1,
        delay:2,
        }
    })
    gsap.from(".box .boxtext3",{
        x: 100,
        opacity:0,
        duration:1,
        delay:1.5,
        stagger:.5,
    })
    gsap.from(".box .boxtext4",{
        x: -100,
        opacity:0,
        duration:1.5,
        delay:1.6,
        stagger:.5,
    })
    gsap.from('#box1 .box0',{
        scale:0,
        duration:.9,
        delay:3
    })
    gsap.from('#box1 .box1',{
        y:35,
        duration:1.9,
        repeat:-1,
        yoyo:true
    })
    /* / <!-- \\\\\\\\\\\\\\\ box1 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box2 start//////////////////// -->/  */
    var box2 = gsap.timeline({scrollTrigger:{
        trigger:"#box2",
        start:"25% 95%",
        end:"28% 75%",
        scrub:5,
        delay:10,
    }})
    box2.from('#box2 .box1 img',{
        scale:.5,
        duration:10,
        delay:5,
        opacity:0
    })
    box2.from('#box2 .box1 div',{
        y:100,
        duration:3,
        delay:2.5,
        opacity:0,
        stagger:1,
    })
    var box2Item2 = gsap.timeline({scrollTrigger:{
        trigger:"#box2 .item2",
        start:"0% 95%",
         end:"80% 73%",
        scrub:5,
        delay:10,
    }})
    box2Item2.from("#box2 .item2 h1, #box2 .item2 h4, #box2 .item2 h6, #box2 .item2 p,.box2 button",{
        // y:100,
        x:-100,
        duration:2,
        stagger:1.5,
        opacity:0,
        delay:3,
        rotate:-20,
    })
    gsap.from(".stick1",{
        left:"-150%",
        top:"-50%",
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:"#box2",
            start:"10% 80%",
            end:"10% 80%",
            scrub:4
        }
    })
    gsap.from(".stick2",{
        top:"-50%",
        right:"-150%",
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:"#box2",
            start:"10% 80%",
            end:"10% 80%",
            scrub:4,
        }
    })
    gsap.from(".stick3",{
        top:"-100%",
        right:"-200%",
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:"#box2",
            start:"70% 80%",
            end:"70% 80%",
            scrub:4,
            
        }
    })
    gsap.from(".stick4",{
        right:"-200%",
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:"#box2",
            start:"70% 80%",
            end:"70% 80%",
            scrub:4,
        }
    })
    /* / <!-- \\\\\\\\\\\\\\\ box2 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box3 start//////////////////// -->/  */
    const circle = document.querySelectorAll(".circle")
circle.forEach(elem => {
   var dots = elem.getAttribute("data-dots");
   var marked = elem.getAttribute("data-percent");
   var percent = Math.floor(dots*marked/100);
   var points = "";
   var rotate = 360 / dots


   for (let i = 0; i < dots; i++) {
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>` 
 }   
   elem.innerHTML = points;
   
   const pointsMarked = elem.querySelectorAll('.points')
   for (let i = 0; i < percent; i++) {
         pointsMarked[i].classList.add('marked')
   }
});
   function box3line(lineLength) {
    gsap.from(`.box3 .line${lineLength} div`,{
    width:"0",
    duration:3,
    delay:.5,
    scrollTrigger:{
        trigger:`.box3 .line${lineLength} div`,
        start:"10% 85%",
         end:"10% 85%",
        scrub:3,
    }
   })
   }
   box3line(1);
   box3line(2);
   box3line(3);
   box3line(4);
   gsap.to(`.sel1 .points.marked`,{
    background: "aqua",
     boxShadow:" 0 0 .5rem #12f7ff",
     stagger:.05,
     scrollTrigger:{
        trigger:".box3 .sel1 .points.marked",
        start:"10% 85%",
         end:"10% 85%",
        scrub:5,
    }
   })
   gsap.to(`.sel2 .points.marked`,{
    background: "aqua",
     boxShadow:" 0 0 .5rem #12f7ff",
     stagger:.05,
     scrollTrigger:{
        trigger:".box3 .sel2 .points.marked",
        start:"10% 85%",
         end:"10% 85%",
        scrub:5,
    }
   })
   gsap.to(`.sel3 .points.marked`,{
    background: "aqua",
     boxShadow:" 0 0 .5rem #12f7ff",
     stagger:.05,
     scrollTrigger:{
        trigger:".box3 .sel3 .points.marked",
        start:"10% 85%",
         end:"10% 85%",
        scrub:5,
    }
   })
   gsap.to(`.sel4 .points.marked`,{
    background: "aqua",
     boxShadow:" 0 0 .5rem #12f7ff",
     stagger:.05,
     scrollTrigger:{
        trigger:".box3 .sel4 .points.marked",
        start:"10% 85%",
         end:"10% 85%",
        scrub:5,
    }
   })

    /* / <!-- \\\\\\\\\\\\\\\ box3 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box4 start//////////////////// -->/  */
    // rainbowColorp
    gsap.from("#box4 .h1",{
        y:100,
        x:-200,
        duration:1,
        stagger:1.5,
        opacity:0,
        delay:1,
        rotateZ:-60,
        scrollTrigger:{
        trigger:".box4",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    gsap.from("#box4 .p",{
        y:-100,
        x:200,
        duration:1,
        stagger:1.5,
        opacity:0,
        delay:1,
        rotateZ:-60,
        scrollTrigger:{
        trigger:".box4",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    let box4_card = document.querySelectorAll(".box4 .card1")
    gsap.from(box4_card[0],{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
        trigger:box4_card[0],
        start:"30% 75%",
         end:"30% 73%",
        scrub:5,
        delay:1,
        
    }
    })
    gsap.from(box4_card[1],{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
        trigger:box4_card[1],
        start:"30% 75%",
         end:"30% 73%",
        scrub:5,
        
    }
    })
    gsap.from(box4_card[2],{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
        trigger:box4_card[2],
        start:"30% 75%",
         end:"30% 73%",
        scrub:5,
        
    }
    })
    /* / <!-- \\\\\\\\\\\\\\\ box4 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box5 start//////////////////// -->/  */
    let linkSecBtn = document.querySelectorAll(".linkSec .box button")
        linkSecBtn.forEach((e)=>{
            e.classList.add("button")
        })
        gsap.from(".box5 .h1",{
        y:100,
        x:-200,
        duration:1,
        stagger:1.5,
        opacity:0,
        delay:1,
        rotateZ:-60,
        scrollTrigger:{
        trigger:".box5",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
    }
    })
    gsap.from(".box5 .p",{
        y:-100,
        x:200,
        duration:1,
        stagger:1.5,
        opacity:0,
        delay:1,
        rotateZ:-60,
        scrollTrigger:{
        trigger:".box5",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    /* / <!-- \\\\\\\\\\\\\\\ box5 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box6 start//////////////////// -->/  */
    gsap.from(".box6i1, .box6i3",{
        width:0,
        duration:1,
        scrollTrigger:{
        trigger:".box6",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    gsap.from(".box6 .it1",{
      x:-200,
      duration:1,
      delay:.5,
      opacity:0,
      scrollTrigger:{
        trigger:".box6",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    gsap.from(".box6 .it2",{
      x:200,
      duration:1,
      delay:.5,
      opacity:0,
      scrollTrigger:{
        trigger:".box6",
        start:"10% 95%",
         end:"10% 73%",
        scrub:5,
        
    }
    })
    /* / <!-- \\\\\\\\\\\\\\\ box6 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box7 start//////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box7 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box8 start//////////////////// -->/  */
    // Card Hover Effect | 3D Rotate Effect For Elements On Mousemove (No Plugins) - Html, CSS & Javascript
    /* / <!-- \\\\\\\\\\\\\\\ box8 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box9 start//////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box9 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box10 start//////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box10 end //////////////////// -->/  */
