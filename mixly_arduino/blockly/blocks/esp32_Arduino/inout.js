'use strict';

goog.provide('Blockly.Blocks.base');

goog.require('Blockly.Blocks');

Blockly.Blocks.base.HUE = 20//'#ae3838';//40;
Blockly.Blocks['inout_highlow'] = {
 init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), 'BOOL')
  this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_HIGHLOW_TOOLTIP);
}
};

Blockly.Blocks['inout_pinMode'] = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PINMODE)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_PINMODEIN, "INPUT"], [Blockly.MIXLY_PINMODEOUT, "OUTPUT"], [Blockly.MIXLY_PINMODEPULLUP, "INPUT_PULLUP"]]),"MODE")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_pinMode);
  }
};

// Blockly.Blocks.inout_digital_write = {
//   init: function() {
//     this.setColour(20);
//     this.appendDummyInput("")
//     .appendField(Blockly.MIXLY_DIGITALWRITE_PIN)
//     .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//     .appendField(Blockly.MIXLY_STAT)
//     .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
//   }
// };

Blockly.Blocks.inout_digital_write2 = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_DIGITALWRITE_PIN)
    .setCheck(Number);
    this.appendValueInput("STAT")
    .appendField(Blockly.MIXLY_STAT)
    .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

// Blockly.Blocks.inout_digital_read = {
//   init: function() {
//     this.setColour(20);
//     this.appendDummyInput("")
//     .appendField(Blockly.MIXLY_DIGITALREAD_PIN)
//     .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setOutput(true, [Boolean,Number]);
//     this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_DIGITAL_READ);
//   }
// };

Blockly.Blocks.inout_digital_read2 = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_DIGITALREAD_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_DIGITAL_READ);
  }
};

Blockly.Blocks['inout_pin_pressed'] = {
    init: function(){
        this.setColour(20);
        this.appendValueInput('pin')
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
            .appendField(Blockly.MIXLY_ESP32_TOUCH_SENSOR);
        // this.appendDummyInput()
        //     .appendField(Blockly.MIXLY_IS_TOUCHED);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_INOUT_PIN_PRESSED_TOOLTIP);
    }
};
Blockly.Blocks.inout_analog_write = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ANALOGWRITE_PIN)
    .setCheck(Number);
    this.appendValueInput("NUM", Number)
    .appendField(Blockly.MIXLY_VALUE2)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};
Blockly.Blocks.inout_pwm_analog_write = {
  init: function(){
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField("PWM"+Blockly.MIXLY_Analog_PINMODEOUT)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("FREQ", Number)
    .appendField(Blockly.MIXLY_FREQUENCY + Blockly.MIXLY_STAT)
    .setCheck(Number);
     this.appendValueInput('CHANNEL')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_CHANNEL);
     this.appendValueInput("NUM", Number)
    .appendField(Blockly.MIXLY_VALUE2)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_PWM_ANALOG_WRITE_SET_FREQ_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ANALOGREAD_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
  }
};

Blockly.Blocks.inout_buildin_led = {
 init: function() {
   this.setColour(20);
   this.appendDummyInput("")
   .appendField(Blockly.MIXLY_BUILDIN_LED)
   .appendField(Blockly.MIXLY_STAT)
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "HIGH"], [Blockly.MIXLY_OFF, "LOW"]]), "STAT");
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setTooltip('light or off the build-in LED');
 }
};

Blockly.Blocks.touchAttachInterrupt = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ATTACHINTERRUPT_PIN)
    .setCheck(Number);
     this.appendValueInput("threshold", Number)
    .appendField(Blockly.MIXLY_ESP32_THRESHOLD)
    .setCheck(Number);
    this.appendDummyInput("");
    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.controls_detachInterrupt = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_DETACHINTERRUPT_PIN)
    .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_DETACHINTERRUPT);
  }
};

Blockly.Blocks.controls_attachPinInterrupt = {
  init: function () {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ATTACHPININTERRUPT_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MODE)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_RISING, "RISING"], [Blockly.MIXLY_FALLING, "FALLING"], [Blockly.MIXLY_CHANGE, "CHANGE"]]), "mode");
    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.controls_detachPinInterrupt = {
  init: function () {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_DETACHPININTERRUPT_PIN)
    .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_DETACHINTERRUPT);
  }
};

Blockly.Blocks.inout_pulseIn = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PULSEIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_PULSEIN_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_pulseIn);
  }
};

Blockly.Blocks.inout_pulseIn2 = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PULSEIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_PULSEIN_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.appendValueInput("TIMEOUT", Number)
    .appendField(Blockly.MIXLY_PULSEIN_TIMEOUT)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_pulseIn2);
  }
};

Blockly.Blocks.inout_shiftout = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput("")
    .appendField("ShiftOut");
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_DATAPIN)
    .setCheck(Number);
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_CLOCKPIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_BITORDER)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MSBFIRST, "MSBFIRST"], [Blockly.MIXLY_LSBFIRST, "LSBFIRST"]]), "ORDER");
    this.appendValueInput("DATA", Number)
    .appendField(Blockly.MIXLY_DATA)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_shiftout);
  }
};


