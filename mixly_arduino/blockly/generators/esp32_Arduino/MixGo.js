'use strict';

goog.provide('Blockly.Arduino.actuator');

goog.require('Blockly.Arduino');


//执行器_点阵屏显示_字符显示
Blockly.Arduino.HT16K33_TEXT = function() {
  Blockly.Arduino.definitions_['include_HT16K33'] = '#include <HT16K33.h>';
  Blockly.Arduino.definitions_['var_Matrix'] = 'HT16K33 MixGo_HT16K33;';
  Blockly.Arduino.setups_['setup_Matrix_1'] = 'MixGo_HT16K33.begin(0x70);';
  Blockly.Arduino.setups_['setup_Matrix_2'] = 'delay(100);';
  var string1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
  var code = 'MixGo_HT16K33.drawStr('+string1+');\n'
  return code;
};

//执行器_点阵屏显示_画点显示
Blockly.Arduino.HT16K33_POS = function() {
  Blockly.Arduino.definitions_['include_HT16K33'] = '#include <HT16K33.h>';
  Blockly.Arduino.definitions_['var_Matrix'] = 'HT16K33 MixGo_HT16K33;';
  Blockly.Arduino.setups_['setup_Matrix_1'] = 'MixGo_HT16K33.begin(0x70);';
  Blockly.Arduino.setups_['setup_Matrix_2'] = 'delay(100);';
  var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
  var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
  var dropdown_type = this.getFieldValue('DrawPixel_TYPE');
  var code = 'MixGo_HT16K33.drawPixel('+pos_x+'-1,'+pos_y+'-1,'+dropdown_type+');\n'
  code+= 'MixGo_HT16K33.writeDisplay();\n';
  return code;
};

//执行器_点阵屏显示_显示图案
Blockly.Arduino.HT16K33_DisplayChar = function() {
 Blockly.Arduino.definitions_['include_HT16K33'] = '#include <HT16K33.h>';
 Blockly.Arduino.definitions_['var_Matrix'] = 'HT16K33 MixGo_HT16K33;';
 Blockly.Arduino.definitions_['var_Matrix1'] = 'uint16_t  MixGo_LedArray[8];';
 Blockly.Arduino.setups_['setup_Matrix_1'] = 'MixGo_HT16K33.begin(0x70);';
 Blockly.Arduino.setups_['setup_Matrix_2'] = 'delay(100);';
 var dropdown_pin = Blockly.Arduino.valueToCode(this, 'Chars', Blockly.Arduino.ORDER_ASSIGNMENT);
//  var code='Matrix_'+SDA+'_'+SCL+'.clear();\n';
var code='';
code+='for(int i=0; i<8; i++)\n';
code+='{\n'
code+='  MixGo_LedArray[i]='+dropdown_pin+'[i];\n';
code+='  for(int j=15; j>=0; j--)\n'
code+='  {\n'
code+='    if((MixGo_LedArray[i]&0x01)>0)\n';
code+='      MixGo_HT16K33.drawPixel(j, i,LED_ON);\n';
code+='    MixGo_LedArray[i] = MixGo_LedArray[i]>>1;\n';
code+='  }  \n'
code+='}\n'
code+='MixGo_HT16K33.writeDisplay();\n'
return code;
};


//执行器_点阵屏显示_图案数组
Blockly.Arduino.HT16K33_LedArray = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 17; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 17; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "000" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint16_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), Blockly.Arduino.ORDER_ATOMIC];
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//辅助块_点阵屏_清除显示
Blockly.Arduino.HT16K33_Displayclear = function() {
 Blockly.Arduino.definitions_['include_HT16K33'] = '#include <HT16K33.h>';
 Blockly.Arduino.definitions_['var_Matrix'] = 'HT16K33 MixGo_HT16K33;';
 Blockly.Arduino.setups_['setup_Matrix_1'] = 'MixGo_HT16K33.begin(0x70);';
 Blockly.Arduino.setups_['setup_Matrix_2'] = 'delay(100);';
 var code = '';
 code += 'MixGo_HT16K33.clear();\n';
 return code;
};

//辅助块_点阵屏_清除显示
Blockly.Arduino.HT16K33_brightness = function() {
    var BRIGHTNESS = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
   Blockly.Arduino.definitions_['include_HT16K33'] = '#include <HT16K33.h>';
  Blockly.Arduino.definitions_['var_Matrix'] = 'HT16K33 MixGo_HT16K33;';
  Blockly.Arduino.setups_['setup_Matrix_1'] = 'MixGo_HT16K33.begin(0x70);';
  Blockly.Arduino.setups_['setup_Matrix_2'] = 'delay(100);';
  var code = '';
  code += 'MixGo_HT16K33.setBrightness('+BRIGHTNESS+');\n';
  return code;
};
