
// back to top button - docs
$(function () {
  
  // $("#getdemo").click(function(event){
  //   ("fuck").hide();
  //   event.preventDefault();
  // });
  
  // $("button#getdemo").click(function(event){
  //   $("#hide").hide();
  //   $("#hide2").hide();
  //   $("#hide3").hide();
  //    $("#success").show().delay(1000).fadeOut(1000);
  //    $("#myModal").delay(1000).queue(function(){ $(this).modal('hide').dequeue(); });
  //    event.preventDefault();
  // });
  
  // $("button#demo").click(function(event){
  //   $("#hide").show();
  //   $("#hide2").show();
  //   $("#hide3").show();
  //   $("#success").hide();
  //   event.preventDefault();
  // // });
  // $('.closeBar').click(function(event){
  //   // event.preventDefault();
  //   // $("#sidebar").animate({
  //   //   left: -180,
  //   // });
  //   $('#myModal').modal('show');
  // })

  $('#getdemo').click(function(event){
    event.preventDefault();
      // console.log($('#email').val() != '');
    // $('#email').val() != null
     if(($('#email').val() != '' || $('#name').val() != '')){
      $('#myModal').modal('hide');
      $('.se-pre-con').show();
      var name = $('#name').val();
      var email = $('#email').val();
      var teamName = $('#teamName').val();
      var teamWebsite = $('#teamWebsite').val();
      var phoneNumber = $('#phoneNumber').val();
      $.ajax({
                  url: "http://pick6page-contact.herokuapp.com",
                  type: "POST",
                  data: 'Name: ' + name +
                  ' Email: ' + email +
                  ' Team: ' + teamName +
                  ' Website: ' + teamWebsite +
                  ' Phone: ' + phoneNumber,
                  
                  
                  success: function(data){
                    $('.se-pre-con').hide();
                    $('#success').modal('show').delay(1000).fadeOut(1000);
                    $("#success").delay(0).queue(function(){ $(this).modal('hide').dequeue(); });
                    $('#name').val(null);
                    $('#email').val(null);
                    $('#teamName').val(null);
                    $('#teamWebsite').val(null);
                    $('#phoneNumber').val(null);
                  },
                  
                  error: function(){
                    $('.se-pre-con').hide();
                    $('#error').modal('show');
                  }
              });
    }else{
      $('#enterEmail').modal('show');
    }
  });
  

  
  if ($('.docs-top').length) {
    _backToTopButton()
    $(window).on('scroll', _backToTopButton)
    function _backToTopButton () {
      if ($(window).scrollTop() > $(window).height()) {
        $('.docs-top').fadeIn()
      } else {
        $('.docs-top').fadeOut()
      }
    }
  }
  
  // $("#dirtySanchez").submit(function(event){
  //   alert("Thank you for the submit!")
  // });

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
