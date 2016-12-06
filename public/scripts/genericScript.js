console.log('genero sourced');

var awardArray = [];

$(document).ready(function() {
    console.log('JQ');

    // test get function
    var getData = function() {
        console.log('in getData');
        $.ajax({
            type: 'GET',
            url: '/testGet',
            success: function(response) {
                console.log('back from get call:', response);
                for (var i = 0; i < response.length; i++) {
                    var outputText = '';
                    outputText += '<p>' + response[i].award + '</p>';
                }
                $('#container').html(outputText);
            },
            error: function() {
                console.log('error with ajax call...');
            }
        });

    }; // end getData

    // test get function
    var postData = function() {
        console.log('in postData');
        // assemble object to send
        var newEvent = {
            eventName: $('#eventName').val(),
            athleteName: $('#athleteName').val(),
            award: $('#award').val()
        };
        awardArray.push(newEvent);
        $.ajax({
            type: 'POST',
            url: '/testPost',
            data: newEvent,
            success: function(response) {
                console.log('back from post call:', response);
            },
            error: function() {
                console.log('error with ajax call...');
            }
        });
    }; // end getData

    /// - buttons to test - ///
    $('#testGetButton').on('click', function() {
        console.log('in testGetButton on click');
        getData();


    }); // end testGetButton
    $('#testPostButton').on('click', function() {
        console.log('in testPostButton on click');
        postData();
    }); // end testGetButton

}); //end doc ready
