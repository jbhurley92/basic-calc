window.addEventListener('load', function(){

    Var button = document.getElementById('calc');
    button.addEventListener('click', function() {
        var box1 = document.getElementById('first');
        var box2 - document.getElementById('second');

        var num1 = parseInt(box1.value);
        var num2 = parseInt(box2.value);
        var result;

        var addition = document.getElementById('addition');
        if (addition.checked){
            result = num1 + num2;
        }
        var subtraction =
        document.getElementById('subtraction');
        if (subtraction.checked){
            result = num1 - num2;
        }
        var multiplication = document.getElementById('multiplication');
        if (multiplication.checked){
            result = num1*num2;
        }
        var division = document.getElementById('division');
        if (multiplication.checked){
            result = num1/num2;
        }


        var answer = document.getElementById('answer');
        answer.textContent = num1 + num2;

    });
});
