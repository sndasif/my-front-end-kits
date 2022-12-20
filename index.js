ScrollReveal({
    reset: true,
    distance: '60px',
    duration:2000,
    delay:300
    
    });
    ScrollReveal().reveal('.main-h1', { delay: 100, origin:"left" });
    ScrollReveal().reveal('.main-p', { delay: 100, origin:"top" });
    ScrollReveal().reveal('.h2', { delay: 100, origin:"bottom" });
    ScrollReveal().reveal('.image', { delay: 100, origin:"left" });
    ScrollReveal().reveal('.wrapper-content', { delay: 100, origin:"right" });

    /* window popup creation*/

     const popscreen=document.querySelector(".popup-wrapper");
     const closepopup=document.querySelector('.fa-solid');
     const popupbtn=document.querySelector('.popup-btn');

    /* window.addEventListener("load",()=>{
        setTimeout(()=>{
            popscreen.classList.add("active");
        },3000)
     }) */
     closepopup.addEventListener('click',()=>{
        popscreen.classList.remove('active');
   
    }); 
    /*click funtion*/
      /* window popup creation*/
      const loginscreen=document.querySelector('.popup-signin');
       const  loginbtn=document.querySelector('.submit');
       const userlogin=document.querySelector('#userlogin');
       const closeloginicn=document.querySelector('.fa-circle-xmark');

       userlogin.addEventListener('click',()=>{

        loginscreen.classList.add("show");
       });

        closeloginicn.addEventListener('click',()=>{
            loginscreen.classList.remove('show');
        });
        /*---------------------------------------------------------
        window.addEventListener('scroll',()=>{
            
            const scrolled=window.scrollY;
            if(scrolled==828){
                popscreen.classList.add("active");
            }

            
    
        })
      */

        const observer=new IntersectionObserver((Element)=>{
            Element.forEach((elms)=>{
              if(elms.isIntersecting){
                elms.target.classList.add('loop');
              }
            });
        });
        
        const hiddentelms=document.querySelectorAll('.meet-card');
           
              hiddentelms.forEach((els)=>observer.observe(els));


             