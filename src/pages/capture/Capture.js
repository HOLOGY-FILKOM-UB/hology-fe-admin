import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userLogin from "../../api/index";
import { AuthContext, RolesContext } from "../../config/Auth";
import { Table, Wrapper, Text, Buttons } from "./StCapture";
import axios from 'axios'
import CheckSession from "../../config/CheckSession";

import { useHistory, Redirect } from "react-router";
const Button = ({ content, variant = "primary", onClicked }) => {
  return (
    <Buttons onClick={onClicked} variant={variant}>
      {content}
    </Buttons>
  );
};

export const data = [
  {
    id: 1,
    action: 'Verified',
    teamName: "pro team gemink",
    competition: "CTF",
    institution: "Brawijaya",
    teamInfo: ["Ali", "Jagad", "Fachry"],
    submission: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },

  {
    id: 2,
    action: 'Unverified',
    teamName: "pro team gemink",
    competition: "CTF",
    institution: "Brawijaya",
    teamInfo: ["Ali", "Jagad", "Fachry"],
    submission: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },

  {
    id: 3,
    action: 'Unverified',
    teamName: "pro team gemink",
    competition: "CP",
    institution: "Brawijaya",
    teamInfo: ["Ali", "Jagad", "Fachry"],
    submission: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },

  {
    id: 4,
    action: 'Verified',
    teamName: "pro team gemink",
    competition: "UI/UX",
    institution: "Brawijaya",
    teamInfo: ["Ali", "Jagad", "Fachry"],
    submission: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },

  {
    id: 1000,
    action: 'Unverified',
    teamName: "pro team gemink",
    competition: "UI/UX",
    institution: "Brawijaya",
    teamInfo: ["Ali", "Jagad", "Fachry"],
    submission: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  }
];

const Capture = () => {
  const [role, setRole] = useContext(RolesContext)
  const temporaryRole = "CTF"
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924");
  let roles = String(localStorage.getItem("h0_sd8h28jeas6das6d8ddf"));
  const history = useHistory()
  useEffect(() => {
    if (parsedJsonData) {
      userLogin.get("/api/teams/")
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      
    } else {
      history.push("/login");
      window.location.reload()
    }
  },[])

  if (roles === '"GOD"') {
    return (
      <Wrapper>
        <Text>Competition</Text>
        <Table>
          <tr>
            <th width="5%">ID</th>
            <th>ACTION</th>
            <th>TEAM NAME</th>
            <th width="15%">COMPETITION</th>
            <th >INSTITUTION</th>
            <th>TEAM INFO</th>
            <th>SUBMISSION</th>
          </tr>
          {data.map((item, index) => {
            let verifColor = item.action === "Verified" ? 'green' : 'red'
            let compeRole = temporaryRole

            if (compeRole === item.competition) {
              return (
                <tr key={index}>
                  <td width="3%">{item.id}</td>
                  <td style={{ backgroundColor: verifColor }}>VERIF / UNVERIF / DELETE</td>
                  <td>{item.teamName}</td>
                  <td width="15%">{item.competition}</td>
                  <td>{item.institution}</td>
                  <td>{item.teamInfo.map((anggota) => {
                    return (
                      <div>
                        {anggota}
                        <br />
                      </div>
                    )
                  })}</td>
                  {/* <td><Link to = {item.submission} target = "_blank" download>Click Here</Link></td> */}
                  <td><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Click Here</a></td>
                </tr>
              )
            }

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
            <th width="5%">ID</th>
            <th>ACTION</th>
            <th>TEAM NAME</th>
            <th width="15%">COMPETITION</th>
            <th >INSTITUTION</th>
            <th>TEAM INFO</th>
            <th>SUBMISSION</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <th width="3%">{item.id}</th>
                <th>No Action Allowed</th>
                <th>{item.teamName}</th>
                <th width="15%">{item.competition}</th>
                <th>{item.institution}</th>
                <th>{item.teamInfo.map((anggota) => {
                  return (
                    <div>
                      {anggota}
                      <br />
                    </div>
                  )
                })}</th>
                <th>No Action Allowed</th>
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
