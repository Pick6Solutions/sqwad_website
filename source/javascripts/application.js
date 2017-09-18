var myFirebaseRef = new Firebase("https://sqwadmediumblog.firebaseio.com/");
anotherFirebaseRef = new Firebase("https://primetimeapp.firebaseio.com/")

//scroll spy when below certain point change color
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startColorChange');
   var startChangeCaseStudy = $('.headerBlockCaseStudies');
   var startChangeAboutUs = $('.headerBlockAboutUs');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'black');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
    else if (startChangeCaseStudy.length){
      $(".navbar-default").css('background-color', 'black');
    } else if (startChangeAboutUs.length) {
      $(".navbar-default").css('background-color', 'black');
    }
});

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

// var trackOutboundLink = function(url) {
//  ga('send', 'event', 'outbound', 'click', url, {
//    'transport': 'beacon',
//    'hitCallback': function(){document.location = url;}
//  });
// }

$(function(){
  
  $('#seattleStormSettings').on('click', function(){
   $('.thirdBlockBackground')[0].style.backgroundImage = "url('/images/tickets_background.png')";
   $('#case_icon')[0].src="/images/june_storm_case_icon.png"
   if($('#statCaseStudy')[0]){
     $('#statCaseStudy')[0].innerHTML = "SOLD $15,000 IN TICKETS LAST SEASON THROUGH ENGAGEMENT"
     $('#quoteFromTeam')[0].innerHTML = '"SQWAD engages our fans while giving us tangible ROI."<br>--KENNY DOW, SR. MANAGER, MARKETING'
     $('.learn_more_button_june')[0].href = "/casestudies.html?storm"
   } else {
     $('.case-quote')[0].innerHTML = '"SQWAD engages our fans while giving us tangible ROI."'
     $('.credit-quote-text-case')[0].innerHTML = '--KENNY DOW, SR. MANAGER, MARKETING'
     $('.text-below-quote-case-studies')[0].innerHTML = 'The Seattle Storm turns mobile engagment into direct ticketing revenue with SQWAD'
     $('.text-below-quote-case-studies')[0].style.color = 'white'
     $('.btn-bottom-casestudy')[0].style.backgroundColor = "#f6df3d"
     $('.btn-bottom-casestudy')[0].style.color = "#3e5835"
     $('.aboutTheTeamText')[0].innerHTML = "The Seattle Storm are a WNBA Franchise located in Seattle, Washington.  A storied history includes 2 WNBA titles and all-star players like Sue Bird, Jewell Loyd, and Breanna Stewart."
     $('.aboutTheTeamText')[1].innerHTML = "-Create a mobile experience that pulls fans in and connects them with the live game"
     $('.aboutTheTeamText')[2].innerHTML = "-Build customer insights for CRM system"
     $('.aboutTheTeamText')[3].innerHTML = "-Turn this experience into a vessel to directly sell tickets"
     $('.aboutTheTeamText')[4].innerHTML = "SQWAD worked with the Storm to build a team mobile app that leveraged our in-game fantasy experience to reach their engagement & revenue goals while offereing their fans a unique mobile experience"
     $('.storm-green-background-color')[0].style.backgroundColor = '#122102'
     $('.results-text-case')[0].style.color = "#f6df3d"
     $('.aboveImagePhotoOrVideoText')[0].innerHTML = "App Platform"
     $('.aboutTheTeamImage')[0].src = "/images/june_winterhawks_integrations.png"
     $('.aboutTheTeamImage')[0].style.display = "none"
     $('.vid-container')[0].style.display = 'block'
     $('.number-results-case')[0].innerHTML = "1,600+"
     $('.number-results-case')[1].innerHTML = "16 Minutes"
     $('.number-results-case')[2].innerHTML = "92%"
     $('.number-results-case')[3].innerHTML = "3,000"
     $('.number-results-case')[4].innerHTML = "60%"
     $('.number-results-case')[5].innerHTML = "$15,000"
     $('.results-bottom-text')[0].innerHTML = "Monthly Active Users"
     $('.results-bottom-text')[1].innerHTML = "Average screen time per user per game on the platform"
     $('.results-bottom-text')[2].innerHTML = "Of fantasy players played from the 1st quarter to the 4th"
     $('.results-bottom-text')[3].innerHTML = "Fans Added To The CRM System"
     $('.results-bottom-text')[4].innerHTML = "Of accounts made on platform were new users"
     $('.results-bottom-text')[5].innerHTML = "In additional ticket sales directly through their mobile application"
     $('.showStormStuff')[0].style.display = 'block'
     $('.showStormStuff')[1].style.display = 'block'
     $('.spokanePageShow')[0].style.display = 'none'
   }
  })
  
  $('#setPortlandWinterhawks').on('click', function(){
   $('.thirdBlockBackground')[0].style.backgroundImage = "url('/images/june_winterhawks_background.png')";
   $('#case_icon')[0].src="/images/june_winterhawks_logo_case.png"
   if($('#statCaseStudy')[0]){
      $('#statCaseStudy')[0].innerHTML = "The Portland Winterhawks link their digital experience to their live game"
      $('#quoteFromTeam')[0].innerHTML = '"Our digital experience is now a part of our gameday, even better it helps sell tickets."<br>--Kelley Robinette, VP of Marketing & Operations'
      $('.learn_more_button_june')[0].href = "/casestudies.html?winterhawks"
   } else {
     $('.case-quote')[0].innerHTML = '"Our digital experience is now a part of our gameday, even better it helps sell tickets."'
     $('.credit-quote-text-case')[0].innerHTML = '--Kelley Robinette, VP of Marketing & Operations'
     $('.text-below-quote-case-studies')[0].innerHTML = 'The Portland Winterhawks link their digital experience to their live game'
     $('.text-below-quote-case-studies')[0].style.color = 'red'
     $('.btn-bottom-casestudy')[0].style.backgroundColor = "#FA023C"
     $('.btn-bottom-casestudy')[0].style.color = "white"
     $('.aboutTheTeamText')[0].innerHTML = "The Portland Winterhawks are a semi-professional hockey team playing in the Western Hockey League. Located in Portland, Oregon the Winterhawks have sent dozens of players to the NHL."
     $('.aboutTheTeamText')[1].innerHTML = "-Create a mobile experience that gives fans the ability to interact with the game"
     $('.aboutTheTeamText')[2].innerHTML = "-Integrate the mobile experience into their live gameday in Memorial Coleseum"
     $('.aboutTheTeamText')[3].innerHTML = "-A rewards system that allowed them to have fans redeem points for autographed & game used rewards"
     $('.aboutTheTeamText')[4].innerHTML = "Sqwad worked with the Winterhawks to build a team mobile app that leveraged our in-game fantasy experience to reach their fans in stadium. In addition we built scoreboard & social media assets for them to build further reach with their fans."
     $('.storm-green-background-color')[0].style.backgroundColor = 'red'
     $('.results-text-case')[0].style.color = "white"
     $('.aboveImagePhotoOrVideoText')[0].innerHTML = "In-Game Integrations"
     $('.aboutTheTeamImage')[0].src = "/images/june_winterhawks_integrations.png"
     $('.aboutTheTeamImage')[0].style.display = "block"
     $('.vid-container')[0].style.display = 'none'
     $('.number-results-case')[0].innerHTML = "3,560"
     $('.number-results-case')[1].innerHTML = "$1,200"
     $('.number-results-case')[2].innerHTML = "1,800"
     $('.results-bottom-text')[0].innerHTML = "rewards redeemed to date through the platform"
     $('.results-bottom-text')[1].innerHTML = "In ticket sales the last month of the season directly through the platform"
     $('.results-bottom-text')[2].innerHTML = "monthly active users"
     $('.showStormStuff')[0].style.display = 'block'
     $('.showStormStuff')[1].style.display = 'none'
     $('.spokanePageShow')[0].style.display = 'none'
   }
  })
  
  $('#setSpokaneChiefs').on('click', function(){
   $('.thirdBlockBackground')[0].style.backgroundImage = "url('/images/june_spokane_background.png')";
   $('#case_icon')[0].src="/images/june_case_logo_spokane.png"
   if($('#statCaseStudy')[0]){
     $('#statCaseStudy')[0].innerHTML = "The Spokane Chiefs link sponsors to digital engagement to drive reach."
     $('#quoteFromTeam')[0].innerHTML = ''
     $('.learn_more_button_june')[0].href = "/casestudies.html?chiefs"
   } else {
     $('.case-quote')[0].innerHTML = 'The Spokane Chiefs link sponsors to digital engagement to drive reach'
     $('.credit-quote-text-case')[0].innerHTML = ''
     $('.text-below-quote-case-studies')[0].innerHTML = ''
     $('.btn-bottom-casestudy')[0].style.backgroundColor = "#FA023C"
     $('.btn-bottom-casestudy')[0].style.color = "white"
     $('.aboutTheTeamText')[0].innerHTML = "The Spokane Chiefs are a semi-professional junior hockey team playing in the Western Hockey League. Located in Spokane, Washington the Chiefs have sent dozens of players to the NHL."
     $('.aboutTheTeamText')[1].innerHTML = "-Create a new digital experience for fans"
     $('.aboutTheTeamText')[2].innerHTML = "-Open digital sponsorship inventory and a way for partners to reach fans in a unique and exciting way"
     $('.aboutTheTeamText')[3].innerHTML = ""
     $('.aboutTheTeamText')[4].innerHTML = "SQWAD worked with the Chiefs to build a team mobile app that helped their partners reach fans throughout the season. This mobile experience engaged fans and connected them to their partners."
     $('.storm-green-background-color')[0].style.backgroundColor = '#032D5D'
     $('.results-text-case')[0].style.color = "white"
     $('.aboveImagePhotoOrVideoText')[0].innerHTML = "Sponsor Integrations"
     $('.aboutTheTeamImage')[0].src = "/images/june_spokane_integrations.png"
     $('.aboutTheTeamImage')[0].style.display = "block"
     $('.vid-container')[0].style.display = 'none'
     $('.showStormStuff')[0].style.display = 'none'
     $('.showStormStuff')[1].style.display = 'none'
     $('.spokanePageShow')[0].style.display = 'block'
   }
  })
  
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

// $(function(){
//   console.log("HERE")
//   var video1 = document.getElementById('video1');
//   var video2 = document.getElementById('video2');
//   if(video1.readyState === 4 && video2.readyState === 4){
//     video1.play();
//     video2.play();
//   }
// })

function runMyFunction(){
  var video1 = document.getElementById('video1');
  var video2 = document.getElementById('video2');
  if(video1.readyState === 4 && video2.readyState === 4){
    video1.play();
    video2.play();
  }
}

$(function(){
  $('#video1, #video2').on('ended', function () {
    video1.load();
    video2.load();
    if(video1.readyState === 4 && video2.readyState === 4){
      video1.play();
      video2.play();
    }
  });
  
  
  // $('#video2').on('ended', function () {
  //   video1.load();
  //   if(video1.readyState === 4 && video2.readyState === 4){
  //     video1.play();
  //     video2.play();
  //   }
  // });
  // $('#video2').on('ended', function () {
  //   this.load();
  //   this.play();
  // });
})

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
        
        url: "https://sqwad-site-contact.herokuapp.com/",
        
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
          
          ga('send', 'event', 'Submit', 'Team Form Submitted');
                    
        },
        
        error: function(error){
          
          console.log(error)
          
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
