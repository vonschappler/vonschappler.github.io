const quotesColumnsEn = [
  {
    field: "id",
    headerName: "Quote number",
    sortable: false,
    type: "number",
    width: 120,
    headerAlign: "center",
  },
  {
    field: "command",
    headerName: "Command",
    sortable: false,
    type: "string",
    width: 150,
    headerAlign: "center",
  },

  {
    field: "text",
    headerName: "Quote",
    sortable: false,
    type: "string",
    flex: 1,
    headerAlign: "center",
  },
];

const quotesColumnsPt = [
  {
    field: "id",
    headerName: "Número da Frase",
    sortable: false,
    type: "number",
    width: 135,
    headerAlign: "center",
  },
  {
    field: "command",
    headerName: "Comando",
    sortable: false,
    type: "string",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "text",
    headerName: "Frase",
    sortable: false,
    type: "string",
    flex: 1,
    headerAlign: "center",
  },
];

export { quotesColumnsEn, quotesColumnsPt };
