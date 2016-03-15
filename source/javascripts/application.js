
// back to top button - docs
$(function () {
  
  $('#contact_form').submit(function(event){
    
    event.preventDefault();
    
    var email = $('#email').val();
    
    var name = $('#name').val();
    
    var comment = $('#comment').val();
    
    if(email && name && comment){
    
      $.ajax({
        
        url: "http://sqwadpage-contact.herokuapp.com",
        
        type: "POST",
        
        data: 'Name: ' + name +
        
        ' Email: ' + email + 
        
        ' Comment: ' + comment,
        
        success: function(data){
          
          alert(data)
          
          $(this).closest('form').find("input[type=text], textarea, input[type=email]").val(null);
          
          $("#success_message").show().delay(1000).fadeOut(1000)
          
        },
        
        error: function(){
                    
          $('#posting_error').show().delay(5000).fadeOut(1000)
          
        }
                
      })
    
    } else {
      
      $("#blank_error").show().delay(5000).fadeOut(1000)
      
    }
    
  })

  // doc nav js
  var $toc    = $('#markdown-toc')
  var $window = $(window)

  if ($toc[0]) {

    maybeActivateDocNavigation()
    $window.on('resize', maybeActivateDocNavigation)

    function maybeActivateDocNavigation () {
      if ($window.width() > 768) {
        activateDocNavigation()
      } else {
        deactivateDocNavigation()
      }
    }

    function deactivateDocNavigation() {
      $window.off('resize.theme.nav')
      $window.off('scroll.theme.nav')
      $toc.css({
        position: '',
        left: '',
        top: ''
      })
    }

    function activateDocNavigation() {

      var cache = {}

      function updateCache() {
        cache.containerTop   = $('.docs-content').offset().top
        cache.containerRight = $('.docs-content').offset().left + $('.docs-content').width() + 40
        measure()
      }

      function measure() {
        var scrollTop = $window.scrollTop()
        var distance =  Math.max(scrollTop - cache.containerTop, 0)

        if (!distance) {
          $($toc.find('li')[1]).addClass('active')
          return $toc.css({
            position: '',
            left: '',
            top: ''
          })
        }

        $toc.css({
          position: 'fixed',
          left: cache.containerRight,
          top: 0
        })
      }

      updateCache()

      $(window)
        .on('resize.theme.nav', updateCache)
        .on('scroll.theme.nav', measure)

      $('body').scrollspy({
        target: '#markdown-toc',
        selector: '#markdown-toc li > a'
      })

      setTimeout(function () {
        $('body').scrollspy('refresh')
      }, 1000)
    }
  }
})
