
  


$('#button1').ready(function(){
  $('button').click(function(){
      $('.alert').show()
  })
});

$('#button2').ready(function(){
  $('button').click(function(){
      $('.alert').show()
  }) 
});




$(document).ready(function() {
	$('.mdb-select').materialSelect();
  });
  

  $('.datepicker').pickadate({
    min:0,
    max: true,
    clear: 'Clear selection',
    close: 'Cancel',
    today: '',
    })




    /***** file upload***/

    $('.file-upload').file_upload();

    

    (function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }
      form.classList.add('was-validated');
      }, false);
      });
      }, false);
      })();




    