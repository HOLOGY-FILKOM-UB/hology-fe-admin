import React from "react";
import { Background, Container } from "./StModals";

const Modals = ({ showModal, setShowModal, content }) => {
  return (
    <>
      {showModal ? (
        <Background onClick = {() => setShowModal((prev) => !prev)}>
          <Container>
            <h1>{content}</h1>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default Modals;
