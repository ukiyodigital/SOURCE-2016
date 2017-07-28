// Quote Randomization
var quotes = [];
var authors = [];


quotes[0] = "Nonprofit Brown Bag sessions set-up a beautiful, non-threatening environment for which organizations can meet one another, share best practices, understand how others are hurdling some of the same obstacles, learn about other services being offered in our community. The sessions have been rewarding, time-efficient, and each time leave us 'wanting more'!";
    
        authors[0] = "";
    


quotes[1] = "There is no other forum in Claremont to provide networking and institutional/strategic education for local non-profits. SOURCE and the Brown Bag Series are extremely important resources for fostering the philanthropic community in our town.";
    
        authors[1] = "";
    


var totalQ = 2;
var randomQ = Math.floor(Math.random() * totalQ);
var loadQuote = $('<h2 id="quote-load">"' + quotes[randomQ] + '"</h2><h2>' + authors[randomQ] + '</h2><img class="loading-icon" src="/assets/img/loading-ring.gif">').hide().fadeIn(1500);
$('#quote').append(loadQuote);

// Core Javascript Initialization
var App = function() {
    'use strict';

    // Bootstra Components
    var handleBootstrapComponents = function() {
        // Bootstrap Carousel
        $('.carousel').carousel({
            interval: 5000,
            pause: 'hover'
        });

        // Tooltips
        $('.tooltips').tooltip();
        $('.tooltips-show').tooltip('show');
        $('.tooltips-hide').tooltip('hide');
        $('.tooltips-toggle').tooltip('toggle');
        $('.tooltips-destroy').tooltip('destroy');

        // Popovers
        $('.popovers').popover();
        $('.popovers-show').popover('show');
        $('.popovers-hide').popover('hide');
        $('.popovers-toggle').popover('toggle');
        $('.popovers-destroy').popover('destroy');
    }

    // Bootstrap Navbar Trigger
    var handleNavbarToggle = function() {
        $('.navbar-toggle').on('click', function(event) {
            if ($('.toggle-icon').hasClass('is-clicked')) {
                $('.toggle-icon').removeClass('is-clicked');
            } else {
                $('.toggle-icon').addClass('is-clicked');
            }
        });
    }

    // Handle Sidebar Menu
    var handleSidebarMenu = function() {
        $(document).ready(function($) {
            var $sidebar_trigger = $('.sidebar-trigger'),
                $sidebar_content_overlay = $('.sidebar-content-overlay');

            // open-close sidebar menu clicking on the menu icon
            $sidebar_trigger.on('click', function(event){
                event.preventDefault();

                $sidebar_trigger.toggleClass('is-clicked');
                $sidebar_content_overlay.toggleClass('sidebar-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                $('.sidebar-nav').toggleClass('sidebar-menu-is-open');

                // check if transitions are not supported - i.e. in IE9
                if($('html').hasClass('no-csstransitions')) {
                    $('body').toggleClass('overflow-hidden');
                }
            });

            // close lateral menu clicking outside the menu itself
            $sidebar_content_overlay.on('click', function(event){
                if( !$(event.target).is('.sidebar-trigger') ) {
                    $sidebar_trigger.removeClass('is-clicked');
                    $sidebar_content_overlay.removeClass('sidebar-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                        $('body').removeClass('overflow-hidden');
                    });
                    $('.sidebar-nav').removeClass('sidebar-menu-is-open');
                    // check if transitions are not supported
                    if($('html').hasClass('no-csstransitions')) {
                        $('body').removeClass('overflow-hidden');
                    }

                }
            });

            // close sidebar menu scrolling on the content
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.sidebar-content-overlay, .sidebar-nav').removeClass('sidebar-menu-is-open');
                    $('.sidebar-trigger').removeClass('is-clicked');
                }
            });
        });
    }

    // Services v1 Collapse
    var handleServicesV7 = function() {
        $('.services-v7-collapsed').hide();
        $('.services-v7').on('hover', function() {
            $(this).find('.services-v7-collapsed').slideToggle(300);
        });
    }

    // Work v1 Collapse
    var handleWorkV1 = function() {
        $('.work-v1-collapse').hide();
        $('.work-v1').on('hover', function() {
            $(this).find('.work-v1-collapse').slideToggle(400);
        });
    }

    // Topbar Transparent Dropdown
    var handleTopbarTDropdown = function() {
        $('.topbar-t-dropdown-menu').hide();
        $('.topbar-t-list-item').on('click', function() {
            $(this).find('.topbar-t-dropdown-menu').slideToggle(400);
        });
    }

    // Topbar transparent Shopping Dropdown
    var handleTopbarTShoppingDropdown = function() {
        $('.topbar-t-dropdown-menu').hide();
        $('.topbar-t-shopping-window').on('click', function() {
            $(this).find('.topbar-t-dropdown-menu').slideToggle(400);
        });
    }

    // Topbar e-Commerce Dropdown
    var handleTopbarEDropdown = function() {
        $('.topbar-e-dropdown-menu').hide();
        $('.topbar-e-list-item').on('click', function() {
            $(this).find('.topbar-e-dropdown-menu').slideToggle(400);
        });
    }

    // Topbar e-Commerce Shopping Dropdown
    var handleTopbarEShoppingDropdown = function() {
        $('.topbar-e-dropdown-menu').hide();
        $('.topbar-e-shopping-window').on('click', function() {
            $(this).find('.topbar-e-dropdown-menu').slideToggle(400);
        });
    }

    // Language Dropdown
    var handleLanguageBarDropdown = function() {
        $('.js-language-trigger').on('click', function() {
            $('.js-language-dropdown').toggle();
        });
    }

    // Language Push
    var handleLanguagePush = function() {
        $('.language-push-btn').on('click', function() {
            $('.language-push-open').slideToggle(400);
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 1) $('.language-push-open').slideUp();
        });
    }
    
    // Team v7 Collapse
    var handleTeamV7 = function() {
        $('.team-v7-collapse').hide();
        $('.team-v7').on('click', function() {
            $(this).find('.team-v7-trigger').toggleClass('is-clicked');
            $(this).find('.team-v7-collapse').slideToggle(300);
        });
    }

    // Footer Toggle Expand
    var handleFooterToggleExpand = function() {
        $('.footer-toggle-collapse').hide();
        $('.footer-toggle-trigger').on('click', function(event) {
            event.preventDefault();

            $(this).toggleClass('is-open');
            $('.footer-toggle-collapse').slideToggle(500);

            $('html, body').animate({
                scrollTop: $(document).height()
            }, 500);
        });
    }

    // Scroll To Section
    var handleScrollToSection = function() {
        $(function() {
            $('a[href*=#scroll_]:not([href=#scroll_])').on('click', function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 70
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }

    // Handle Equal Height Interactive Banner
    var handleEqualIBannerBg = function() {
        $('.equal-height-ib-bg-img').each(function() {
            $(this).css('background-image', 'url(' + $(this).children('img').attr('src') + ')');
            $(this).children('img').hide();
        });
    }

    // Fullheight
    var handleFullheight = function() {
        var WindowHeight = $(window).height(),
            HeaderHeight;

        if ($(document.body).hasClass('promo-top-offset')) {
            HeaderHeight = $('.fullheight-header-offset').height();
        } else {
            HeaderHeight = 0;
        }

        $('.fullheight').css('height', WindowHeight - HeaderHeight);

        $(window).resize(function() {
            var WindowHeight = $(window).height();
            $('.fullheight').css('height', WindowHeight - HeaderHeight);
        });
    }

    // Vertical Center Aligned
    // Note! This works only with promo block and background image via CSS.
    var handleVerticalCenterAligned = function() {
        $('.vertical-center-aligned').each(function() {
            $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
        });
        $(window).resize(function() {
            $('.vertical-center-aligned').each(function() {
                $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
            });
        });
    }

    // Handle Toggle Collapse Box
    var handleToggleCollapseBox = function() {
        $('.theme-toggle-trigger').on('click', function(event) {
            $(this).toggleClass('.theme-toggle-content').hide();
            $(this).toggleClass('is-open').show();
            $('.theme-toggle-content').slideToggle(400);
        });
    }

    // Handle Header Fullscreen Navigation Overlay
    var handleHeaderFullscreenOverlay = function() {
        var overlay = $('.header-fullscreen-nav-bg-overlay'),
            close = $('.header-fullscreen-nav-close'),
            trigger = $('.header-fullscreen-nav-trigger'),
            HeaderNavigation = $('.header-fullscreen-nav-overlay');

        trigger.on('click', function() {
            HeaderNavigation.removeClass('header-fullscreen-nav-overlay-show');
            HeaderNavigation.addClass('header-fullscreen-nav-overlay-show');
        });

        close.on('click', function(e) {
            e.stopPropagation();
            HeaderNavigation.removeClass('header-fullscreen-nav-overlay-show');
        });
    }

    // Handle Search
    var handleSearch = function() {
        var SearchTrigger = $('.search-btn');
        SearchTrigger.on('click', function() {
            SearchTrigger.toggleClass('is-clicked');
            $('.search-field').fadeToggle(400);
        });
    }

    // Handle Search Classic
    var handleSearchClassic = function() {
        var SearchTrigger = $('.search-classic-btn');
        SearchTrigger.on('click', function() {
            SearchTrigger.toggleClass('is-clicked');
            $('.search-classic-field').fadeToggle(400);
        });
    }

    // Handle Search Fullscreen
    var handleSearchFullscreen = function() {
        var overlay = $('.search-fullscreen-bg-overlay'),
            close = $('.search-fullscreen-close'),
            trigger = $('.search-fullscreen-trigger'),
            SearchFullscreen = $('.search-fullscreen-overlay');

        trigger.on('click', function() {
            SearchFullscreen.removeClass('search-fullscreen-overlay-show');
            SearchFullscreen.addClass('search-fullscreen-overlay-show');
        });

        close.on('click', function(e) {
            e.stopPropagation();
            SearchFullscreen.removeClass('search-fullscreen-overlay-show');
        });
    }

    // Handle Search On Header
    var handleSearchOnHeader = function() {
        var SearchTrigger = $('.search-on-header-btn');
        SearchTrigger.on('click', function() {
            SearchTrigger.toggleClass('is-clicked');
            $('.search-on-header-field').fadeToggle(400);
        });
    }

    // Handle Search Push
    var handleSearchPush = function() {
        var SearchPushTrigger = $('.search-push-btn');
        SearchPushTrigger.on('click', function() {
            SearchPushTrigger.toggleClass('is-clicked');    
            $('.search-push-open').slideToggle(400);
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 1) $('.search-push-open').slideUp(); {
                SearchPushTrigger.removeClass('is-clicked');    
            };
        });
    }

    return {
        init: function() {
            handleBootstrapComponents(); // initial setup for bootstrap components
            handleNavbarToggle(); // initial setup for navbar toggle
            handleSidebarMenu(); // initial setup for sidebar menu
            handleServicesV7(); // initial setup for services v7 collapse
            handleWorkV1(); // initial setup for work v1
            handleTopbarTDropdown(); // initial setup for topbar transparent dropdown
            handleTopbarTShoppingDropdown(); // initial setup for topbar transparent shopping dropdown
            handleTopbarEDropdown(); // initial setup for topbar e-commerce dropdown
            handleTopbarEShoppingDropdown(); // initial setup for topbar e-commerce shopping dropdown
            handleLanguageBarDropdown(); // initial setup for language dropdown
            handleLanguagePush(); // initial setup for language piush
            handleTeamV7(); // initial setup for team v7
            handleFooterToggleExpand(); // initial setup for footer toggle expand
            handleScrollToSection(); // initial setup for scroll to section
            handleEqualIBannerBg(); // initial setup for equal height interactive banner
            handleFullheight(); // initial setup for fullheight
            handleVerticalCenterAligned(); // initial setup for vertical center aligned
            handleToggleCollapseBox(); // initial setup for toggle collapse box
            handleHeaderFullscreenOverlay(); // initial setup for header fullscreen navigation overlay
            handleSearch(); // initial setup for search
            handleSearchClassic(); // initial setup for search classic
            handleSearchFullscreen(); // initial setup for search fullscreen
            handleSearchOnHeader(); // initial setup for search on header
            handleSearchPush(); // initial setup for search push
        }
    }
}();

$(document).ready(function() {
    App.init();
});
$( "#client-more" ).click(function() {
    $(" #client-more").slideUp();
    $( ".hidden-clients" ).fadeIn();
});
$("#my-first-button").click(function() {
    $("#my-first-year-modal").removeClass('article-modal');
});
$("#my-first-button").animatedModal({
    modalTarget:'my-first-year-modal',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
    color:'#fff'
});
$("#client-spotlight-button").click(function() {
    $("#client-spotlight-modal").removeClass('article-modal');
});
$("#client-spotlight-button").animatedModal({
    modalTarget:'client-spotlight-modal',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
    color:'#fff'
});
$("#brownbags-modal-button").click(function() {
    $("#brownbags-modal").removeClass('article-modal');
});
$("#brownbags-modal-button").animatedModal({
    modalTarget:'brownbags-modal',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
    color:'#fff'
});
$("#symposium-modal-button").click(function() {
    $("#symposium-modal").removeClass('article-modal');
});
$("#symposium-modal-button").animatedModal({
    modalTarget:'symposium-modal',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
    color:'#fff'
});
// Lazy loading
$(document).ready(function() {
    $("img.lazy").unveil(1000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        }); 
    });
    $("img.lazy-no-transition").unveil(1000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        }); 
    });
});
// loading finished
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 6000);
 
});
// social-sharing
var hostSite = "2016.sourcenonprofitconsulting.org";
$("#share-client-spotlight").jsSocials({
    url: "http://" + hostSite + "/client-spotlight",
    text: "SOURCE Client Spotlight - Pacific Lifeline",
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"],
    showCount: false
    
});
$("#share-symposium").jsSocials({
    url: "http://" + hostSite + "/symposium",
    text: "Review of Our Second SOURCE Symposium",
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"],
    showCount: false
});
$("#share-brownbags").jsSocials({
    url: "http://" + hostSite + "/brownbags",
    text: "Relaunching Nonprofit Brownbags",
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"],
    showCount: false
});
$("#share-developing-students").jsSocials({
    url: "http://" + hostSite + "/developing-our-students",
    text: "SOURCE Developing Our Students",
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"],
    showCount: false
});
// Process animation
var countOptions = {
useEasing : true, 
useGrouping : true, 
separator : ',', 
decimal : '.', 
prefix : '', 
suffix : '' 
};
// financials doughnut
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}
var labels = [];
var financials = [];
var bgColor = [];
var bgHover = [];
var counters = [];


    labels[0] = "Client Services ";
    financials[0] = 34125;
    bgColor[0] = "#4e8fa9";
    bgHover[0] = "#bff2ff";
    counters[0] = new CountUp("Client Services", 0, 34125, 0, 2, countOptions);
    

    labels[1] = "Student Development ";
    financials[1] = 2140;
    bgColor[1] = "#315a69";
    bgHover[1] = "#bff2ff";
    counters[1] = new CountUp("Student Development", 0, 2140, 0, 2, countOptions);
    

    labels[2] = "Culture ";
    financials[2] = 1680;
    bgColor[2] = "#2180ba";
    bgHover[2] = "#bff2ff";
    counters[2] = new CountUp("Culture", 0, 1680, 0, 2, countOptions);
    

    labels[3] = "Internal Projects ";
    financials[3] = 1599;
    bgColor[3] = "#54c0e9";
    bgHover[3] = "#bff2ff";
    counters[3] = new CountUp("Internal Projects", 0, 1599, 0, 2, countOptions);
    

var data = {
    labels: labels,
    datasets:[
        {
            data: financials,
            backgroundColor: bgColor,
            hoverBackgroundColor: bgHover,
        }]
};
function makeFinChart() {
    var ctx = document.getElementById('financials').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            tooltipFontSize: 20,
            tooltips: 
            {
              callbacks: {
                  label: function(tooltipItem, data, totalD) {
                      var label = data.labels[tooltipItem.index];
                      var value = data.datasets[0].data[tooltipItem.index];
                      var totalD = 0;
                      $.each(financials,function() {
                          totalD += this;
                      });
                      var percentage = Math.round(value / totalD * 100);
                      return label + ' - ' + percentage + '%';
                  }
              }
          },
        }
    });
}
var inView = false;
var inViewC = false;
$(window).scroll(function () {
    if (isScrolledIntoView('#financials')) {
        if (inView) {
            return;
        }
        inView = true;
        makeFinChart();
    }
    if (isScrolledIntoView('#fundraising')) {
        if(inViewC) {
            return;
        }
        inViewC = true;
        for (i=0; i< counters.length; i++) {
            counters[i].start();
        }
    }
});
 // scroll
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"][data-scroll^="nav"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-nav a[href^="#"][data-scroll^="nav"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}