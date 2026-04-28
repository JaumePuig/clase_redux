import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  agregarA,
  agregarB,
  agregarFizz,
  agregarBuzz,
  reiniciar,
} from "./redux";
import type { RootState } from "./store";

function Home() {
  const palabra = useSelector((state: RootState) => state.palabra.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      {palabra}
      <button onClick={() => dispatch(agregarA())}>Agregar A</button>
      <button onClick={() => dispatch(agregarB())}>Agregar B</button>
      <button onClick={() => dispatch(agregarFizz())}>Agregar Fizz</button>
      <button onClick={() => dispatch(agregarBuzz())}>Agregar Buzz</button>
      <button onClick={() => dispatch(reiniciar())}>Reiniciar</button>
    </div>
  );
}

export default Home;
