// start basic 
// // //////load
// دالة الكتابة التلقائية
// function autoType(
//   element,
//   text,
//   typeSpeed,
//   deleteSpeed,
//   waitBeforeDelete,
//   waitBetweenWords,
//   loop
// ) {
//   let i = 0; // مؤشر الحروف
//   let deleting = false; // لتحديد إذا كنا في وضع الحذف
//   let textContent = ""; // النص الذي سيتم كتابته أو حذفه

//   function type() {
//     if (!deleting) {
//       textContent += text[i];
//       element.textContent = textContent;
//       i++;

//       // التوقف بعد كتابة النص بالكامل
//       if (i < text.length) {
//         setTimeout(type, typeSpeed);
//       } else {
//         if (loop) {
//           setTimeout(deleteText, waitBeforeDelete);
//         }
//       }
//     }
//   }

//   // دالة الحذف التلقائي
//   function deleteText() {
//     deleting = true;
//     textContent = textContent.slice(0, -1);
//     element.textContent = textContent;
//     if (textContent.length > 0) {
//       setTimeout(deleteText, deleteSpeed);
//     } else {
//       deleting = false;
//       i = 0;
//       setTimeout(type, waitBetweenWords);
//     }
//   }

//   // بدء الكتابة التلقائية
//   type();
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const autoElements = document.querySelectorAll(".auto");

//   autoElements.forEach((ele) => {
//     const exampleText = ele.textContent.trim();
//     ele.textContent = ""; // مسح النص الحالي داخل العنصر
//     autoType(ele, exampleText, 100, 50, 2000, 500, true); // بدء الكتابة التلقائية
//   });
// });
document.getElementsByTagName('body')[0].classList.add('loaderlodging__body');
window.onload = function() {
    document.getElementsByClassName('loaderlodging')[0].classList.add('remove');
    document.getElementsByClassName('loaderlodging__body')[0].classList.add('afterloading');

}

let header = document.querySelector("header .head");
// let end = document.querySelector(".end");

window.onscroll = function () {
  if (scrollY >= 300) {
    header.classList.add("header-fixed");
    end.classList.add("d-block");
  } else {
    header.classList.remove("header-fixed");
    end.classList.remove("d-block");
  }
};
// end.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

let bars = document.querySelector(".bars");
let phone = document.querySelector(".phone");
let phone_slide = document.querySelector(".phone-slide");
let closes = document.querySelector(".closes");

bars.onclick = () => {
  phone.classList.add("flex");
  setTimeout(() => {
    phone_slide.classList.add("left-0");
  }, 100);
};
closes.onclick = () => {
  setTimeout(() => {
    phone.classList.remove("flex");
  }, 1000);
  phone_slide.classList.remove("left-0");
};
// end basic 



let dark = document.querySelector(".btn-dark-mood label");
let body = document.querySelector("body");
let revi = document.querySelector(".section-review");
let alltext = document.querySelectorAll("a , p , h1 , h2 , h3 , h4 , h5 , h6 , i")
let logo = document.querySelector("header .logo .dark-logo")
let logo_foot = document.querySelector("footer .logo .dark-logo")

dark.onclick=()=>{
  body.classList.toggle("black");
  header.classList.toggle("black");
    logo.classList.toggle("ml-logo")
    logo_foot.classList.toggle("ml-logo-footer")
    alltext.forEach((ele, ind)=>{
      ele.classList.toggle("white");
    }) 
    revi.classList.toggle("black");
}



// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo 

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });
  
$(".autoplay")
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl:true
  }).slickAnimation();
// // ////autoplay 2
(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width >= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }

})(jQuery);


// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////

// // start counter 
//      // count in who us slide 

// // end count in who us slide 





// // // ///////////////////////////////
// $(document).ready(function(){
//   // تهيئة Slick Slider
//   $('.your-slider-class').slick({
//     // أي إعدادات تحتاجها للسلايدر
//   });

//   // ضبط نفس الارتفاع لجميع البطاقات بعد التهيئة
//   adjustCardHeights();
  
//   // إعادة ضبط الارتفاع عند التحديث أو التغيير في السلايدر (إذا كان لديك محتوى متغير)
//   $(window).on('resize', function() {
//     adjustCardHeights();
//   });

//   function adjustCardHeights() {
//     var maxHeight = 0;

//     // العثور على أكبر ارتفاع
//     $('.slick-slide').each(function() {
//       var thisHeight = $(this).outerHeight();
//       if (thisHeight > maxHeight) {
//         maxHeight = thisHeight;
//       }
//     });

//     // تعيين نفس الارتفاع لجميع البطاقات
//     $('.slick-slide').each(function() {
//       $(this).height(maxHeight);
//     });
//   }
// });
// let table =document.querySelectorAll(".travel-table li")

// table.forEach((ele , ind)=>{
// ele.onclick = ()=>{
// ele.classList.toggle("active")
// }
// })
$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });

  $(".image-popup-fit-width").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".image-popup-no-margins").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".videoplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },

        // you may add here more sources
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });
});
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      // titleSrc: function(item) {
      // 	return item.el.attr('title') + ' by Marsel Van Oosten';
      // }
    },
  });
});




let btn_search =document.querySelector(".search button");
let search =document.querySelector(".search input");
let search_ico =document.querySelector(".search i");

btn_search.onclick=()=>{
  search.classList.toggle("visable-search")
  if(search_ico.classList.contains("fa-search")){
    search_ico.classList.remove("fa-search")
    search_ico.classList.add("fa-close")
  }
  else{
    search_ico.classList.add("fa-search")
    search_ico.classList.remove("fa-close")
  }
}