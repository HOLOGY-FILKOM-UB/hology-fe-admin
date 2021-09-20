import React from "react";
import { Wrapper, Wrapper2, Label, Label2, Input } from './StFieldInput'

const FieldInput = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder="ketik di sini..."
        onChange={handleChange}
        {...props}
      />
    </Wrapper>
  );
};

const FieldInputWorkshop = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>JENIS WORKSHOP</Label>
      <center>
        <Wrapper2>
          <Label2>{label} 1</Label2>
          <Input name="workshop" value="1" defaultChecked
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
        <Wrapper2>
          <Label2>{label} 2</Label2>
          <Input name="workshop" value="2"
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
      </center>
    </Wrapper>
  );
};

const FieldInputWorkshop2 = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>JENIS WORKSHOP</Label>
      <center>
        <Wrapper2>
          <Label2>Semua</Label2>
          <Input name="stat" value="1" defaultChecked
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
        <Wrapper2>
          <Label2>tidak terverif</Label2>
          <Input name="stat" value="2"
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
        <Wrapper2>
          <Label2>tidak lulus</Label2>
          <Input name="stat" value="3"
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
        <Wrapper2>
          <Label2>lulus</Label2>
          <Input name="stat" value="4"
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
      </center>
    </Wrapper>
  );
};




const FieldInputWebinar = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>JENIS WEBINAR</Label>
      <center>
        <Wrapper2>
          <Label2>{label} 1</Label2>
          <Input name="webinar" value="1" defaultChecked
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
        <Wrapper2>
          <Label2>{label} 2</Label2>
          <Input name="webinar" value="2"
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
      </center>
    </Wrapper>
  );
};



const FieldInputCompe = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <center>
        <Label>JENIS LOMBA</Label>
        <div style={{ display: "flex" }}>
          <Wrapper2>
            <Label2>Semua</Label2>
            <Input name="stat" value="0" defaultChecked
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>CP</Label2>
            <Input name="stat" value="1"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>UI/UX</Label2>
            <Input name="stat" value="2"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>CTF</Label2>
            <Input name="stat" value="3"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>CTF SMA</Label2>
            <Input name="stat" value="4"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
        </div>
      </center>
    </Wrapper>
  );
};



const FieldInputCompeCP = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <center>
        <Label>JENIS LOMBA</Label>
        <Wrapper2>
          <Label2>CP</Label2>
          <Input name="stat" value="1" defaultChecked
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
      </center>
    </Wrapper>
  );
};
const FieldInputCompeUI = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <center>
        <Label>JENIS LOMBA</Label>
        <Wrapper2>
          <Label2>UI/UX</Label2>
          <Input name="stat" value="2" defaultChecked
            onChange={handleChange}
            {...props}
          />
        </Wrapper2>
      </center>
    </Wrapper>
  );
};
const FieldInputCompeCTF = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <center>

        <Label>JENIS LOMBA</Label>
        <div style={{ display: "flex" }}>
          <Wrapper2>
            <Label2>Semua</Label2>
            <Input name="stat" value="5" defaultChecked
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>

          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>CTF</Label2>
            <Input name="stat" value="3"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>

          <div style={{ marginRight: "10%" }}></div>
          <Wrapper2>
            <Label2>CTF SMA</Label2>
            <Input name="stat" value="4"
              onChange={handleChange}
              {...props}
            />
          </Wrapper2>
        </div>
      </center>
    </Wrapper>
  );
};
export { FieldInput, FieldInputCompe, FieldInputCompeCP, FieldInputCompeUI, FieldInputCompeCTF, FieldInputWorkshop, FieldInputWorkshop2, FieldInputWebinar }
