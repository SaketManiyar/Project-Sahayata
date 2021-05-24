const requestUrl = "https://api.thingspeak.com/channels/1380028/feeds.json";
fetch(requestUrl)
.then(response => response.json())
.then(data => { 
   // do something with the data the API has returned
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["15 May 2021","16 May 2021","17 May 2021","18 May 2021","19 May 2021","20 May 2021","21 May 2021","22 May 2021","23 May 2021","24 May 2021"],
        datasets: [{
            label: 'Average Temperature',
            data: [33,34,35,34,36,34,37,34,38,37],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
            
        }
    }
});
})