import React from "react";
import { Table, Wrapper, Text } from "./StCapture";

export const data = [
  {
    id: 1,
    action: "no action allowed",
    teamName: "pro team gemink",
    competition: "ctf",
    institution: "Brawijaya",
    teamInfo: "Ali (Ketua)",
    submission: "Klick here",
  }
];

const Capture = () => {
  return (
    <Wrapper>
      <Text>Capture the Flag</Text>
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
        {data.map((item, index)=> {
          return (
            <tr key={index}>
              <th>{item.id}</th>
              <th>{item.action}</th>
              <th>{item.teamName}</th>
              <th>{item.competition}</th>
              <th>{item.institution}</th>
              <th>{item.teamInfo}</th>
              <th>{item.submission}</th>
            </tr>
          )
        }) 

        }
      </Table>
    </Wrapper>
  );
};

export default Capture;
