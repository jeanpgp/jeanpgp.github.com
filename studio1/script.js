(function(){
    'use strict';
    console.log("reading js");
    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');
    
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        processData(formData);
    });

    function processData(formData){
        let emptyFields = 0;
        const words = [];

        for(const eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value);
                eachWord.value = "";
            }
            else{ emptyFields++; }
        }

        if (emptyFields>0){
            madlib.innerHTML="Please fill out the fields";
        } else{ makeMadLib(words);
                makeMadLib2(words);}
    }
    function makeMadLib(wordsArray){
        const myText= `"Hi ${wordsArray[0]}. ${wordsArray[1]} told me that they hate you.They are jealous of
                        how your ${wordsArray[2]} looks.`;
        const myText2= `I hear ${wordsArray[3]} has a crush on you. 
                        They think you're really ${wordsArray[4]}"`;
        madlib.innerHTML= myText + myText2 ;
    }

})();
