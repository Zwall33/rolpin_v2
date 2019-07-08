$(document).ready(function(){
  $(function(){
    $.get('/dbIndex/defautTrLEA',{},function(row){

      var data;
      data = [
        {
          "ID": (row[0].id),
          "Défaut": row[0].Nom,
          "Heure": (row[0].Heure).replace('T', ' ').slice(0,-5),
          "Durée":(row[0].Duree),
          }
      ]
      
      var table = $('#defaut_table').DataTable({
        buttons: [
          'copy',
          {
            extend: 'csv',
            title: 'defaut'
          },
          {
            extend: 'excel',
            title: 'defaut'
          },
          {
            extend: 'pdf',
            title: 'defaut'
          }
        ],
        responsive: true,
        paging: true,
        retrieve: true,
        data: data,
        columns: [
          { data: 'ID'},
          { data: 'Défaut' },
          { data: 'Heure' },
          { data : 'Durée'}
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
        "Heure": (row[i].Heure).replace('T', ' ').slice(0,-5),
        "Durée":(row[i].Duree),
        }
      ]).draw();
      }
    });
  });
});