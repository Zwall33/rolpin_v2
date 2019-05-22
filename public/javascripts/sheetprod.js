$(document).ready(function(){
    $(function(){
        $.get('/dbIndex/TotalProd',{},function(row){
            var data;
            data = [
            {
            "Equipe": row[0].Equipe,
            "Placages": (row[0].Feuille),
            "Panneaux": (row[0].Planche),
            "Piles": (row[0].Stack),
            "Volume": (row[0].Volume),
            "Rebuts": (row[0].Rebuts),
            "Début": (""+row[0+1].Heure).replace('T', ' ').replace('.000Z',''),
            "Fin": (""+row[0].Heure).replace('T', ' ').replace('.000Z','')
            }
            ]

            var table = $('#production_equipe').DataTable({
                buttons: [
                'copy', 'excel', 'pdf'
                ],
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
                "Placages": (row[0].Feuille),
                "Panneaux": (row[0].Planche),
                "Piles": (row[0].Stack),
                "Volume": (row[0].Volume),
                "Rebuts": (row[0].Rebuts),
                "Début": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i].Heure).replace('T', ' ').replace('.000Z','')
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
            "Panneaux": (row[0].Planche),
            "Piles": (row[0].Stack),
            "Volume": (row[0].Volume),
            "Rebuts": (row[0].Rebuts),
            "Début": (""+row[0+1].Heure).replace('T', ' ').replace('.000Z',''),
            "Fin": (""+row[0].Heure).replace('T', ' ').replace('.000Z','')
            }
            ]

            var table = $('#production_recette').DataTable({
                buttons: [
                'copy', 'excel', 'pdf'
                ],
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

            var nb_entry = 1000;
            table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));
            for(i = 1; i < nb_entry; i++){
            table.rows.add([
                {     
                "Recette": row[i].Recette,
                "Placages": (row[i].Feuille),
                "Panneaux": (row[i].Planche),
                "Piles": (row[i].Stack),
                "Volume": (row[0].Volume),
                "Rebuts": (row[0].Rebuts),
                "Début": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }
            
        });
    
    });
});