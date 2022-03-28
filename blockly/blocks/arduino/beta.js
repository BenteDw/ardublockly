Blockly.Blocks['ledder_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Led Status");
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["1","LED1"], ["2","LED2"], ["3","LED3"], ["4","LED4"], ["5","LED5"], ["6","LED6"], ["allemaal","LEDALL"]]), "LED")
        .appendField("status:")
        .appendField(new Blockly.FieldDropdown([["aan","ON"], ["uit","OF"]]), "LEDSTATE");
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
        .appendField("Test ledjes:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};  