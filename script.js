function question_2() {
    var name = document.getElementById('q2_name').value;
    document.getElementById('q2_result').innerText = `Hi ${name}, Welcome to Alright Tech! Would you like to have some tea?`;

}

function question_3() {
    var name = document.getElementById('q3_name').value;
    var lowercase = name.toLowerCase();
    var uppercase = name.toUpperCase();

    var titlecase;
    var step_1 = name.toLowerCase();
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

    document.getElementById('q3_result').innerText = `LowerCase: ${lowercase} \n UpperCase: ${uppercase}\n TitleCase: ${step_4}`;

}

function question_4() {
    var quote = document.getElementById('q4_quote').value;
    var name = document.getElementById('q4_name').value;
    document.getElementById('q4_result').innerText = `Mr ${name} once said, "${quote}"`;

}

function question_6() {
    var name = document.getElementById('q6_name').value;
    document.getElementById('q6_result').innerText = `Orignal Name:  ${name}, \n Name without spaces: ${name.trim()}`;

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
    var mul2 = Number(number) / mul1;
    var statement_mul = `${Number(mul2)}*${mul1} = ${number}`

    // divide statement
    var div1 = randomInteger(1, number - 1);
    var div2 = Number(number) * div1;
    var statement_div = `${Number(div2)}/${div1} = ${number}`


    document.getElementById('q7_result').innerText = `${statement_add} \n ${statement_sub} \n ${statement_mul} \n ${statement_div}`;

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function question_9() {
    var number = document.getElementById('q9_number').value;
    document.getElementById('q9_result').innerText = `Hmm, Your favorite number is ${number}`;

}
var friend_id = 1;
function add_new_friend() {
    var newfield = document.getElementById('addNewFriend');
    friend_id++;
    newfield.innerHTML += `<div class="mb-3">
          <label for="q11_name${friend_id}" class="form-label">Enter Friend Name ${friend_id}</label>
          <input type="text" class="form-control" id="q11_name${friend_id}" />
        </div>`
}

function question_11() {
    var friend_names = []
    for (let i = 1; i <= friend_id; i++) {
        friend_names[i - 1] = document.getElementById('q11_name' + i).value
    }
    document.getElementById('q11_result').innerText = '';
    for (let i = 0; i < friend_id; i++) {
        document.getElementById('q11_result').innerText += `Hi ${friend_names[i]}, It was an amazing experience with you. \n`

    }
}

function question_13() {
    var strcars = document.getElementById("q13_cars").value;
    var statements = [
        "I would love to own a ", "This is an amazing ", "Recently a new mode is launched of", "What a beauty of"
    ]
    var array_cars = strcars.split(',');
    document.getElementById("q13_result").innerText = ''
    for (let i = 0; i < array_cars.length; i++) {
        const element = array_cars[i];
        document.getElementById("q13_result").innerText += `${statements[randomInteger(0, 3)]} ${array_cars[i].trim()} \n`;

    }
}

var str_guest, guest_statements, array_guest;
function question_14() {
    str_guest = document.getElementById("q14_guest").value;
    guest_statements = [
        "Would you like to come on dinner ", "I would like to invite you on my dinner ", "It will be an amazing experiene with you ", "Welcome to our dinner "
    ]
    array_guest = str_guest.split(',');
    document.getElementById("q14_result").innerText = ''

    for (let i = 0; i < array_guest.length; i++) {
        const element = array_guest[i];
        document.getElementById("q14_result").innerText += `${guest_statements[randomInteger(0, 3)]} ${array_guest[i].trim()} \n`
    }
}

function replace_guest() {
    var prevGuest = document.getElementById('prev_guest').value;
    var newGuest = document.getElementById('new_guest').value;

    var index = array_guest.indexOf(prevGuest);
    array_guest[index] = newGuest;

    document.getElementById("replaced_result").innerText = ''

    for (let i = 0; i < array_guest.length; i++) {
        const element = array_guest[i];
        document.getElementById("replaced_result").innerText += `${guest_statements[randomInteger(0, 3)]} ${array_guest[i].trim()} \n`
    }
}