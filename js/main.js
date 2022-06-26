const checkbox = document.querySelectorAll(".checkbox-otz"),
    checkboxBlue = document.querySelector(".checkbox-otzBlue"),
    popup =document.querySelector('.navbar-popap-orange'),
    popup_block=document.querySelector(".popap-otziv"),
    popup_button=document.querySelectorAll(".orange-button"),
    popup_button_blue=document.querySelectorAll(".blue-button"),
    popup_button_close=document.querySelector(".popap-close"),      
    popup_button_closeBlue=document.querySelector(".popap-closeBlue"),      
    popup_blue =document.querySelector('.navbar-popap-blue'),
    popup_block_blue=document.querySelector(".popup-blue_otziv")
    burger=document.querySelector('.burger')
    burger_menu=document.querySelector('.burger-menu')
    body=document.querySelector('body')
    tab1=document.querySelector('.tab-card1')
    tab2=document.querySelector('.tab-card2')
    tab3=document.querySelector('.tab-card3')
    tab4=document.querySelector('.tab-card4')
    tab_list1=document.querySelector('.tab-list1')
    tab_list2=document.querySelector('.tab-list2')
    tab_list3=document.querySelector('.tab-list3')
    tab_list4=document.querySelector('.tab-list4')
    tab_popup_button=document.querySelector('.otziv-button')
    tab_popup=document.querySelector('.tab-card3-popup')
    tab_popup_cont=document.querySelector('.card3-popup-container')
    tab_popup_close=document.querySelector('.card3-popup-close')
    acardion=document.querySelectorAll('.acardion-element')
    tab_cont=document.querySelector('.tab-container')
    navbar_text_li1=document.querySelector('.navbar-text-li1')
    navbar_text_li2=document.querySelector('.navbar-text-li2')
    navbar_text_li3=document.querySelector('.navbar-text-li3')
    navbar_text_li4=document.querySelector('.navbar-text-li4')
    navbar_text_li5=document.querySelector('.navbar-text-li5')
    navbar_text_li6=document.querySelector('.navbar-text-li6')


    navbar_text_li1.addEventListener("click" , function(){
         scrollTo(0 , 600)
         navbar_text_li1.classList.add("navbar-li1-active")
         navbar_text_li2.classList.remove("navbar-li2-active")
         navbar_text_li3.classList.remove("navbar-li3-active")
         navbar_text_li4.classList.remove("navbar-li4-active")
         navbar_text_li5.classList.remove("navbar-li5-active")
         navbar_text_li6.classList.remove("navbar-li6-active")
    })
    navbar_text_li2.addEventListener("click" , function(){
         scrollTo(0 , 1300)
         navbar_text_li2.classList.add("navbar-li2-active")
         navbar_text_li1.classList.remove("navbar-li1-active")
         navbar_text_li3.classList.remove("navbar-li3-active")
         navbar_text_li4.classList.remove("navbar-li4-active")
         navbar_text_li5.classList.remove("navbar-li5-active")
         navbar_text_li6.classList.remove("navbar-li6-active")
    })
    navbar_text_li3.addEventListener("click" , function(){
         scrollTo(0 , 2500)
         navbar_text_li3.classList.add("navbar-li3-active")
         navbar_text_li1.classList.remove("navbar-li1-active")
         navbar_text_li2.classList.remove("navbar-li2-active")
         navbar_text_li4.classList.remove("navbar-li4-active")
         navbar_text_li5.classList.remove("navbar-li5-active")
         navbar_text_li6.classList.remove("navbar-li6-active")
    })
    navbar_text_li4.addEventListener("click" , function(){
         scrollTo(0 ,  3900)
         navbar_text_li4.classList.add("navbar-li4-active")
         navbar_text_li1.classList.remove("navbar-li1-active")
         navbar_text_li2.classList.remove("navbar-li2-active")
         navbar_text_li3.classList.remove("navbar-li3-active")
         navbar_text_li5.classList.remove("navbar-li5-active")
         navbar_text_li6.classList.remove("navbar-li6-active")
    })
    navbar_text_li5.addEventListener("click" , function(){
         scrollTo(0 ,  4900)
         navbar_text_li5.classList.add("navbar-li5-active")
         navbar_text_li1.classList.remove("navbar-li1-active")
         navbar_text_li2.classList.remove("navbar-li2-active")
         navbar_text_li3.classList.remove("navbar-li3-active")
         navbar_text_li4.classList.remove("navbar-li4-active")
         navbar_text_li6.classList.remove("navbar-li6-active")
    })
    navbar_text_li6.addEventListener("click" , function(){
         scrollTo(0 , 5600)
         navbar_text_li6.classList.add("navbar-li6-active")
         navbar_text_li1.classList.remove("navbar-li1-active")
         navbar_text_li2.classList.remove("navbar-li2-active")
         navbar_text_li3.classList.remove("navbar-li3-active")
         navbar_text_li4.classList.remove("navbar-li4-active")
         navbar_text_li5.classList.remove("navbar-li5-active")
    })
         
    



     window.addEventListener('scroll' , function(){
         console.log(this.scrollY);
         
     })
           
    acardion.forEach(acrdion_element => {
        acrdion_element.addEventListener('click' ,function(){
            if (acrdion_element.classList.contains("acardion-elemnt-active")) {
                acrdion_element.classList.remove("acardion-elemnt-active")
            }
            else{
                acardion.forEach(acrdion_element2 => {
                    acrdion_element2.classList.remove("acardion-elemnt-active")
                })
                acrdion_element.classList.add("acardion-elemnt-active")
            }
        })
    });


    new Swiper('.portfolio-slider' ,{
       loop:true,
       autoplay:true,
       slidesPerView: 4,
       breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
       navigation: {
           nextEl: '.portfolio-slider-next',
           prevEl: '.portfolio-slider-prev',
         },
         spaceBetween: 44,
         speed:500,
      })









    new Swiper('.sertifikat-slider' ,{
        loop:true,
        slidesPerView: 5,
        navigation: {
            nextEl: '.card4-arrow_next',
            prevEl: '.card4-arrow_prev',
          },
          spaceBetween: 11,
          breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
        }
       })










        tab_popup_close.addEventListener("click" ,function(){
            tab_popup_cont.classList.remove('card3-popup-containerActive')
            tab_popup.classList.remove("card3-popup-active")
            body.classList.remove("body-lock")
        })

        tab_popup_button.addEventListener("click" ,function(){
            body.classList.toggle("body-lock")
            if(!tab_popup.classList.contains("card3-popup-active")){
                tab_popup_cont.classList.add('card3-popup-containerActive')
                tab_popup.classList.add("card3-popup-active")
            }else{
                tab_popup_cont.classList.remove('card3-popup-containerActive')
                tab_popup.classList.remove("card3-popup-active")
            }
        })





   tab_list1.addEventListener('click',function(){
       if(! tab1.classList.contains('tab-active')){
        tab_list1.classList.add('tab-list-active')
        tab1.classList.add('tab-active')
        tab_cont.classList.add('tab-margin1')
        tab_cont.classList.remove('tab-margin2')
        tab_cont.classList.remove('tab-margin3')
        tab_cont.classList.remove('tab-margin4')
        tab2.classList.remove('tab-active')
        tab3.classList.remove('tab-active')
        tab4.classList.remove('tab-active')
        tab_list2.classList.remove('tab-list-active')
        tab_list3.classList.remove('tab-list-active')
        tab_list4.classList.remove('tab-list-active')
       }else{
       }
   })

   tab_list2.addEventListener('click',function(){
       if(! tab2.classList.contains('tab-active')){
        tab_list2.classList.add('tab-list-active')
        tab2.classList.add('tab-active')
        tab1.classList.remove('tab-active')
        tab3.classList.remove('tab-active')
        tab4.classList.remove('tab-active')
        tab_list1.classList.remove('tab-list-active')
        tab_list3.classList.remove('tab-list-active')
        tab_list4.classList.remove('tab-list-active')

        tab_cont.classList.add('tab-margin2')
        tab_cont.classList.remove('tab-margin1')
        tab_cont.classList.remove('tab-margin3')
        tab_cont.classList.remove('tab-margin4')
       }else{
       }
   })
   tab_list3.addEventListener('click',function(){
       if(! tab3.classList.contains('tab-active')){
        tab_list3.classList.add('tab-list-active')
        tab3.classList.add('tab-active')
        tab1.classList.remove('tab-active')
        tab2.classList.remove('tab-active')
        tab4.classList.remove('tab-active')
        tab_list1.classList.remove('tab-list-active')
        tab_list2.classList.remove('tab-list-active')
        tab_list4.classList.remove('tab-list-active')

        tab_cont.classList.add('tab-margin3')
        tab_cont.classList.remove('tab-margin2')
        tab_cont.classList.remove('tab-margin1')
        tab_cont.classList.remove('tab-margin4')
       }else{
       }
   })
   tab_list4.addEventListener('click',function(){
       if(! tab4.classList.contains('tab-active')){
        tab_list4.classList.add('tab-list-active')
        tab4.classList.add('tab-active')
        tab1.classList.remove('tab-active')
        tab2.classList.remove('tab-active')
        tab3.classList.remove('tab-active')
        tab_list1.classList.remove('tab-list-active')
        tab_list2.classList.remove('tab-list-active')
        tab_list3.classList.remove('tab-list-active')

        tab_cont.classList.add('tab-margin4')
        tab_cont.classList.remove('tab-margin2')
        tab_cont.classList.remove('tab-margin3')
        tab_cont.classList.remove('tab-margin1')
       }else{
       }
   })
   




   new Swiper('.product' ,{
    slidesPerView: 1,
    speed:500,
    navigation: {
        nextEl: '.produc-arrow_next',
        prevEl: '.produc-arrow_prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:'true',
        renderBullet: function(index , className){
            var sliderText = "Стандарт"
            if (index == 1){
                var sliderText = "Бизнес" 
            }
            else if(index == 2){
                var sliderText = "Премиум" 
            }
            else if(index == 3){
                var sliderText = " Эксклюзив" 
            }
            return '<span class = "' + className + '">' + (sliderText) +'</span>'
        }
      },
      spaceBetween: 20,
      breakpoints: {
        1200: {
          spaceBetween: 50,
        },
        992: {
            spaceBetween: 50,
        }
    }
   })
   new Swiper('.card3-slider' ,{
     loop:true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.card3-arrow_next',
        prevEl: '.card3-arrow_prev',
      },
      spaceBetween: 30,
      speed:500,
   })





        burger.addEventListener("click" , function(){
            burger_menu.classList.toggle("burger-menu__active")
            body.classList.toggle("body-lock-burger")
            burger.classList.toggle('burger-active')
        })     

    popup_button.forEach(button => {
        button.addEventListener("click" ,function(){
            body.classList.toggle("body-lock")
            if(!popup.classList.contains("popup-active")){
                popup.classList.add("popup-active")
                popup_block.classList.add('popup-block__active')
            }else{
                popup.classList.remove("popup-active")
                popup_block.classList.remove('popup-block__active')
            }
        })
    });



      
       
     
        popup_button_blue.forEach(button_blue => {
            button_blue.addEventListener("click" ,function(){
                body.classList.toggle("body-lock")
                if(!popup_blue.classList.contains("popup-acvtive_blue")){
                    popup_blue.classList.add("popup-acvtive_blue")
                    popup_block_blue.classList.add('popup-acvtive_blockBlue')
                }else{
                    popup_blue.classList.remove("popup-acvtive_blue")
                    popup_block_blue.classList.remove('popup-acvtive_blockBlue')
                }
            })
        });
     


             popup_button_close.addEventListener('click' ,function(){
                body.classList.remove("body-lock")
                popup.classList.remove("popup-active")
                popup_block.classList.remove('popup-block__active')
               })
               popup_button_closeBlue.addEventListener('click' ,function(){
                body.classList.remove("body-lock")
                popup_blue.classList.remove("popup-acvtive_blue")
                popup_block_blue.classList.remove('popup-acvtive_blockBlue')
               })

 


checkbox.forEach(checkbox_element => {
    checkbox_element .addEventListener('click' , function(){
           checkbox_element.classList.toggle("checked-active") 
    })
});

checkboxBlue.addEventListener('click' , function(){
    if(!checkboxBlue.classList.contains("checked-activeBlue")){
        checkboxBlue.classList.add('checked-activeBlue')
    }else{
        checkboxBlue.classList.remove('checked-activeBlue') 
    }
    
})