$(document).ready(function(){
  $(function(){
    $.get('/dbIndex/defautLEA',{},function(row){

      var data;
            data = [
            {
            "Equipe": row[0].Equipe,
            "Recette":row[0].Recette,
            "Nom":row[0].Nom,
            "Fréquence":row[0].FreqR,
            "Durée":(""+row[0].DureeR),
            "Heure":(""+row[0].Heure).replace('T', ' ').slice(0,-5),
            }
            ]

            var table = $('#defaut_table').DataTable({
                buttons: [
                'copy',
                {
                    extend: 'csv',
                    title: 'Temps arret/recette'
                },
                {
                    extend: 'excel',
                    title: 'Temps arret/recette'
                },
                {
                    extend: 'pdf',
                    title: 'Temps arret/recette'
                }
                ],
                responsive: true,
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                { data: 'Equipe'},
                { data: 'Recette' },
                { data: 'Nom' },
                { data: 'Fréquence' },
                { data: 'Durée' },
                { data: 'Heure' }
                ]
            });

            var nb_entry = parseInt(row[0].id,10);
            if (nb_entry > 1000) nb_entry = 1000;
            table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));
            for(i = 1; i < nb_entry; i++){
            table.rows.add([
                {    
                    "Equipe": row[i].Equipe,
                    "Recette":row[i].Recette,
                    "Nom":row[i].Nom,
                    "Fréquence":row[i].FreqR,
                    "Durée":(""+row[i].DureeR),
                    "Heure":(""+row[i].Heure).replace('T', ' ').slice(0,-5),
                }
            ]).draw();
            }
            
        })
      })
    })