//Typewriter

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #fff;}";
        document.body.appendChild(css);
    };




/** Modal */
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    'use strict';
    modal.classList.toggle("show-modal");
    

//Chart 1


var ctx = document.getElementById("chart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["USA", "Russia", "UK", "Venezuela", "China"],
        datasets: [{
            label: '# of Votes',
            data: [1.44, 1.05, 0.738, 0.707, 0.622, 0.286],
            backgroundColor: [
                '#ff264b',
                '#e23b57',
                '#ad3c4f',
                '#873e4a',
                '#593a3f'
                
            ],
            borderColor: [
            '#ff264b',
                '#e23b57',
                '#ad3c4f',
                '#873e4a',
                '#593a3f'
              
            ],
            borderWidth: 1
        }]
    },
   options: {
 legend: {
    display: false,
    position: "bottom"
 },
 tooltips: {
    enabled: true
 }
}
});


//Chart 2



var ctx = document.getElementById("chart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Mined", "Unmined"],
        datasets: [{
            label: '# of coins mined in millions',
            data: [17, 4],
            backgroundColor: [
                '#ff264b',
                '#593a3f'
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.9)',
                'rgba(255, 255, 255, 0.9)'
            ],
            borderWidth: 2
        }]
    },
options: {
 legend: {
    display: true,
    position: "left"
 },
 tooltips: {
    enabled: true
 }
}
});


//Chart 3


var ctx = document.getElementById("chart3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        datasets: [{
            // label: '# of Votes',
            data: [0, 0.05, 0.30, 6.22, 13.41, 814, 302, 429, 985, 15527, 3847],
            backgroundColor: [
                'rgba(255, 99, 132, 0.1)'
       
            ],
            borderColor: [
                '#ff264b'

            ],
            borderWidth: 4
        }]
    },
     options: {
 legend: {
    display: false,
    position: "left"
 },
 tooltips: {
    enabled: true
 }
}
});



//Chart 4


var ctx = document.getElementById("chart4").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Bitcoin", "Ethereum", "XRP", "EOS", "Litecoin"],
        datasets: [{
            label: '# of Votes',
            data: [66.9, 14.3, 13, 3.3, 2.8],
            backgroundColor: [
               '#ff264b',
                '#e23b57',
                '#ad3c4f',
                '#873e4a',
                '#593a3f'
            ],
            borderColor: [
                '#ff264b',
                '#e23b57',
                '#ad3c4f',
                '#873e4a',
                '#593a3f'
            ],
            borderWidth: 1
        }]
    },
            options: {
 legend: {
    display: false,
    position: "bottom"
 },
 tooltips: {
    enabled: true
 }
}
});





}

function windowOnClick(event) {
    'use strict';
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



