import { ChangeEvent, FC, useState } from 'react';


const FormValidation: FC = () => {
  let [inputValue, setInputValue] = useState("");

  let updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={updateInput} />
      </form>
      <p>input value: {inputValue}</p>
    </div>
  );
}

export default FormValidation;