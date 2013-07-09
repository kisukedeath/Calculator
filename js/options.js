$(document).ready(function(){

    //global
    traffic = $('#traffic');
    fb = $('#fb');
    links = $('#links');
    media = $('#media');

    //results
    sliderval = 0;
    trafficresult = 0;
    fbresult = 0;
    linksresult = 0;
    mediaresult = 0;
    total = 10;

    //each slider
    $( "#slider0" ).slider({
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
        slide: function( event, ui ) {
            $( "#amount0" ).val( "$" + ui.value );
        },
        change: function( event, ui){
            sliderval = $( "#slider0" ).slider( "value" );
            trafficresult = toint(traffic.val() * sliderval);
            $('#trafficresult').val( "$" + trafficresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
            $( "#amount0" ).val( "$" + $( "#slider0" ).slider( "value" ) + " per visitor");
        }
    });
    $( "#amount0" ).val( "$" + $( "#slider0" ).slider( "value" ) + " per visitor");
 
    traffic.keyup(function(){
        sliderval = $( "#slider0" ).slider( "value" );
        trafficresult = toint(traffic.val() * sliderval);
        $('#trafficresult').val( "$" + trafficresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
    });

    $( "#slider1" ).slider({
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
        slide: function( event, ui ) {
            $( "#amount1" ).val( "$" + ui.value );
        },
        change: function( event, ui){
            sliderval = $( "#slider1" ).slider( "value" );
            fbresult = toint(fb.val() * sliderval);
            $('#fbresult').val( "$" + fbresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
            $( "#amount1" ).val( "$" + $( "#slider1" ).slider( "value" ) + " per share");
        }
    });
    $( "#amount1" ).val( "$" + $( "#slider1" ).slider( "value" ) + " per share");
 
    fb.keyup(function(){
        sliderval = $( "#slider1" ).slider( "value" );
        fbresult = toint(fb.val() * sliderval);
        $('#fbresult').val( "$" + fbresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
    }); 

    $( "#slider2" ).slider({
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
        slide: function( event, ui ) {
            $( "#amount2" ).val( "$" + ui.value );
        },
        change: function( event, ui){
            sliderval = $( "#slider2" ).slider( "value" );
            linksresult = toint(links.val() * sliderval);
            $('#linksresult').val( "$" + linksresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
            $( "#amount2" ).val( "$" + $( "#slider2" ).slider( "value" ) + " per link");
        }
    });
    $( "#amount2" ).val( "$" + $( "#slider2" ).slider( "value" ) + " per link");
 
    links.keyup(function(){
        sliderval = $( "#slider2" ).slider( "value" );
        linksresult = toint(links.val() * sliderval);
        $('#linksresult').val( "$" + linksresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
    });

    $( "#slider3" ).slider({
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
        slide: function( event, ui ) {
            $( "#amount3" ).val( "$" + ui.value );
        },
        change: function( event, ui){
            sliderval = $( "#slider3" ).slider( "value" );
            mediaresult = toint(media.val() * sliderval);
            $('#mediaresult').val( "$" + mediaresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
            $( "#amount3" ).val( "$" + $( "#slider3" ).slider( "value" ) + " per placement");
        }
    });
    $( "#amount3" ).val( "$" + $( "#slider3" ).slider( "value" ) + " per placement");
 
    media.keyup(function(){
        sliderval = $( "#slider3" ).slider( "value" );
        mediaresult = toint(media.val() * sliderval);
        $('#mediaresult').val( "$" + mediaresult);
            total = toint(fbresult + trafficresult + linksresult + mediaresult);
            $('.total').html(total);
    });
    

    jQuery.fn.drop = function (margin_top_fill) {
        var drop = this;
        drop.stop().animate({
            'margin-top' : 48 + 85 - 125 + margin_top_fill + 'px'
        },500, function() {
            drop.hide().css('margin-top','0px').fadeIn('fast');
        });
        setTimeout(function(){
            drop.parent().find('.fill').stop().animate({
                'margin-top' : margin_top_fill + 'px'
            });
        },300);
        console.log(margin_top_fill);
    };

    var last_value_iMedia = 0;
    var last_value_iLinks = 0;
    var last_value_iTwitts = 0;
    var last_value_iTraffic = 0;
    var first_time = 0;

    jQuery.fn.anim_progressbar = function (aOptions) {
        // def options
        var aDefOpts = {
            interval: 100,
            type : ''
        };
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var Pb = this;

        // each progress bar
        return this.each(
            function() {
                var i = 5;
                // looping process
                var vInterval = setInterval(
                    function(){
                        i-=1000000;

                        iTraffic = tointdecimal((trafficresult/total)*100),
                        iTwitts = tointdecimal((fbresult/total)*100),
                        iLinks = tointdecimal((linksresult/total)*100),
                        iMedia = tointdecimal((mediaresult/total)*100),
                        iPerc = 0;
                        var last_value = $(Pb).find('.bottle_counter').html();
                        
                        // display current positions and progress
                        if(aOpts.type == 'iSec'){
                            $(Pb).find('.bottle_counter').html(iMedia + "%");
                            if(last_value != last_value_iMedia)
                                $(Pb).find('.drop').drop(500 - iMedia * 3.75);
                            last_value_iMedia = last_value;
                        }
                        if(aOpts.type == 'iMin'){
                            $(Pb).find('.bottle_counter').html(iLinks + "%");
                            if(last_value != last_value_iLinks)
                                $(Pb).find('.drop').drop(500 - iLinks * 3.75);
                            last_value_iLinks = last_value;
                        }
                        if(aOpts.type == 'iHours'){
                            $(Pb).find('.bottle_counter').html(iTwitts + "%");
                            if(last_value != last_value_iTwitts)
                                $(Pb).find('.drop').drop(500 - iTwitts * 3.75);
                            last_value_iTwitts = last_value;
                        }
                        if(aOpts.type == 'iDays'){
                            $(Pb).find('.bottle_counter').html(iTraffic + "%");
                            if(last_value != last_value_iTraffic)
                                $(Pb).find('.drop').drop(500 - iTraffic * 3.75);
                            last_value_iTraffic = last_value;
                        }

                    } , aOpts.interval
                );
            }
        );
    };

    $('#days').anim_progressbar({
        type : 'iDays'
    });
    $('#hours').anim_progressbar({
        type : 'iHours'
    });
    $('#minutes').anim_progressbar({
        type : 'iMin'
    });
    $('#seconds').anim_progressbar({
        type : 'iSec'
    });
});

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function toint(numero) {
var original = parseFloat(numero);
var result = Math.ceil(original);
return result;
}

function tointdecimal(numero) {
var original = parseFloat(numero);
var result = Math.round(original * 100) / 100;
return result;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}