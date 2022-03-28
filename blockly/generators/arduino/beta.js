goog.provide('Blockly.Arduino.beta');


goog.require('Blockly.Blocks');

Blockly.Arduino['ledder_block'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var dropdown_ledstate = block.getFieldValue('LEDSTATE');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_led + "\n" + dropdown_ledstate;
  var pinSetupCode = 'pinMode(' + code + ', INPUT);\n';
  Blockly.Arduino.addInclude("includeLed","ok boomer");
  Blockly.Arduino.addDeclaration("declairLed","zoomer");
  Blockly.Arduino.addSetup("setupvrLed","...setup");  
  return code;
};  



Blockly.Arduino['setup_block'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude("includeSetup","#include <avr/sleep.h> // Sleep Modes\n#include <avr/power.h> // Power management");

  Blockly.Arduino.addDeclaration("declairSetup","#define DATA 0 //data pin shift reg\n#define RCLK 1 //latch pin shift reg\n#define SRCLK 2 //clock pin shift reg\n#define BUTTON 4\n#define DELAYML 100\n#define LONGPRESS 1000");

  
  





  var code = "pinMode(DATA, OUTPUT);\npinMode(RCLK, OUTPUT);\npinMode(SRCLK, OUTPUT);\npinMode(BUTTON, INPUT);\n";
  code += "ADCSRA = 0; // turn off ADC\nPCMSK  |= bit (PCINT4);  // want pin D4 / pin 3\nGIFR   |= bit (PCIF);    // clear any outstanding interrupts\nGIMSK  |= bit (PCIE);    // enable pin change interrupts\n";
  if(checkbox_name==true) code += ('\nmemset(registers,sizeof(registers),true);\nwritereg();\ndelay(DELAYML);\nmemset(registers,sizeof(registers),false);\nwritereg();\ndelay(DELAYML);')
  
  return code;
};  

