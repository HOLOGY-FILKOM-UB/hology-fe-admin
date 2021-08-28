import React, { useContext, useState, useEffect } from "react";
import { Table, Wrapper, Text } from "./StWebinar";
import Api from "../../config/Api";
import { FieldInputWebinar } from "../../components/fieldInput/FieldInput";
import { useHistory, Redirect } from "react-router";


const data = [
  {
    id: 1,
    user_fullname: "Dewi Ayu",
    email: "dewi@gmail.com",
    status: 1
  },
  {
    id: 2,
    user_fullname: "Ayu Purnama",
    email: "ayu@gmail.com",
    status: 2
  }
]

const data2 = [
  {
    id: 1,
    user_fullname: "Dewi Ayu",
    email: "dewi@gmail.com",
    status: 0
  },
  {
    id: 2,
    user_fullname: "Ayu Purnama",
    email: "ayu@gmail.com",
    status: 1
  }
]

const Webinar = () => {
  
  const history = useHistory()
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924");
  const [result, setResult] = useState({})

  useEffect(() => {
    if (parsedJsonData) {
      setResult(data)
    } else {
      history.push("/login");
      window.location.reload()
    }
  }, [])

  const UpdateCredential = (id) => {
    if (id == 1) {
      setResult(data)
    }
    else {
      setResult(data2)
    }
  }
  var rows = [];
  for (var i = 0; i < result.length; i++) {
    rows.push(result[i]);
  }
  return (
    <Wrapper>
      <Text>WEBINAR ATTENDANCE</Text>
      <FieldInputWebinar style={{display : 'inline-block'}} label="Webinar Day" type="radio" handleChange={e => { UpdateCredential(e.target.value); }}></FieldInputWebinar >
      <Table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ATTENDED</th>
        </tr>
        {rows.map((item, index) => {
          return (
            <tr key={index}>
              <th>{item.id}</th>
              <th>{item.user_fullname}</th>
              <th>{item.email}</th>
              <th>{item.status == 1 ? "Hadir" : "Tidak Daftar"}</th>
            </tr>
          );
        })}
      </Table>
    </Wrapper>
  );
};

export default Webinar;
