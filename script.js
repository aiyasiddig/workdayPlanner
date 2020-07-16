$(function(){
    $(document).on('click','.edit_btn' , function(){
        let editable = $(this).prev('.edit_cont').attr('contenteditable');
        if(editable){
            $(this).text('edit');
            $(this).prev('.edit_cont').removeAttr('contenteditable');
            $(this).prev('.edit_cont').removeClass('edit_cont_border');
            const inputValue = $(this).prev('.edit_cont').text();
            const test = $(this).prev('.edit_cont');
            console.log(test);
            localStorage.setItem("plannerInput", inputValue)
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
  var NowMoment = moment().format("ll");
  
  
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
})();

const colorcode = document.querySelector(".colorcode");

var date = new Date();
    var currentHour = date.getHours();;
    
    $('.colorcode').each(function(){
        var val = parseInt($(this).prop('id'));
        console.log(currentHour);

        if(val < currentHour){
            $(this).css('background-color', 'rgb(255, 214, 214)' );
        }else if(val === currentHour){
            $(this).css('background-color','rgb(176, 253, 152)');
        }else{
            $(this).css('background-color','rgb(210, 213, 255)');
        }
    });