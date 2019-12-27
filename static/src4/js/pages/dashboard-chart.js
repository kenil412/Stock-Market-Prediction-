//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 	var options = {
      chart: {
        height: 510,
        type: 'candlestick',
      },
      series: [{
        data: [{'x': '2004-04-13 04:20:10', 'y': [34.26, 34.26, 34.26, 34.26]}, {'x': '2004-09-09 16:15:45', 'y': [32.89, 32.89, 32.89, 32.89]}, {'x': '2004-11-24 10:37:20', 'y': [33.58, 33.58, 33.58, 33.58]}, {'x': '2004-12-05 00:36:42', 'y': [32.86, 32.86, 32.86, 32.86]}, {'x': '2005-01-13 07:18:32', 'y': [29.43, 29.43, 29.43, 29.43]}, {'x': '2005-02-07 03:48:37', 'y': [29.37, 29.37, 29.37, 29.37]}, {'x': '2005-05-22 08:48:23', 'y': [27.45, 27.45, 27.45, 27.45]}, {'x': '2006-06-20 04:32:21', 'y': [29.1, 29.1, 29.1, 29.1]}, {'x': '2007-01-25 19:09:37', 'y': [31.46, 31.46, 31.46, 31.46]}, {'x': '2007-02-23 09:03:42', 'y': [34.75, 34.75, 34.75, 34.75]}, {'x': '2007-05-16 21:12:47', 'y': [39.04, 39.04, 39.04, 39.04]}, {'x': '2007-06-22 06:39:12', 'y': [40.34, 40.34, 40.34, 40.34]}, {'x': '2007-10-11 20:57:59', 'y': [38.08, 38.08, 38.08, 38.08]}, {'x': '2008-01-23 16:05:53', 'y': [28.04, 28.04, 28.04, 28.04]}, {'x': '2008-10-28 00:52:22', 'y': [9.04, 9.04, 9.04, 9.04]}, {'x': '2008-12-05 01:03:15', 'y': [8.06, 8.06, 8.06, 8.06]}, {'x': '2008-12-06 09:33:46', 'y': [8.15, 8.15, 8.15, 8.15]}, {'x': '2008-12-18 10:54:07', 'y': [10.35, 10.35, 10.35, 10.35]}]
		}],
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#bcn-btc"),
      options
    );

    chart.render();




 		

//---echart2
var dom = document.getElementById("e_chart_2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
	color: ['#00c292'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['the highest temperature','the lowest temperature']
    },
	
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'Maximum',
            type:'line',
            data:[220, 182, 191, 234, 190, 330, 310],
            markPoint: {
                data: [
                    {type: 'max', name: 'Maximum'},
                    {type: 'min', name: 'Minimum'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: 'Average'}
                ]
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}



