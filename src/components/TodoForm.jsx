import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    //adicionar todo e limpar os campos
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todoForm">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione um foco</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
        </select>
        <button type="submit">Criar nova Tarefa</button>
      </form>
    </div>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
