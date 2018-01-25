/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('div').css('backround-color' , "purple");
        $('div').css('color' , 'black');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('#image-billy').attr('src', 'images/billy/billy-1.jpg');

        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    
    .fail(function() { console.log('getJSON on discography failed!'); });
});


