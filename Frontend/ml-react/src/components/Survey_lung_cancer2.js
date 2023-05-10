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
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import { useState, useEffect } from "react";
import ParticleEffect2 from "./ParticalsEffect2";
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
export default function Survey_lung_cancer2() {
  // let flag = false
  useEffect(() => {
//     if(flag === false){
//       alert("GENDER: 'M': 1, 'F': 0")
// flag = true
//     }
    const onBackButtonEvent = (e) => {
      e.preventDefault();
      navigate('/2'); // Replace '/my-path' with your desired path
    };

    navigate(window.location.pathname);
    window.addEventListener
    ('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);
  const navigate = useNavigate();
  const handleProstateCancerChange = (event) => {
    if (event.target.checked) {
      navigate("/survey_lung_cancer");
    } else {
  console.log("<---")
    }
  };
  
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const handleButtonClick = () => {
    setBackgroundColor('#176ec4');
  };
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [smoking, setSmoking] = useState();
  const [yellowFingers, setYellowFingers] = useState();
  const [anxiety, setAnxiety] = useState();
  const [peerPressure, setPeerPressure] = useState();
  const [chronicDisease, setChronicDisease] = useState();

  const [wheezing, setWheezing] = useState();
  const [alcoholConsuming, setAlcoholConsuming] = useState();
  const [coughing, setCoughing] = useState();
  const [shortnessOfBreath, setShortnessOfBreath] = useState();
  const [swallowingDifficulty, setSwallowingDifficulty] = useState();
  const [chestPain, setChestPain] = useState();

  const onButtonClick = async (
    gender,
    age,
    smoking,
    yellowFingers,
    anxiety,
    peerPressure,
    chronicDisease,

    wheezing,
    alcoholConsuming,
    coughing,
    shortnessOfBreath,
    swallowingDifficulty,
    chestPain
  ) => {
    const gender2 = parseFloat(gender);
    const age2 = parseFloat(age);
    const smoking2 = parseFloat(smoking);
    const yellowFingers2 = parseFloat(yellowFingers);
    const anxiety2 = parseFloat(anxiety);
    const peerPressure2 = parseFloat(peerPressure);
    const chronicDisease2 = parseFloat(chronicDisease);

    const wheezing2 = parseFloat(wheezing);
    const alcoholConsuming2 = parseFloat(alcoholConsuming);
    const coughing2 = parseFloat(coughing);
    const shortnessOfBreath2 = parseFloat(shortnessOfBreath);
    const swallowingDifficulty2 = parseFloat(swallowingDifficulty);
    const chestPain2 = parseFloat(chestPain);

    const res = await axios.post("/survey_lung_cancer", {
      GENDER: gender2,
      AGE: age2,
      SMOKING: smoking2,
      YELLOW_FINGERS: yellowFingers2,
      ANXIETY: anxiety2,
      PEER_PRESSURE: peerPressure2,
      CHRONIC_DISEASE: chronicDisease2,

      WHEEZING: wheezing2,
      ALCOHOL_CONSUMING: alcoholConsuming2,
      COUGHING: coughing2,
      SHORTNESS_OF_BREATH: shortnessOfBreath2,
      SWALLOWING_DIFFICULTY: swallowingDifficulty2,
      CHEST_PAIN: chestPain2,
    });
    console.log(res.data.prediction5);
    if (res.data.prediction5 === 1) {
      alert("Yes");
    } else if (res.data.prediction5 === 0) {
      alert("No");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <>
    <div class="main">
   <ParticleEffect2  />
<div class="components">
<div class="switch">    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={false} onChange={handleProstateCancerChange}/>}
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
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Gender"
          variant="standard"
          type="number"
          onChange={(e) => setGender(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Age"
          variant="standard"
          type="number"
          onChange={(e) => setAge(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Smoking"
          variant="standard"
          type="number"
          onChange={(e) => setSmoking(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="YellowFingers"
          variant="standard"
          type="number"
          onChange={(e) => setYellowFingers(e.target.value)}
        ></TextField>

         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Anxiety"
          variant="standard"
          type="number"
          onChange={(e) => setAnxiety(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="PeerPressure"
          variant="standard"
          type="number"
          onChange={(e) => setPeerPressure(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="ChronicDisease"
          variant="standard"
          type="number"
          onChange={(e) => setChronicDisease(e.target.value)}
        ></TextField>

         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Wheezing"
          variant="standard"
          type="number"
          onChange={(e) => setWheezing(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="AlcoholConsuming"
          variant="standard"
          type="number"
          onChange={(e) => setAlcoholConsuming(e.target.value)}
        ></TextField>

         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="Coughing"
          variant="standard"
          type="number"
          onChange={(e) => setCoughing(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="ShortnessOfBreath"
          variant="standard"
          type="number"
          onChange={(e) => setShortnessOfBreath(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="SwallowingDifficulty"
          variant="standard"
          type="number"
          onChange={(e) => setSwallowingDifficulty(e.target.value)}
        ></TextField>
         <TextField
              class="TextField"         
InputProps={{
      
 style: { color: "#000000" } // change text color
              }}
              InputLabelProps={{
                style: { color: "#000000" } // change label color
              }}
          id="standard-basic"
          placeholder="ChestPain"
          variant="standard"
          type="number"
          onChange={(e) => setChestPain(e.target.value)}
        ></TextField>
        </div>
 <div class="button">
        <Button
          variant="outlined"
          onClick={(e) =>
            onButtonClick(
              gender,
              age,
              smoking,
              yellowFingers,
              anxiety,
              peerPressure,
              chronicDisease,

              wheezing,
              alcoholConsuming,
              coughing,
              shortnessOfBreath,
              swallowingDifficulty,
              chestPain
            )
          }
          value="click"
        >
          Predictsurvey lung cancer
        </Button>
        </div>
        </div>
        </div>
        </div>
        </div>
     
    </>
  );
}
