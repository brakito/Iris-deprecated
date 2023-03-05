import React from "react";
import './main.css'
import GenerateBtn from '../paletteActions/generateButton'
import SetConfigsBtn from '../paletteActions/setConfigsButton'
import SaveBtn from '../paletteActions/saveButton'

function PaletteActions () {
  return <div className="buttonsContainer">
    <GenerateBtn />
    <SetConfigsBtn />
    <SaveBtn /> 
  </div>
}

export default PaletteActions