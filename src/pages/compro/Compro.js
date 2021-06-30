import React from "react";
import { Table, Wrapper, Text } from "./StCompro";
import {data} from '../capture/Capture'

const Compro = () => {
  return (
    <Wrapper>
      <Text>Competitive Programming</Text>
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
        {data.map((item, index) => {
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
          );
        })}
      </Table>
    </Wrapper>
  );
};

export default Compro;
