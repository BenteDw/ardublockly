Blockly.Blocks['setup_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup");
    this.appendDummyInput()
        .appendField("Tester?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "testercheck");
    this.appendStatementInput("NAME")
        .setCheck("function")
        .appendField("Functions:");
    this.setColour(315);
 this.setTooltip("This sets up everything");
 this.setHelpUrl("https://www.youtube.com/watch?v=xvFZjo5PgG0");
  }
}; 