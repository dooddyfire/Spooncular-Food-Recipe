$('.container').hide();
$('.container').fadeIn(2000);

  //https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&callback=?
  //between | opensearch&<...>&callback=? | insert the keyword of search.
$(function(){
  
$('#search-btn').on('click',function(){
  var searchKey =  $('#search').val();
  
    $.ajax({
      type: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch?query='+searchKey+'&maxFat=25&number=2&apiKey=7908ed84392a4b3b8b3bc6da2ebc6715',
      async: false,
      dataType: 'json',
      success: function(data){
        console.log(data['results'][0]['title']);
        console.log(data['results'][0]['image']);

        $('#result').html('');
        
        for(var i=0; i<10; i++){
          $('#result').append('<a href='+ data['results'][i]['title']+' target= "blank">'+'<li>'+'<img src="'+ data['results'][i]['image'] +'">'+'<br/>'+'<h5>'+ data['results'][i]['title'] +'</h5>'+'</li>'+'</a>')
        }
      },
      error: function(err){
        alert('Error');
      },
    })
  });
  $('#search').bind('keypress',function(e){
    if(e.keyCode == 13){
      $('#search-btn').click();
    }
  })
  });