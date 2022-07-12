// Location

var loc_data;
let slug = 'ZDU1OWRhZmZjMTNjNGFhYjkyZDdlNDY2YTgyM2E2YzE=';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + atob(slug), function(data) {
  loc_data = data;
});

setTimeout( function(){

var onvpn = "not on vpn";
if(loc_data.security.is_vpn)
    onvpn = "using vpn";


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    circleArray = [];

    for (var i = 0; i < Math.round(canvas.width / 15); i++) {
        var choice = Math.round(Math.random() * 3);

        circleArray.push(new Circle(i * 15))
    }
})

var characters = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', loc_data.ip_address, loc_data.city, loc_data.connection.isp_name, loc_data.continent, `long ${loc_data.longitude}`, `lat ${loc_data.latitude}`, loc_data.region, onvpn, `${screen.width}x${screen.height}`]

function Circle(x){
    this.x = x;
    this.chars = [];

    for (var i = 0; i < Math.round(canvas.height / 20) + 1; i++) {
        this.chars.push(characters[Math.round(Math.random() * characters.length)])
    }

    this.draw = function(){
        c.globalAlpha = 0.1;
        c.fillStyle = "green";
        c.font = "25px monospace";

        for (var i = 0; i < Math.round(canvas.height / 20) + 1; i++) {
            if (this.chars[i] != null) {
                c.fillText(this.chars[i], this.x, canvas.height - (20 * i));
            }
        }
    }

    this.update = function(){
        this.chars.pop();
        this.chars.unshift(characters[Math.round(Math.random() * characters.length)]);
    }
}

function setDelta() {
    now = Date.now();
    delta = (now - then);
    then = now;
}

var circleArray = [];

for (var i = 0; i < Math.round(canvas.width / 15); i++) {
    var choice = Math.round(Math.random() * 3);

    circleArray.push(new Circle(i * 15))
}

let timer = 20
var delta = 0
var now = 0;
var then = 0;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    setDelta();

    for (i = 0; i < circleArray.length; i++){
        circleArray[i].draw();
    }

    if (timer <= 0) {
        for (i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }

        timer = 50;
    }

    else {
        timer -= 1 * delta;
    }
}

animate();
  
}, 1000);
