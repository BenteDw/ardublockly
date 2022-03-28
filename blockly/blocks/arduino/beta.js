Blockly.Blocks['ledder_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Led Status");
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["1","LED1"], ["2","LED2"], ["3","LED3"], ["4","LED4"], ["5","LED5"], ["6","LED6"], ["allemaal","LEDALL"]]), "LED")
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
        .appendField("Test ledjes:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
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

Blockly.Blocks['create_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("aanmaak effect");
    this.appendStatementInput("FUNCS")
        .setCheck("effectPointer");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};