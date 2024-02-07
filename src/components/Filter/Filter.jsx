export const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Finds contacts by name
      <input
        onChange={e => onFilter(e.target.value)}
        className="form__input"
        type="text"
        name="search"
        value={value}
      />
    </label>
  );
};
