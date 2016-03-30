
// back to top button - docs
$(function () {
  
  $('#contact_form').submit(function(event){
    
    event.preventDefault();
    
    $('.se-pre-con').show();
    
    var email = $('#email').val();
    
    var name = $('#name').val();
    
    var comment = $('#comment').val();
    
    if(email && name && comment){
    
      $.ajax({
        
        url: "https://pick6page-contact.herokuapp.com",
        
        type: "POST",
        
        data: 'Name: ' + name +
        
        ' Email: ' + email + 
        
        ' Comment: ' + comment,
        
        success: function(data){
          
           $('.se-pre-con').hide();
          
          $(this).closest('form').find("input[type=text], textarea, input[type=email]").val(null);
          
          $("#success_message").show().delay(1000).fadeOut(1000)
          
        },
        
        error: function(){
          
           $('.se-pre-con').hide();
                    
          $('#posting_error').show().delay(5000).fadeOut(1000)
          
        }
                
      })
    
    } else {
      
      $('.se-pre-con').hide();
      
      $("#blank_error").show().delay(5000).fadeOut(1000)
      
    }
    
  })

$('#tweeter_handle').submit(function(event){
  
  event.preventDefault();
  
  $('.se-pre-con').show();
    
  var handle = $('#handle').val();
  
  if(handle){
    
    $.ajax({
        
        url: "https://pick6page-contact.herokuapp.com",
        
        type: "POST",
        
        data: 'Handle: ' + handle,
        
        success: function(data){
          
           $('.se-pre-con').hide();
          
          $(this).closest('form').find("input[type=text]").val(null);
          
          document.getElementById("tweeter_handle").reset();
          
          alert("Thank you for being a supporter of SQWAD!  We will reach out to you shortly.")
          
        },
        
        error: function(){
          
           alert("Oh no something went wrong... please reenter your handle and try again!")
          
        }
                
      })
    
  } else {
    
    alert("Handle can't be left blank!")
    
  }
  
})

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function findListStyles(list) {
    $('.hideIcons').hide();
    switch(list){
      case "startuppdx":
       document.body.style.backgroundImage = "url('/images/pdxsportsbg.png')"
       document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it and you are a catalyst for the Portland Startup Community.  We would like to invite you to be an influencer on Portlands next big sports platform.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
       document.getElementById("two-left-line").innerHTML = "Rip City Startup<br>Specialist"
        break;
      case "pitchfestnw":
        document.body.style.backgroundImage = "url('/images/pdxsportsbg.png')"
        document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a catalyst in the NW Tech Community.  We would like to invite you to be an influencer on Portlands next big sports platform.<br><br>Give us a shout on Twitter to confirm you've got our back and we will shoot you updates on our product launch"
        document.getElementById("two-left-line").innerHTML = "NW Tech<br>All-Star"
        break;
      case "sportspdx":
        document.body.style.backgroundImage = "url('/images/pdxsportsbg.png')"
        document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a driver in the Portland Sports industry.  We would like to invite you to be an influencer on Portlands next big sports platform.<br><br>Give us a shout on Twitter to confirm you've got our back and we will shoot you updates on our product launch"
        document.getElementById("two-left-line").innerHTML = "Rip City's<br>Sports Pro"
        break;
      default:
        document.getElementById("influencerCopy").innerHTML = "SQWAD is a real-time fantasy platform that allows fans to challenge pro-athletes and friends.<br>Give us a shout on Twitter to confirm you've got our back and we will shoot you updates on our product launch"
        document.getElementById("two-left-line").innerHTML = "THE BEST<br>PLAY LIVE"
    }
  }
  
var twitterFavicon = document.createElement('img');
// twitterFavicon.src = '//twitter.com/login?redirect_after_login=%2Ffavicon.ico';
twitterFavicon.src = "twitter:///post?message=@SqwadFan %23sqwadInfluencer"
twitterFavicon.addEventListener('load', function () {
    document.getElementById('status').innerHTML = '';
    document.getElementById('tweet').href = "http://twitter.com/home?status=@SqwadFan %23SqwadInfluencer"
    document.getElementById('tweeter_handle').style.display = "none"
});
twitterFavicon.addEventListener('error', function () {
    document.getElementById('status').innerHTML = 'Twitter Handle';
    document.getElementById('tweet').style.display = "none"
    document.getElementById('tweeter_handle').style.display = "block"
});
  
  var query_string = {};
  var query = window.location.search.substring(1);
  if(query){
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == "list"){
        findListStyles(pair[1])
      }
      
         // If first entry with this name
       if (typeof query_string[pair[0]] === "undefined") {
         query_string[pair[0]] = decodeURIComponent(pair[1]);
    //       // If second entry with this name
       } else if (typeof query_string[pair[0]] === "string") {
         var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
         query_string[pair[0]] = arr;
    //       // If third or later entry with this name
       } else {
         query_string[pair[0]].push(decodeURIComponent(pair[1]));
       }
     } 
     document.getElementById("nameInfluencer").innerHTML = query_string.name
     document.getElementById("influencerImage").src = query_string.image
   }
   
  

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
