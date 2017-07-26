var timer = null;
var i = 10;

var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    i = 10;

    //countdown
    if (state == 2) {
        document.getElementById('countdown').innerHTML = i;
        timer = setInterval(function () {
            i = i - 1;
            document.getElementById('countdown').innerHTML = i;

            if (i <= 0) {
                changeState(3);
                i = 10;

            }
        }, 1000);

        //succes or failure
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber:', randomNumber)
            //success
            if (randomNumber > 3) {
                changeState(4);
            } else {
                changeState(5);
            }
        }, 2000);

    }

}