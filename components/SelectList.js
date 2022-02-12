import styles from "../styles/SelectList.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const SelectList = ({ header, items, setState }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{header}</InputLabel>
      <Select
        defaultValue=""
        name={header}
        id={header}
        onChange={(e) => {
          console.log(`${header} changed`);
          setState && setState(e.target.value);
        }}
        className={styles.selectList}
        label={header}
      >
        <MenuItem disabled value="">
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
