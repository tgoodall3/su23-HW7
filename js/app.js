

let input, button, greeting;

function setup(){
    createCanvas(710,400);


    input = createInput();
    input.position(20,65);


    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(() => {greet(input.value())});


    greeting = createElement('h2', 'What is your name?')
    greeting.position(20,5);

    textAlign(CENTER);
    textSize(50);

    function greet(name){
        greeting.html('hello ' + name);
        input ('');
        console.log('hello ' + name);
    }
}
