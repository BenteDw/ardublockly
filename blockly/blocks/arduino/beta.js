Blockly.Blocks['ledder_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zet LedUp v2 LED")
        .appendField(new Blockly.FieldDropdown([["1","L0"], ["2","L1"], ["3","L2"], ["4","L3"], ["5","L4"], ["6","L5"], ["allemaal","L6"]]), "LED")
        .appendField("aan? Waar/Onwaar:")
        .appendField(new Blockly.FieldDropdown([["Waar","Onwaar"], ["uit","false"]]), "LEDSTATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setColour(Blockly.Blocks.light.HUE);
  }
}; 

Blockly.Blocks['ledder_block_variabele'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zet LedUp v2 LED");
    this.appendValueInput("led")
        .setCheck("Number");
    this.appendValueInput("status")
        .setCheck("Boolean")
        .appendField("aan? True/False:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setColour(Blockly.Blocks.light.HUE);
 this.setTooltip("Geef als LED nummer een getal van 0 tot 5 ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setup_block'] = { 
  init: function() { 
    this.appendDummyInput()
        .appendField("LedUpKidz v2");
    this.appendDummyInput()
        .appendField("Type:")
        .appendField(new Blockly.FieldDropdown([["tester","TEST"], ["final","FINAL"]]), "ProgSelecter");
    this.appendDummyInput()
        .appendField("Test leds:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "LEDTESTER");
    this.appendStatementInput("FUNCS")
        .setCheck("function")
        .appendField("Acties:");
    this.appendDummyInput()
        .appendField("Druk knop voor volgende actie");
    this.setColour(315);
 this.setTooltip("Dit is de setup blok, selecteer welk type chip je gebruikt. Of je de ledjes wilt testen als je het programma opstart en de acties/functies die je wilt uitvoeren. Per druk op de drukknop ga je naar de volgende actie, hou de knop ingedrukt voor slaapmodus, druk nog eens voor wakker te maken.");
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