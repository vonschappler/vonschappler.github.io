import { useSelector } from "react-redux";

import { songs as rows } from "../assets/data/index";
import {
  songsColumnsEn as columnsEn,
  songsColumnsPt as columnsPt,
} from "../features/stream/songsColDefs";

import Table from "./Table";

const FeaturesSongs = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <Table initialRows={rows} columns={isEnglish ? columnsEn : columnsPt} />
  );
};

export default FeaturesSongs;
