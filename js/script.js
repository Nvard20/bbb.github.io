function showTime(){

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();



h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

let time = h + ":" + m + ":" + s + " " ;

document.getElementById("time-mobile").innerText = time;

document.getElementById("time").innerText = time;

setTimeout(showTime, 1000);
}
showTime();

let date = new Date();
let y =  date.getFullYear();
let mn = date.getMonth() +1;
let d = date.getDate();
let all ;
if( mn < 10 && d < 10){
     all =   y + "/" + "0" + mn + "/" + "0" + d + " " ;
}else{
    all =   y + "/"  + mn + "/" + d + " " ;

}

document.getElementById("year").innerHTML = all;

  


if ($('.play-games').length > 0) {

    var containerEl = document.querySelector('.play-games');
        var cont = document.querySelector('.mix-game');
 mixitup(containerEl);
 mixitup(cont);


 }
//GAmes Box
 $('.gm-cat li ').on('click', function () {

  
     $('.gm-cat li ').removeClass('active-li ') ;
    $(this).addClass('active-li')
 
   
});

$('.bet-but ').on('click', function () {

  
    $('.bet-but ').removeClass('bet-but-active') ;
   $(this).addClass('bet-but-active')

  
});

$('.rotate').on('click', function () {

  
  $('.rotate').removeClass('active-mix ') ;
 $(this).addClass('active-mix')


});


var $btns = $('.gm-cat li').click(function() {
    if (this.id == 'all') {
      $('#parent > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#parent > div').not($el).hide();
    }
    $btns.removeClass('active-li');
    $(this).addClass('active-li');
  })



//modal
$(document).ready(function() {
  /*===================================
  =            Modalbox.js            =
  ===================================*/

  // vars needed
  var     modalBox = $('div.inner-modal'),
          modalOverlay = $('div.modal-overlay'),
          modalContent = $('div.modal-content');


  // toggle modal
  function toggleModal() {
  $('div.modal-content').addClass('no-close');
      modalOverlay.show();
      setTimeout(function() {
          modalOverlay.addClass('disp');
          setTimeout(function() {
              modalBox.addClass('disp');
          }, 100);
      }, 100);
  }

  // hide modal
  function removeModal(e) {
      // if clicked inside modal box, ignore it
      if ($(e.target).closest('.no-close')[0]) {
          return false;
      } else {
          modalOverlay.removeClass('disp');
          modalBox.removeClass('disp');
          setTimeout(function() {
              modalOverlay.hide();
              modalContent.empty();
          }, 300);
      }
  }

  // bind button to toggle modal
  $(document).on('click', '.modal-btn', function(e) {
      e.preventDefault();
      toggleModal();
      var modalSlug = $(this).attr('data-modalslug');
      var contentToAppend = $('[data-type="modalcontent"][data-modalslug="'+modalSlug+'"]').html();
      modalContent.append(contentToAppend);
  });


  // bind overlay to hide modal
  modalOverlay.on('click', function(e) {
      removeModal(e);
  });

 // hide modal on esc keyup
  $(document).keyup(function(e){
      if(e.which === 27) {
        removeModal(e);
      }
  });
});


$(document).ready(function() {
    /*===================================
    =            Modalbox.js            =
    ===================================*/
  
    // vars needed
    var     modalBox = $('div.inner'),
            modalOverlay = $('div.modal-ov'),
            modalContent = $('div.modal-cont');
  
  
    // toggle modal
    function toggleModal() {
    $('div.modal-cont').addClass('no-close');
        modalOverlay.show();
        setTimeout(function() {
            modalOverlay.addClass('disp');
            setTimeout(function() {
                modalBox.addClass('disp');
            }, 100);
        }, 100);
    }
  
    // hide modal
    function removeModal(e) {
        // if clicked inside modal box, ignore it
        if ($(e.target).closest('.no-close')[0]) {
            return false;
        } else {
            modalOverlay.removeClass('disp');
            modalBox.removeClass('disp');
            setTimeout(function() {
                modalOverlay.hide();
                modalContent.empty();
            }, 300);
        }
    }
  
    // bind button to toggle modal
    $(document).on('click', '.modal-reg', function(e) {
        e.preventDefault();
        toggleModal();
        var modalSlug = $(this).attr('data-modalslug');
        var contentToAppend = $('[data-type="modalcont"][data-modalslug="'+modalSlug+'"]').html();
        modalContent.append(contentToAppend);
    });
  
  
    // bind overlay to hide modal
    modalOverlay.on('click', function(e) {
        removeModal(e);
    });
  
   // hide modal on esc keyup
    $(document).keyup(function(e){
        if(e.which === 27) {
          removeModal(e);
        }
    });
  });

  //Sidebar
  $('.burg').on('click', function () {

   
        $(".burg").hide(500);
      
     
        $(".x").show(500);
        $(".sidebar-content").animate({
            width: "toggle"
          },500);
        
        $(".home").attr("src", "img/home-menu-inactive.png");
      
});
$('.x').on('click', function () {

   
    $(".x").hide(500);
    $(".sidebar-content").animate({
        width: "toggle"
      },400);

    $(".home").attr("src", "img/home-menu-active.png");

    $(".burg").show(500);

 
});


$(".li-togle").click(function(){
    
    var target = $(this).parent().children(".slideContent");
  
    $(target).slideToggle();
    $(".oval-img").toggleClass('rotate-ov');
  
  });




  $('.bet').on('click', function () {

   
    $(".bet").hide(500);
  
    $(".back-menu").show(500);
    $(".bet-content").animate({
        width: "toggle"
      },500);

    $(".home").attr("src", "img/home-menu-inactive.png");
    $(".my-bets").text("Back");

  
});
$('.back-menu').on('click', function () {


$(".back-menu").hide(500);
$(".home").attr("src", "img/home-menu-active.png");
$(".bet-content").animate({
    width: "toggle"
  },500);


$(".bet").show(500);
$(".my-bets").text("My-Bets");


});

   

 $(".first-toglle").click(function(){
    $(".sec-childe").toggle(100);
});

$(".st-1").click(function(){
    $(".yc-cont").slideDown(200);
    $(".st-1").hide();
    $(".st").show();
    $(".st").css({"display":"flex"});

});
$(".st").click(function(){
    $(".yc-cont").slideUp(200);
    $(".st").hide();
    $(".st-1").show();
});

$(".edit-st").click(function(){
    $(".bet-but").hide(200);
    $(".no-but").show(200); 
     $(".save").show(200);
     $(".save").css({"display":"flex"});

     $(".edit-st").hide(200);

});
$(".save").click(function(){
    $(".bet-but").show(200);
    $(".no-but").hide(200); 
     $(".save").hide(200);
     $(".edit-st").show(200);

});

//Sport filter
$('.match').on('click', function () {

  
    $('.match ').removeClass('active-match') ;
   $(this).addClass('active-match')

  
});
$('.gm-name button').on('click', function () {

  
    $('.gm-name button ').removeClass('gmActive') ;
   $(this).addClass('gmActive')

  
});
$(".crick").click(function(){
    $(".Cricket").show(200);
    $(".all-gmplay").hide(200); 
    $(".Football").hide(200);
    $(".Spc-market").hide(200);


});
$(".infinity").click(function(){
   
    $(".all-gmplay").show(200); 
    $(".Cricket").hide(200);
    $(".Spc-market").hide(200);

});
$(".foot-ball").click(function(){
    $(".Cricket").hide(200);

    $(".all-gmplay").hide(200); 
    $(".Football").show(200);
    $(".Spc-market").hide(200);

})
$(".ten_nis").click(function(){
    $(".Cricket").hide(200);

    $(".all-gmplay").hide(200); 
    $(".Football").hide(200);
    $(".Tennis").show(200);
    $(".Spc-market").hide(200);
})
$('.spec').click(function(){

    $(".Cricket").hide(200);

    $(".all-gmplay").hide(200); 
    $(".Football").hide(200);
    $(".Tennis").hide(200);
    $(".Spc-market").show(200);

})
//add value
var  count = 140
$("#plus").click(function(){ 
    count= count + 10;
    $(".cost").val(count)
});

$("#minus").click(function(){ 
count-=10;
$(".cost").val(count)
});
///next add
$(".ad-val").click(function(){ 
var val  = $(this).val();
$('.allval').val(val);
})
///
$(".active-fct").click(function(){ 
  var fact =   $(this).closest('.gmContainer').children('.fact-content').toggle();
  var x = window.matchMedia("(min-width: 1000px)");
  if (x.matches) {

    $( ".inner-bet" ).append( $( fact ) );

  } else{
      fact;
  }


})

$(".close").click(function(){
    $(this).closest('.fact-content ').remove()
})