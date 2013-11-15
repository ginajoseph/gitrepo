// JavaScript Document
$(document).ready(function() {
	$("#helloworld").click(function() { //calling click method on element id called helloworld
	 $("h1").first().text("world"); //grab the first h1 element and change text. could have called by id instead
	 });		
	
	$("button").hover(function() { //calling hover method on all element button
	 $(this).css("background-color","#ccc4c4"); //change the background color
	 });


	$("#oddevenbtn").click(function() { //calling click function on element with id oddevenbtn
		var oeval = $("#oddeven").val(); //create variable and assign the value from am element with id oddeven
		if(oeval%2 == 0){ //if remainder equal 0
			$("#oeresult").text("You entered an even number");} //display text
			else if(oeval%2){ 
			$("#oeresult").text("You entered an odd number");}
			else if(isNaN(oeval)){ //if empty
			$("#oeresult").text("You didn't enter a number");}		
	});
	

	//pertains to name input text
	var nameval = $("#myname").val(); //assigns value from name text box to a variable
	var myname = $("#myname"); //assigns the form tag to local variable
	var name_pattern = new RegExp("[a-zA-Z]"); //regular expression to test against
	var nameresult = name_pattern.test(nameval); //test if value fron text box follows pattern returns boolean
		
		if(!nameresult){ //
			$(myname).mouseleave(function(){ //if on mouseleave it doesn't match put a red border around the text box and display error message
				$(myname).css("border","thick solid red").after("<p>*text only</p>");
			});
		
		}
	//pertains to email 
	
	var email = $("#email").val(); //assigns value from email text box to a variable
	var email_pattern = new RegExp();
	
	
	//pertains to phone
	var phone = $("#phone").val(); //assigns value from email text box to a variable
	if(!/[0-9]/.test(phone)) {
							 $(phone).css("border","thick solid red").after("<p>*digits only</p>");
							 }
	//var phone_pattern = new RegExp();
	

	
	//I used most of this from site http://jqfaq.com/how-to-load-all-files-from-directory-using-jquery/
	$.ajax({
  url: "http://localhost/metrostarsystems/images/", //location of images
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){ //grabs all images ending in .jpg
        //loops through and adds each image inside an image tag to display
        var images = $(this).attr("href");
		var ikl = "images/"; 
		var thumb_ = "100px"; 
		//$("#gallery").append($("<img src=" + ikl + images + "></img>"));
		$(".img_thumb").append($("<img src=" + ikl + images + " width=" + thumb_ + " height=" + thumb_ + "></img> "));
     });
  }
});
	
	
});