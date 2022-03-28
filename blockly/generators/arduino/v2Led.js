goog.provide('Blockly.Arduino.v2Led');


goog.require('Blockly.Blocks');

Blockly.Arduino['ledder_block'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var dropdown_ledstate = block.getFieldValue('LEDSTATE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Ledjes\n';
  return code;
}; 