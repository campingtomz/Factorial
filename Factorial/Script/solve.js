
$(document).ready(function () {
    $("#input-btn").click(function () {
        let input = parseFloat($("#factorial-input").val());
        $("#output-list").empty();
        console.log("test");
        if (verifyInput(input)) {
            console.log("test");
            calculateValue(input);
        }

    });

    function verifyInput(input) {
        if (isNaN(input) || !Number.isInteger(input)) {
            alert(`${input} is not a valid number`);
            $("#factorial-input").val("");
        } else if (input < 1 || input > 120) {
            alert(`${input} is not between 1 and 120`);
            $("#factorial-input").val("");
        }
        return true;
    }
    function calculateValue(input) {
        console.log(input);
        let outputstring = "1";
        let value = 1;
        for (let i = 1; i < input + 1; i++) {
            value *= i;
            outputstring += ` x ${i}`;
            
            let list = document.createElement("li");
            list.innerHTML = `${outputstring} = ${value}`
            $("#output-list").append(`<h4>${outputstring} = ${value}</h4>`);
        }
    };
});
