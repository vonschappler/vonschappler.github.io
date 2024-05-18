import {
  Box,
  Autocomplete as BaseAutocomplete,
  TextField as BaseTextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

import FormError from "./Form.Error";

const FormCombobox = ({
  className = "",
  noOptionsText = "A opção escolhida não existe",
  freeSolo,
  label,
  control,
  options = [""],
  ...props
}) => {
  const { id, errors, variant, placeholder, disabled } = props;
  return (
    <Box className={`${className}`}>
      <Controller
        name={id}
        control={control}
        disabled={disabled}
        {...props}
        render={({ field: { onChange, value, ref, ...field } }) => (
          <BaseAutocomplete
            noOptionsText={noOptionsText}
            freeSolo={freeSolo}
            forcePopupIcon={freeSolo && true}
            getOptionLabel={(option) => {
              return option.label ?? "";
            }}
            onChange={(event, newValue) => {
              onChange(newValue ? newValue._id : null);
            }}
            disablePortal
            id={id}
            value={
              value
                ? options.find((option) => {
                    return value === option._id;
                  }) ?? null
                : null
            }
            options={options}
            renderInput={(params) => (
              <BaseTextField
                ref={ref}
                label={label}
                variant={variant}
                placeholder={placeholder}
                disabled={disabled}
                error={errors && true}
                className={`select ${errors && "errorSelect"}`}
                {...params}
              />
            )}
            {...field}
          />
        )}
      />
      {errors && <FormError text={errors.message} />}
    </Box>
  );
};

export default FormCombobox;
