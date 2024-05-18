const createComboBoxList = (list) => {
  return list.map((item) => {
    return {
      label: item,
      value: item,
      _id: item.toLowerCase(),
    };
  });
};

export { createComboBoxList };
