let hitsSliderWrapper = document.querySelector('.hits_slider_wrapper');
if (hitsSliderWrapper) {
  $('.hits_slider_wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

let feedbackSliderWrapper = document.querySelector('.feedback_slider_wrapper');
if (feedbackSliderWrapper) {
  $('.feedback_slider_wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
// Регулярный прием наших продуктов 
let regularSliderWrapper = document.querySelector('.plusses_hidden');
if (regularSliderWrapper) {
  $('.plusses_hidden').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  // Слайдер в карточке товаров
  let cardSliderWrapper = document.querySelector('.card_slider_wrapper');
  if (cardSliderWrapper) {
    console.log('asdfjafls');
    $('.card_slider_wrapper').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [{
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
