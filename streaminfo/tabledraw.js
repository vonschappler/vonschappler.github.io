function tabledraw(toDraw) {
    var str = window.location.href;
    var check = str.split("display=");
    var displaying = check[1].split("&")
    if (check[1].includes("&lang="))
        var lang = displaying[1].split("lang=")
    var tableName = toDraw+"List"
    if (tableName.includes(",")) {
        tableName = tableName.replace(",", "")
    }
    var table = $("#"+ tableName).DataTable();
    table.destroy()
    if (toDraw == "quotes"){
        tableId = "#" + tableName
        table = $(tableId);
        console.log(tableId)
        table.DataTable({
            ajax: {
                url: 'quotes.json',
                dataSrc: 'quotes',
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
                { "data": "id" }
            ],
            order: [
                [0, "asc"]
            ],
            columnDefs: [{
                targets: 0,
                width: "10%",
                render: function (data, type, row, meta) {
                    return '<div class="ui right aligned">#' + data + '</div>'
                }
            }, {
                targets: 1,
                width: "70%"
            }, {
                targets: 2,
                width: "20%",
            }, {
                targets: 3,
                sType: 'numeric',
                width: "0%",
                visible: false
            }, {
                orderData: [3],
                targets: 0
            }, {
                orderData: [3],
                targets: 2
            }]
        });
    } else if (toDraw == "songs") {
        tableId = "#" + tableName
        table = $(tableId);
        console.log(tableId)
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
            }, {
                targets: 3,
                width: "15%",
            }]
        });
    } else if (toDraw == "commands") {
        var src = ""
        if (lang[1] == "en") {
            src = 'commands_en'
        } else if (lang[1] == "pt") {
            src = 'commands_pt'
        }
        tableId = "#" + tableName
        table = $(tableId);
        console.log(tableId)
        table.DataTable({
            ajax: {
                url: 'commands.json',
                dataSrc: src,
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
                [0, "asc"]
            ],
            columnDefs: [{
                targets: 0,
                width: "15%",
            }, {
                targets: 1,
                width: "30%"
            }, {
                targets: 2,
                width: "20%",
            }, {
                targets: 3,
                width: "5%",
            }, {
                targets: 4,
                width: "5%",
            }, {
                targets: 5,
                width: "8%",
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
    }
    
}