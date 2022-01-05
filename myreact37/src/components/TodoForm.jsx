function TodoForm({ fieldValues, handleChange, handleSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className="border-2 border-purple-300 p-3">
      <h2 className="text-lg underline">Todo Form</h2>

      <select onChange={handleChange} name="color" value={fieldValues.color}>
        <option>Zinc</option>
        <option>BlueViolet</option>
        <option>Indigo</option>
        <option>Coral</option>
        <option>Crimson</option>
        <option>Fuchsia</option>
        <option>Amber</option>
        <option>Cyan</option>
      </select>

      <input
        type="text"
        className="border-2 border-gray-200"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
        value={fieldValues.content}
      />

      <button onClick={() => handleSubmit()}>저장</button>
    </div>
  );
}

export default TodoForm;
