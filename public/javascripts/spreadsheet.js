//setInterval(function(){
  
  $(document).ready(function(){
    var data;
    
    $.get('/dbIndex/defautLEA',{})
    $(function(){
      $.get('/dbIndex/defautLEA',{},function(row){
        data = [
          {
          "Défaut": ""+row[0].Defaut,
          "Présence": ""+row[0].Presence,
          "Dernière présence": (""+row[0].LastTime).replace('T', ' ').replace('.000Z',''),
          "Nombre par jour": ""+row[0].Frequence
          }
        ]
        
        var table = $('#defaut_table').DataTable({
          buttons: [
            'copy', 'excel', 'pdf'
          ],
          paging: true,
          retrieve: true,
          data: data,
          columns: [
            { data: 'Défaut' },
            { data: 'Présence' },
            { data: 'Dernière présence' },
            { data: 'Nombre par jour' }
          ]
        });
        var nb_entry = parseInt(row[0].Frequence,10);
        table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));
        for(i = 1; i < nb_entry; i++){
        table.rows.add([{
            
            "Défaut": ""+row[i].Defaut,
            "Présence": ""+row[i].Presence,
            "Dernière présence": (""+row[i].LastTime).replace('T', ' ').replace('.000Z',''),
            "Nombre par jour": ""+row[i].Frequence
            
        }
        ]).draw();
        }
      });
    });
  });
//},1000);