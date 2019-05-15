$(document).ready(function(){
  $(function(){
    $.get('/dbIndex/defautTrLEA',{},function(row){

      var data;
      data = [
        {
          "Défaut": row[0].defaut,
          "Dernière présence": (""+row[0].lasttime).replace('T', ' ').replace('.000Z',''),
          "Début": (""+row[0].debut).replace('T', ' ').replace('.000Z',''),
          "Fin": (""+row[0].fin).replace('T', ' ').replace('.000Z','')
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
          { data: 'Dernière présence' },
          { data: 'Début' },
          { data: 'Fin' }
        ]
      });
      var nb_entry = parseInt(row[0].id,10);
      if (nb_entry > 1000) nb_entry = 1000;
      table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));
      for(i = 1; i < nb_entry; i++){
      table.rows.add([
        {     
        "Défaut": row[i].defaut,
        "Dernière présence": (""+row[i].lasttime).replace('T', ' ').replace('.000Z',''),
        "Début": (""+row[i].debut).replace('T', ' ').replace('.000Z',''),
        "Fin": (""+row[i].fin).replace('T', ' ').replace('.000Z','')
        }
      ]).draw();
      }
    });
  });
});

setInterval(function(){
  $.get('/dbIndex/defautTrLEA',{},function(row){
    var data;
    data = [
      {
        "Défaut": row[0].defaut,
        "Dernière présence": (""+row[0].lasttime).replace('T', ' ').replace('.000Z',''),
        "Début": (""+row[0].debut).replace('T', ' ').replace('.000Z',''),
        "Fin": (""+row[0].fin).replace('T', ' ').replace('.000Z','')
      }
    ]
    var table = $('#defaut_TR').DataTable({
      buttons: [
        'copy', 'excel', 'pdf'
      ],
      paging: true,
      retrieve: true,
      data: data,
      columns: [
        { data: 'Défaut' },
        { data: 'Dernière présence' },
        { data: 'Début' },
        { data: 'Fin' }
      ]
    });
    table.clear()
    for (i = 0; i < 10; i++){
      table.rows.add([
        {     
        "Défaut": row[i].defaut,
        "Dernière présence": (""+row[i].lasttime).replace('T', ' ').replace('.000Z',''),
        "Début": (""+row[i].debut).replace('T', ' ').replace('.000Z',''),
        "Fin": (""+row[i].fin).replace('T', ' ').replace('.000Z','')
        }
      ]).draw();
    }
  });
},100*60);

/*
var trigger;
var Query;
context.set(bit_init) = msg.payload.value[0];
if(trigger != (BitOk = context.get(bit_init) && trigger != msg.payload.value[0]){
  context.set(value1) = msg.payload.value[1];
  context.set(bit_ready) = msg.payload.value[0];
  Query = "okokok";
  return msg.topic = Query;
}else if((BitOk = context.set(bit_ready) != msg.payload.value[0])){
  value1 = context.get(value1);
  context.set(bit_ready) = msg.payload.value[0];
  Query = "okokok";
  return blabla;
}else context.set(value1) = msg.payload.value.value[1];
*/