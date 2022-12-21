// @ts-nocheck
"use strict";export const Array_Composite_Union_Discriminated = validate10;const schema11 = {"$id":"Array_Composite_Union_Discriminated","minItems":8,"type":"array","items":{"$id":"Composite_Union_Discriminated","default":{"type":"H","value":42},"anyOf":[{"type":"object","properties":{"type":{"const":"A","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"B","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"C","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"D","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"E","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"F","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"G","type":"string"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"const":"H","type":"string"},"value":{"type":"number"}},"required":["type","value"]}]}};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="Array_Composite_Union_Discriminated" */;let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){if(data.length < 8){validate10.errors = [{instancePath,schemaPath:"#/minItems",keyword:"minItems",params:{limit: 8},message:"must NOT have fewer than 8 items"}];return false;}else {var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;let valid1 = false;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if(((data0.type === undefined) && (missing0 = "type")) || ((data0.value === undefined) && (missing0 = "value"))){const err0 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/0/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}else {if(data0.type !== undefined){let data1 = data0.type;const _errs5 = errors;if(typeof data1 !== "string"){const err1 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/0/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}if("A" !== data1){const err2 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/0/properties/type/const",keyword:"const",params:{allowedValue: "A"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.value !== undefined){let data2 = data0.value;const _errs7 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){const err3 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/0/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}var valid2 = _errs7 === errors;}else {var valid2 = true;}}}}else {const err4 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;}}var _valid0 = _errs3 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs9 = errors;if(errors === _errs9){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing1;if(((data0.type === undefined) && (missing1 = "type")) || ((data0.value === undefined) && (missing1 = "value"))){const err5 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/1/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}else {if(data0.type !== undefined){let data3 = data0.type;const _errs11 = errors;if(typeof data3 !== "string"){const err6 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/1/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;}if("B" !== data3){const err7 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/1/properties/type/const",keyword:"const",params:{allowedValue: "B"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err7];}else {vErrors.push(err7);}errors++;}var valid3 = _errs11 === errors;}else {var valid3 = true;}if(valid3){if(data0.value !== undefined){let data4 = data0.value;const _errs13 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){const err8 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/1/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err8];}else {vErrors.push(err8);}errors++;}var valid3 = _errs13 === errors;}else {var valid3 = true;}}}}else {const err9 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/1/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err9];}else {vErrors.push(err9);}errors++;}}var _valid0 = _errs9 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs15 = errors;if(errors === _errs15){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing2;if(((data0.type === undefined) && (missing2 = "type")) || ((data0.value === undefined) && (missing2 = "value"))){const err10 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/2/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"};if(vErrors === null){vErrors = [err10];}else {vErrors.push(err10);}errors++;}else {if(data0.type !== undefined){let data5 = data0.type;const _errs17 = errors;if(typeof data5 !== "string"){const err11 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/2/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err11];}else {vErrors.push(err11);}errors++;}if("C" !== data5){const err12 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/2/properties/type/const",keyword:"const",params:{allowedValue: "C"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err12];}else {vErrors.push(err12);}errors++;}var valid4 = _errs17 === errors;}else {var valid4 = true;}if(valid4){if(data0.value !== undefined){let data6 = data0.value;const _errs19 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){const err13 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/2/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err13];}else {vErrors.push(err13);}errors++;}var valid4 = _errs19 === errors;}else {var valid4 = true;}}}}else {const err14 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/2/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err14];}else {vErrors.push(err14);}errors++;}}var _valid0 = _errs15 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs21 = errors;if(errors === _errs21){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing3;if(((data0.type === undefined) && (missing3 = "type")) || ((data0.value === undefined) && (missing3 = "value"))){const err15 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/3/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"};if(vErrors === null){vErrors = [err15];}else {vErrors.push(err15);}errors++;}else {if(data0.type !== undefined){let data7 = data0.type;const _errs23 = errors;if(typeof data7 !== "string"){const err16 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/3/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err16];}else {vErrors.push(err16);}errors++;}if("D" !== data7){const err17 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/3/properties/type/const",keyword:"const",params:{allowedValue: "D"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err17];}else {vErrors.push(err17);}errors++;}var valid5 = _errs23 === errors;}else {var valid5 = true;}if(valid5){if(data0.value !== undefined){let data8 = data0.value;const _errs25 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){const err18 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/3/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err18];}else {vErrors.push(err18);}errors++;}var valid5 = _errs25 === errors;}else {var valid5 = true;}}}}else {const err19 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/3/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err19];}else {vErrors.push(err19);}errors++;}}var _valid0 = _errs21 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs27 = errors;if(errors === _errs27){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing4;if(((data0.type === undefined) && (missing4 = "type")) || ((data0.value === undefined) && (missing4 = "value"))){const err20 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/4/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"};if(vErrors === null){vErrors = [err20];}else {vErrors.push(err20);}errors++;}else {if(data0.type !== undefined){let data9 = data0.type;const _errs29 = errors;if(typeof data9 !== "string"){const err21 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/4/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err21];}else {vErrors.push(err21);}errors++;}if("E" !== data9){const err22 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/4/properties/type/const",keyword:"const",params:{allowedValue: "E"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err22];}else {vErrors.push(err22);}errors++;}var valid6 = _errs29 === errors;}else {var valid6 = true;}if(valid6){if(data0.value !== undefined){let data10 = data0.value;const _errs31 = errors;if(!((typeof data10 == "number") && (isFinite(data10)))){const err23 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/4/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err23];}else {vErrors.push(err23);}errors++;}var valid6 = _errs31 === errors;}else {var valid6 = true;}}}}else {const err24 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/4/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err24];}else {vErrors.push(err24);}errors++;}}var _valid0 = _errs27 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs33 = errors;if(errors === _errs33){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing5;if(((data0.type === undefined) && (missing5 = "type")) || ((data0.value === undefined) && (missing5 = "value"))){const err25 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/5/required",keyword:"required",params:{missingProperty: missing5},message:"must have required property '"+missing5+"'"};if(vErrors === null){vErrors = [err25];}else {vErrors.push(err25);}errors++;}else {if(data0.type !== undefined){let data11 = data0.type;const _errs35 = errors;if(typeof data11 !== "string"){const err26 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/5/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err26];}else {vErrors.push(err26);}errors++;}if("F" !== data11){const err27 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/5/properties/type/const",keyword:"const",params:{allowedValue: "F"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err27];}else {vErrors.push(err27);}errors++;}var valid7 = _errs35 === errors;}else {var valid7 = true;}if(valid7){if(data0.value !== undefined){let data12 = data0.value;const _errs37 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){const err28 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/5/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err28];}else {vErrors.push(err28);}errors++;}var valid7 = _errs37 === errors;}else {var valid7 = true;}}}}else {const err29 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/5/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err29];}else {vErrors.push(err29);}errors++;}}var _valid0 = _errs33 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs39 = errors;if(errors === _errs39){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing6;if(((data0.type === undefined) && (missing6 = "type")) || ((data0.value === undefined) && (missing6 = "value"))){const err30 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/6/required",keyword:"required",params:{missingProperty: missing6},message:"must have required property '"+missing6+"'"};if(vErrors === null){vErrors = [err30];}else {vErrors.push(err30);}errors++;}else {if(data0.type !== undefined){let data13 = data0.type;const _errs41 = errors;if(typeof data13 !== "string"){const err31 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/6/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err31];}else {vErrors.push(err31);}errors++;}if("G" !== data13){const err32 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/6/properties/type/const",keyword:"const",params:{allowedValue: "G"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err32];}else {vErrors.push(err32);}errors++;}var valid8 = _errs41 === errors;}else {var valid8 = true;}if(valid8){if(data0.value !== undefined){let data14 = data0.value;const _errs43 = errors;if(!((typeof data14 == "number") && (isFinite(data14)))){const err33 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/6/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err33];}else {vErrors.push(err33);}errors++;}var valid8 = _errs43 === errors;}else {var valid8 = true;}}}}else {const err34 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/6/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err34];}else {vErrors.push(err34);}errors++;}}var _valid0 = _errs39 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs45 = errors;if(errors === _errs45){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing7;if(((data0.type === undefined) && (missing7 = "type")) || ((data0.value === undefined) && (missing7 = "value"))){const err35 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/7/required",keyword:"required",params:{missingProperty: missing7},message:"must have required property '"+missing7+"'"};if(vErrors === null){vErrors = [err35];}else {vErrors.push(err35);}errors++;}else {if(data0.type !== undefined){let data15 = data0.type;const _errs47 = errors;if(typeof data15 !== "string"){const err36 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/7/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err36];}else {vErrors.push(err36);}errors++;}if("H" !== data15){const err37 = {instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/items/anyOf/7/properties/type/const",keyword:"const",params:{allowedValue: "H"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err37];}else {vErrors.push(err37);}errors++;}var valid9 = _errs47 === errors;}else {var valid9 = true;}if(valid9){if(data0.value !== undefined){let data16 = data0.value;const _errs49 = errors;if(!((typeof data16 == "number") && (isFinite(data16)))){const err38 = {instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/items/anyOf/7/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err38];}else {vErrors.push(err38);}errors++;}var valid9 = _errs49 === errors;}else {var valid9 = true;}}}}else {const err39 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf/7/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err39];}else {vErrors.push(err39);}errors++;}}var _valid0 = _errs45 === errors;valid1 = valid1 || _valid0;}}}}}}}if(!valid1){const err40 = {instancePath:instancePath+"/" + i0,schemaPath:"#/items/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err40];}else {vErrors.push(err40);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs2;if(vErrors !== null){if(_errs2){vErrors.length = _errs2;}else {vErrors = null;}}}var valid0 = _errs1 === errors;if(!valid0){break;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;}