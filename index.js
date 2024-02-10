var values = [];

document.getElementById('button').addEventListener('click', function() {
    var valueAdd = 0;
    var empty;
    for (var i = 0; i < 6; i++) {
       var inputElement = document.getElementsByTagName('input')[i];
       if (inputElement) {
        if(inputElement.value.trim()==''){
            inputElement[i]=0;
            empty=true;
            break;
        }
           values[i] = parseInt(inputElement.value);
           valueAdd = valueAdd + values[i];
       }
       else {
           alert("Input element at index " + i + " is undefined.");
       }
    }
    if(empty){
        alert('bsdk ke input tu likh')
       }
    if (valueAdd < 350) {
        document.getElementById('result').innerHTML='Sorry failed successfully with '+`${Math.round(valueAdd*100/700)}`+'%';
    } else {
        document.getElementById('result').innerHTML='Congrats You have passed successfully with '+`${Math.round(valueAdd*100/700)}`+'%';
    }
});
