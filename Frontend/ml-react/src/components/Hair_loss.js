import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { ClassNames } from "@emotion/react";
import { Grid } from "@mui/material";
import ParticleEffect from "./ParticalsEffect";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
export default function Hair_loss() {
  // let flag = false
  useEffect(() => {
//     if(flag === false){
//       alert("stress_level: 'Low': 1, 'Medium': 2, 'High': 3, 'Very High': 4 shampoo_brand: 'Pantene': 1, 'Hair & Shoulder': 2 swimming: 'No': 0, 'Yes': 1 hair_washing: 'Y': 1, 'N': 0")
// flag = true
//     }
    const onBackButtonEvent = (e) => {
      e.preventDefault();
      navigate('/'); // Replace '/my-path' with your desired path
    };

    navigate(window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);
  const navigate = useNavigate();
  const handleProstateCancerChange = (event) => {
    if (event.target.checked) {
    console.log("--->")
    } else {
      navigate("/hair_loss2");
    }
  };
  

  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const handleButtonClick = () => {
    setBackgroundColor('#176ec4');
  };

  const hair_loss = ''
  const [stay_up_late, setStay_up_late] = useState();
  const [pressure_level, setPressure_level] = useState();
  const [coffee_consumed, setCoffee_consumed] = useState();
  const [brain_working_duration, setBrain_working_duration] = useState();

  const [stress_level, setStress_level] = useState();
  const [shampoo_brand, setShampoo_brand] = useState();
  const [hair_washing, setHair_washing] = useState();
  const [swimming, setSwimming] = useState();
  const [hair_grease, setHair_grease] = useState();
  const [dandruff, setDandruff] = useState();
  const [libido, setLibido] = useState();

  const onButtonClick = async (
    stay_up_late,
    pressure_level,
    coffee_consumed,
    brain_working_duration,
    stress_level,
    shampoo_brand,
    swimming,
    hair_washing,
    hair_grease,
    dandruff,
    libido
  ) => {
    const stay_up_late2 = parseFloat(stay_up_late);
    const pressure_level2 = parseFloat(pressure_level);
    const coffee_consumed2 = parseFloat(coffee_consumed);
    const brain_working_duration2 = parseFloat(brain_working_duration);
    const stress_level2 = parseFloat(stress_level);
    const shampoo_brand2 = parseFloat(shampoo_brand);
    const swimming2 = parseFloat(swimming);
    const hair_washing2 = parseFloat(hair_washing);
    const hair_grease2 = parseFloat(hair_grease);
    const dandruff2 = parseFloat(dandruff);
    const libido2 = parseFloat(libido);

    const res = await axios.post("/hair_loss", {
      stay_up_late: stay_up_late2,
      pressure_level: pressure_level2,
      coffee_consumed: coffee_consumed2,
      brain_working_duration: brain_working_duration2,
      stress_level: stress_level2,
      shampoo_brand: shampoo_brand2,
      swimming: swimming2,
      hair_washing: hair_washing2,
      hair_grease: hair_grease2,
      dandruff: dandruff2,
      libido: libido2,
    });
    console.log(res.data.prediction2);
    if (res.data.prediction2 === 1) {
      alert("hair loss is Few");
    } else if (res.data.prediction2 === 2) {
      alert("hair loss is Medium");
    } else if (res.data.prediction2 === 3) {
      alert("hair loss is Many");
    } else if (res.data.prediction2 === 4) {
      alert("hair loss is A lot");
    } else {
      alert("Something Went Wrong")
    }
    // 'Few': 1, 'Medium': 2, 'Many': 3, 'A lot': 4
  };

  return (
    <>
      <>
       <div class="main">
   <ParticleEffect  />
<div class="components">
<div class="switch">    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={handleProstateCancerChange}/>}
        label=" "
      />
    
    
      
    </FormGroup></div>
<div class="container2">
  
          {/* <NavBarComponent2 /> */}
          <div class="card2">
       
            <div class="textfields">
              
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              
              id="filled-basic"
              // label="Stay_up_late"
              placeholder="Stay_up_late"
              variant="filled"
              type="number"
              onChange={(e) => setStay_up_late(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Pressure_level"
              placeholder="Pressure_level"
              variant="filled"
              type="number"
              onChange={(e) => setPressure_level(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Coffee_consumed"
              placeholder="Coffee_consumed"
              variant="filled"
              type="number"
              onChange={(e) => setCoffee_consumed(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Brain_working_duration"
              placeholder="Brain_working_duration"
              variant="filled"
              type="number"
              onChange={(e) => setBrain_working_duration(e.target.value)}
            ></TextField>

            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Stress_level"
              placeholder="Stress_level"
              variant="filled"
              type="number"
              onChange={(e) => setStress_level(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Shampoo_brand"
              placeholder="Shampoo_brand"
              variant="filled"
              type="number"
              onChange={(e) => setShampoo_brand(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Hair_washing"
              placeholder="Hair_washing"
              variant="filled"
              type="number"
              onChange={(e) => setHair_washing(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Swimming"
              placeholder="Swimming"
              variant="filled"
              type="number"
              onChange={(e) => setSwimming(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Hair_grease"
              placeholder="Hair_grease"
              variant="filled"
              type="number"
              onChange={(e) => setHair_grease(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Dandruff"
              placeholder="Dandruff"
              variant="filled"
              type="number"
              onChange={(e) => setDandruff(e.target.value)}
            ></TextField>
            <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#ffffff" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#ffffff" } // change label color
              }}
              id="filled-basic"
              // label="Libido"
              placeholder="Libido"
              variant="filled"
              type="number"
              onChange={(e) => setLibido(e.target.value)}
            ></TextField>
            </div>
            <div class="button">
            <Button
              variant="outlined"
              onClick={(e) =>
                onButtonClick(
                  stay_up_late,
                  pressure_level,
                  coffee_consumed,
                  brain_working_duration,
                  stress_level,
                  shampoo_brand,
                  swimming,
                  hair_washing,
                  hair_grease,
                  dandruff,
                  libido
                )
              }
              value="click"
            >
              Predict Hair loss
            </Button>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
    </>
  );
}
