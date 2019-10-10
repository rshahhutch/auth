import { Component } from 'react';
import { jsx } from '@emotion/core';
//import Button from '@atlaskit/button';
import { Typography, Button, makeStyles, Avatar } from "@material-ui/core";

import Select from 'react-select';
//import { defaultTheme } from 'react-select';
import  primarySites from '../data.json';
import React from 'react';
import { blue } from '@material-ui/core/colors';
import { ValueType } from 'react-select/src/types';
import { MenuItem, Checkbox, ListItemText, Grid } from '@material-ui/core';
import { minWidth } from '@material-ui/system';
import { OptionProps } from "react-select/src/components/Option";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//const { colors } = defaultTheme;



interface OptionType {
  label: string;
  value: string;
}



const stateOptions: OptionType[] = primarySites.map(suggestion => ({
  value: suggestion,
  label: suggestion
}));


const selectStyles = {
  control: (provided : any )=> ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', margin: 8, textAlign: "left" as "left" }),
};

type State = { isOpen: boolean, value: Object };

const PopOutExampleOld: React.FC = (props: any) => {
  //state = { isOpen: false, value: undefined };
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<ValueType<OptionType>>([]);


  function toggleOpen()
  {
    //this.setState(state => ({ isOpen: !state.isOpen }));
    setIsOpen(!isOpen);
    console.log(value);

  };
  function onSelectChange (value : ValueType<OptionType> )
  {
    toggleOpen();
    setValue(value);
  };

    return (
      // <div className="App">
      // <div className="App-header">
      //   <h2> Home</h2>
      // </div>
      // <p className="App-intro">
      //   To get started, asdfdsfedit <code>src/App.tsx</code> and save to reload.
      // </p>
      // <Grid container>
      // <Grid item xs={12} sm={12} md={2} lg={2}>
      // </Grid>
      // <Grid item xs={12} sm={12} md={2} lg={2}>
        <Dropdown
         isOpen={isOpen}
         onClose={toggleOpen}
          target={
            // <button onClick={toggleOpen} style={{minWidth : 240}} className="Button">
            //   {value && Object.values(value).length !== 0 ? ( value && Object.values(value).length === 1 ?  `State: ${ value  && Object.values(value)[0].value}` : `State: ${ value && Object.values(value)[0].value } ${Object.values(value).length} `) : 'Select a State'}
            // </button>
            <Button onClick={toggleOpen} style={{minWidth : 240}} className="Button">              
            {value && Object.values(value).length !== 0 ? ( value && Object.values(value).length === 1 ?  `State: ${ value  && Object.values(value)[0].value}` : `State: ${ value && Object.values(value)[0].value }  +${Object.values(value).length} `) : 'Select a State'}
            <ArrowDropDownIcon />
          </Button>
           
          }>      
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={onSelectChange}
          options={stateOptions}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
          isMulti={true}
        >
           
          </Select>
        </Dropdown> 
      //   </Grid>
      //   </Grid>
      // </div>
    );
}


// styled components


function Option(props: OptionProps<OptionType>) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
        whiteSpace: "normal",      
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  
  );
}

const Menu = (props : any) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        maxWidth: 240,
        zIndex: 2,
      }}      
      {...props}
    />

  
  );
};
const Blanket =(props : any) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose } : { children : any, isOpen : any, target : any, onClose : any }) => (
  <div css={{ position: 'relative',minWidth: 240 }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg =(p : any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div css={{ height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);
const ChevronDown = () => (
  <Svg style={{ marginRight: -6 }}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);


export default PopOutExampleOld;
