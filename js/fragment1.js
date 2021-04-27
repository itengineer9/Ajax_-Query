

$(function(){
	
    $.get('extern/fragment.html', function (data) {
        $('#content2').append(data);
    });
    
    
});//ende doc Ready