$(function(){
    $(document).on('click','.edit_btn' , function(){
        let editable = $(this).prev('.edit_cont').attr('contenteditable');
        if(editable){
            $(this).text('edit');
            $(this).prev('.edit_cont').removeAttr('contenteditable');
            $(this).prev('.edit_cont').removeClass('edit_cont_border');
         }
          else{
            $(this).text('save');
            $(this).prev('.edit_cont').attr('contenteditable','true');
            $(this).prev('.edit_cont').addClass('edit_cont_border');
        }
    })
    });

    /*const colorcode = document.getElementsByClassName("colorcode");


    var currentHour = date.getHours();
    $('.colorcode').each(function(){
        var val = parseInt($(this).prop('id'));
        if(val > currentHour && val < currentHour+6){
            $(this).css('background-color','Blue');
        }else if(val < currentHour && val > currentHour-6){
            $(this).css('background-color','Red');
        }else if(val === currentHour){
            $(this).css('background-color','Green');
        }else{
            $(this).css('background-color','White');
        } 
    }); */

    (function()
{
  var NowMoment = moment();
  
  
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment.format('dddd MMM Mo YYYY');
  
})();


    const colorcode = document.querySelector(".colorcode");

var date = new Date()
    var currentHour = date.getHours();
    $('.colorcode').each(function(){
        var val = parseInt($(this).prop('id'));
        if(val > currentHour && val < currentHour+6){
            $(this).css('background-color','Blue');
        }else if(val < currentHour && val > currentHour-6){
            $(this).css('background-color','Red');
        }else if(val === currentHour){
            $(this).css('background-color','Green');
        }else{
            $(this).css('background-color','White');
        }
    });