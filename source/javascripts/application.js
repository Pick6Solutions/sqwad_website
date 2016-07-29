var myFirebaseRef = new Firebase("https://sqwadmediumblog.firebaseio.com/");

var onCompleteSuccess = function(error) {
  if (error) {
    alert("Error message: " + error);
  } else {
    alert("Success!");
  }
};

$("img", ".image-container").each(function() {
    $(this).load(function() {
        var width = $(this).width();
        var height = $(this).height();
        $(this).parent().css("width", width);
    });
});


// $(function () {
//   var element = document.getElementsByClassName('overflow');
//   element[0].addEventListener('mousewheel', function(event) {
//     // We don't want to scroll below zero or above the width and height
//     var maxX = this.scrollWidth - this.offsetWidth;
//     var maxY = this.scrollHeight - this.offsetHeight;

//     // If this event looks like it will scroll beyond the bounds of the element, prevent it and set the scroll to the boundary manually
//     if (this.scrollLeft + event.deltaX < 0 ||
//        this.scrollLeft + event.deltaX > maxX ||
//        this.scrollTop + event.deltaY < 0 ||
//        this.scrollTop + event.deltaY > maxY) {

//       event.preventDefault();

//       // Manually set the scroll to the boundary
//       this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
//       this.scrollTop = Math.max(0, Math.min(maxY, this.scrollTop + event.deltaY));
//     }
//   }), false;
// });

// Cache selectors outside callback for performance. 
$(function () {
   var $window = $(window);
   $stickyEl = $('#the-sticky-div');
   if($stickyEl.offset()){
     elTop = $stickyEl.offset().top;
      $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
      });
    }
});

$(function(){
  $('.articleDanger').on('click', function(){
    var id = $(this).attr('data-id');
    var refToDestroy = new Firebase("https://sqwadmediumblog.firebaseio.com/submittedArticles/" + id);
    refToDestroy.remove();
    location.reload();
  })
  $('.articleSuccess').on('click', function(){
    var id = $(this).attr('data-id');
    var refToMove = new Firebase("https://sqwadmediumblog.firebaseio.com/submittedArticles/" + id);
    refToMove.once('value', function(snapshot){
      var object = snapshot.val();
      myFirebaseRef.child('acceptedArticles').push(object, onCompleteSuccess)
      refToMove.remove()
      location.reload();
    })
  })
})

$(function () {
  $('.editable').mediumInsert({
    if(editor){
      editor: editor
    }
  });
});

// $(function () {
//   $('#headerImage').click('load', function(event){
//     var elementNodes = document.getElementById( "headerImage" ).childNodes;
//     if(elementNodes.length > 2){
//       var t = setTimeout(function() {
//         createPreviewOfMobileImage(elementNodes[0].childNodes[0].childNodes[1].src)
//       }, 1000);
//     }
//   })
// });

  
$(function () {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
    var author = document.getElementById('dynamicAuthor');
    var firstName = capitalizeFirstLetter(location.search.slice(1).split('_')[0])
    if(author){
      author.innerHTML = "Hello " + firstName + "!"
    }
});


var onComplete = function(error) {
  if (error) {
    $('.se-pre-con').hide();
    alert("Error message: " + error + '\nTry to submit your article again.  If you keep having problems tell Lee your error message');
  } else {
    $('.se-pre-con').hide();
    alert("Your article was successfully sent to Lee for final approval!");
    location.reload();
  }
};

var makePrettyDate = function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = mm+'/'+dd+'/'+yyyy;
    return today;
};

// function wrapText(context, text, x, y, maxWidth, lineHeight) {
//   text = "WHAT A GREAT STORY: THE LONGEST YARD IN NFL HISTORY"
//   var words = text.split(' ');
//   var line = '';

//   for(var n = 0; n < words.length; n++) {
//     var testLine = line + words[n] + ' ';
//     var metrics = context.measureText(testLine);
//     var testWidth = metrics.width;
//     if (testWidth > maxWidth && n > 0) {
//       context.textAlign = "right";
//       context.fillStyle = "rgb(255,255,255)";
//       context.font = 'italic 20pt Oswald'
//       context.fillText(line, x, y);
//       line = words[n] + ' ';
//       y += lineHeight;
//     }
//     else {
//       line = testLine;
//     }
//   }
//   context.textAlign = "right";
//   context.fillStyle = "rgb(255,255,255)";
//   context.font = 'italic 20pt Oswald';
//   context.fillText(line, x, y);
// }

// function drawTextBG(ctx, txt, x, y) {
//     ctx.font = 'italic 16pt Oswald'
//     /// lets save current state as we make a lot of changes        
//     ctx.save();
//     /// draw text from top - makes life easier at the moment
//     ctx.textBaseline = 'top';
//     /// color for background
//     ctx.fillStyle = 'rgb(255,0,51)';
//     /// get width of text
//     var width = ctx.measureText(txt).width + 5;
//     /// draw background rect assuming height of font
//     ctx.fillRect(x - width, y, width, 30);
//     /// text color
//     ctx.fillStyle = 'black';
//     /// draw text on top
//     ctx.fillText(txt, x - width, y);
//     /// restore original state
//     ctx.restore();
// }

// function drawOnPicture(title, image, width, height, tag){
//   var canvas = document.getElementById('myCanvas');
//   var context = canvas.getContext("2d");
//   var imageObj = new Image();
//   imageObj.onload = function(){
//     var maxWidth = width / 1.3;
//     var lineHeight = 30;
//     var x = width - 5;
//     var y = height/1.2;
//     //create new image
//     context.drawImage(imageObj, 0, 0);
//     //create darkened image
//     context.fillStyle = "rgba(0,0,0,0.3)";
//     context.fillRect(0, 0, width, height);
//     //create label text
//     drawTextBG(context, tag, width,y/1.5)
//     wrapText(context, title, x, y, maxWidth, lineHeight);
//   }
//   imageObj.crossOrigin = 'anonymous';
//   imageObj.src = image;
// }

$(function(){
  $('#submitArticle').click(function(event){
    $('.se-pre-con').show();
    var author = window.location.search.slice(1)
    var bodyArray = [];
    var tags = document.getElementById('tags').childNodes;
    if(tags[0].innerText === undefined){
      $('.se-pre-con').hide();
      alert("Unrecognized Tags Entered!")
      return;
    }
    var tagArray = tags[0].innerText.toLowerCase().split(' ')
    var title = document.getElementById( "title" ).childNodes;
    var cleanTitle = title[0].innerText.split("").length;
    if(cleanTitle === 1){
      $('.se-pre-con').hide();
      alert("No Title or Title too short Please Enter a better one!")
      return;
    }
    var titleText = title[0].innerHTML
    var summaryTextNodes = document.getElementById( 'summary' ).childNodes;
    if(summaryTextNodes[0].innerHTML === undefined || summaryTextNodes.length > 2 || summaryTextNodes[0].innerHTML.split(' ').length > 100){
      $('.se-pre-con').hide();
      alert("Summary either doesnt exist, is greater than 100 characters, or is split by a 'return' somewhere.  Delete any artificially created next line statements")
      return;
    }
    var summary = summaryTextNodes[0].innerHTML
    var image = document.getElementById( "headerImage" ).childNodes;
    if(image.length === 2){
      $('.se-pre-con').hide();
      alert("Header Image Missing!")
      return;
    }
    var headerImage = image[0].childNodes[0].childNodes[1]
    // var width = headerImage.clientWidth;
    // var height = headerImage.clientHeight;
    // drawOnPicture(titleText, headerImage.src, width, height, tagArray[0])
    var headerImageSource = headerImage.src
    var body = document.getElementById( "body" ).childNodes;
    var cleanBody = body[0].innerText.split("").length
    if(cleanBody === 1 && body.length < 3){
      $('.se-pre-con').hide();
      alert("No Body Please Enter One!")
      return;
    }
    for(var i =0; i < body.length - 1; i++){
      var bodyimage = body[i].getElementsByTagName('img')[0]
      if(bodyimage){
        bodyArray.push(bodyimage.src)
      } else {
        var elementSpecial = body[i].localName
        bodyArray.push("<"+ elementSpecial+ ">"+body[i].innerHTML+"</"+elementSpecial+">")
      }
    }
    if(!author){
      $('.se-pre-con').hide();
      alert("Not a recognized author reference the original URL Lee sent you or reach out for help")
      return;
    }
    var t = setTimeout(function() {
      var canvas = document.getElementById('myCanvas').toDataURL();
      myFirebaseRef.child('submittedArticles').push({author: author, date: makePrettyDate(), tags: tagArray, summary: summary, title:  titleText, image: headerImageSource, body: bodyArray}, onComplete)
      }, 1000);
      
    })
});



$(function () {
  
  
       // swipe opens waitlisted
var myElement  = document.getElementById('swiper')
if(myElement){
  var hammertime = new Hammer(myElement);
  hammertime.on('swiperight', function(ev){
    document.getElementById('idToClickForWaitlisted').click();
  })
}

  
  $("#my-menu").mmenu();
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

// $('#tweeter_handle').submit(function(event){

//   btn = $('#sendTwitterHandle')
//   btn.button('loading')
  
//   event.preventDefault();
  
//   NProgress.start();
    
//   var handle = $('#handle').val();
  

//   if(handle && (handle.length > 1)){
    
//     $.ajax({
        
//         url: "https://pick6page-contact.herokuapp.com",
        
//         type: "POST",
        
//         data: 'Handle: ' + handle,
        
//         success: function(data){
          
//           // $('.se-pre-con').hide();
          
//           $(this).closest('form').find("input[type=text]").val(null);
          
//           document.getElementById("tweeter_handle").reset();

//           NProgress.done();
//           btn.button('reset')
          
//           $('#msg-success').fadeIn();

//           setTimeout(function() {
//             $('#msg-success').fadeOut('fast');
//           }, 10000);
          
//         },
        
//         error: function(){
          
//            alert("Oh no something went wrong... please reenter your handle and try again!")
          
//         }
                
//       })
    
//   } else {

//     NProgress.done();
    
//     btn.button('reset')
    
//     btn.css("background-color","#5cb85c");
//     btn.css("color", "white")
    
//     $('#msg-error').fadeIn();

//     setTimeout(function() {
//       $('#msg-error').fadeOut('fast');
//     }, 2000);

//   }
  
// })
  
  function findListStyles(list) {
    $('.hideIcons').hide();
    // switch(list){
    //   case "startuppdx":
    //    document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it and you are a catalyst for the Portland Startup Community.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //    document.getElementById("two-left-line").innerHTML = "Rip City Startup<br>Specialist"
    //     break;
    //   case "pitchfestnw":
    //      document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a catalyst in the NW Tech Community.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "NW Tech<br>All-Star"
    //     break;
    //   case "sportspdx":
    //      document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are a driver in the Portland sports industry.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "Rip City's<br>Sports Pro"
    //     break;
    //   case "sounders":
    //     document.body.style.backgroundImage = "url('/images/bg_sounders.png')"
    //     document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Sounder's rich soccer tradition.  We would like to invite you to be an influencer on the NW's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "Seattle's<br>Soccer Elite"
    //     document.getElementById("phone_image").src = '/images/cascadia-phone.png'
    //     document.getElementById("small_phone").src = '/images/cascadia-phone.png'
    //     break;
    //   case "whitecaps":
    //     document.body.style.backgroundImage = "url('/images/bg_whitecaps.png')"
    //     document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Whitecaps's rich soccer tradition.  We would like to invite you to be an influencer on the BC's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "Vancouver's<br>Soccer Elite"
    //     document.getElementById("phone_image").src = '/images/cascadia-phone.png'
    //     document.getElementById("small_phone").src = '/images/cascadia-phone.png'
    //     break;
    //   case "timbers":
    //     document.body.style.backgroundImage = "url('/images/bg_timbers.png')"
    //     document.getElementById("influencerCopy").innerHTML = "we recognize game when we see it.  You are an innovator for the Timber's rich soccer tradition.  We would like to invite you to be an influencer on Portland's next big sports platform.<br><br>SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "Portland's<br>Soccer Elite"
    //     document.getElementById("phone_image").src = '/images/cascadia-phone.png'
    //     document.getElementById("small_phone").src = '/images/cascadia-phone.png'
    //     break;
    //   default:
    //      document.getElementById("influencerCopy").innerHTML = "SQWAD is a real-time fantasy platform powered by blockchain technology that allows fans to challenge pro athletes and friends.  With our player market feature fans will be able to buy and sell players simulating real sports free agency.<br><br>Give us a shout on Twitter to confirm you've got our back.  We'll shoot you updates on our product and give you early access to an influencer account."
    //     document.getElementById("two-left-line").innerHTML = "THE BEST<br>PLAY LIVE"
    // }
  }
  var tweetElement = document.getElementById('tweet')
if(tweetElement){
  var location = window.location
  var id = location.pathname.split('/')[2]
  var newFirebaseAcceptedArticles = new Firebase("https://sqwadmediumblog.firebaseio.com/acceptedArticles/" + id)
  newFirebaseAcceptedArticles.once('value', function(dataSnapshot){
    var title = dataSnapshot.val().title;
    tweetElement.href = "http://twitter.com/home?status= " + title + ' is a great read.  Check it out '+ location.href
    document.getElementById('fbshare').href = "https://www.facebook.com/sharer/sharer.php?u=" + location.href
  })
}

// var twitterFavicon = document.createElement('img');
// twitterFavicon.src = '//twitter.com/login?redirect_after_login=%2Ffavicon.ico';
// twitterFavicon.addEventListener('load', function () {
//     document.getElementById('status').innerHTML = '';
//     // document.getElementById('tweet').href = "http://twitter.com/home?status=@SqwadFan %23SqwadInfluencer"
//     document.getElementById('tweet').href = "http://twitter.com/home?status=Top 20 MLS Player Jerseys http://sqwadapp.co/article/"
//     document.getElementById('tweeter_handle').style.display = "none"
//     document.getElementById('mobile_twitter').style.display = "none"
// });
// twitterFavicon.addEventListener('error', function () {
//     document.getElementById('status').innerHTML = 'Twitter Handle';
//     document.getElementById('tweet').style.display = "none"
//     document.getElementById('tweeter_handle').style.display = "block"
// });
  
// var query_string = {};
// var query = window.location.search.substring(1);
// if(query){
//   var vars = query.split("&");
//   for (var i=0;i<vars.length;i++) {
//     var pair = vars[i].split("=");
//     if(pair[0] == "list"){
//       findListStyles(pair[1])
//     }
    
//        // If first entry with this name
//      if (typeof query_string[pair[0]] === "undefined") {
//        query_string[pair[0]] = decodeURIComponent(pair[1]);
//   //       // If second entry with this name
//      } else if (typeof query_string[pair[0]] === "string") {
//        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
//        query_string[pair[0]] = arr;
//   //       // If third or later entry with this name
//      } else {
//        query_string[pair[0]].push(decodeURIComponent(pair[1]));
//      }
//    }

//   document.getElementById("nameInfluencer").innerHTML = query_string.name
//   document.getElementById("influencerImage").src = query_string.image
//   if(query_string.headline !== undefined) {
//     document.getElementById("two-left-line").innerHTML = query_string.headline
//   }
//   if(query_string.copy !== undefined) {
//     $('#influencerCopy').load("text/" + query_string.copy + ".html")
//     console.log("text/" + query_string.copy + ".html")
//   }
// } else if(window.location.pathname == "influencers.html") {
//   window.location = "http://www.sqwadapp.co";
// }
   
   // if(window.location.pathname === "/cascadia.html"){
   //  document.getElementById('top_image').href = "http://sqwadapp.co/cascadia.html"
   // } else if(window.location.pathname === "/schools.html"){
   //  document.getElementById('top_image').href = "http://sqwadapp.co/schools.html"
   // }
   
  

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
