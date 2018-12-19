function onSignIn(googleUser)
{
	var profile=googleUser.getBasicProfile();
	$(".signin0").css("display","block");
	$(".g-signin2").css("display","none");
	
	$("#pic").attr('src',profile.getImageUrl());
	$("#email").text(profile.getEmail());
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }