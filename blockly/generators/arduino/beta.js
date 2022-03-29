goog.provide('Blockly.Arduino.beta');


goog.require('Blockly.Blocks');

Blockly.Arduino['ledder_block'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var dropdown_ledstate = block.getFieldValue('LEDSTATE');
  // TODO: Assemble JavaScript into code variable.
  var code = "registers[0]=" + dropdown_ledstate + ";\nwritereg();";
  var pinSetupCode = 'pinMode(' + code + ', INPUT);\n';
  Blockly.Arduino.addInclude("includeLed","//includes:");
  Blockly.Arduino.addDeclaration("declairLed","//declarations:");
  Blockly.Arduino.addSetup("setupvrLed","//setups:");  
  return code;
};  



Blockly.Arduino['setup_block'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  var functies = Blockly.Arduino.statementToCode(block, 'FUNCS');
  Blockly.Arduino.addDeclaration("delcairEffPointer","typedef void (*effectPointer) ();");

  functies = functies.replaceAll(";",",");
  var lIndex = functies.lastIndexOf(",");
  functies = functies.substring(0,lIndex) + "" + functies.substring(lIndex+1);
  
  functies = "effectPointer callEffect[] = {\n" + functies + "\n};";
  console.log(functies);
  
  
  
  Blockly.Arduino.addInclude("includeSetup","#include <avr/sleep.h> // Sleep Modes\n#include <avr/power.h> // Power management");

  Blockly.Arduino.addDeclaration("declairSetup","#define DATA 0 //data pin shift reg\n#define RCLK 1 //latch pin shift reg\n#define SRCLK 2 //clock pin shift reg\n#define BUTTON 4\n#define DELAYML 100\n#define LONGPRESS 1000");
  
  Blockly.Arduino.addDeclaration("declairVar","int count = 0;\nint mode = 0;\nbool pressed = false;\nboolean registers[6];\nbool sleep = false;\nlong pressTime = 0;\nlong duration;\nint ran;\nint prevRan;")
  
  Blockly.Arduino.addFunction("ISR","ISR (PCINT0_vect) {\n  count++;\n  duration = 1;\n  if (count == 1) pressTime = millis();\n  if(count >= 2) count = 0;\n  if(millis() - pressTime >= LONGPRESS) sleep = true;\n/*  else mode++;\n  if (mode > (sizeof(callEffect)>>1)) mode = 0;\n*/}");

  Blockly.Arduino.addFunction("sleep","void goToSleep() {\n  memset(registers,false,sizeof(registers));\n  writereg();\n\n  set_sleep_mode(SLEEP_MODE_PWR_DOWN);\n  power_all_disable ();  // power off ADC, Timer 0 and 1, serial interface\n  sleep_enable();\n  sleep_cpu();\n  sleep_disable(); //power everything back on\n  power_all_enable();\n  sleep=false;\n  count=-1;\n  mode=0;\n}");
    
  Blockly.Arduino.addFunction("writereg","void writereg() {\n  digitalWrite(SRCLK,LOW);\n\n  for(int i=sizeof(registers)-1;i>=0;i--)\n  {\n    digitalWrite(RCLK,LOW);\n    digitalWrite(DATA,registers[i]);\n    digitalWrite(RCLK,HIGH);\n  }\n\n  digitalWrite(SRCLK,HIGH);\n}");
  
  if(checkbox_name==true)
    { Blockly.Arduino.addSetup("setupSetup","pinMode(DATA,OUTPUT);\npinMode(RCLK,OUTPUT);\npinMode(SRCLK,OUTPUT);\npinMode(BUTTON,INPUT);\n\nmemset(registers,true,sizeof(registers));\nwritereg();\ndelay(DELAYML);\nmemset(registers,false,sizeof(registers));\nwritereg();\ndelay(DELAYML);")
    }
  else
    {
 Blockly.Arduino.addSetup("setupSetup","pinMode(DATA,OUTPUT);\npinMode(RCLK,OUTPUT);\npinMode(SRCLK,OUTPUT);\npinMode(BUTTON,INPUT);")
    }
  
  var code = "if (sleep) goToSleep();\n";
  Blockly.Arduino.addFunction("declFullPointer",functies);
  return code;
};  


Blockly.Arduino['effect_block'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var dropdown_speed = block.getFieldValue('SPEED');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['create_effect'] = function(block) {
  var functies = Blockly.Arduino.statementToCode(block, 'FUNCS');
  Blockly.Arduino.addDeclaration("delcairEffPointer","typedef void (*effectPointer) ();");
  
  functies = functies.replaceAll(";",",");
  var lIndex = functies.lastIndexOf(",");
  functies = functies.substring(0,lIndex) + "" + functies.substring(lIndex+1);
  
  var code = "effectPointer callEffect[] = {\n" + functies + "\n};";
  console.log(code);
  Blockly.Arduino.addSetup("declairFullPointer",code);
  return "";
};