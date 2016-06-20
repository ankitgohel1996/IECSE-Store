var currentSlide = 0;
 
$(document).ready(function () {
  
  $('.leftNav').click(function()
  {
    currentSlide -= 1;

    if(currentSlide<0) 
    {
      currentSlide = 3;
    }

    else
    {
      $('.productImage').hide();
      $('.productText').hide();
      $('#SI'+currentSlide).fadeIn();
      $('#ST'+currentSlide).fadeIn();
    }
  });
  
  $('.rightNav').click(function()
  {
    currentSlide += 1;

    if(currentSlide>2)
    {
      currentSlide = -1  ;
    }

    else
    {
      $('.productImage').hide();
      $('.productText').hide();
      $('#SI'+currentSlide).fadeIn();
      $('#ST'+currentSlide).fadeIn();
    }

  });
});