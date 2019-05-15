//Tableau de 10 valeurs (Stack/jour et Plis/heure)
var Nb_plis_heure = new Array(10);
var Nb_stack_jour = new Array(10);

var inter = 5000
var y_plis=0;
var z_stack=0;


//document.getElementById("stack/jour").innerHTML = Nb_stack_jour[9] + ' Stack/jour ';


function ShiftTab(t){
    for (i = 0; i < 9; i++) {
        t[i]=t[i+1];  
    }
}

function GetTime(){
    
    var d = new Date();
    var t = d.getTime()/inter;
    var tamp = parseInt(t);
    tamp = t - tamp;
    tamp = tamp.toPrecision(3);
    t = t -tamp;
    t = t * inter;

    return t;
}

function dataserie(car){
    var data = [],
    time = GetTime(),
    i;

    if(car == 'S') {
        ShiftTab(Nb_stack_jour);
        for (i = -9; i <= 0; i += 1) {
            data.push([time + i * inter,Nb_stack_jour[i+9]]);
        }
        //document.getElementById("stack/jour").innerHTML = Nb_stack_jour[9] + ' Stack/jour ';
    }
    if(car == 'P') {
        ShiftTab(Nb_plis_heure);
        for (i = -9; i <= 0; i += 1) {
            data.push([time + i * inter,Nb_plis_heure[i+9]]);
        }
        //document.getElementById("plis/heure").innerHTML = Nb_plis_heure[9] + ' plis/heure';
    }
    return data;
}

$(function(){ 
    $.get('/dbIndex/Nb_plis_init', {},function(row){// init tab
        for (i=9; i>=0 ;i--){
            Nb_stack_jour[i] = row[i].Nb_stack_jour;
            Nb_plis_heure[i] = row[i].Nb_plis_heure;
        }
        

        $(function () {/////////////////////////////////// graphique Nb_stack_jour et Nb_plis_heure
            /////////// graph 1 /////////////////////
            var myChart = Highcharts.chart('container', {
                chart: {
                    backgroundColor: '#635e5e',
                    type: 'spline',
                    marginRight: 85,
                    events: {
                    load: function () {
                        
                        var series = this.series[0];
                        setInterval(function (){
                            
                            ShiftTab(Nb_plis_heure);
                            $(function(){ 
                                $.get('/dbIndex/Nb_plis_heure', {},function(row){
                                    y_plis = row[0].Nb_plis_heure;
                                    var x =GetTime();
                                    Nb_plis_heure[9] = y_plis;

                                    series.addPoint([x, y_plis], true, true);
                                
                                $.get('/dbIndex/AverageHour', {},function(row){
                                    document.getElementById("plis/min").innerHTML = row[0].plis + ' Plis/min';
                                });
                                $.get('/dbIndex/AverageMin', {},function(row){
                                    document.getElementById("plis/heure").innerHTML = row[0].plis + ' Plis/heure';
                                });
                            });
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
                    text: 'Production LEA',
                    align: 'center',
                    style: {
                        color: '#e0e0e3',
                        fontWeight: 'bold'
                    }
                },

        /////////----Exporter Graphique----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                exporting: {
                    enabled: false  //enlève l'option pour exporter le graphique en format pdf, png ...
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