import { createListCell, getIcon } from "../../utils";

const commandsColumnsEn = [
  {
    field: "command",
    headerName: "Command",
    sortable: true,
    minWidth: 200,
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, false),
  },
  {
    field: "response",
    headerName: "Response",
    sortable: false,
    minWidth: 350,
    headerAlign: "center",
  },
  {
    field: "info",
    headerName: "Command Notes",
    sortable: false,
    minWidth: 350,
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, true),
  },
  {
    field: "group",
    headerName: "Group / Script",
    sortable: false,
    minWidth: 300,
    headerAlign: "center",
  },

  {
    field: "cost",
    headerName: "Cost",
    sortable: false,
    align: "right",
    headerAlign: "center",
  },
  {
    field: "cd",
    headerName: "Cooldown",
    sortable: false,
    minWidth: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, false),
  },
  {
    field: "user",
    headerName: "Used by",
    sortable: false,
    minWidth: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "affected",
    headerName: "Has translation",
    sortable: false,
    minWidth: 200,
    headerAlign: "center",
    renderCell: (params) => getIcon(params.value),
    align: "center",
  },
];

const commandsColumnsPt = [
  {
    field: "command",
    headerName: "Comando",
    sortable: true,
    minWidth: 200,
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, false),
  },
  {
    field: "response",
    headerName: "Resposta",
    sortable: false,
    minWidth: 350,
    headerAlign: "center",
  },
  {
    field: "info",
    headerName: "Notas de uso",
    sortable: false,
    minWidth: 350,
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, true),
  },
  {
    field: "group",
    headerName: "Grupo / Script",
    sortable: false,
    minWidth: 300,
    headerAlign: "center",
  },

  {
    field: "cost",
    headerName: "Custo",
    sortable: false,
    align: "right",
    headerAlign: "center",
  },
  {
    field: "cd",
    headerName: "Cooldown",
    sortable: false,
    minWidth: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => createListCell(params.value, false),
  },
  {
    field: "user",
    headerName: "Usado por",
    sortable: false,
    minWidth: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "affected",
    headerName: "É traduzido",
    sortable: false,
    minWidth: 200,
    headerAlign: "center",
    renderCell: (params) => getIcon(params.value),
    align: "center",
  },
];

export { commandsColumnsEn, commandsColumnsPt };
