
// back to top button - docs
$(function () {
  
  // jQuery("#left-line").fitText();
  
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
          
          $('#name').val(null);
          
          $('#email').val(null);
          
          $('#comment').val(null);
          
          $("#success_message").show().delay(1000).fadeOut(1000)
          
          $('#success').modal('show').delay(1000).fadeOut(1000);
           
          $("#success").delay(0).queue(function(){ $(this).modal('hide').dequeue(); });
          
          $('#myModal').delay(1200).queue(function(){ $(this).modal('hide').dequeue(); });
          
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

  btn = $('#sendTwitterHandle')
  btn.button('loading')
  
  event.preventDefault();
  
  NProgress.start();
    
  var handle = $('#handle').val();
  

  if(handle && (handle.length > 1)){
    
    $.ajax({
        
        url: "https://pick6page-contact.herokuapp.com",
        
        type: "POST",
        
        data: 'Handle: ' + handle,
        
        success: function(data){
          
          // $('.se-pre-con').hide();
          
          $(this).closest('form').find("input[type=text]").val(null);
          
          document.getElementById("tweeter_handle").reset();

          NProgress.done();
          btn.button('reset')
          
          $('#msg-success').fadeIn();

          setTimeout(function() {
            $('#msg-success').fadeOut('fast');
          }, 10000);
          
        },
        
        error: function(){
          
           alert("Oh no something went wrong... please reenter your handle and try again!")
          
        }
                
      })
    
  } else {

    NProgress.done();

    $('#msg-error').fadeIn();

    setTimeout(function() {
      $('#msg-error').fadeOut('fast');
    }, 2000);

    btn.button('reset')
  }
  
})

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function findListStyles(list) {
    $('.hideIcons').hide();
    switch(list){
      case "startuppdx":
       document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it and you are a catalyst for the Portland Startup Community.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
       document.getElementById("two-left-line").innerHTML = "Rip City Startup<br>Specialist"
        break;
      case "pitchfestnw":
         document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a catalyst in the NW Tech Community.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "NW Tech<br>All-Star"
        break;
      case "sportspdx":
         document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a driver in the Portland sports industry.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "Rip City's<br>Sports Pro"
        break;
      case "sounders":
        document.body.style.backgroundImage = "url('/images/bg_sounders.png')"
        document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Sounder's rich soccer tradition.  We would like to invite you to be an influencer on the NW's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "Seattle's<br>Soccer Elite"
        document.getElementById("phone_image").src = '/images/cascadia-phone.png'
        document.getElementById("small_phone").src = '/images/cascadia-phone.png'
        break;
      case "whitecaps":
        document.body.style.backgroundImage = "url('/images/bg_whitecaps.png')"
        document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Whitecaps's rich soccer tradition.  We would like to invite you to be an influencer on the BC's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "Vancouver's<br>Soccer Elite"
        document.getElementById("phone_image").src = '/images/cascadia-phone.png'
        document.getElementById("small_phone").src = '/images/cascadia-phone.png'
        break;
      case "timbers":
        document.body.style.backgroundImage = "url('/images/bg_timbers.png')"
        document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Timber's rich soccer tradition.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "Portland's<br>Soccer Elite"
        document.getElementById("phone_image").src = '/images/cascadia-phone.png'
        document.getElementById("small_phone").src = '/images/cascadia-phone.png'
        break;
      default:
         document.getElementById("influencerCopy").innerHTML = "SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
        document.getElementById("two-left-line").innerHTML = "THE BEST<br>PLAY LIVE"
    }
  }
  
var twitterFavicon = document.createElement('img');
twitterFavicon.src = '//twitter.com/login?redirect_after_login=%2Ffavicon.ico';
twitterFavicon.addEventListener('load', function () {
    document.getElementById('status').innerHTML = '';
    document.getElementById('tweet').href = "http://twitter.com/home?status=@SqwadFan %23SqwadInfluencer"
    document.getElementById('tweeter_handle').style.display = "none"
    document.getElementById('mobile_twitter').style.display = "none"
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
  if(query_string.headline !== undefined) {
    document.getElementById("two-left-line").innerHTML = query_string.headline
  }
  if(query_string.copy !== undefined) {
    $('#influencerCopy').load("text/" + query_string.copy + ".html")
    console.log("text/" + query_string.copy + ".html")
  }
} else if(window.location.pathname == "influencers.html") {
  window.location = "http://www.sqwadapp.co";
}
   
   if(window.location.pathname === "/cascadia.html"){
    document.getElementById('top_image').href = "http://sqwadapp.co/cascadia.html"
   } else if(window.location.pathname === "/schools.html"){
    document.getElementById('top_image').href = "http://sqwadapp.co/schools.html"
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
