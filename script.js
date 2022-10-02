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

function question_4() {
    var quote = document.getElementById('q4_quote').value;
    var name = document.getElementById('q4_name').value;
    document.getElementById('q4_result').innerText=`Mr ${name} once said, "${quote}"`;

}

function question_6() {
    var name = document.getElementById('q6_name').value;
    document.getElementById('q6_result').innerText=`Orignal Name:  ${name}, \n Name without spaces: ${name.trim()}`;

}

function question_7() {
    var number = document.getElementById('q7_number').value 

    // add statement
    var add1 = randomInteger(1, number - 1);
    var add2 = number - add1;
    var statement_add = `${add1}+${add2} = ${number}`

    // Subtract statement
    var sub1 = randomInteger(1, number - 1);
    var sub2 = Number(number) + sub1;
    var statement_sub = `${sub2}-${sub1} = ${number}`

    // multiplay statement
    var mul1 = randomInteger(1, number - 1);
    var mul2 = Number(number) / mul1 ;
    var statement_mul = `${Number(mul2)}*${mul1} = ${number}`

    // divide statement
    var div1 = randomInteger(1, number - 1);
    var div2 = Number(number) * div1 ;
    var statement_div = `${Number(div2)}/${div1} = ${number}`


    document.getElementById('q7_result').innerText=`${statement_add} \n ${statement_sub} \n ${statement_mul} \n ${statement_div}`;

}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function question_9() {
    var number = document.getElementById('q9_number').value;
    document.getElementById('q9_result').innerText=`Hmm, Your favorite number is ${number}`;

}