import styles from "../styles/SelectList.module.css";

const SelectList = ({ header, items, setState }) => {
  return (
    <div>
      <select
        defaultValue=""
        name={header}
        id={header}
        onChange={(e) => {
          console.log(`${header} changed`);
          setState && setState(e.target.value);
        }}
        className={styles.selectList}
      >
        <option value="" disabled hidden>
          {header}
        </option>
        {items.map((item, index) => (
          <option value={item} key={index} className={styles.listOption}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
