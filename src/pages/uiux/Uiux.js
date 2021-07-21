import React, {useState} from "react";
import Modals from "../../components/Modals/Modals";
import { Table, Wrapper, Text, Paragraph } from "./StUiux";
import { Data } from "../../config/Data";

const Uiux = () => {
  const [showModal, setShowModal] = useState(false);
  const [ModalContent, SetModalContent] = useState("default");
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <Text>UI/UX Design</Text>
      <Table>
        <tr>
          <th>ID</th>
          <th>ACTION</th>
          <th>TEAM NAME</th>
          <th>COMPETITION</th>
          <th>INSTITUTION</th>
          <th>TEAM INFO</th>
          <th>SUBMISSION</th>
        </tr>
        {Data.filter((name) => name.competition.includes("uiux")).map(
          (item, index) => {
            return (
              <tr key={index}>
                <th>{item.id}</th>
                <th>{item.action}</th>
                <th>{item.teamName}</th>
                <th>{item.competition}</th>
                <th>{item.institution}</th>
                <th>{item.teamInfo}</th>
                <th>
                  <Paragraph
                    onClick={() => {
                      openModal();
                      SetModalContent(`submission dengan id ${item.id}`);
                    }}
                  >
                    {item.submission}
                  </Paragraph>
                </th>
              </tr>
            );
          }
        )}
      </Table>
      <Modals
        showModal={showModal}
        setShowModal={setShowModal}
        content={ModalContent}
      />
    </Wrapper>
  );
};

export default Uiux;
