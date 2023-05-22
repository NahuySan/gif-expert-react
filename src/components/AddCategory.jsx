import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState("")

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim() === "") return;
    onNewCategory(inputValue.trim() ) 
    setInputValue("");
  }

  return (
    <form onSubmit={event => onSubmit(event)}>
      <input 
      type="text" 
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={event => onInputChange(event)} //*esto puede ser solo la funcion pero es para dejar en claro que esto siempre toma el evento del change como argumento y se lo pasa a la funcion lo mismo mas arriba con onsubmit
      />
      
    </form>
  )
}
