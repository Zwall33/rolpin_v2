//Tableau de 10 valeurs (Stack/jour et Plis/heure)
var plis = new Array(10);


var inter = (1000*60*60);
var y_plis=0;



//document.getElementById("stack/jour").innerHTML = plis[9] + ' Stack/jour ';


function ShiftTab(t){
    for (i = 0; i < 8; i++) {
        t[i]=t[i+1];  
    }
}

function GetTime(){
    
    var d = new Date();
    var t = (d.getTime()/inter)+ (d.getTimezoneOffset(60));
    var tamp = parseInt(t);
    tamp = t - tamp;
    tamp = tamp.toPrecision(3);
    t = t -tamp;
    t = t * inter;

    return t;
}

function dataserie(car){
    var data = [],
    time = GetTime();
    if(car == 'S') {
        ShiftTab(plis);
        for (i = -9; i <= 0; i += 1) {
            data.push([time + i * inter,plis[i+9]]);
        }
    }
    return data;
}

var plis;

$(function(){ 
    $.get('/dbIndex/InitAverageHour', {},function(row){// init tab
        for (i = 9; i >= 0; i--){
            plis[i] = row[i].plis;
        }
        document.getElementById("plis/heure").innerHTML = row[0].plis + ' Plis/heure';
        $.get('/dbIndex/AverageMin', {},function(row){
            document.getElementById("plis/min").innerHTML = row[0].plis + ' Plis/min';
        });

        $(function () {/////////////////////////////////// graphique plis_heure
            var myChart = Highcharts.chart('container', {
                chart: {
                    backgroundColor: '#635e5e',
                    type: 'spline',
                    marginRight: 85,
                    events: {
                    load: function () {
                        
                        var series = this.series[0];
                        setInterval(function (){
                            
                            ShiftTab(plis);
                            $(function(){ 
                                $.get('/dbIndex/AverageHour', {},function(row){
                                    y_plis = row[0].plis;
                                    var x =GetTime();
                                    plis[9] = y_plis;
                                    series.addPoint([x, y_plis], true, true);
                                    document.getElementById("plis/heure").innerHTML = row[0].plis + ' Plis/heure';
                                    
                                
                                /*$.get('/dbIndex/AverageHour', {},function(row){
                                    document.getElementById("plis/heure").innerHTML = row[0].plis + ' Plis/heure';
                                });*/
                                });
                            });
                            $.get('/dbIndex/AverageMin', {},function(row){
                                document.getElementById("plis/min").innerHTML = row[0].plis + ' Plis/min';
                            });
                        }, inter);
                    }
                }  
            },
            time: {
                useUTC: false
            },

        /////////----Legend----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                legend: {
                    itemStyle: {                // couleur et format du texte des legendes //
                        color: '#e0e0e3',
                        fontWeight: 'bold'
                    },
                    itemHoverStyle: {
                        color: '#b8b8b8'
                    }
                },
                
        /////////----Titre Graphique----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                title: {
                    text: 'Plis par heure LEA',
                    align: 'center',
                    style: {
                        color: '#e0e0e3',
                        fontWeight: 'bold'
                    }
                },

        /////////----Exporter Graphique----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: null,
                            onclick: function () {
                                this.exportChart();
                            }
                        }
                    }
                },

        /////////----Axe des abscisse----//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 10,
                    labels: {
                        style: {
                            color: '#e0e0e3',
                        },
                        format: '{value:%H:%M:%S}',
                    }
                },

                tooltip: {
                    xDateFormat: '%d/%m/%Y <br> %H:%M:%S',
                    style: {
                        color: '#e0e0e3',  
                    },
                    borderColor: '#b8b8b8',
                    backgroundColor: '#635e5e',
                    shared : true
                },

        /////////----Axe des ordonné----///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                yAxis: [
                //----Axe des ordonné N°1----//
                            {
                                lineColor: '#ff0000',
                                lineWidth: 3,
                                labels: {
                                    style: {
                                        color: '#ff0000',
                                    },
                                    format : '{value} plis/h'
                                },
                            title: {
                                text: 'plis/heure',
                    
                                style: {
                                    color: '#ff0000',
                                    fontWeight : 'bold'
                                }
                            }
                            },
                ],

        /////////----Séies----/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                series: [

                //----Séies N°1----//
                {
                    name: 'plis/heure',
                    yAxis: 0,
                    data: dataserie('S'),
                    shadow: {
                        width: 5,
                        opacity: 0.2,
                        color: '#ff0000'
                    },
                    color: '#ff0000',
                    tooltip:{
                        valueSuffix : 'plis/heure'
                    }
                },

                ]
            });
        });
    });
});