$(document).ready(function() {
    $('body').on('click','.sandwich', function() {
        $('.sidebar-content').animate({width: 'toggle'});
        $('.overlay').fadeIn(300);
    });
    
    $('body').on('click','.overlay, .hideSidebar', function() {
        $('.sidebar-content').animate({width: 'toggle'});
        $('.overlay').fadeOut(300);
    });
});