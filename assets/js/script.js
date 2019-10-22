$(document).ready(function() {
$(function(){
  $('.images__image').click(function(){
      $('.satura').not(this).removeClass('satura');
      $(this).toggleClass('satura');
      

		});
	});
});