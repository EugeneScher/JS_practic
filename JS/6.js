window.addEventListener('DOMContentLoaded', function() {
     var form = document.querySelector('[name="Tecт"]');
     form.addEventListener('click', function(event) {
         var type = event.target.type;
         type == "button" && (form.Im_stud.value = event.target.value)
     });
 });
