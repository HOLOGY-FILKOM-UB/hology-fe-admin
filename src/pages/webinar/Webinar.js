import React from "react";
import { Table, Wrapper, Text } from "./StWebinar";
import {data} from '../capture/Capture'

const Webinar = () => {
  // const [data, setData]

  return (
    <Wrapper>
      <Text>Webinar</Text>
      <Table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>INSTITUTION</th>
          <th>ATTENDED</th>
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

export default Webinar;
