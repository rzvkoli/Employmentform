const data = {
    'name' : 'Recruitment questions',
    'questions' : {
        '0a1b2c3d4e5' : {
            '00aa' : {
                question : 'What is your area of ​​expertise ?' ,
                answer : ''
            } ,
            '00bb' : {
                question : 'What is your weakness ?' ,
                answer : ''
            },
            '00cc' : {
                question : 'What is your strength ?' ,
                answer : ''
            },
            '00dd' : {
                question : 'What has been greatest achievement ?' ,
                answer : ''
            },
            '00ee' : {
                question : 'What has been your most successful project ?' ,
                answer : ''
            },
        }
    }
}

var questions = data.questions["0a1b2c3d4e5"];

// console.log(questions);

// Loop with map

// Object.values(questions).map(question => {
//     console.log(question);
// })

// Loop with forEach

// Object.values(questions).forEach(question => {
//     console.log(question);
// });

for(let question in questions){

    var object = questions[question];
    // console.log(object);
    
    var firstindex = object.question
    // console.log(firstindex);

    document.getElementById('questions').innerHTML +=
    '<div id="question" >'+
        '<label>'+
        firstindex +
        '</label>'+
        '<input type="text" class="field" />'
    '</div>'
}

const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click' , () =>{

    const firstAnswer = document.getElementsByClassName('field')[0].value

    const secoundAnswer = document.getElementsByClassName('field')[1].value

    const thirdAnswer = document.getElementsByClassName('field')[2].value

    const fourthAnswer = document.getElementsByClassName('field')[3].value

    const fifthAnswer = document.getElementsByClassName('field')[4].value


    let answers = [ firstAnswer , secoundAnswer , thirdAnswer , fourthAnswer , fifthAnswer ]

    console.log(answers);
    
    console.log('Submitted successfully');
})