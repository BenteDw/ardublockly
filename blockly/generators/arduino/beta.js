goog.provide('Blockly.Arduino.beta');


goog.require('Blockly.Blocks');

Blockly.Arduino['ledder_block'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var dropdown_ledstate = block.getFieldValue('LEDSTATE');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_led + "\n" + dropdown_ledstate;
  var pinSetupCode = 'pinMode(' + code + ', INPUT);\n';
  Blockly.Arduino.addSetup("setupvrLed","...setup");  
  return code;
};  



Blockly.Arduino['setup_block'] = function(block) {
  var checkbox_testercheck = block.getFieldValue('testercheck') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'Jens\n';
  if(checkbox_testercheck==true) code = "JAAA";
  

  return code;
};  