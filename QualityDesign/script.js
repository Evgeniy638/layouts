(() => {
     //кнопки для фильтрации портфолио

     let togglesButtons = document.querySelectorAll('.toggles button')

     togglesButtons.forEach((button) => {
          button.addEventListener("click", ((id) => () => {
               let posts = document.querySelectorAll('.post')

               posts.forEach((post) => {
                    if (!post.classList.contains(id)){
                         post.style.display = "none"
                    }
               })

               let currents = document.querySelectorAll(`.post.${id}`)

               currents.forEach((current) => {
                    current.style.display = "block"
               })

          })(button.id))
     })

     let showall = document.getElementById('showall')

     showall.addEventListener('click', () => {
          document.querySelectorAll('.post').forEach((post) => {
               post.style.display = "block"
          })
     })
})()

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
