import React, { useContext } from "react";
import styles from "./styles.module.css";

function TableCart({ handleIncrement, handleDecrement, handleRemove }) {
  const { state, dispatch } = useContext();

  return (
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th> </th>
        <th>Товар</th>
        <th>Остаток</th>
        <th>Кол-во</th>
        <th> </th>
      </tr>
      </thead>
    </table>
  );
}

export default TableCart;
