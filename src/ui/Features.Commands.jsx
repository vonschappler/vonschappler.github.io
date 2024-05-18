import { useSelector } from "react-redux";

import {
  commandsEn as rowsEn,
  commandsPt as rowsPt,
} from "../assets/data/index.js";

import {
  commandsColumnsEn as columnsEn,
  commandsColumnsPt as columnsPt,
} from "../features/stream/commandsColDefs.jsx";

import Table from "./Table";

const FeaturesCommands = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <Table
      initialRows={isEnglish ? rowsEn : rowsPt}
      columns={isEnglish ? columnsEn : columnsPt}
    />
  );
};

export default FeaturesCommands;
