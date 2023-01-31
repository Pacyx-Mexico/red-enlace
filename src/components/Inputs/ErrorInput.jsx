import React from "react";
import styled from "styled-components";

export default function ErrorInput({
  init,
  errorFX,
  errorTest,
  errorNull,
  textError,
  textNull,
  textAlign,
}) {
  return (
    <>
      <ErrorInput2 textAlign={textAlign} errorFX={errorFX}>
        {init ? (
          ""
        ) : (
          <>
            {errorTest ? textError : ""}
            {errorNull ? textNull : ""}
          </>
        )}
      </ErrorInput2>
    </>
  );
}

const ErrorInput2 = styled.div`
  width: 100%;
  height: 3.6rem;
  font-size: 1.8rem;
  color: #ff0000;
  font-weight: 500;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  opacity: ${({ errorFX }) => (errorFX ? "1" : "0")};
  transform: scale(${({ errorFX }) => (errorFX ? "1" : "0.7")});
  transition: all ease-in-out 0.2s;
`;
