
$(document).ready(function () {
    $("#input-btn").click(function () {
        let input = $("#factoral-input").val();
        $("#output-list").empty();
        if (verifyInput(input)) {
            calculateValue(parseInt(input));
        }
    });

    function verifyInput(input) {
        if (isNaN(parseInt(input)) || !Number.isInteger(input)) {
            alert(`${input} is not a valid number`); 
            $("#factoral-input").val("");
        } else if (input < 1 ||  input > 120) {
            alert(`${input} is not between 1 and 120`);
            $("#factoral-input").val("");
        }
    }
    function calculateValue(input) {
        console.log(input);
        let outputstring = "1";
        let value = 1;
        for (let i = 1; i < input + 1; i++) {
            value *= i;
            outputstring += ` x ${i}`;
            //let result = `${outputstring} = ${value}`;
            let list = document.createElement("li");
            list.innerHTML = `${outputstring} = ${value}`
            $("#output-list").append(list);
        }
    };
});
