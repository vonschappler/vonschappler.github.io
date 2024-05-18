import { timeConvert, getIcon } from "../../utils";

const gamesColsEn = [
  {
    field: "plat",
    headerName: "Library",
    headerAling: "center",
    minWidth: 150,
  },
  {
    field: "title",
    headerName: "Title",
    headerAling: "center",
    minWidth: 300,
  },
  {
    field: "relDate",
    headerName: "Release Year",
    headerAling: "center",
    minWidth: 150,
    align: "center",
  },

  {
    field: "gameTime",
    headerName: "Time played",
    headerAling: "center",
    minWidth: 150,
    align: "center",
    renderCell: (params) => timeConvert(params.value),
  },
  {
    field: "status",
    headerName: "Status",
    headerAling: "center",
    minWidth: 150,
    align: "center",
    renderCell: (params) => getIcon(params.value),
  },
];
const gamesColsPt = [
  {
    field: "plat",
    headerName: "Biblioteca",
    headerAling: "center",
    minWidth: 150,
  },
  {
    field: "title",
    headerName: "Título",
    headerAling: "center",
    minWidth: 300,
  },
  {
    field: "relDate",
    headerName: "Ano de Lançamento",
    headerAling: "center",
    minWidth: 150,
    align: "center",
  },

  {
    field: "gameTime",
    headerName: "Tempo de Jogo",
    headerAling: "center",
    minWidth: 150,
    align: "center",
    renderCell: (params) => timeConvert(params.value),
  },
  {
    field: "status",
    headerName: "Status",
    headerAling: "center",
    minWidth: 150,
    align: "center",
    renderCell: (params) => getIcon(params.value),
  },
];

export { gamesColsEn, gamesColsPt };
