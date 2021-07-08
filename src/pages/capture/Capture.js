import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext, RolesContext } from "../../config/Auth";
import { Table, Wrapper, Text } from "./StCapture";

export const data = [
  {
    id: 1,
    action: "no action allowed",
    teamName: "pro team gemink",
    competition: "ctf",
    institution: "Brawijaya",
    teamInfo: "Ali (Ketua)",
    submission: "./logo192.png",
  },

  {
    id: 2,
    action: "no action allowed",
    teamName: "pro team gemink",
    competition: "ctf",
    institution: "Brawijaya",
    teamInfo: "Ali (Ketua)",
    submission: "Click Here",
  }
];

const Capture = () => {
  const [role, setRole] = useContext(RolesContext)
  console.log(role)
  if (role === "Sekben") {
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
                <th><Link to = {item.submission} target = "_blank" download>Click Here</Link></th>
              </tr>
            )
          }) 
          }
        </Table>
      </Wrapper>
    );
  } else {
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
                <th>No Action Allowed!</th>
              </tr>
            )
          }) 
          }
        </Table>
      </Wrapper>
    );
  }
};

export default Capture;
