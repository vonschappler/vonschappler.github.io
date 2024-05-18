import { useSelector } from "react-redux";

import { quotes as rows } from "../assets/data/index.js";
import {
  quotesColumnsEn as columnsEn,
  quotesColumnsPt as columnsPt,
} from "../features/stream/quotesColDefs.jsx";

import Table from "./Table";

const FeaturesQuotes = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <Table initialRows={rows} columns={isEnglish ? columnsEn : columnsPt} />
  );
};

export default FeaturesQuotes;
