import styles from "../styles/SelectList.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const SelectList = ({ header, items, state, setter, setState, setCity }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{header}</InputLabel>
      <Select
        name={header}
        id={header}
        onChange={(e) => {
          setter && setter(e.target.value);
          if (setter && header === "Products") {
            setState("");
            setCity("");
          }
          if (setter && header === "State") {
            setCity("");
          }
        }}
        className={styles.selectList}
        label={header}
        value={state}
      >
        <MenuItem value="">
          <em>{header}</em>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem value={item} key={index} className={styles.listOption}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;
