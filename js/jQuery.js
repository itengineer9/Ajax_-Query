

$(function(){
	
//    $('nav a').on('click', function (e) {
//        e.preventDefault();
//        let url = this.href;
//       
//        $('#content').load(url).hide().fadeIn('slow');
//      
//        
//    });
//       
    $('#get').on('click', function () {
        $('#content3').empty();
        $.getScript("js/fragment1.js");
    });
    
    $('#json2').on('click', function () {
        $('#content1').empty();
        $.getScript("js/fragment2.js");
    });
    
    
    $('#ajax').on('click', function () {
        $('#content2').empty();
        $.getScript("js/fragment3.js");
    });

    $('#json1').on('click', function () {
        $.getJSON('extern/newjson.json', function(data){
            let html = '';
            $.each(data, function(index, entry){
                html += `<div><h3> Author: ${entry.author}</h3></div>`;
                html += `<div><h4> Term: ${entry.term}</h4></div>`; 
                html += `<div><h4>Definition:${entry.definition}</h4></div>`;
               
                $.each(entry.quote, function(key, valu){
                     html += `<div><h5>${key} : ${valu}</h5></div>`;
                    });

            });
            
            $('#content3').html(html);
        });
    });
    
    	
});//ende doc Ready