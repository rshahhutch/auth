import PopOutExample from "./popoutexample.component";
import { Component } from 'react';
import { jsx } from '@emotion/core';
//import Button from '@atlaskit/button';
import { Typography, Button, makeStyles, Avatar } from "@material-ui/core";

import Select from 'react-select';
//import { defaultTheme } from 'react-select';
import  primarySites from '../data.json';
import  diseaseTypes from '../diseasetypes.json';
import React from 'react';
import { blue } from '@material-ui/core/colors';
import { ValueType } from 'react-select/src/types';
import { MenuItem, Checkbox, ListItemText, Grid } from '@material-ui/core';
import { minWidth } from '@material-ui/system';
import { OptionProps } from "react-select/src/components/Option";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface OptionType {
  label: string;
  value: string;
}



const stateOptions: OptionType[] = primarySites.map(suggestion => ({
  value: suggestion,
  label: suggestion
}));


const stateOptions2: OptionType[] = diseaseTypes.map(suggestion => ({
  value: suggestion,
  label: suggestion
}));


const PopOutExampleUI: React.FC = (props: any) => {
  
  
 
    return (
      <div className="App">
      <div className="App-header">
        <h2> Home</h2>
      </div>
      <p className="App-intro">
        To get started, asdfdsfedit <code>src/App.tsx</code> and save to reload.
      </p>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <PopOutExample data={stateOptions}/>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <PopOutExample  data={stateOptions2}/>
        </Grid>
      </Grid>
      </div>
    );
}


export default PopOutExampleUI;
