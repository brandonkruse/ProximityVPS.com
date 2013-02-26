
$(document).ready(init);

function init() {

	$.plot(
		$("#line-graph"),
		[
			{
				label: "Stat1",
				color: '#E18B52',
				data: [ [0, 0], [1, 1], [2, 1], [3, 2] ],
				lines: {show: true},
				points: {show: true}
			},
			{
				label: "Stat2",
				color: '#818181',
				data: [ [0, 3], [1, 5], [2, 8], [3, 13] ],
				lines: {show: true},
				points: {show: true}	
			}
		]
	);
	
	$.plot(
		$("#bar-graph"),
		[
			{
				label: "Total Things Per Year",
				color: '#E18B52',
				data: [ [2011, 450], [2012, 550], [2013, 320], [2014, 700] ],
				bars: {
					show: true,
					barWidth: 0.5,
					align: "center"
				}	
			}
		],
		{
			xaxis: {
				ticks: [
					[2011, "2011"],
					[2012, "2012"],
					[2013, "2013"],
					[2014, "2014"]
				]
			}	
		}
	);
	
	// example 3 - basic pie chart
	$.plot(
		$("#flot-example-3"),
		[
			{
				label: "This",
				data: 44	
			},
			{
				label: "That",
				data: 75
			},
			{
				label: "The Other Thing",
				data: 22
			}
		],
		{
			series: {
				pie: {
					show: true,
					label: {
						show: true
					}
				}
			}
		} 
	);
}
