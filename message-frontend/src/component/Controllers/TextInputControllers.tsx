import { Control, Controller, FieldError } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface TextInputControllersProp {
  label: string;
  name: string;
  control: Control<any>;
  error: FieldError | undefined;
}

const TextInputControllers = ({
  label,
  name,
  control,
  error,
}: TextInputControllersProp) => {
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="text-black dark:text-white w-full">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            error={error && true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={label}
            variant="standard"
            fullWidth
            sx={{
              backgroundColor: "transparent",
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: 13,
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& input::-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
                WebkitTextFillColor: "white",
                backgroundColor: "transparent !important",
              },
              "& input::-webkit-contacts-auto-fill-button": {
                display: "none !important",
              },
            }}
            autoComplete="off"
            InputProps={{
              autoComplete: "off",
              inputProps: {
                autoCorrect: "off",
                spellCheck: "false",
              },
            }}
          />
        )}
      />

      <div className="text-red-500 text-xs h-3 ">
        {error && <p>{error && `${error.message}`}</p>}
      </div>
    </div>
  );
};

export default TextInputControllers;
