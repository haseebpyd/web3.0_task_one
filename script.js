function question_2() {
    var name = document.getElementById('q2_name').value;
    document.getElementById('q2_result').innerText=`Hi ${name}, Welcome to Alright Tech! Would you like to have some tea?`;

}

function question_3() {
    var name = document.getElementById('q3_name').value;
    var lowercase = name.toLowerCase();
    var uppercase = name.toUpperCase();

    var titlecase;
    var step_1 =  name.toLowerCase();
    console.log(step_1); //all in lower case

    var step_2 = step_1.split(' ');
    console.log(step_2); //all are splited and return in array

    var step_3 = step_2.map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }) // return array with first letter of every word capital

    console.log(step_3)

    var step_4 = step_3.join(' ');
    //return a string with spaces
    console.log(step_4)

    titlecase = step_4;

    document.getElementById('q3_result').innerText=`LowerCase: ${lowercase} \n UpperCase: ${uppercase}\n TitleCase: ${step_4}`;

}