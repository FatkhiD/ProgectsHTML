window.addEventListener('DOMContentLoaded', function(){
    this.document.querySelectorAll('.steps__link').forEach(function(steps){
        steps.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.block__target-block').forEach(function(block){
                block.classList.remove('block__target-block-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('block__target-block-active')
        })
    })
    

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
    $( function() {
        $( "#accordion" ).accordion();
    } );
    $('#accordion').accordion({
        active: true
    });

    this.document.querySelector('.header__burger').addEventListener('click', function(){
        document.querySelector('.burger__menu').classList.add('is-active')
    })

    this.document.querySelector('.burger__close-icon').addEventListener('click', function(){
        document.querySelector('.burger__menu').classList.remove('is-active')
    })

})