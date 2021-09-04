import React, { useContext, useState, useEffect } from "react";
import { Table, Wrapper, Text } from "./StWebinar";
import Api from "../../config/Api";
import { FieldInputWebinar } from "../../components/fieldInput/FieldInput";
import { useHistory, Redirect } from "react-router";

const Webinar = () => {
  const [token, setToken] = useState(localStorage.getItem("h0_ni128ehiond1289nsss"))
  const history = useHistory()
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924sss");
  const [result, setResult] = useState({})

  useEffect(() => {
    if (parsedJsonData) {
      Api.get("/api/users/",
      {
        headers: {
          "Authorization": "Bearer "+ token
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

  var rows = [];
  let data = 0
  for (var i = 0; i < result.length; i++) {
    data = data + 1;
    if(result[i].user_register_in_webinar == 1) rows.push(result[i]);
  }

  return (
    <Wrapper>
      <Text>WEBINAR</Text>
      <h2>Jumlah Pendaftar = {data}</h2>
      <Table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
        {rows.map((item, index) => {
          return (
            <tr key={index}>
              <th>{item.user_id}</th>
              <th>{item.user_fullname}</th>
              <th>{item.user_email}</th>
            </tr>
          );
        })}
      </Table>
    </Wrapper>
  );
};

export default Webinar;
