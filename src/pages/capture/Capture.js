import React, { useContext, useState, useEffect } from "react";
import { Table, Tables, Wrapper, Text, Buttons } from "./StCapture";
import Api from "../../config/Api";
import jwtDecode from "jwt-decode";
import { FieldInputCompe, FieldInputCompeCP, FieldInputCompeCTF, FieldInputCompeUI } from "../../components/fieldInput/FieldInput";
import { useHistory, Redirect } from "react-router";
const Button = ({ content, variant = "primary", onClicked }) => {
  return (
    <Buttons onClick={onClicked} variant={variant}>
      {content}
    </Buttons>
  );
};



const Capture = () => {
  const [token, setToken] = useState(localStorage.getItem("h0_ni128ehiond1289nsss"))
  const [decodedJwt, setdecodedJwt] = useState(jwtDecode(token))
  const [show, setShow] = useState(0)
  const [link, setLink] = useState("")
  const [teams_id, setTeams_id] = useState("")
  const [propos, setPropos] = useState("")
  const [role, setRole] = useState(JSON.stringify(decodedJwt.admin.admin_role))
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924sss");
  const history = useHistory()

  const [result, setResult] = useState({})
  const [results, setResults] = useState([])
  useEffect(() => {
    if (parsedJsonData) {
      Api.get("/api/admin/allteam",
        {
          headers: {

            "Authorization": "Bearer " + token
          }
        })
        .then(res => {
          if (role === '"INTI"') {
            setShow(0)
          }
          if (role === '"SEKBEN"') {
            setShow(0)
          }
          if (role === '"GOD"') {
            setShow(0)
          }
          if (role === '"CP"') {
            setShow(1)
          }
          if (role === '"UI"') {
            setShow(2)
          }
          if (role === '"CTF"') {
            setShow(5)
          }
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
  var source = []
  const CollectTeamData = (team_id) => {
    return (Api.get("/api/admin/allteam/" + team_id,
      {
        headers: {
          "Authorization": "Bearer " + token
        }
      }).then(res => { return res }).then(res => { return res }))
  }

  let rows = [];
  let datas = 0
  async function wow() {
    for (var i = 0; i < result.length; i++) {
      datas = datas + 1
      if (result[i].team_id) {
        var sata = await CollectTeamData(result[i].team_id)
        var dsata = await getSubmission(result[i].team_id)
        
        result[i].team_member = sata.data.message
        result[i].team_submiss = dsata.data.message[0] ? dsata.data.message[0] : ""
        rows.push(result[i])
      }
    }
    console.log(rows)
    setResults(rows)
  }

  const getSubmission = (id) => {
    return Api.get("/api/submissions/admin/uiux/getuploadedfile/" + id,
      {
        headers: {
          "Authorization": "Bearer " + token
        }
      }).then(res => { return res }).then(res => { return res })
  }

  const returntable = (role) => {
    if (show === 0 || show === 2) {
      return (
        <Table>
          <tr>
            <th width="5%">ID</th>
            <th width="10%">ACTION</th>
            <th width="15%">TEAM NAME</th>
            <th width="5%">COMP</th>
            <th width="15%">INSTITUTION</th>
            <th width="15%">PAYMENT</th>
            <th>TEAM INFO</th>
            <th>SUBMISSION</th>
          </tr>
          {compShow()}

        </Table>
      )
    }
    return (
      <Table>
        <tr>
          <th width="5%">ID</th>
          <th width="10%">ACTION</th>
          <th width="15%">TEAM NAME</th>
          <th width="5%">COMP</th>
          <th width="15%">INSTITUTION</th>
          <th width="15%">PAYMENT</th>
          <th>TEAM INFO</th>
        </tr>
        {compShow()}

      </Table>
    )
  }
  const compShow = () => {

    return (results.map((item, index) => {
      let verifColor = item.team_status === 0 ? 'red' : 'green'
      let verif = role === '"INTI"' ? <td style={{ backgroundColor: verifColor }}>
        NO ACTION ALLOWED</td> : item.team_status === 0 ?
        <button style={{ backgroundColor: verifColor }} onClick={e => { UpdateUserStatus(1, item.team_id) }}>
          VERIF BERKAS</button> :
        <div style={{ backgroundColor: verifColor }}>
          <button onClick={e => { UpdateUserStatus(0, item.team_id) }}>UNVERIF</button></div>
      if (show === 0 && item.competition_id != 2) {
        return (
          <tr key={index}>
            <th width="3%">{item.team_id}</th>
            <th width="10%">{verif}</th>
            <th width="15%">{item.team_name}</th>
            <th width="5%">{item.competition_id === 1 ? "CP" : item.competition_id === 2 ? "UI/UX" : item.competition_id === 3 ? "CTF" : "CTF SMA"}</th>
            <th width="15%">{item.institution_name}</th>
            <th width="15%">{ProofDetector("bayar", item.team_payment_proof)}</th>
            <th>
              <Tables width="100%">
                {item.team_member.map((anggota, index) => {
                  return (
                    <tr>
                      <th w width="30%">{anggota.user_fullname}</th>
                      <th width="30%">{ProofDetector("ktm", anggota.detail_team_identity_pic)}</th>
                      <th width="30%">{ProofDetector("berkas", anggota.detail_team_proof)}</th>
                    </tr>
                  )
                })}
              </Tables>
            </th>
            <th>This Comp Have No Submission</th>
          </tr>
        )
      } else if (show === 5) {
        if (item.competition_id === 4 || item.competition_id === 3) {
          return (
            <tr key={index}>
              <th width="3%">{item.team_id}</th>
              <th width="10%">{verif}</th>
              <th width="15%">{item.team_name}</th>
              <th width="5%">{item.competition_id === 1 ? "CP" : item.competition_id === 2 ? "UI/UX" : item.competition_id === 3 ? "CTF" : "CTF SMA"}</th>
              <th width="15%">{item.institution_name}</th>
              <th width="15%">{ProofDetector("bayar", item.team_payment_proof)}</th>
              <th>
                <Tables width="100%">
                  {item.team_member.map((anggota, index) => {
                    return (
                      <tr>
                        <th w width="30%">{anggota.user_fullname}</th>
                        <th width="30%">{ProofDetector("ktm", anggota.detail_team_identity_pic)}</th>
                        <th width="30%">{ProofDetector("berkas", anggota.detail_team_proof)}</th>
                      </tr>
                    )
                  })}
                </Tables>
              </th>
            </tr>
          )
        }
      } else {
        if (item.competition_id === 2 && 0 === show || item.competition_id === 2 && item.competition_id === show) {
          return (
            <tr key={index}>
              <th width="3%">{item.team_id}</th>
              <th width="10%">{verif}</th>
              <th width="15%">{item.team_name}</th>
              <th width="5%">{item.competition_id === 1 ? "CP" : item.competition_id === 2 ? "UI/UX" : item.competition_id === 3 ? "CTF" : "CTF SMA"}</th>
              <th width="15%">{item.institution_name}</th>
              <th width="15%">{ProofDetector("bayar", item.team_payment_proof)}</th>
              <th>
                <Tables width="100%">
                  {item.team_member.map((anggota, index) => {
                    return (
                      <tr>
                        <th w width="30%">{anggota.user_fullname}</th>
                        <th width="30%">{ProofDetector("ktm", anggota.detail_team_identity_pic)}</th>
                        <th width="30%">{ProofDetector("berkas", anggota.detail_team_proof)}</th>
                      </tr>
                    )
                  })}
                </Tables>
              </th>
              <th>
                {item.team_submiss === "" ? <p>TIM BELUM SUBMIT</p> : ProofDetector2("link", item.team_submiss.submission_link,  item.team_submiss.submission_file)}
 
              </th>
            </tr>
          )
        } else if (item.competition_id === show) {
          return (
            <tr key={index}>
              <th width="3%">{item.team_id}</th>
              <th width="10%">{verif}</th>
              <th width="15%">{item.team_name}</th>
              <th width="5%">{item.competition_id === 1 ? "CP" : item.competition_id === 2 ? "UI/UX" : item.competition_id === 3 ? "CTF" : "CTF SMA"}</th>
              <th width="15%">{item.institution_name}</th>
              <th width="15%">{ProofDetector("bayar", item.team_payment_proof)}</th>
              <th>
                <Tables width="100%">
                  {item.team_member.map((anggota, index) => {
                    return (
                      <tr>
                        <th w width="30%">{anggota.user_fullname}</th>
                        <th width="30%">{ProofDetector("ktm", anggota.detail_team_identity_pic)}</th>
                        <th width="30%">{ProofDetector("berkas", anggota.detail_team_proof)}</th>
                      </tr>
                    )
                  })}
                </Tables>
              </th>
            </tr>
          )
        }
      }
    }))
  }


  const UpdateUserStatus = (status, team_id) => {

    Api.put("/api/teams/" + status + "/" + team_id, {}, {
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

  function roleSelect(item) {
    if (role === '"INTI"') {
      return (
        <p>No Action Allowed</p>
      )

    }


    return (
      <p>No Action Allowed</p>
    )
  }

  const buttonShower = (competition_id) => {
    setShow(competition_id)
  }

  const ProofDetector2 = (name, type1, type2) => {

    if (type1 && type2) {
      return (
        <div>
          <button onClick={e => { window.open(type1) }}>LINK</button>
          <button onClick={e => { window.open("https://api.hology.my.id/proposal_uiux/" + type2) }}>PROPOSAL</button>
        </div>
      )

    }
    if (type1) {
      return (
        <div>
          <button onClick={e => { window.open(type1) }}>LINK</button>
          <p>TIDAK ADA PROP</p>
        </div>
      )

    }
    if (type2) {
      return (
        <div>
          <p>TIDAK ADA LINK</p>
          <button onClick={e => { window.open("https://api.hology.my.id/proposal_uiux/" + type2) }}>PROPOSAL</button>
        </div>
      )

    }
    return (
      <p>SUBMISS TIDAK ADA</p>
    )

  }
  const ProofDetector = (name, type) => {
    if (name === "ktm") {
      if (type) {
        return (
          <button onClick={e => { window.open("https://api.hology.my.id/ktm/" + type); }}>KTM</button>
        )
      }
      return (
        <p>KTM TIDAK ADA</p>
      )
    }
    if (name === "berkas") {
      if (type) {
        return (
          <button onClick={e => { window.open("https://api.hology.my.id/berkas_pendukung/" + type) }}>BERKAS LAIN</button>
        )

      }
      return (
        <p>BERKAS TIDAK ADA</p>
      )
    }
    if (name === "bayar") {
      if (type) {
        return (
          <button onClick={e => { window.open("https://api.hology.my.id/payment/" + type) }}>PEMBAYARAN</button>
        )

      }
      return (
        <p>BUKTI BAYAR TIDAK ADA</p>
      )
    }
  }
  const inputChooser = () => {
    if (role === '"CP"') {
      return (
        <FieldInputCompeCP label="Workshop Day" type="radio" handleChange={e => { setShow(parseInt(e.target.value)) }}></FieldInputCompeCP >
      )
    }
    if (role === '"UI"') {
      return (
        <FieldInputCompeUI label="Workshop Day" type="radio" handleChange={e => { setShow(parseInt(e.target.value)) }}></FieldInputCompeUI >
      )
    }
    if (role === '"CTF"') {
      return (
        <FieldInputCompeCTF label="Workshop Day" type="radio" handleChange={e => { setShow(parseInt(e.target.value)) }}></FieldInputCompeCTF >
      )
    }
    return (
      <FieldInputCompe label="Workshop Day" type="radio" handleChange={e => { setShow(parseInt(e.target.value)) }}></FieldInputCompe >
    )
  }
  return (
    <Wrapper>
      <Text>COMPETITION</Text>
      {inputChooser()}
      <br></br>
      <button onClick={e => { wow() }}>TAMPILKAN DATA</button>
      {returntable()}
    </Wrapper>
  );
};

export default Capture;
