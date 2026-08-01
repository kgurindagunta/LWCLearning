function handleSubmit(){

    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");

    console.log(inputDate.value)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN")
    outputDate.value = formattedDate;

}