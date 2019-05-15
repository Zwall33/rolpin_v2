$(document).ready(function(){
    $(function(){
        $.get('/dbIndex/TotalProd',{},function(row){
            var data;
            data = [
            {
            "Equipe": row[0].Equipe,
            "Nombre de Placage": (row[0].Feuille),
            "Nombre de Planche": (row[0].Planche),
            "Nombre de Pile": (row[0].Stack),
            "Début": (""+row[0].Heure).replace('T', ' ').replace('.000Z',''),
            "Fin": (""+row[0+1].Heure).replace('T', ' ').replace('.000Z','')
            }
            ]

            var table = $('#plis_equipe').DataTable({
                buttons: [
                'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                { data: 'Equipe' },
                { data: 'Nombre de Placage' },
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
                "Nombre de Placage": (row[i].Feuille),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }


            var table = $('#planche_equipe').DataTable({
                buttons: [
                  'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                  { data: 'Equipe' },
                  { data: 'Nombre de Planche' },
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
                "Nombre de Planche": (row[i].Planche),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }
    
            var table = $('#pile_equipe').DataTable({
                buttons: [
                    'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                    { data: 'Equipe' },
                    { data: 'Nombre de Pile' },
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
                "Nombre de Pile": (row[i].Stack),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
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
            "Recette": row[0].Current_recipe,
            "Nombre de Placage": (row[0].Feuille),
            "Nombre de Planche": (row[0].Planche),
            "Nombre de Pile": (row[0].Stack),
            "Début": (""+row[0].Heure).replace('T', ' ').replace('.000Z',''),
            "Fin": (""+row[0+1].Heure).replace('T', ' ').replace('.000Z','')
            }
            ]

            var table = $('#plis_recette').DataTable({
                buttons: [
                'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                { data: 'Recette' },
                { data: 'Nombre de Placage' },
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
                "Recette": row[i].Current_recipe,
                "Nombre de Placage": (row[i].Feuille),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }
            
            var table = $('#planche_recette').DataTable({
                buttons: [
                  'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                  { data: 'Recette' },
                  { data: 'Nombre de Planche' },
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
                "Recette": row[i].Current_recipe,
                "Nombre de Planche": (row[i].Planche),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }
    
            var table = $('#pile_recette').DataTable({
                buttons: [
                    'copy', 'excel', 'pdf'
                ],
                paging: true,
                retrieve: true,
                data: data,
                columns: [
                    { data: 'Recette' },
                    { data: 'Nombre de Pile' },
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
                "Recette": row[i].Current_recipe,
                "Nombre de Pile": (row[i].Stack),
                "Début": (""+row[i].Heure).replace('T', ' ').replace('.000Z',''),
                "Fin": (""+row[i+1].Heure).replace('T', ' ').replace('.000Z','')
                }
            ]).draw();
            }
        });
    
    });
});