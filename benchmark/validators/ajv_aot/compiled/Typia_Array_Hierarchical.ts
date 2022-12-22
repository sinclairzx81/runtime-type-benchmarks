// @ts-nocheck
"use strict";export const Typia_Array_Hierarchical = validate10;const schema11 = {"$id":"Typia_Array_Hierarchical","type":"array","items":{"type":"object","properties":{"id":{"type":"number"},"serial":{"type":"number"},"name":{"type":"string"},"established_at":{"type":"object","properties":{"time":{"type":"number"},"zone":{"type":"number"}},"required":["time","zone"]},"departments":{"type":"array","items":{"type":"object","properties":{"id":{"type":"number"},"code":{"type":"string"},"sales":{"type":"number"},"created_at":{"type":"object","properties":{"time":{"type":"number"},"zone":{"type":"number"}},"required":["time","zone"]},"employees":{"type":"array","items":{"type":"object","properties":{"id":{"type":"number"},"name":{"type":"string"},"age":{"type":"number"},"grade":{"type":"number"},"employeed_at":{"type":"object","properties":{"time":{"type":"number"},"zone":{"type":"number"}},"required":["time","zone"]}},"required":["id","name","age","grade","employeed_at"]}}},"required":["id","code","sales","created_at","employees"]}}},"required":["id","serial","name","established_at","departments"]}};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="Typia_Array_Hierarchical" */;let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;if(errors === _errs1){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((((((data0.id === undefined) && (missing0 = "id")) || ((data0.serial === undefined) && (missing0 = "serial"))) || ((data0.name === undefined) && (missing0 = "name"))) || ((data0.established_at === undefined) && (missing0 = "established_at"))) || ((data0.departments === undefined) && (missing0 = "departments"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/items/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.id !== undefined){let data1 = data0.id;const _errs3 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid1 = _errs3 === errors;}else {var valid1 = true;}if(valid1){if(data0.serial !== undefined){let data2 = data0.serial;const _errs5 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/serial",schemaPath:"#/items/properties/serial/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid1 = _errs5 === errors;}else {var valid1 = true;}if(valid1){if(data0.name !== undefined){const _errs7 = errors;if(typeof data0.name !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/name",schemaPath:"#/items/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs7 === errors;}else {var valid1 = true;}if(valid1){if(data0.established_at !== undefined){let data4 = data0.established_at;const _errs9 = errors;if(errors === _errs9){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing1;if(((data4.time === undefined) && (missing1 = "time")) || ((data4.zone === undefined) && (missing1 = "zone"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/established_at",schemaPath:"#/items/properties/established_at/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data4.time !== undefined){let data5 = data4.time;const _errs11 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/established_at/time",schemaPath:"#/items/properties/established_at/properties/time/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data4.zone !== undefined){let data6 = data4.zone;const _errs13 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/established_at/zone",schemaPath:"#/items/properties/established_at/properties/zone/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/established_at",schemaPath:"#/items/properties/established_at/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs9 === errors;}else {var valid1 = true;}if(valid1){if(data0.departments !== undefined){let data7 = data0.departments;const _errs15 = errors;if(errors === _errs15){if(Array.isArray(data7)){var valid3 = true;const len1 = data7.length;for(let i1=0; i1<len1; i1++){let data8 = data7[i1];const _errs17 = errors;if(errors === _errs17){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){let missing2;if((((((data8.id === undefined) && (missing2 = "id")) || ((data8.code === undefined) && (missing2 = "code"))) || ((data8.sales === undefined) && (missing2 = "sales"))) || ((data8.created_at === undefined) && (missing2 = "created_at"))) || ((data8.employees === undefined) && (missing2 = "employees"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1,schemaPath:"#/items/properties/departments/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];return false;}else {if(data8.id !== undefined){let data9 = data8.id;const _errs19 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/id",schemaPath:"#/items/properties/departments/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs19 === errors;}else {var valid4 = true;}if(valid4){if(data8.code !== undefined){const _errs21 = errors;if(typeof data8.code !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/code",schemaPath:"#/items/properties/departments/items/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs21 === errors;}else {var valid4 = true;}if(valid4){if(data8.sales !== undefined){let data11 = data8.sales;const _errs23 = errors;if(!((typeof data11 == "number") && (isFinite(data11)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/sales",schemaPath:"#/items/properties/departments/items/properties/sales/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs23 === errors;}else {var valid4 = true;}if(valid4){if(data8.created_at !== undefined){let data12 = data8.created_at;const _errs25 = errors;if(errors === _errs25){if(data12 && typeof data12 == "object" && !Array.isArray(data12)){let missing3;if(((data12.time === undefined) && (missing3 = "time")) || ((data12.zone === undefined) && (missing3 = "zone"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/created_at",schemaPath:"#/items/properties/departments/items/properties/created_at/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];return false;}else {if(data12.time !== undefined){let data13 = data12.time;const _errs27 = errors;if(!((typeof data13 == "number") && (isFinite(data13)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/created_at/time",schemaPath:"#/items/properties/departments/items/properties/created_at/properties/time/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid5 = _errs27 === errors;}else {var valid5 = true;}if(valid5){if(data12.zone !== undefined){let data14 = data12.zone;const _errs29 = errors;if(!((typeof data14 == "number") && (isFinite(data14)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/created_at/zone",schemaPath:"#/items/properties/departments/items/properties/created_at/properties/zone/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid5 = _errs29 === errors;}else {var valid5 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/created_at",schemaPath:"#/items/properties/departments/items/properties/created_at/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs25 === errors;}else {var valid4 = true;}if(valid4){if(data8.employees !== undefined){let data15 = data8.employees;const _errs31 = errors;if(errors === _errs31){if(Array.isArray(data15)){var valid6 = true;const len2 = data15.length;for(let i2=0; i2<len2; i2++){let data16 = data15[i2];const _errs33 = errors;if(errors === _errs33){if(data16 && typeof data16 == "object" && !Array.isArray(data16)){let missing4;if((((((data16.id === undefined) && (missing4 = "id")) || ((data16.name === undefined) && (missing4 = "name"))) || ((data16.age === undefined) && (missing4 = "age"))) || ((data16.grade === undefined) && (missing4 = "grade"))) || ((data16.employeed_at === undefined) && (missing4 = "employeed_at"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2,schemaPath:"#/items/properties/departments/items/properties/employees/items/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"}];return false;}else {if(data16.id !== undefined){let data17 = data16.id;const _errs35 = errors;if(!((typeof data17 == "number") && (isFinite(data17)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/id",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid7 = _errs35 === errors;}else {var valid7 = true;}if(valid7){if(data16.name !== undefined){const _errs37 = errors;if(typeof data16.name !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/name",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs37 === errors;}else {var valid7 = true;}if(valid7){if(data16.age !== undefined){let data19 = data16.age;const _errs39 = errors;if(!((typeof data19 == "number") && (isFinite(data19)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/age",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/age/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid7 = _errs39 === errors;}else {var valid7 = true;}if(valid7){if(data16.grade !== undefined){let data20 = data16.grade;const _errs41 = errors;if(!((typeof data20 == "number") && (isFinite(data20)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/grade",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/grade/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid7 = _errs41 === errors;}else {var valid7 = true;}if(valid7){if(data16.employeed_at !== undefined){let data21 = data16.employeed_at;const _errs43 = errors;if(errors === _errs43){if(data21 && typeof data21 == "object" && !Array.isArray(data21)){let missing5;if(((data21.time === undefined) && (missing5 = "time")) || ((data21.zone === undefined) && (missing5 = "zone"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/employeed_at",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/employeed_at/required",keyword:"required",params:{missingProperty: missing5},message:"must have required property '"+missing5+"'"}];return false;}else {if(data21.time !== undefined){let data22 = data21.time;const _errs45 = errors;if(!((typeof data22 == "number") && (isFinite(data22)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/employeed_at/time",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/employeed_at/properties/time/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid8 = _errs45 === errors;}else {var valid8 = true;}if(valid8){if(data21.zone !== undefined){let data23 = data21.zone;const _errs47 = errors;if(!((typeof data23 == "number") && (isFinite(data23)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/employeed_at/zone",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/employeed_at/properties/zone/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid8 = _errs47 === errors;}else {var valid8 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2+"/employeed_at",schemaPath:"#/items/properties/departments/items/properties/employees/items/properties/employeed_at/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid7 = _errs43 === errors;}else {var valid7 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees/" + i2,schemaPath:"#/items/properties/departments/items/properties/employees/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid6 = _errs33 === errors;if(!valid6){break;}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1+"/employees",schemaPath:"#/items/properties/departments/items/properties/employees/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid4 = _errs31 === errors;}else {var valid4 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments/" + i1,schemaPath:"#/items/properties/departments/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs17 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/departments",schemaPath:"#/items/properties/departments/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs15 === errors;}else {var valid1 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;}