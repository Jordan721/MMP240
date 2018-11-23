 $(document).ready(function () {
     $("#color").change(function () {
         var clr = $(this).val();
         $("body").css("background-color", clr);
     });
 });
