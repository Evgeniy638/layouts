$(function(){
     $('.toggles button').click(function(){
          let id = this.id
          let currents = $('.post.' + id)

          $('.post').not(currents).hide(500)
          currents.show(500)
     })

     $('#showall').click(()=>{
          $('.post').show(500)
     })
})

$(document).ready(function(){
     $(".owl-carousel").owlCarousel({
          items: 8
     });
});

if ($(window).width() < 420){
     $(".owl-carousel").owlCarousel({
          items: 3
     });
}
