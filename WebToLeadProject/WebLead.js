let checked = false

function handleSubmit(event) {
    if (checked) {
        let inputDate = document.querySelector(".inputDate");
        let outputDate = document.querySelector(".outputDate");

        console.log(inputDate.value);

        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
    }
    else{
        alert('check the Recaptcha')
        event.preventDefault();
    }

}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value,
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value =
            JSON.stringify(elems);
    }
}
setInterval(timestamp, 500);

function captchasuccess() {
    checked = true
}