const titlesBtn = document.getElementById('buttonTitles');
const titles = document.getElementsByTagName('h4');
const result = document.getElementById('result');
const firstName = document.getElementById('name');
const submitBtn = document.getElementById('form-btn');
const nameList = document.getElementById('submit-list');

function printTheTitle(titleText){
    var newList = document.createElement('li');
    newList.innerHTML = titleText;
    result.appendChild(newList)
}
titlesBtn.addEventListener("click", function(){
    // clear old value in the result
    result.innerHTML = '';
    // loop through the h4 titles in the page
    for( var i=0; i<titles.length; i++){
        // call function printTheTitle for each titleText
        printTheTitle(titles[i].outerText)
    }
})
function printTheName(firstName){
    var newList = document.createElement('li');
    newList.innerHTML = firstName;
    nameList.appendChild(newList)
}

submitBtn.addEventListener("click", function(){
   
    nameList.innerHTML = '';
    
    printTheName(firstName.value)
})