import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userLogin from "../../api/index";
import { AuthContext, RolesContext } from "../../config/Auth";
import { Table, Wrapper, Text, Buttons } from "./StCapture";
import axios from 'axios'
import CheckSession from "../../config/CheckSession";
import { FieldInput2 } from "../../components/fieldInput/FieldInput";

import { useHistory, Redirect } from "react-router";
import Api from "../../config/Api";
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
  const [result, setResult] = useState({})

  useEffect(() => {
    if (parsedJsonData) {
      userLogin.get("/api/admin/users/workshop/" + 1)
        .then(res => {
          setResult(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      history.push("/login");
      window.location.reload()
    }
  }, [])

  const UpdateCredential = (id) => {
    Api.get("/api/admin/users/workshop/" + id)
      .then(res => {
        setResult(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const UpdateUserStatus = (id, ws_id, workshop_statuss) => {
    Api.post("/api/admin/users/workshop/update/" + id + "/" + ws_id, {
      workshop_status: workshop_statuss, // This is the body part
    })
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (roles === '"GOD"') {
    var rows = [];
    for (var i = 0; i < result.length; i++) {
      rows.push(result[i]);
    }
    return (
      <Wrapper>
        <Text>WORKSHOP</Text>
        <FieldInput2 label="Workshop Day" type="radio" handleChange={e => { UpdateCredential(e.target.value); }}></FieldInput2 >
        <Table>
          <tr>
            <th width="5%">ID</th>
            <th>ACTION</th>
            <th>USER FULL NAME</th>
            <th width="15%">USER EMAIL</th>
            <th >WORKSHOP ID</th>
            <th>WORKSHOP STATUS</th>
          </tr>

          {rows.map((item, index) => {
            let verifColor = item.user_workshop_status === 0 ? 'red' : item.user_workshop_status === 1 ? "yellow" : item.user_workshop_status === 2 ? "blue" : "green"
            let compeRole = temporaryRole
            let verif = item.user_workshop_status === 0 ?
                          <td style={{ backgroundColor: verifColor }}>
                          BELUM DAFTAR</td> : 
                        item.user_workshop_status === 1 ?  
                          <td style={{ backgroundColor: verifColor }}>
                          <button onClick={e => { UpdateUserStatus(item.user_id, item.workshop_id, 2) }}>VERIF</button></td> : 
                        item.user_workshop_status === 2 ? 
                          <td style={{ backgroundColor: verifColor }}>
                          <button onClick={e => { UpdateUserStatus(item.user_id, item.workshop_id, 1) }}>UNVERIF
                          </button><button onClick={e => { UpdateUserStatus(item.user_id, item.workshop_id, 3) }}>LULUS</button></td> : 
                          <td style={{ backgroundColor: verifColor }}>
                          <button onClick={e => { UpdateUserStatus(item.user_id, item.workshop_id, 2) }}>BATAL LULUS
                          </button></td>
            return (
              <tr key={index}>
                <td width="3%">{item.user_id}</td>
                {verif}
                <td>{item.user_fullname}</td>
                <td width="15%">{item.user_email}</td>
                <td>{item.workshop_id}</td>
                <td>{item.user_workshop_status}</td>
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
