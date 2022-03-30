Blockly.Blocks['ledder_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Led Status");
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["1","L0"], ["2","L1"], ["3","L2"], ["4","L3"], ["5","L4"], ["6","L5"], ["allemaal","L6"]]), "LED")
        .appendField("status:")
        .appendField(new Blockly.FieldDropdown([["aan","true"], ["uit","false"]]), "LEDSTATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}; 

Blockly.Blocks['setup_block'] = { 
  init: function() { 
    this.appendDummyInput()
        .appendField("Setup");
    this.appendDummyInput()
        .appendField("Test leds:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "LEDTESTER");
    this.appendStatementInput("FUNCS")
        .setCheck("function")
        .appendField("Functions:");
    this.setColour(315);
 this.setTooltip("This sets up everything");
 this.setHelpUrl("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    
  }
};

Blockly.Blocks['write_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("writeReg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("schrijft naar shiftregister");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['effect_block'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Effectenblok");
    this.appendDummyInput()
        .appendField("Effect:")
        .appendField(new Blockly.FieldDropdown([["Draaien","ROTATE"], ["Rond","ROUND"], ["Flikkeren","BLINK"], ["Willekeurig aan","RANDOM_ON"], ["Willekeurig uit","RANDOM_OF"]]), "EFFECT");
    this.appendDummyInput()
        .appendField("Snelheid:")
        .appendField(new Blockly.FieldDropdown([["Snel","FAST"], ["Medium","MEDIUM"], ["Traag","SLOW"]]), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("keuze van voorgeprogrammeerde effecten");
 this.setHelpUrl("");
  }
};