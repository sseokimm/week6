$(document).ready(function() {
    $('#box').hide();

    
    $('#toggle-box-btn').click(function() {
        $('#box').toggle();
    });

    $('#box').click(function() {
       
        $(this).animate({
            width: '+=50px',
            height: '+=50px'
        }, 500);
    });

  
    $('#participant-name').click(function() {
        $('#box').css('background-color', 'lightblue'); // 
    });

    
    $('#reset').click(function() {
        location.reload();
    });
});
