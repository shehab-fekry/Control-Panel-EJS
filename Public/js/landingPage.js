
// ------------------------------------------- Typed.js --------------------------------------------------


document.addEventListener('DOMContentLoaded', function(){
    let type = new Typed('.type', {
        strings: [
        "Welcome Aboard Your <span class='subtext'>Dash</span>!",
        "<small>Put your school <span class='subtext'>trips</span>, <span class='subtext'>students</span>, <span class='subtext'>drivers</span> and <span class='subtext'>parents</span> information under your hands control.</small>",
        "<small>Ensure students' safety by tracking your school buses.</small>"],
        stringsElement: null,
        // typing speed
        typeSpeed: 60,
        // time before typing starts
        startDelay: 600,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 2000,
        // loop
        loop: true,
        // false = infinite
        // loopCount: 1,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
    });
});


// ------------------------------------------- Counters --------------------------------------------------


const counters = document.querySelectorAll('.counter')
//  speed = 400

document.addEventListener('DOMContentLoaded', () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText
            // const inc = parseInt(target / speed)
    
            if(count < target)
            {
                counter.innerText = count + 1
                setTimeout(updateCount, 50) 
            }
            else
            {
                counter.innerText = target
            }
        }
    
        updateCount()
    })
})


// ------------------------------------------- Chart.js --------------------------------------------------


                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'


const ctx1 = document.getElementById('pieChart');
    const pieChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    const ctx2 = document.getElementById('lineChart');
    const lineChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                //255, 193, 7
                backgroundColor: [
                    'rgba(56, 72, 80, 0.8)'
                ],
                borderColor: [
                    'rgba(56, 72, 80, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });