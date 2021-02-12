function tabledraw(toDraw) {
    var tableName = toDraw+"List"
    var table = $("#"+ tableName).DataTable();
    table.destroy()
    console.log(table)
    if (toDraw == "quotes"){
        table = $("#" + toDraw + "List");
        table.DataTable({
            ajax: {
                url: 'quotes.json',
                dataSrc: "quotes",
                async: true
            },
            lengthChange: false,
            autoWidth: false,
            scrollY: '39.3vh',
            scrollCollapse: true,
            paging: true,
            pageLength: 75,
            processing: false,
            columns: [
                { "data": "id" },
                { "data": "text" },
                { "data": "command" },
            ],
            order: [
                [0, "asc"]
            ],
            columnDefs: [{
                targets: 0,
                width: "20%"
            }, {
                targets: 1,
                width: "60%"
            }, {
                targets: 2,
                width: "20%",
                //className: "ui center aligned",
            }]
        });
        //table.draw()
    } else if (toDraw == "songs") {
        table = $("#" + toDraw + "List");
        table.DataTable({
            ajax: {
                url: 'songs.json',
                dataSrc: "songs",
                async: true
            },
            lengthChange: false,
            autoWidth: false,
            scrollY: '41vh',
            scrollCollapse: true,
            paging: true,
            pageLength: 75,
            processing: false,
            columns: [
                { "data": "artist" },
                { "data": "title" },
                { "data": "duration" },
                { "data": "command"}
            ],
            order: [
                [0, "asc"],
            ],
            columnDefs: [{
                targets: 0,
                width: "25%"
            }, {
                targets: 1,
                width: "50%"
            }, {
                targets: 2,
                width: "10%",
                //className: "ui center aligned",
            }, {
                targets: 3,
                width: "15%",
                //className: "ui center aligned",
            }]
        });
        //table.draw()
    } else if (toDraw == "commands") {
        table = $("#" + toDraw + "List");
        table.DataTable({
            ajax: {
                url: 'commands.json',
                dataSrc: "commands",
                async: true
            },
            lengthChange: false,
            autoWidth: false,
            scrollY: '29vh',
            scrollCollapse: true,
            paging: true,
            pageLength: 75,
            processing: false,
            columns: [
                { "data": "command" },
                { "data": "response" },
                { "data": "group" },
                { "data": "cost" },
                { "data": "cd"},
                { "data": "user"},
                { "data": "affected"}
            ],
            order: [
                [2, "asc"]
            ],
            columnDefs: [{
                targets: 0,
                width: "15%",
                //searchable: false
            }, {
                targets: 1,
                width: "30%"
            }, {
                targets: 2,
                width: "20%",
                //className: "ui center aligned",
            }, {
                targets: 3,
                //className: "ui center aligned",
                width: "5%",
                //className: "ui center aligned",
            }, {
                targets: 4,
                //className: "ui center aligned",
                width: "5%",
                //className: "ui center aligned",
            }, {
                targets: 5,
                width: "8%",
                
                //className: "ui center aligned",
            }, {
                targets: 6,
                width: "5%",
                className: "ui center aligned",
                sortable: false,
                seacheable: false,
                render: function (data, type, row, meta) {
                    switch (data) {
                        case true:
                            return "<i class=\"green check icon\"></i>"
                        case false:
                            return "<i class=\"red close icon\"></i>"
                    }
                }
            }]
        });
        //table.draw()
    }
    
}