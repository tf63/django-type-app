// function check(data) {
//     $('#current_word').text(data.word);
//     var timeLeft = data.time_limit;
//     $('#time_left').text(timeLeft);
//     var intervalId = setInterval(function () {
//         timeLeft--;
//         $('#time_left').text(timeLeft);
//         if (timeLeft === 0) {
//             clearInterval(intervalId);
//             $('#submit_button').prop('disabled', true);
//         }
//     }, 1000);
//     $('#submit_button').click(function () {
//         var inputWord = $('#input_word').val();
//         if (inputWord === data.word) {
//             $('#result').text('Correct!');
//         } else {
//             $('#result').text('Incorrect...');
//         }
//     });
// }

function setCaret(sentence, index) {
    let pressed = sentence.substring(0, index);
    pressed = pressed.replace(/ /g, "&nbsp;")
    $("#pressed").html(pressed);
    $("#target").html(
        "<span class='caret'></span>" + sentence.substring(index)
    );
}

// HTMLがロードされたら
$(document).ready(function () {

    let sentence = "none";
    let timeLeft = 0;
    let words = [];
    $.ajax({
        url: '/start_game/',
        success: function (data) {
            let sentenc = data.word;
            words = data.words

            timeLeft = data.time_limit;
        }
    });

    console.log(words[0]);
    sentence = words[0];
    sentence = "\taaaa";
    if (sentence.startsWith('\t')) {
        console.log('タブから始まる');
    }
    let index = 0;
    let incorrect = 0;
    $("#target").text(sentence);
    setCaret(sentence, index);

    $('#time_left').text(timeLeft);
    let intervalId = setInterval(function () {
        timeLeft--;
        $('#time_left').text(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $('#submit_button').prop('disabled', true);
        }
    }, 1000);


    $(document).on("keydown", function (event) {

        // タブキーが押された場合、デフォルトの動作をキャンセルする
        if (event.keyCode == "9") {
            event.preventDefault();
        }
    })

    $(document).on("keypress", function (event) {
        let key = event.which;
        console.log(`キー ${key} が押されました`);

        // shiftキーが押されている場合、文字列を大文字に変換する
        if (event.shiftKey) {
            key = key.toUpperCase();
        }

        if (key === sentence.charAt(index)) {
            index++;
            setCaret(sentence, index);

            $('#result_text').text('Correct!');
            $('#correct').text(index);
            if (index === sentence.length) {

                $('#result').text('Congratulations! You have completed the game.');
            }
        } else {
            incorrect++;
            // $("#input").val("");
            $('#result_text').text('Incorrect...');
            $('#incorrect').text(incorrect);
        }
    });
});