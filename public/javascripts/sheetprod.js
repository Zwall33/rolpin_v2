$(document).ready(function(){
    $(function(){
        $.get('/dbIndex/TotalProd',{},function(row){
            var data;
            data = [
            {
            "Equipe": row[0].Equipe,
            "Placages": (row[0].Placage),
            "Panneaux": (row[0].Panneau),
            "Piles": (row[0].Stack),
            "Volume": (row[0].Volume),
            "Rebuts": (row[0].Rebuts),
            "Début": (""+row[0+1].Heure).replace('T', ' ').slice(0,-5),
            "Fin": (""+row[0].Heure).replace('T', ' ').slice(0,-5),
            }
            ]

            var table = $('#production_equipe').DataTable({
                buttons: [
                'copy',
                {
                    extend: 'csv',
                    title: 'Production équipe'
                  },
                {
                    extend: 'excel',
                    title: 'Production équipe'
                },
                {
                    extend: 'pdf',
                    title: 'Production équipe'
                }
                ],
                responsive: true,
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                { data: 'Equipe' },
                { data: 'Placages' },
                { data: 'Panneaux' },
                { data: 'Piles' },
                { data: 'Volume' },
                { data: 'Rebuts' },
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
                "Equipe": row[i].Equipe,
                "Placages": (row[i].Placage),
                "Panneaux": (row[i].Panneau),
                "Piles": (row[i].Stack),
                "Volume": (row[i].Volume),
                "Rebuts": (row[i].Rebuts),
                "Début": (""+row[i+1].Heure).replace('T', ' ').slice(0,-5),
                "Fin": (""+row[i].Heure).replace('T', ' ').slice(0,-5),
                }
            ]).draw();
            }
        });

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

$.get('/dbIndex/TempsArretProd',{},function(row){
    var data;
    data = [
    {
    "Poste":row[0].Poste,
    "Nom":row[0].Nom,
    "Fréquence":row[0].FreqP,
    "Durée":(""+row[0].DureeP),
    "Heure":(""+row[0].Heure).replace('T', ' ').slice(0,-5),
    }
    ]

    var table = $('#temps_prod').DataTable({
        buttons: [
        'copy',
        {
            extend: 'csv',
            title: 'Temps arret/poste'
          },
        {
            extend: 'excel',
            title: 'Temps arret/poste'
        },
        {
            extend: 'pdf',
            title: 'Temps arret/poste'
        }
        ],
        responsive: true,
        paging: true,
        retrieve: true,
        data: data,
        columns: [
        { data: 'Poste' },
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
            "Poste":row[i].Poste,
            "Nom":row[i].Nom,
            "Fréquence":row[i].FreqP,
            "Durée":(""+row[i].DureeP),
            "Heure":(""+row[i].Heure).replace('T', ' ').slice(0,-5),
        }
    ]).draw();
    }
    
});

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/


        $.get('/dbIndex/ShiftProd',{},function(row){
            var data;
            data = [
            {
            "Recette": row[0].Recette,
            "Placages": (row[0].Feuille),
            "Panneaux": (row[0].Panneau),
            "Piles": (row[0].Stack),
            "Volume": (row[0].Volume),
            "Rebuts": (row[0].Rebuts),
            "Début": (""+row[0+1].Heure).replace('T', ' ').slice(0,-5),
            "Fin": (""+row[0].Heure).replace('T', ' ').slice(0,-5),
            }
            ]

            var table = $('#production_recette').DataTable({
                buttons: [
                'copy',
                {
                    extend: 'csv',
                    title: 'Production recette'
                  },
                {
                    extend: 'excel',
                    title: 'Production recette'
                },
                {
                    extend: 'pdf',
                    title: 'Production recette'
                }
                ],
                responsive: true,
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                { data: 'Recette' },
                { data: 'Placages' },
                { data: 'Panneaux' },
                { data: 'Piles' },
                { data: 'Volume' },
                { data: 'Rebuts' },
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
                "Recette": row[i].Recette,
                "Placages": (row[i].Feuille),
                "Panneaux": (row[i].Panneau),
                "Piles": (row[i].Stack),
                "Volume": (row[i].Volume),
                "Rebuts": (row[i].Rebuts),
                "Début": (""+row[i+1].Heure).replace('T', ' ').slice(0,-5),
                "Fin": (""+row[i].Heure).replace('T', ' ').slice(0,-5)
                }
            ]).draw();
            }
            
        });


    
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

        $.get('/dbIndex/TempsArretRecette',{},function(row){
            var data;
            data = [
            {
            "Recette":row[0].Recette,
            "Nom":row[0].Nom,
            "Fréquence":row[0].FreqR,
            "Durée":(""+row[0].DureeR),
            "Heure":(""+row[0].Heure).replace('T', ' ').slice(0,-5),
            }
            ]

            var table = $('#temps_recette').DataTable({
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
                    "Recette":row[i].Recette,
                    "Nom":row[i].Nom,
                    "Fréquence":row[i].FreqR,
                    "Durée":(""+row[i].DureeR),
                    "Heure":(""+row[i].Heure).replace('T', ' ').slice(0,-5),
                }
            ]).draw();
            }
            
        });
    });
});