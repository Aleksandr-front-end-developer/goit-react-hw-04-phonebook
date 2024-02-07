export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)} type="butoon">
        Delete
      </button>
    </li>
  );
};
