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

$(function () {
  var words = location.search.split('?')
  if(words[1] === "refer"){
    document.getElementById('idToClickForWaitlisted').click();
  }
});

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
  if(document.getElementsByClassName('.editable')){
    $('.editable').mediumInsert({
    if(editor){
      editor: editor
    }
  });
  }
});

  
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
  
  function findListStyles(list) {
    $('.hideIcons').hide();
  }
  var tweetElement = document.getElementById('tweet')
  if(tweetElement){
    var location = window.location
    var id = location.pathname.split('/')[3]
    var newFirebaseAcceptedArticles = new Firebase("https://sqwadmediumblog.firebaseio.com/acceptedArticles/" + id)
    newFirebaseAcceptedArticles.once('value', function(dataSnapshot){
      var title = dataSnapshot.val().title;
      tweetElement.href = "http://twitter.com/home?status= " + title + ' is a great read.  Check it out '+ location.href
      document.getElementById('fbshare').href = "https://www.facebook.com/sharer/sharer.php?u=" + location.href
    })
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
