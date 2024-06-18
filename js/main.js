window.addEventListener("load", function () {
    /* MAIN BANNER DESKTOP */
    let bannerBannerDesk = document.querySelector(".banner__container");
    if (bannerBannerDesk !== null) {
        if(document.documentElement.clientWidth > 1023) {
            const bannerBannerDeskSwiper = new Swiper(bannerBannerDesk, {
                pagination: {
                    el: ".banner-content__dots",
                    clickable: true,
                },
            });
        }
    }

    /* MAIN BANNER MOBILE */
    let bannerBannerMobile = document.querySelector(".banner--is-mobile");
    if (bannerBannerMobile !== null) {
        if(document.documentElement.clientWidth < 1023) {
            const bannerBannerMobileSwiper = new Swiper(bannerBannerMobile, {
                pagination: {
                    el: ".banner__dots",
                    clickable: true,
                },
            });
        }
    }

    /* SLIDER CATEGORY PAGE MAIN */
    let categorySlider = document.querySelector(".category-slider");
    if (categorySlider !== null) {
        if(document.documentElement.clientWidth > 1023) {
            const categorySliderSwiper = new Swiper(categorySlider, {
                loop: true,
                navigation: {
                    nextEl: '.category-slider-arrows-list__item--next',
                    prevEl: '.category-slider-arrows-list__item--prev',
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                    },
                    320: {
                        slidesPerView: 4,
                    }
                },
            });
        }
    }

    /* SLIDER BESTSELLERS PAGE MAIN */
    let bestsellersWrapp = document.querySelector(".bestsellers--swiper");
    if (bestsellersWrapp !== null) {
        const bestsellersWrappSwiper = new Swiper(bestsellersWrapp, {
            slidesPerView: 'auto',
            scrollbar: {
                el: ".bestsellers__scrollbar",
                hide: true,
                draggable: true,
            },
        });
    }

    /* FAQ TOGGLED */
    let faqListItem = document.querySelectorAll(".faq-list-item");
    if (faqListItem !== null) {
        for (let el of faqListItem) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (el.classList.contains("faq-list-item--is-active")) {
                    el.classList.remove('faq-list-item--is-active');
                } else {
                    el.classList.add('faq-list-item--is-active');
                }
            });
        }
    }

    /* SEARCH ON HEADER TOGGLED */
    let headerSearchIcon = document.querySelector(".c-header-information-search__icon");
    let headerInformationSearch = document.querySelector(".c-header-information-search");

    if (headerSearchIcon !== null && headerInformationSearch != null) {
        headerSearchIcon.addEventListener("click", function (event) {
            event.preventDefault();
            if (headerInformationSearch.classList.contains("c-header-information-search--is-active")) {
                headerInformationSearch.classList.remove('c-header-information-search--is-active');
            } else {
                headerInformationSearch.classList.add('c-header-information-search--is-active');
            }
        });
    }

    /* MASK FOR ALL PHONE INPUT */
    document.querySelectorAll('input[name="phone"]').forEach(function (input) {
        IMask(input, {
            mask: '+{7} (000) 000-00-00'
        });
    });

    /* INPUT PHONE SELECT */
    const selectSingle = document.querySelectorAll('.input-select');

    if(selectSingle != null) {
        for (let el of selectSingle) {
            let validRadio = false;

            const selectSingle_title = el.querySelector('.input-select__title');
            const selectSingle_labels = el.querySelectorAll('.input-select__label');
            if (selectSingle_title !== null && selectSingle_labels !== null) {
                selectSingle_title.addEventListener('click', () => {
                    if ('active' === el.getAttribute('data-state')) {
                        el.setAttribute('data-state', '');
                    } else {
                        el.setAttribute('data-state', 'active');
                    }
                });
                for (let i = 0; i < selectSingle_labels.length; i++) {
                    selectSingle_labels[i].addEventListener('click', (evt) => {
                        validRadio = true;
                        selectSingle_title.classList.remove("error");
                        selectSingle_title.classList.add("valid");
                        selectSingle_title.querySelector("span").innerHTML = selectSingle_labels[i].textContent; //
                        el.setAttribute('data-state', '');
                    });
                }
            }
        }
    }

    /* ORDER PAGE TOGGLED */
    const orderToggledRadio = document.querySelectorAll('input[name="order"]');

    orderToggledRadio.forEach((element, index) => {
        element.addEventListener('change', () => {

            let orderToggledRadioFormAll = document.querySelectorAll('.order-form');
            orderToggledRadioFormAll.forEach((el, index) => {
                el.classList.remove("order-form--is-active");
            });

            let name = element.getAttribute('id');
            let orderToggledRadioForm = document.querySelector('.order-form[data-id="' + name + '"]');
            orderToggledRadioForm.classList.add("order-form--is-active");
        })
    });

    /* SLIDER PAGE PRODUCT */
    let productInfoSlider = document.querySelector(".product-info__slider");
    if (productInfoSlider !== null) {
        if(document.documentElement.clientWidth < 1023) {
            const productInfoSliderSwiper = new Swiper(productInfoSlider, {
                pagination: {
                    el: ".product-info__dots",
                    clickable: true,
                },
            });
        }
    }
});