function outputCode(droperties){
	var codeOutput = document.getElementById("codeOutput");
	var html = buildCode(droperties);
	codeOutput.innerHTML = html;
	Prism.highlightElement(codeOutput);
}


function buildCode(droperties){
	var htmlBarChart;
	htmlBarChart = `
&lt;canvas id="myChart" width="400" height="400"&gt;&lt;/canvas&gt;
&lt;script&gt;
	var ctx = document.getElementById('myChart').getContext('2d');\n
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: [${droperties.labels.length ? "'" + droperties.labels.join("', '") + "'" : ""}],
	        datasets: [{
	            label: '# of Votes',
	            data: [${droperties.csvData.length ? droperties.csvData.join(", ") : ""}],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
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
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
&lt;/script&gt;
`;
	return htmlBarChart;
}
/*
*/