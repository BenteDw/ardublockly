goog.provide('Blockly.Arduino.beta');


goog.require('Blockly.Blocks');

Blockly.Arduino['ledder_block'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var dropdown_ledstate = block.getFieldValue('LEDSTATE');
  dropdown_led = dropdown_led.replaceAll("L","");
  if(dropdown_led<6)
    {
  var code = "registers[" + dropdown_led + "]=" + dropdown_ledstate + ";\nwritereg();\n";
    }
  else code = "memset(registers," + dropdown_ledstate + ",sizeof(registers));\nwritereg();\n"
  return code;
};  


Blockly.Arduino['write_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'writereg();\n';
  return code;
};



Blockly.Arduino['setup_block'] = function(block) {
  var testleds = block.getFieldValue('LEDTESTER');
  var functies = Blockly.Arduino.statementToCode(block, 'FUNCS');
  var programmer = block.getFieldValue('ProgSelecter');
  var Decl="";
  var Func="";
  var Incl="";
  var Setp="";
  var code="";

    var Index= functies.indexOf(";");
    var testopslag =[]
  while (Index != -1)
{
  Index= functies.indexOf(";");
  if(Index != -1)
    {
      testopslag.push(functies.substring(0,Index+1))
    }
  functies = functies.substring(Index+1);
}
  
  var epic = "switch(mode)\n{";
  for(var counter=0; counter<(testopslag.length);counter++)
    {
      epic+= "\ncase " + counter + ":" + testopslag[counter] + "\nbreak;";
    }
  epic+="\n}\n";
  
  Incl += ("#include <avr/sleep.h> // Sleep Modes\n#include <avr/power.h> // Power management");

  
  if(programmer=="FINAL")
  {
    Decl += ("#define DATA 0 //data pin shift reg\n#define RCLK 1 //latch pin shift reg\n#define SRCLK 2 //clock pin shift reg\n#define BUTTON 4\n#define DELAYML 100\n#define LONGPRESS 1000\n\n");
    
    Func += ("ISR (PCINT0_vect) {\n if (digitalRead(BUTTON)==HIGH) {\n pressTime = millis();}\n  if(digitalRead(BUTTON)==LOW) {\n  if(millis() - pressTime >= LONGPRESS) sleep = true;\n  else mode++;}\n  if (mode >= " + testopslag.length + ") mode = 0;\n}\n\n");
    code = "if (sleep) goToSleep();\n";
    Setp += ("\nADCSRA = 0;\nPCMSK |= bit(PCINT4);\nGIFR |= bit(PCIF);\nGIMSK |= bit(PCIE);\n")
    Setp += ("pinMode(DATA,OUTPUT);\npinMode(RCLK,OUTPUT);\npinMode(SRCLK,OUTPUT);\npinMode(BUTTON,INPUT);")
  }
  if(programmer=="TEST")
  {
    Decl += "#define DATA 7 //data pin shift reg\n#define RCLK 5 //clock pin shift reg\n#define SRCLK 6 //latch pin shift reg\n#define BUTTON 2\n#define DELAYML 100\n#define LONGPRESS 1000\n\n"
    Func += "void buttonIntrupt() {\nif (digitalRead(BUTTON)==LOW) pressTime = millis();\nif(digitalRead(BUTTON)==HIGH) \n{\nif(millis() - pressTime >= LONGPRESS) sleep = true;\nelse mode++;\n}\nif (mode >= 2) mode = 0;\n}\n\n";
    Setp += ("pinMode(DATA,OUTPUT);\npinMode(RCLK,OUTPUT);\npinMode(SRCLK,OUTPUT);\npinMode(BUTTON,INPUT_PULLUP);")
    Setp += "\nattachInterrupt(digitalPinToInterrupt(BUTTON), buttonIntrupt, CHANGE);";
  }
  
  
  Func += ("void goToSleep() {\n  memset(registers,false,sizeof(registers));\n  writereg();\n\n  set_sleep_mode(SLEEP_MODE_PWR_DOWN);\n  power_all_disable ();  // power off ADC, Timer 0 and 1, serial interface\n  sleep_enable();\n  sleep_cpu();\n  sleep_disable(); //power everything back on\n  power_all_enable();\n  sleep=false;\n  mode=0;\n}\n\n");
  
  
  Decl += ("int mode = 0;\nboolean registers[6];\nbool sleep = false;\nlong pressTime = 0;")
  
  Func += ("void writereg() {\n  digitalWrite(SRCLK,LOW);\n\n  for(int i=sizeof(registers)-1;i>=0;i--)\n  {\n    digitalWrite(RCLK,LOW);\n    digitalWrite(DATA,registers[i]);\n    digitalWrite(RCLK,HIGH);\n  }\n\n  digitalWrite(SRCLK,HIGH);\n}");
  
  if(testleds=="TRUE")
    { Setp += ("\nmemset(registers,true,sizeof(registers));\nwritereg();\ndelay(DELAYML);\nmemset(registers,false,sizeof(registers));\nwritereg();\ndelay(DELAYML);")
    }

  
  code+=epic;
  Blockly.Arduino.addInclude("setupInclude",Incl);
  Blockly.Arduino.addDeclaration("setupDecl",Decl);
  Blockly.Arduino.addFunction("Setup",Func);
  Blockly.Arduino.addSetup("setupSetup",Setp);
  
  
  return code  + "\nif(sleep) goToSleep();";
};  


Blockly.Arduino['effect_block'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var dropdown_speed = block.getFieldValue('SPEED');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
