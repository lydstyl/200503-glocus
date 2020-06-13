import React from "react";
import styled from "styled-components";

import { spaces, colors } from "../../utils/cssVariables";

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spaces.s50};

  label {
    margin-right: ${spaces.s50};
  }

  input,
  textarea {
    width: 100%;
  }

  textarea {
    padding: ${spaces.s30};
  }

  select {
    background-color: ${colors.textOnP};
    border-width: 2px;
  }
`;

export const InputField = ({
  name,
  label,
  type,
  selected,
  options,
  ...other
}) => {
  if (type === "select") {
    return (
      <Field>
        <label htmlFor={name}>{label}</label>

        <select id={name} name={name} {...other}>
          <option selected value="pas de category">
            pas de categorie
          </option>

          {options &&
            options.map((o) => {
              if (o === selected) {
                return (
                  <option selected value={o}>
                    {o}
                  </option>
                );
              } else {
                return <option value={o}>{o}</option>;
              }
            })}
        </select>
      </Field>
    );
  }

  if (type === "textarea") {
    return (
      <Field>
        <textarea
          id={name}
          name={name}
          {...other} // rows="5" cols="33" ...
        />
      </Field>
    );
  }

  return (
    <Field>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} {...other} />
    </Field>
  );
};
