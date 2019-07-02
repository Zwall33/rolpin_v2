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
