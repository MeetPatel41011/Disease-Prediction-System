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

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
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
export default function Migraine() {
  useEffect(() => {
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
      navigate("/migraine2");
    }
  };
  
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const handleButtonClick = () => {
    setBackgroundColor('#176ec4');
  };
const [age, setAge] = useState();  
  const [duration, setDuration] = useState();
const [frequency, setFrequency] = useState();
const [location, setLocation] = useState();
const [character, setCharacter] = useState();
const [intensity, setIntensity] = useState();
const [nausea, setNausea] = useState();
const [vomit, setVomit] = useState();
const [phonophobia, setPhonophobia] = useState();
const [photophobia, setPhotophobia] = useState();
const [visual, setVisual] = useState();
const [sensory, setSensory] = useState();
const [dysphasia, setDysphasia] = useState();
const [dysarthria, setDysarthria] = useState();
const [vertigo, setVertigo] = useState();
const [tinnitus, setTinnitus] = useState();
const [hypoacusis, setHypoacusis] = useState();
const [diplopia, setDiplopia] = useState();
const [defect, setDefect] = useState();
const [ataxia, setAtaxia] = useState();
const [conscience, setConscience] = useState();
const [paresthesia, setParesthesia] = useState();
const [dpf, setDPF] = useState();


  const onButtonClick = async (
    age,
    duration,
    frequency,
    location,
    character,
    intensity,
    nausea,
    vomit,
    phonophobia,
    photophobia,
    visual,
    sensory,
    dysphasia,
    dysarthria,
    vertigo,
    tinnitus,
    hypoacusis,
    diplopia,
    defect,
    ataxia,
    conscience,
    paresthesia,
    dpf
  ) => {
    const age2 = parseFloat(age);
    const duration2 = parseFloat(duration);
    const frequency2 = parseFloat(frequency);
    const diplopia2 = parseFloat(diplopia);
    const location2 = parseFloat(location);
    const nausea2 = parseFloat(nausea);
    const tinnitus2 = parseFloat(tinnitus);
    const hypoacusis2 = parseFloat(hypoacusis);
    const ataxia2 = parseFloat(ataxia);
    const vomit2 = parseFloat(vomit);
    const defect2 = parseFloat(defect);
    const sensory2 = parseFloat(sensory);
    const vertigo2 = parseFloat(vertigo);
    const dpf2 = parseFloat(dpf);
    const character2 = parseFloat(character);
    const intensity2 = parseFloat(intensity);
    const phonophobia2 = parseFloat(phonophobia);
    const photophobia2 = parseFloat(photophobia);
    const visual2 = parseFloat(visual);
    const dysphasia2 = parseFloat(dysphasia);
    const dysarthria2 = parseFloat(dysarthria);
    const conscience2 = parseFloat(conscience);
    const paresthesia2 = parseFloat(paresthesia);

    const res = await axios.post("/migraine", {
      Age: age2,
      Duration: duration2,
      Frequency: frequency2,
      Location: location2,
      Character: character2,
      Intensity: intensity2,
      Nausea: nausea2,
      Vomit: vomit2,
      Phonophobia: phonophobia2,
      Photophobia: photophobia2,
      Visual: visual2,
      Sensory: sensory2,
      Dysphasia: dysphasia2,
      Dysarthria: dysarthria2,
      Vertigo: vertigo2,
      Tinnitus: tinnitus2,
      Hypoacusis: hypoacusis2,
      Diplopia: diplopia2,
      Defect: defect2,
      Ataxia: ataxia2,
      Conscience: conscience2,
      Paresthesia: paresthesia2,
      DPF: dpf2,
    });
    console.log(res.data.prediction3);
    if (res.data.prediction3 === 1) {
      alert("Typical aura with migraine");
    } else if (res.data.prediction3 === 2) {
      alert("Migraine without aura");
    } else if (res.data.prediction3 === 3) {
      alert("Basilar-type aura");
    } else if (res.data.prediction3 === 4) {
      alert("Sporadic hemiplegic migraine");
    }
    else if (res.data.prediction3 === 5) {
      alert("Familial hemiplegic migraine");
    }
    else if (res.data.prediction3 === 6) {
      alert("Other migraine");
    }
    else if (res.data.prediction3 === 7) {
      alert("Typical aura without migraine");
    }else {
      alert("Something Went Wrong");
    }
    // 'Typical aura with migraine': 1, 'Migraine without aura': 2, 'Basilar-type aura': 3, 
    // 'Sporadic hemiplegic migraine': 4, 'Familial hemiplegic migraine': 5, 'Other': 6,
    //   'Typical aura without migraine': 7
  
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
          placeholder="Age"
          variant="filled"
          type="number"
          onChange={(e) => setAge(e.target.value)}
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
          placeholder="Duration"
          variant="filled"
          type="number"
          onChange={(e) => setDuration(e.target.value)}
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
          placeholder="Frequency"
          variant="filled"
          type="number"
          onChange={(e) => setFrequency(e.target.value)}
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
          placeholder="Location"
          variant="filled"
          type="number"
          onChange={(e) => setLocation(e.target.value)}
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
          placeholder="Character"
          variant="filled"
          type="number"
          onChange={(e) => setCharacter(e.target.value)}
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
          placeholder="Intensity"
          variant="filled"
          type="number"
          onChange={(e) => setIntensity(e.target.value)}
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
          placeholder="Nausea"
          variant="filled"
          type="number"
          onChange={(e) => setNausea(e.target.value)}
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
          placeholder="Vomit"
          variant="filled"
          type="number"
          onChange={(e) => setVomit(e.target.value)}
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
          placeholder="Phonophobia"
          variant="filled"
          type="number"
          onChange={(e) => setPhonophobia(e.target.value)}
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
          placeholder="Photophobia"
          variant="filled"
          type="number"
          onChange={(e) => setPhotophobia(e.target.value)}
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
          placeholder="Visual"
          variant="filled"
          type="number"
          onChange={(e) => setVisual(e.target.value)}
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
          placeholder="Sensory"
          variant="filled"
          type="number"
          onChange={(e) => setSensory(e.target.value)}
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
          placeholder="Dysphasia"
          variant="filled"
          type="number"
          onChange={(e) => setDysphasia(e.target.value)}
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
          placeholder="Dysarthria"
          variant="filled"
          type="number"
          onChange={(e) => setDysarthria(e.target.value)}
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
          placeholder="Vertigo"
          variant="filled"
          type="number"
          onChange={(e) => setVertigo(e.target.value)}
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
          placeholder="Tinnitus"
          variant="filled"
          type="number"
          onChange={(e) => setTinnitus(e.target.value)}
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
          placeholder="Hypoacusis"
          variant="filled"
          type="number"
          onChange={(e) => setHypoacusis(e.target.value)}
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
          placeholder="Diplopia"
          variant="filled"
          type="number"
          onChange={(e) => setDiplopia(e.target.value)}
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
          placeholder="Defect"
          variant="filled"
          type="number"
          onChange={(e) => setDefect(e.target.value)}
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
          placeholder="Ataxia"
          variant="filled"
          type="number"
          onChange={(e) => setAtaxia(e.target.value)}
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
          placeholder="Conscience"
          variant="filled"
          type="number"
          onChange={(e) => setConscience(e.target.value)}
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
          placeholder="Paresthesia"
          variant="filled"
          type="number"
          onChange={(e) => setParesthesia(e.target.value)}
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
          placeholder="DPF"
          variant="filled"
          type="number"
          onChange={(e) => setDPF(e.target.value)}
        ></TextField>
        </div>
         <div class="button">
        <Button
          variant="outlined"
          onClick={(e) =>
            onButtonClick(
              age,
              duration,
              frequency,
              location,
              character,
              intensity,
              nausea,
              vomit,
              phonophobia,
              photophobia,
              visual,
              sensory,
              dysphasia,
              dysarthria,
              vertigo,
              tinnitus,
              hypoacusis,
              diplopia,
              defect,
              ataxia,
              conscience,
              paresthesia,
              dpf
            )
          }
          value="click"
        >
          Predict migraine
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
