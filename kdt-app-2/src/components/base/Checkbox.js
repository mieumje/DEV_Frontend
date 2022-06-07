const Checkbox = ({ label = 'Label', checked = false, onChange}) => {
  return (
    <label>
      {label}
      <input type="checkBox" defaultChecked={checked} onChange={onChange}/>
    </label>
  )
};

export default Checkbox;