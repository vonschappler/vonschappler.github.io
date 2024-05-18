const Flag = ({ country }) => {
  return (
    <img
      loading="lazy"
      width="24"
      srcSet={`https://flagcdn.com/w40/${country.toLowerCase()}.png 2x`}
      src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
      alt=""
    />
  );
};

export default Flag;
