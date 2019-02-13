//Tableau de 10 valeurs (Stack/jour et Plis/heure)
var Nb_plis_heure = new Array(10);
var Nb_stack_jour = new Array(10);

var inter = 5000
var y_Humi=0;
var z_Temp=0;

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

    if(car == 'T') {
        ShiftTab(Nb_stack_jour);
        for (i = -9; i <= 0; i += 1) {
            data.push([time + i * inter,Nb_stack_jour[i+9]]);
        }
        document.getElementById("stack/jour").innerHTML = Nb_stack_jour[9] + 'Stack/jour ';
    }
    if(car == 'H') {
        ShiftTab(Nb_plis_heure);
        for (i = -9; i <= 0; i += 1) {
            data.push([time + i * inter,Nb_plis_heure[i+9]]);
        }
        document.getElementById("plis/heure").innerHTML = Nb_plis_heure[9] + 'plis/heure';
    }
    return data;
}
/*$(function (){
    $.get('/dbIndex',{},function(row10){
        alert(row10[8]);
    });
});*/

$(function(){ //attention blocage CORS donc ajout d'extention "Allow-Control-Allow-Origin: *" à chrome
    $.get('/dbIndex/Nb_plis_init', {},function(row){// init tab
        var j = 0;
        for (i=9; i>=0 ;i--){
            Nb_stack_jour[i] = row[i].Nb_stack_jour;
            Nb_plis_heure[i] = row[i].Nb_plis_heure;
            j++;
        }

        $(function () {/////////////////////////////////// graphique Nb_stack_jour et Nb_plis_heure
            /////////// graph 1 /////////////////////
            var myChart = Highcharts.chart('container', {
                chart: {
                    backgroundColor: '#313031',
                    type: 'spline',
                    marginRight: 85,
                    events: {
                    load: function () {
                        
                        var series = this.series[0];
                        var series1 = this.series[1];
                        setInterval(function (){
                                        ShiftTab(Nb_stack_jour);
                                        ShiftTab(Nb_plis_heure);
                                        $(function(){ //attention blocage CORS donc ajout d'extention "Allow-Control-Allow-Origin: *" à chrome
                                            $.get('/dbIndex/Nb_plis_heure', {},function(row){
                                                z_Temp = row[0].Nb_stack_jour;
                                                y_Humi = row[0].Nb_plis_heure;
                                                var x =GetTime(); // current time
                                                Nb_stack_jour[9] = z_Temp;
                                                Nb_plis_heure[9] = y_Humi;
                                                series.addPoint([x, z_Temp], false, true);
                                                series1.addPoint([x, y_Humi], true, true);
                                                document.getElementById("stack/jour").innerHTML = z_Temp + ' Stack/jour';
                                                document.getElementById("plis/heure").innerHTML = y_Humi + ' plis/heure';
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
                        format: '{value:%H:%M:%S}',
                    }
                },

                tooltip: {
                    xDateFormat: '%d/%m/%Y <br> %H:%M:%S',
                    style: {
                        color: '#e0e0e3',  
                    },
                    borderColor: '#b8b8b8',
                    backgroundColor: '#313031',
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
                                    format : '{value} Stack/j'
                                },
                            title: {
                                text: 'Stack/jour',
                    
                                style: {
                                    color: '#ff0000',
                                    fontWeight : 'bold'
                                }
                            }
                            },
                
                //----Axe des ordonné N°2  03b9ff----//
                            {
                                opposite: true,
                                lineColor: '#038197',
                                lineWidth: 3,
                                labels: {
                                    style: {
                                        color: '#038197',    
                                    },
                                    format : '{value} plis/h'
                                },
                                title: {
                                    text: 'Plis/heure',
                    
                                style: {
                                    color: '#038197',
                                    fontWeight : 'bold'
                                }
                                }
                            }
                ],

        /////////----Séies----/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                series: [

                //----Séies N°1----//
                {
                    name: 'Stack/jour',
                    yAxis: 0,
                    data: dataserie('T'),
                    shadow: {
                        width: 5,
                        opacity: 0.2,
                        color: '#ff0000'
                    },
                    color: '#ff0000',
                    tooltip:{
                        valueSuffix : 'Stack/jour'
                    }
                },

                //----Séies N°2----//        
                {
                    name: 'Plis/heure',
                    yAxis: 1,
                    data: dataserie('H'),
                    shadow: {
                        width: 5,
                        opacity: 0.2,
                        color: '#038197'
                    },
                    color: '#038197',            
                    tooltip:{
                        valueSuffix : 'plis/heure'
                    }
                }]
            });
        ////////////////fin graph 1//////////////
        });


        /*$(function () {/////////////////////////////////// graphique Luminosité
        /////////// graph luminosité /////////////////////
            var Luminosite = Highcharts.chart('graphLuminosite', {
                chart: {
                    backgroundColor: '#313031',
                    type: 'spline',
                    marginRight: 85,
                    events: {
                    load: function () {
                        
                        var series = this.series[0];
                        setInterval(function () {
                                        ShiftTab(Luminosite);
                                        $(function(){ //attention blocage CORS donc ajout d'extention "Allow-Control-Allow-Origin: *" à chrome
                                            $.get('http://127.0.0.1:3000/data_capteur', {},function(data_capteur){
                                                z_Lumi = data_capteur[0].Luminosite;
                                                var x =GetTime(); // current time
                                                Luminosite[9] = z_Lumi;
                                                series.addPoint([x, z_Lumi], true, true);
                                                document.getElementById("lumi").innerHTML = z_Lumi + 'lm';
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
                    itemStyle: {                // couleur et format du texte des legendes /
                        color: '#e0e0e3',
                        fontWeight: 'bold'
                    },
                    itemHoverStyle: {
                        color: '#b8b8b8'
                    }
                },
                
        /////////----Titre Graphique----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                title: {
                    text: 'Stat Info Jardin Connecté',
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
                        format: '{value:%H:%M:%S}',
                    }
                },

                tooltip: {
                    xDateFormat: '%d/%m/%Y <br> %H:%M:%S',
                    style: {
                        color: '#e0e0e3',  
                    },
                    borderColor: '#b8b8b8',
                    backgroundColor: '#313031',
                    shared : true
                },

        /////////----Axe des ordonné----///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                yAxis: [
                //----Axe des ordonné N°1----//
                            {
                                lineColor: '#FCC938',
                                lineWidth: 3,
                                labels: {
                                    style: {
                                        color: '#FCC938',
                                    },
                                    format : '{value} lm'
                                },
                            title: {
                                text: 'Luminosite',
                    
                                style: {
                                    color: '#FCC938',
                                    fontWeight : 'bold'
                                }
                            }
                            }
                
                        ],

        /////////----Séies----/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                series: [

                            //----Séies N°1----//
                            {
                                name: 'Luminosite',
                                yAxis: 0,
                                data: dataserie('L'),
                                shadow: {
                                    width: 5,
                                    opacity: 0.2,
                                    color: '#FCC938'
                                },
                                color: '#FCC938',
                                tooltip:{
                                    valueSuffix : 'lm'
                                }
                            }
                        ]
            });
        });*/

        /*$(function () {/////////////////////////////////// graphique Fertilite
        /////////// graph luminosité /////////////////////
            var Fertilite = Highcharts.chart('graphFertilite', {
                chart: {
                    backgroundColor: '#313031',
                    type: 'spline',
                    marginRight: 85,
                    events: {
                    load: function () {
                        
                        var series = this.series[0];
                        setInterval(function () {
                                        ShiftTab(Fertilite);
                                        $(function(){ //attention blocage CORS donc ajout d'extention "Allow-Control-Allow-Origin: *" à chrome
                                            $.get('http://127.0.0.1:3000/data_capteur', {},function(data_capteur){
                                                z_Fert = data_capteur[0].Fertilite;
                                                var x =GetTime(); // current time
                                                Fertilite[9] = z_Fert;
                                                series.addPoint([x, z_Fert], true, true);
                                                document.getElementById("fert").innerHTML = z_Fert + 'plis/heure';
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
                    itemStyle: {                // couleur et format du texte des legendes /
                        color: '#e0e0e3',
                        fontWeight: 'bold'
                    },
                    itemHoverStyle: {
                        color: '#b8b8b8'
                    }
                },
                
        /////////----Titre Graphique----////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                title: {
                    text: 'Stat Info Jardin Connecté',
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
                        format: '{value:%H:%M:%S}',
                    }
                },

                tooltip: {
                    xDateFormat: '%d/%m/%Y <br> %H:%M:%S',
                    style: {
                        color: '#e0e0e3',  
                    },
                    borderColor: '#b8b8b8',
                    backgroundColor: '#313031',
                    shared : true
                },

        /////////----Axe des ordonné----///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                yAxis: [
                //----Axe des ordonné N°1----//
                            {
                                lineColor: '#54A657',
                                lineWidth: 3,
                                labels: {
                                    style: {
                                        color: '#54A657',
                                    },
                                    format : '{value} lm'
                                },
                            title: {
                                text: 'Fertilite',
                    
                                style: {
                                    color: '#54A657',
                                    fontWeight : 'bold'
                                }
                            }
                            }
                
                        ],

        /////////----Séies----/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                series: [

                            //----Séies N°1----//
                            {
                                name: 'Fertilite',
                                yAxis: 0,
                                data: dataserie('F'),
                                shadow: {
                                    width: 5,
                                    opacity: 0.2,
                                    color: '#54A657'
                                },
                                color: '#54A657',
                                tooltip:{
                                    valueSuffix : 'lm'
                                }
                            }
                        ]
            });
        });*/
    });
});