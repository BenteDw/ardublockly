goog.provide('Blockly.Arduino.v2Setup');


goog.require('Blockly.Blocks');

Blockly.Arduino['setup_block'] = function(block) {
  var checkbox_testercheck = block.getFieldValue('testercheck') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'Jens\n';
  return code;
}; 