import { useSelector } from "react-redux";
import { DataGrid, GridToolbarQuickFilter, ptBR, enUS } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const env = import.meta.env.DEV;

const Table = ({ initialRows, columns, sortModel, className = "" }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const localeText = isEnglish
    ? enUS.components.MuiDataGrid.defaultProps.localeText
    : ptBR.components.MuiDataGrid.defaultProps.localeText;
  const rows = initialRows.map((row, i) => {
    return { ...row, id: i };
  });
  return (
    <DataGrid
      localeText={localeText}
      className={`tableData ${className}`}
      getRowHeight={() => "auto"}
      slots={{
        toolbar: () => {
          return (
            <>
              {env && <Button className="button m-3">Upload data</Button>}
              <GridToolbarQuickFilter
                className="border-0 border-b-[4px] border-solid border-b-von-teal p-3"
                variant="standard"
                InputProps={{
                  className: "tableInput !rounded-none p-3",
                }}
                hiddenLabel
              />
            </>
          );
        },
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
        sorting: {
          sortModel: sortModel
            ? sortModel
            : [{ field: columns.at(0).field, sort: "asc" }],
        },
      }}
      pagination={true}
      slotProps={{
        cell: {
          className: "tableCell",
        },
        row: {
          className:
            "bg-von-lightGray text-von-darkGray dark:bg-von-darkGray dark:text-von-lightGray hover:bg-von-lightGray hover:dark:bg-von-darkGray  !border-none transition-all duration-700",
        },
        footer: {
          className: "tableFooter",
        },
      }}
      pageSizeOptions={[5, 10, 50, 100]}
      disableColumnResize
      disableColumnMenu
      disableRowSelectionOnClick
      hideFooterSelectedRowCount
    />
  );
};

export default Table;
