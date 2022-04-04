import {FC, FormEvent, useRef } from 'react';

const FormValidation: FC = () => {
  let inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Input value: ${inputValue.current!.value}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;