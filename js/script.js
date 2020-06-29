document.addEventListener('DOMContentLoaded', ()=>{
    // автослайдер на главной странице
    let mainSlider = document.querySelector('.main_slider');
    let subMenu = document.querySelector('.sub-menu');
    let mainMenuCatalog = document.querySelector('.main-menu_catalog');
    let mainMenu = document.querySelector('.main-menu');
    let subMenuCatalog = document.querySelector('.sub-menu_catalog');
    if(mainSlider) {
        let slides = mainSlider.querySelectorAll('.slider_item');
        let autoSlider = function() {
            for(let i = 0; i<slides.length; i++) {
                    if(slides[i].classList.contains('active')) {
                        if(i === slides.length-1) {
                            slides[i].classList.remove('active');
                            slides[0].classList.add('active');
                            return;
                        } else {
                            slides[i].classList.remove('active');
                            slides[i + 1].classList.add('active');
                            return;
                        }
                }
            }
        }
        setInterval(autoSlider, 5000);
    }

    
    // появление сабменю в верхнем меню
    if(mainMenu) {
        document.addEventListener('mouseover', (event)=>{
            if(event.target.classList.contains('main-menu_catalog') && !mainMenuCatalog.classList.contains('clicked')) {
                subMenuCatalog.classList.add('clicked');
                subMenu.style.display='flex';
                console.log('asdf1');
            }
        })
        document.addEventListener('mouseover', (event)=>{
            if(!event.target.closest('.sub-menu') && !event.target.closest('.main-menu')) {
                subMenuCatalog.classList.remove('clicked');
                subMenu.style.display='none';
            }
        })

    }
    const hits = document.querySelector('#hits')
// Добавление товара по плюсу на главной странице в разделе "Популярные товары"
    let hitsPlusMinus = function(event) {
        let plus = hits.querySelectorAll('.plus');
        let minus = hits.querySelectorAll('.minus');
        let itemsNumber = hits.querySelectorAll('.itemsNumber');
        if(event.target.classList.contains('plus')) {
            for(let i=0; i<plus.length; i++) {
                if(event.target === plus[i]) {
                    if(itemsNumber[i].textContent  < 1000) {
                        itemsNumber[i].textContent++;
                    } else {
                        itemsNumber[i] = 1000;
                    }
                }
            }
        }
        if(event.target.classList.contains('minus')) {
            for(let i = 0; i<minus.length; i++) {
                if(event.target === minus[i]) {
                    if(itemsNumber[i].textContent > 0) {
                        itemsNumber[i].textContent--;
                    } else {
                        itemsNumber[i] = 1;
                    }
                }
            }
        }
  
    }
    if(hits) {
        document.addEventListener('click', hitsPlusMinus)
    }
    //  Появление скрытой корзины
    let hiddenCart = document.querySelector('.hidden_cart');
    if(mainMenu) {
        document.addEventListener('mouseover', (event)=>{
            if(event.target.closest('.basket_wrapper') && !hiddenCart.classList.contains('visible')) {
                hiddenCart.classList.add('visible');
            } 
        })
        document.addEventListener('click', (event) => {
            if(hiddenCart.classList.contains('visible') && !event.target.closest('.hidden_cart')){
                hiddenCart.classList.remove('visible');
            }
            if(hiddenCart.classList.contains('visible') && event.target.classList.contains('order')){
                hiddenCart.classList.remove('visible');
            }
            if(hiddenCart.classList.contains('visible') && event.target.classList.contains('clear_cart')){
                hiddenCart.classList.remove('visible');
            }
        })
        document.addEventListener('mouseover', (event)=>{
            if(!event.target.closest('.basket_wrapper') && !event.target.closest('.hidden_cart')) {
                hiddenCart.classList.remove('visible');
            } 
        })

    }
    // Добавление товаров в скрытой корзине по плюсу
    
    let hiddenCartPlusMinus = function(event) {
        let plus = hiddenCart.querySelectorAll('.plus');
        let minus = hiddenCart.querySelectorAll('.minus');
        let itemsNumber = hiddenCart.querySelectorAll('.itemsNumber');
        if(event.target.classList.contains('plus')) {
            for(let i=0; i<plus.length; i++) {
                if(event.target === plus[i]) {
                    if(itemsNumber[i].textContent  < 1000) {
                        itemsNumber[i].textContent++;
                    } else {
                        itemsNumber[i] = 1000;
                    }
                }
            }
        }
        if(event.target.classList.contains('minus')) {
            for(let i = 0; i<minus.length; i++) {
                if(event.target === minus[i]) {
                    if(itemsNumber[i].textContent > 0) {
                        itemsNumber[i].textContent--;
                    } else {
                        itemsNumber[i] = 1;
                    }
                }
            }
        }
  
    }
    if(hiddenCart) {
        document.addEventListener('click', hiddenCartPlusMinus)
    }
    // ТАбы в разделе for
    let sectionFor = document.querySelector('#for');
    let tabsFull = document.querySelector('.for_tabs');
    let tabsMobile = document.querySelector('.for_tabs_hidden');
    let sectionForTabsToggle = function(event) {
        let tabs = sectionFor.querySelectorAll('.tab');
        let tabsContent =  sectionFor.querySelectorAll('.tab_content_item');
        
        if(event.target.classList.contains('tab')) {
            for(i=0; i<tabs.length; i++) {
                if(tabs[i].classList.contains('active')){
                    tabs[i].classList.remove('active');
                    tabsContent[i].classList.remove('active');
                }
                if(event.target === tabs[i]) {
                    tabs[i].classList.add('active');
                    tabsContent[i].classList.add('active');
                }
            }
        }
        
    }
    if(tabsFull) {
        document.addEventListener('click', sectionForTabsToggle);
    }
    // МОбильные табы 

    let sectionForMobileTabsToggle = function(event) {
        let tabs = tabsMobile.options;
        
        let tabsContent =  sectionFor.querySelectorAll('.tab_content_item');
        
        if(event.target.classList.contains('for_tabs_hidden')) {
            for(i=0; i<tabs.length; i++) {
                if(tabs[i].classList.contains('active')){
                    tabs[i].classList.remove('active');
                    tabsContent[i].classList.remove('active');
                }

            }
            for(i=0; i<tabs.length; i++) {
                if(tabs[i] === tabs[tabs.selectedIndex]) {
                    tabs[i].classList.add('active');
                    tabsContent[i].classList.add('active');
                }
            }
        }
        
    }
    if(tabsMobile) {
        tabsMobile.addEventListener('change', sectionForMobileTabsToggle);
    }
    // slider 
    // гамбургер 
    // Появление скрытого меню
    let hamburger = document.querySelector('.ham');
    let hamTwin = document.querySelector('.ham_twin');
    let hiddenMenu = document.querySelector('.hidden');
    let toggleMenu = function(event){
        if(event.target.classList.contains('ham_twin')) {
            if(!hiddenMenu.classList.contains('active')) {
                hiddenMenu.classList.add('active');
                hamburger.classList.add('active');
                hamTwin.classList.add('active');

            } else {
                hiddenMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamTwin.classList.remove('active');

            }
        }
        if(event.target.classList.contains('main_menu_item') && hiddenMenu.classList.contains('active')) {
            hiddenMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamTwin.classList.remove('active');
        }
    }
    let showHamburger = function(event) {
        let hamTwin = document.querySelector('.ham_twin');
        let hiddenMenu = document.querySelector('.hidden');
        let hamburger = document.querySelector('.ham');
        let scrollPosition = window.scrollY;
        if(document.body.clientWidth > 800) {
            if(scrollPosition > 1000) {
                hamburger.classList.add('visible');
                hamTwin.classList.add('visible');
            } else if(hiddenMenu.classList.contains('active')) {
                hamburger.classList.add('visible');
                hamTwin.classList.add('visible');
            } else {
                hamburger.classList.remove('visible');
                hamTwin.classList.remove('visible');
            }
        } else return;

    }
    document.addEventListener('scroll', showHamburger);
    document.addEventListener('click', toggleMenu);

    
    // Плюс и минус в каталоге - карточке товара
    let goodsWrapper = document.querySelector('.goods_wrapper');
    let goodsWrapperPlusMinus = function(event) {
        let plus = goodsWrapper.querySelectorAll('.plus');
        let minus = goodsWrapper.querySelectorAll('.minus');
        let itemsNumber = goodsWrapper.querySelectorAll('.itemsNumber');
        if(event.target.classList.contains('plus')) {
            for(let i=0; i<plus.length; i++) {
                if(event.target === plus[i]) {
                    if(itemsNumber[i].textContent  < 1000) {
                        itemsNumber[i].textContent++;
                    } else {
                        itemsNumber[i] = 1000;
                    }
                }
            }
        }
        if(event.target.classList.contains('minus')) {
            for(let i = 0; i<minus.length; i++) {
                if(event.target === minus[i]) {
                    if(itemsNumber[i].textContent > 0) {
                        itemsNumber[i].textContent--;
                    } else {
                        itemsNumber[i] = 1;
                    }
                }
            }
        }
  
    }
    if(goodsWrapper) {
        document.addEventListener('click', goodsWrapperPlusMinus)
    }
    // Переключение заднего фона для категори айтемс в каталоге
    document.addEventListener('click', ()=>{
        let sideCategories = document.querySelector('.side_categories');
    
    if(sideCategories) {
        
        let inputRadio = sideCategories.querySelectorAll(".input_radio");
        document.addEventListener('click', (event) => {
            
            for(let i = 0; i < inputRadio.length; i++) {
        
                let categoryItem = sideCategories.querySelectorAll('.category_item');
                let inputRadio = sideCategories.querySelectorAll('.input_radio');
                let labels = sideCategories.querySelectorAll('label');
                if(inputRadio[i].checked === true) {
                    for(let i = 0; i < inputRadio.length; i++) {
                        categoryItem[i].style.backgroundColor="rgba(2,2,2, 0)";
                        labels[i].style.color="#ffffff";
                    }
                    categoryItem[i].style.backgroundColor="#ffffff";
                    labels[i].style.color="#223038";
                }
            }

        })
    }
    })
    
    // Появление скрытых категорий в каталоге

    let mobileCategories = document.querySelector('.categories_mobile');
    let hiddenCategories = document.querySelector('.categories_hidden');
    
    if(mobileCategories) {
        let mobileCategoriesArrow = mobileCategories.querySelector('.arrow');
        document.addEventListener('click', (event) => {
            if(event.target.closest('.categories_mobile') && !hiddenCategories.classList.contains('visible')) {
                hiddenCategories.classList.add('visible');
                mobileCategoriesArrow.textContent="⌃";
                mobileCategoriesArrow.style.top="10px";


            } else if(event.target.closest('.categories_mobile') && hiddenCategories.classList.contains('visible')) {
                hiddenCategories.classList.remove('visible');
                mobileCategoriesArrow.textContent="⌄";
                mobileCategoriesArrow.style.top="5px";
            }
            if( window.innerWidth >= 1024 ){
                hiddenCategories.classList.remove('visible');
           }
        })
    }
    // конец появления скрытых категорий в каталоге
    // Появление заднего фона у мобильных категорий при состоянии checked
    
    if(hiddenCategories) {
        
        let inputRadio = hiddenCategories.querySelectorAll(".input_radio");
        document.addEventListener('click', (event) => {
            
            for(let i = 0; i < inputRadio.length; i++) {
        
                let categoryItem = hiddenCategories.querySelectorAll('.category_item');
                let inputRadio = hiddenCategories.querySelectorAll('.input_radio');
                let labels = hiddenCategories.querySelectorAll('label');
                if(inputRadio[i].checked === true) {
                    for(let i = 0; i < inputRadio.length; i++) {
                        categoryItem[i].style.backgroundColor="rgba(2,2,2, 0)";
                        labels[i].style.color="#ffffff";
                    }
                    categoryItem[i].style.backgroundColor="#ffffff";
                    labels[i].style.color="#223038";
                }
            }

        })
        
    }
    // Конец появления заднего фона у мобильных категорий при состоянии checked
        // Плюс и минус в карточке товара
        let cardMain = document.querySelector('.card_main');
        let cardMainPlusMinus = function(event) {
            let plus = cardMain.querySelectorAll('.plus');
            let minus = cardMain.querySelectorAll('.minus');
            let itemsNumber = cardMain.querySelectorAll('.itemsNumber');
            if(event.target.classList.contains('plus')) {
                for(let i=0; i<plus.length; i++) {
                    if(event.target === plus[i]) {
                        if(itemsNumber[i].textContent  < 1000) {
                            itemsNumber[i].textContent++;
                        } else {
                            itemsNumber[i] = 1000;
                        }
                    }
                }
            }
            if(event.target.classList.contains('minus')) {
                for(let i = 0; i<minus.length; i++) {
                    if(event.target === minus[i]) {
                        if(itemsNumber[i].textContent > 0) {
                            itemsNumber[i].textContent--;
                        } else {
                            itemsNumber[i] = 1;
                        }
                    }
                }
            }
      
        }
        if(cardMain) {
            document.addEventListener('click', cardMainPlusMinus)
        }
    
});