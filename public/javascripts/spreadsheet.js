$(document).ready(function(){
  $(function(){
    $.get('/dbIndex/defautTrLEA',{},function(row){

      var data;
      data = [
        {
          "ID": (row[0].id),
          "Défaut": row[0].Nom,
          "Etat": row[0].Etat,
          "Heure": (""+row[0].Heure).replace('T', ' ').replace('.000Z',''),
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
          {data: 'ID'},
          { data: 'Défaut' },
          { data: 'Etat' },
          { data: 'Heure' },
        ]
      });
      var nb_entry = parseInt(row[0].id,10);
      if (nb_entry > 1000) nb_entry = 1000;
      table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));
      for(i = 1; i < nb_entry; i++){
      table.rows.add([
        {
        "ID": (row[i].id),     
        "Défaut": row[i].Nom,
        "Etat": row[i].Etat,
        "Heure": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
        }
      ]).draw();
      }
    });
  });
});

/*setInterval(function(){
  $.get('/dbIndex/defautTrLEA',{},function(row){
    var data;
    data = [
      {
        "Défaut": row[0].Nom,
        "Etat": (""+row[0].Etat).replace('T', ' ').replace('.000Z',''),
        "Heure": (""+row[0].Heure).replace('T', ' ').replace('.000Z',''),
        "Fin": (""+row[0+1].Heure).replace('T', ' ').replace('.000Z','')
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
        { data: 'Etat' },
        { data: 'Heure' },
        { data: 'Fin' }
      ]
    });
    table.clear()
    for (i = 0; i < 10; i++){
      table.rows.add([
        {     
        "Défaut": row[i].Nom,
        "Etat": (""+row[i].Etat).replace('T', ' ').replace('.000Z',''),
        "Heure": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
        "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
        }
      ]).draw();
    }
  });
},1*60);*/

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