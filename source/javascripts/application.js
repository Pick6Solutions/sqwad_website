var myFirebaseRef = new Firebase("https://sqwadmediumblog.firebaseio.com/");
anotherFirebaseRef = new Firebase("https://primetimeapp.firebaseio.com/")

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

(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);
  branch.init('key_live_carcxq6bajBu8H01J2zBakemtrcHkBau', function(err, data) {

  });
  
  $(function(){
    $('#sendTextMessage').on('click', function(){
      var number = $('#textNumberString').val()
      
      if(number.length < 6){
        alert("Not a real phone number")
      } else {
        branch.sendSMS(
        number,
        {
        tags: ['tag1', 'tag2'],
        channel: 'website',
        feature: 'dashboard',
        stage: 'new user',
        data: {
            mydata: 'fromWebsite',
            foo: 'bar',
            '$desktop_url': 'http://sqwadapp.co/primetime',
            '$ios_url': 'itms-apps://itunes.apple.com/app/id1163987973',
            '$ipad_url': 'http://sqwadapp.co/primetime',
            '$android_url': 'http://sqwadapp.co/primetime',
            '$og_app_id': '12345',
            '$og_title': 'PrimeTime',
            '$og_description': 'The PrimeTime Application allows you to make live changes and be the coach of your fantasy team.',
            '$og_image_url': 'https://s3-us-west-2.amazonaws.com/pick6-admin/badges/PrimetimeAppIcon.png'
          }
        },
          { make_new_link: false }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
            function(err) { console.log(err); 
          }
        )
      }
      window.open("http://sqwadapp.co/primetime/?=thankyou")
    })
  })


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

var getMillisecondDate = function(){
  var today = new Date();
  return today.getTime();
}

var makePrettyDate = function(){
    var today = new Date();

    var dd = today.getDate();
    console.log(today)
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
      myFirebaseRef.child('submittedArticles').push({author: author, date: makePrettyDate(), milliDate: getMillisecondDate(), tags: tagArray, summary: summary, title:  titleText, image: headerImageSource, body: bodyArray}, onComplete)      
    })
});

$(function(){
  $('#newEmailForm').submit(function(event){
    event.preventDefault();
    $('.se-pre-con').show();
    var emailNew = $('#getANewEmail').val();
    var confirmNewEmail = $("#confirmNewEmail").val();
    if(emailNew === confirmNewEmail){
      myFirebaseRef.child("newsLetter").push(emailNew)
    } else {
      alert("Emails didnt match!")
    }
    $('#successModal').modal('show').delay(2000).fadeOut(1000);
     
    $("#successModal").delay(0).queue(function(){ $(this).modal('hide').dequeue(); });
          
    $('#emailModal').delay(1200).queue(function(){ $(this).modal('hide').dequeue(); });
    $('.se-pre-con').hide();
  })
})

$(function(){
  var pathname = location.pathname
  if(pathname === "/rankings.html" || pathname === "/rankings/" || pathname === "/sqwadrankings.html" || pathname === "/sqwadrankings/"){
    var startOfCurrentGameList = document.getElementById('playersCurrentRanked');
    startOfAllTimeRankList = document.getElementById('playersAllTimeRanked');
    startOfNightLeaderRanks = document.getElementById('playersNightlyRanked');
    allTimeUserPointsRef = anotherFirebaseRef.child('userLevel');
    nightlyPointsRef = anotherFirebaseRef.child('todaysPoints')
    currentGameRef = anotherFirebaseRef.child('currentGameUserPoints');
    currentGameRef.orderByValue()
    .startAt(1)
    .once('value', function(snapshot){
      if(snapshot.exists()){
        snapshot.forEach(function(data){
          var user = {}
          user.points = data.val()
          user.uid = data.key()
          getUserNamesFromId(user, startOfCurrentGameList)
        })
      } else {
        
        var noDataMessage = document.createElement("p")
        noDataMessage.innerHTML = "<span style='font-size:24px'>Game Not Started</span>"
        startOfCurrentGameList.appendChild(noDataMessage);
      }
    })
    nightlyPointsRef.orderByValue()
    .once('value', function(snapshot){
      if(snapshot.exists()){
        snapshot.forEach(function(data){
          var user = {}
          user.points = data.val()
          user.uid = data.key()
          getUserNamesFromId(user, startOfNightLeaderRanks)
        })
      } else {
        var noDataMessage = document.createElement('p')
        noDataMessage.innerHTML = "<span style='font-size:24px'>Game Not Started</span>"
        startOfNightLeaderRanks.appendChild(noDataMessage)
      }
    })
   allTimeUserPointsRef.orderByChild("totalPoints")
   .once('value', function(snapshot){
    snapshot.forEach(function(data){
      var pointTotal = data.val().totalPoints
      if(pointTotal){
         var user = {};
         user.points = pointTotal
         user.uid = data.key()
         getUserNamesFromId(user, startOfAllTimeRankList)
      }
    })
   })
  }
})



function getUserNamesFromId(user, startOfCurrentGameList){
 userNames = anotherFirebaseRef.child("uidToUsername")
 userNames.once('value', function(snapshot){
  snapshot.forEach(function(data){
    if(user.uid.toString() === data.key().toString()){
      user.userName = data.val().userName
      var userRanked = document.createElement("li");
      completeName = "<span class='userNameList'>" + user.userName.toString() + "</span>" + "<span class='pointsInList'>" + user.points.toString() + "</span>"
      userRanked.innerHTML= completeName;
      userRanked.className = 'playerClass'
      startOfCurrentGameList.appendChild(userRanked)
    }
  })
 })
}

$(function () {
   $("#currentGameRanks").click(function(event){
      event.preventDefault();
      $("#playersNightlyRanked").hide()
      $("#playersAllTimeRanked").hide()
      $("#playersCurrentRanked").show()
      $("#currentGameRanks").addClass('active')
      $('#nightLeaderRanks').removeClass('active')
      $('#allTimeRanks').removeClass('active')
   });
   $("#nightLeaderRanks").click(function(event){
      event.preventDefault();
      $("#playersCurrentRanked").hide()
      $("#playersAllTimeRanked").hide()
      $("#playersNightlyRanked").show()
      $("#currentGameRanks").removeClass('active')
      $('#allTimeRanks').removeClass('active')
      $('#nightLeaderRanks').addClass('active')
   });
   $("#allTimeRanks").click(function(event){
      event.preventDefault();
      $("#playersNightlyRanked").hide()
      $("#playersCurrentRanked").hide()
      $("#playersAllTimeRanked").show()
      $("#currentGameRanks").removeClass('active')
      $('#nightLeaderRanks').removeClass('active')
      $('#allTimeRanks').addClass('active')
   });
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
  var tweetElement1 = document.getElementById('tweet')
  if(tweetElement1){
    var location = window.location
    var id = location.pathname.split('/')[3]
    var newFirebaseAcceptedArticles = new Firebase("https://sqwadmediumblog.firebaseio.com/acceptedArticles/" + id)
    newFirebaseAcceptedArticles.once('value', function(dataSnapshot){
      var article = dataSnapshot.val();
      var title = article.title;
      tweetElement1.href = "http://twitter.com/home?status=" + title + ' is a great read. Check it out '+ location.href
      document.getElementById('fbshare').href = "https://www.facebook.com/sharer/sharer.php?u=" + location.href
      document.getElementById('redditPost').href = "//www.reddit.com/submit?url=" + encodeURIComponent(window.location);
    })
  }

  var tweetElement = document.getElementById('tweet1')
  if(tweetElement){
    var location = window.location
    var id = location.pathname.split('/')[3]
    var newFirebaseAcceptedArticles = new Firebase("https://sqwadmediumblog.firebaseio.com/acceptedArticles/" + id)
    newFirebaseAcceptedArticles.once('value', function(dataSnapshot){
      var title = dataSnapshot.val().title;
      tweetElement.href = "twitter://post?message=" + title + " is a great read.  Check it out "+ location.href
      document.getElementById('fbshare1').href = "https://www.facebook.com/sharer/sharer.php?u=" + location.href
      document.getElementById('redditPost1').href = "//www.reddit.com/submit?url=" + encodeURIComponent(window.location);
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
