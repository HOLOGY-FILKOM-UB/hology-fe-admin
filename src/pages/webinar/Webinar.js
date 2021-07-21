import React, { useState } from "react";
import { Table, Wrapper, Text } from "./StWebinar";
import { Data } from "../../config/Data";
import Button from "../../components/button/Button";

const Webinar = () => {
  return (
    <Wrapper>
      <Text>Webinar</Text>
      <Button content="Semua User" variant="dsadas" />
      <Button content="Pendaftar Webinar" variant="primary" />
      <Table>
        <tr>
          <th>ID</th>
          <th>ACTION</th>
          <th>userName</th>
          <th>INSTITUTION</th>
          <th>Webinar</th>
        </tr>
        {Data.filter((name) => name.competition.includes("webinar")).map(
          (item, index) => {
            return (
              <>
                <tr key={index}>
                  <th>{item.id}</th>
                  <th>{item.action}</th>
                  <th>{item.userName}</th>
                  <th>{item.institution}</th>
                  <th>
                    {item.webinar.map((item, index) => {
                      return (
                        <span key={index}>
                          {item} <br></br>
                        </span>
                      );
                    })}
                  </th>
                </tr>
              </>
            );
          }
        )}
      </Table>
    </Wrapper>
  );
};

export default Webinar;
