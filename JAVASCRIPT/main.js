function formSubmit(event) {

    var contact = document.getElementById('contact');
    var first_name = contact.first_name.value;
    var last_name = contact.last_name.value;
    var email = contact.email.value;
    var phone = contact.phone.value;
    var message = contact.message.value;
    

}

function main() {



    // start clock 

    // set up a new date object
    var today = new Date();
    // extract the year, month, day, hour, minutes and seconds and store them in a variable
    var date = today.getDate();
    var curr_year = today.getFullYear();
    var curr_month = today.getMonth();
    // create an arrary for days and months
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December');
    var curr_day = today.getDay();
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    var ampm = isMornAft(curr_hour);

    var cur_time = '' + days[curr_day] + ' ' + months[curr_month] + ' ' + date + ' ' + curr_year + ' ' + curr_hour + ":" + curr_minute + ":" + curr_second + ampm;
    console.log(cur_time);
    // insert id into p element with the div id - clock
    document.getElementById('clock').innerHTML = cur_time;

    setTimeout(main, 500);
    main();

    function checkTime(i) {
        // add zeros in front of single digit numbers
        if (i < 10) { i = "0" + i }
        return i;
    }
    // end clock
    
    function isMornAft(curr_hour) {
        // create 12 hour clock - with am and pm
        if (curr_hour >= 12 && curr_hour < 24) {
            return "pm";
        }
        else {
            return "am"
        }
    }
    


    // onload callback function
    console.log("myForm function");
    var myForm = document.getElementById("contact");
    myForm.addEventListener("submit", validateForm);

}
    // validate callback function
    function validateForm(event) {
        var formValidation = true;
        var myForm = document.getElementById("contact");

        if (myForm.first_name.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorFirst_name").style.display = "block";
            // change asset background color
            document.getElementById("first_name").style.backgroundColor = "red";
            // stop form from submitting
            event.preventDefault();
            
        }   else {
            formValidation = true;
            document.getElementById("errorFirst_name").style.display = "none";
            document.getElementById("first_name").style.backgroundColor = "";

        }

        if (myForm.last_name.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorFirst_name").style.display = "block";
            // change asset background color
            document.getElementById("last_name").style.backgroundColor = "red";
            // stop form from submitting
            event.preventDefault();

        }   else {
            
            formValidation = true;
            document.getElementById("errorLast_name").style.display = "none";
            document.getElementById("last_name").style.backgroundColor = "";

        }


        if (myForm.email.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorEmail").style.display = "block";
            // change asset background color
            document.getElementById("email").style.backgroundColor = "red";
            // stop form from submitting
            event.preventDefault();
            
        }   else {
            formValidation = true;
            document.getElementById("errorEmail").style.display = "none";
            document.getElementById("email").style.backgroundColor = "";

        }


        if (myForm.message.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorMessage").style.display = "block";
            // change asset background color
            document.getElementById("message").style.backgroundColor = "red";
            // stop form from submitting
            event.preventDefault();

        }   else {
            formValidation = true;
            document.getElementById("errorMessage").style.display = "none";
            document.getElementById("message").style.backgroundColor = "";

        }
    }



    // create slideshow variable
    var indexSlideshow = 0; {
        imagecarousel();

    }

    function imagecarousel() {
        var i;
        // call images in html
        var slide = document.getElementsByClassName("slide");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        indexSlideshow++;
        if (indexSlideshow > slide.length) { indexSlideshow = 1 }
        slide[indexSlideshow - 1].style.display = "block";
        // set image change to 3 seconds
        setTimeout(imagecarousel, 3000);
    }

    function orderCheck () {
        var foodError = document.getElementById("foodError")
        var size_small = document.getElementById("ssize")
        var size_medium = document.getElementById("msize")
        var size_large = document.getElementById("lsize")
        var topping = document.getElementById("topping")

        if(size_small.checked == true
            || size_medium.checked == true
            || size_large.checked == true) {
            document.getElementById("foodError").style.display = "none";
            window.location.reload();
        }

        else {
            document.getElementById("foodError").style.display = "block";
        }

        if(topping.checked == true) {
            document.getElementById("foodError").style.display = "none";
            window.location.reload();
        }

        else {
            document.getElementById("foodError").style.display = "block";
        }

    }