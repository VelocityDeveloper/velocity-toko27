jQuery(function($) {
    $( ".tombols" ).click(function() {
        $("#searchform2").toggle();
        $(".tombols").toggleClass( "collapsed" );
    });
});
