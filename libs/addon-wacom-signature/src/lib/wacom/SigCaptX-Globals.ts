/* eslint-disable @typescript-eslint/no-explicit-any */
/* **************************************************************************
  SigCaptX-Globals.ts
   
  This file contains enumerators, function objects and global variables common to various functions
  
  Copyright (c) 2021 Wacom Co. Ltd. All rights reserved.
  
   v1.0
  
***************************************************************************/

/* Define global variables */
export const wgssSignatureSDK = null; // Signature SDK object

export const SOLIDLINE = 1; // Used for drawing lines and rectangles
export const OUTLINE = 4; // Ditto
export const CHECKBOX_USETICKSYMBOL = 2; // Specifies whether the tick symbol should be used to show that the checkbox has been clicked

export const BITMAP_BACKGROUNDCOLOR = 0x00ffffff;
export const BITMAP_IMAGEFORMAT = 'bmp';
export const BITMAP_INKCOLOR = 0x00000000;
export const BITMAP_INKWIDTH = 0.7;
export const BITMAP_PADDING_X = 4;
export const BITMAP_PADDING_Y = 4;

export const TIMEOUT = 1500; //  Timeout value for connecting to the port used for the SigCaptX service
export const SERVICEPORT = 8000; //  Port used for the SigCaptX service
export const LICENCEKEY =
  'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3YmM5Y2IxYWIxMGE0NmUxODI2N2E5MTJkYTA2ZTI3NiIsImV4cCI6MjE0NzQ4MzY0NywiaWF0IjoxNTYwOTUwMjcyLCJyaWdodHMiOlsiU0lHX1NES19DT1JFIiwiU0lHQ0FQVFhfQUNDRVNTIl0sImRldmljZXMiOlsiV0FDT01fQU5ZIl0sInR5cGUiOiJwcm9kIiwibGljX25hbWUiOiJTaWduYXR1cmUgU0RLIiwid2Fjb21faWQiOiI3YmM5Y2IxYWIxMGE0NmUxODI2N2E5MTJkYTA2ZTI3NiIsImxpY191aWQiOiJiODUyM2ViYi0xOGI3LTQ3OGEtYTlkZS04NDlmZTIyNmIwMDIiLCJhcHBzX3dpbmRvd3MiOltdLCJhcHBzX2lvcyI6W10sImFwcHNfYW5kcm9pZCI6W10sIm1hY2hpbmVfaWRzIjpbXX0.ONy3iYQ7lC6rQhou7rz4iJT_OJ20087gWz7GtCgYX3uNtKjmnEaNuP3QkjgxOK_vgOrTdwzD-nm-ysiTDs2GcPlOdUPErSp_bcX8kFBZVmGLyJtmeInAW6HuSp2-57ngoGFivTH_l1kkQ1KMvzDKHJbRglsPpd4nVHhx9WkvqczXyogldygvl0LRidyPOsS5H2GYmaPiyIp9In6meqeNQ1n9zkxSHo7B11mp_WXJXl0k1pek7py8XYCedCNW5qnLi4UCNlfTd6Mk9qz31arsiWsesPeR9PN121LBJtiPi023yQU8mgb9piw_a-ccciviJuNsEuRDN3sGnqONG3dMSA'; // Licence key used for sigCtl and wizCtl in SigCaptX-SessionControl.js

export const PIN_MAXLENGTH = 4; //  Max lenght of PIN
export const PIN_MINLENGTH = 1; //  Min length of PIN

export enum padRange {
  STU300 = '300',
  STU430 = '430',
  STU500 = '500',
  STU5X0 = '5X0',
}

export enum padType {
  STU300 = 'Wacom STU-300',
  STU430 = 'Wacom STU-430',
  STU500 = 'Wacom STU-500',
  STU5X0 = 'Wacom STU-520, 530, 540 or 541',
}

export enum buttonFunction {
  PREVIOUS = 'PREVIOUS',
  CANCEL = 'CANCEL',
}

export enum checkSizeSelection {
  LARGE = 'LARGE',
  STANDARD = 'STANDARD',
}

export enum checkSize {
  STU300_Small = 12,
  STU300_Large = 20,
  STU430_Small = 12,
  STU430_Large = 30,
  STU500_Small = 22,
  STU500_Large = 40,
  STU5X0_Small = 22,
  STU5X0_Large = 40,
}

export enum padColors {
  BLUE = '0R 0G 0.8B',
  GREEN = '0R 0.8G 0B',
  BLACK = '0R 0G 0B',
  WHITE = '1R 1G 1B',
  PURPLE = '0.7R 0.3G 1B',
  RED = '0.6R 0G 0.2B',
}

export enum textSource {
  LOCAL = 1,
  REMOTE = 2,
  UTF8 = 3,
  STANDARD = 4,
}

export enum buttonEvent {
  NEXT = 'Next',
  CHECK = 'Check',
  CANCEL = 'Cancel',
  CLEAR = 'Clear',
  OK = 'OK',
}

export enum radioSelection {
  MALE = 'Male',
  FEMALE = 'Female',
}

// Set up the classes used for defining the various objects which are to be displayed on the pad
export class TextObject {
  textString: string;
  xPos: any;
  yPos: any;
  fontBold!: boolean;
  fontName: string;
  fontSize: number;
  fontBackColor: string;
  fontForeColor: string;
  type: string;

  constructor(
    textString: string,
    xPos: any,
    yPos: any,
    fontName: string,
    fontSize: number,
    fontBold?: boolean,
    type?: string,
  ) {
    this.textString = textString;
    this.xPos = xPos;
    this.yPos = yPos;
    this.fontName = fontName;
    this.fontSize = fontSize;
    if (fontBold) {
      this.fontBold = fontBold;
    }
    if (type) {
      this.type = type;
    } else {
      this.type = 'txt';
    }
    this.fontBackColor = ' ';
    this.fontForeColor = ' ';
  }
}

export class CheckboxObject {
  xPos: any;
  yPos: any;
  options: any;
  fontName: string;
  fontSize: number;
  fontBackColor: string;
  fontForeColor: string;

  constructor(
    xPos: any,
    yPos: any,
    fontName: string,
    fontSize: number,
    options: any,
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.fontName = fontName;
    this.fontSize = fontSize;
    this.options = options;

    this.fontBackColor = ' ';
    this.fontForeColor = ' ';
  }
}

export class RadioObject {
  xPos: any;
  yPos: any;
  buttonLabel: string;
  groupName: string;
  buttonChecked: boolean;
  fontBackColor: string;
  fontForeColor: string;

  constructor(
    xPos: any,
    yPos: any,
    label: string,
    group: string,
    checked: boolean,
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.buttonLabel = label;
    this.groupName = group;
    this.buttonChecked = checked;

    this.fontBackColor = ' ';
    this.fontForeColor = ' ';
  }
}

export class ButtonObject {
  xPos: any;
  yPos: any;
  buttonBold: boolean;
  buttonSize: number;
  buttonType: string;
  buttonText: string;
  buttonWidth: number;
  width!: number;
  imageFile: string;
  fontBackColor: string;
  fontForeColor: string;

  constructor(
    xPos: any,
    yPos: any,
    buttonSize: number,
    buttonWidth: number,
    buttonBold: boolean,
    buttonType: string,
    buttonText?: string,
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.buttonSize = buttonSize;
    this.buttonWidth = buttonWidth;
    this.buttonBold = buttonBold;
    this.buttonType = buttonType;
    if (buttonText) {
      this.buttonText = buttonText;
    } else {
      this.buttonText = buttonType;
    }
    this.fontBackColor = ' ';
    this.fontForeColor = ' ';
    this.imageFile = ' ';
  }
}

export class RectangleObject {
  x1Pos: any;
  y1Pos: any;
  x2Pos: any;
  y2Pos: any;
  lineWidth: number;
  options: any;
  fontBackColor!: string;
  fontForeColor!: string;

  constructor(
    x1Pos: any,
    y1Pos: any,
    x2Pos: any,
    y2Pos: any,
    width: number,
    options: any,
  ) {
    this.x1Pos = x1Pos;
    this.y1Pos = y1Pos;
    this.x2Pos = x2Pos;
    this.y2Pos = y2Pos;
    this.lineWidth = width;
    this.options = options;
  }
}

export class LineObject {
  x1Pos: any;
  y1Pos: any;
  x2Pos: any;
  y2Pos: any;
  lineWidth: number;
  options: any;
  fontBackColor!: string;
  fontForeColor!: string;

  constructor(
    x1Pos: any,
    y1Pos: any,
    x2Pos: any,
    y2Pos: any,
    width: number,
    options: any,
  ) {
    this.x1Pos = x1Pos;
    this.y1Pos = y1Pos;
    this.x2Pos = x2Pos;
    this.y2Pos = y2Pos;
    this.lineWidth = width;
    this.options = options;
  }
}
