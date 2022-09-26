$('a').click(function(){
  if($(this).find('img').hasClass('right-arrow')){
    $(this).find('img').removeClass('right-arrow').addClass('down-arrow');
  } else {
    $(this).find('img').removeClass('down-arrow').addClass('right-arrow');
  }
});