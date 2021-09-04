import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext, RolesContext } from "../../config/Auth";
import { Table, Wrapper, Text, Buttons } from "./StCapture";
import axios from 'axios'
import CheckSession from "../../config/CheckSession";
import { FieldInputWorkshop, FieldInputWorkshop2 } from "../../components/fieldInput/FieldInput";

import { useHistory, Redirect } from "react-router";
import Api from "../../config/Api";
const Button = ({ content, variant = "primary", onClicked }) => {
  return (
    <Buttons onClick={onClicked} variant={variant}>
      {content}
    </Buttons>
  );
};

const Capture = () => {
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924sss");
  let roles = String(localStorage.getItem("h0_sd8h28jeas6das6d8ddfsss"));
  const history = useHistory()
  const [result, setResult] = useState({})
  const [status, setstatus] = useState("1")
  const [token, setToken] = useState(localStorage.getItem("h0_ni128ehiond1289nsss"))

  useEffect(() => {
    if (parsedJsonData) {
      Api.get("/api/admin/users/workshop/" + 1, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
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
    Api.get("/api/admin/users/workshop/" + id, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
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
    }, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  var rows = [];
  var daftar = 0;
  var stat1 = 0;
  var stat2 = 0;
  var stat3 = 0;


  for (var i = 0; i < result.length; i++) {

    if (result[i].user_workshop_status !== 0) {
      daftar = daftar + 1;
      if (status === "1") {
        rows.push(result[i]);
      } else if (status === "2" && result[i].user_workshop_status === 1) {
        console.log("wtf")
        rows.push(result[i]);
      } else if (status === "3" && result[i].user_workshop_status === 2) {
        console.log("wtf")
        rows.push(result[i]);
      } else if (status === "4" && result[i].user_workshop_status === 3) {
        console.log("wtf")
        rows.push(result[i]);
      }
    }
    if (result[i].user_workshop_status === 1) {
      stat1 = stat1 + 1;
    }
    if (result[i].user_workshop_status === 2) {
      stat2 = stat2 + 1;
    }
    if (result[i].user_workshop_status === 3) {
      stat3 = stat3 + 1;
    }
  }


  return (
    <Wrapper overflow>
      <Text>WORKSHOP</Text>
      <div style={{ width :"25%", display: "flex", justifyContent:"space-between"}}>
        <FieldInputWorkshop label="Workshop Day" type="radio" handleChange={e => { UpdateCredential(e.target.value); }}></FieldInputWorkshop >
        <FieldInputWorkshop2 label="Workshop Day" type="radio" handleChange={e => { setstatus(e.target.value) }}></FieldInputWorkshop2 ></div>

      <h2>PENDAFTAR : {daftar}</h2>
      <h2>tidak terverifikasi : {stat1}</h2>
      <h2>verif tapi tidak lulus : {stat2}</h2>
      <h2>lulus : {stat3}</h2>
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
};

export default Capture;
