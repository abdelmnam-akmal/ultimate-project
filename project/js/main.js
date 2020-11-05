$(function () {
    'use strict';
    $('.toggle-sidebar').on('click', function () {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

    // Toggle SubMenu
    $('.toggle-submenu').on('click', function () {
        $(this).find('.fa-angle-right').toggleClass('down');
        $(this).next('.child-links').slideToggle(300);
    });

    // open \ close fullscreen
    $('.toggle-fullscreen').on('click', function () {
        $(this).toggleClass('full-screen');
        if ($(this).hasClass('full-screen')) { // page is Now Fullscreen 
            openFullscreen();
        } else { // page Now Is not fullscreen 
            closeFullscreen();
        }
    });

    // Toggle settings
    $('.toggle-settings').on('click', function () {
        $(this).find('i').toggleClass('fa-spin').end().parent().toggleClass('hide-setting');
    })

    // Switch Colors Themes
    var themeClasses = [];
    $('.color-options li').each(function () {
        themeClasses.push($(this).data('theme'));
        console.log(themeClasses);
    });
    $('.color-options li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass(themeClasses.join(" ")).addClass($(this).data('theme'));
    })
});

// function make the page fullscreen
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullsceen) {
        elem.webkitRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullsceen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}