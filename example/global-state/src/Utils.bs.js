// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
"use strict";

var idCounter = [0];

function uniqueId() {
  idCounter[0] = (idCounter[0] + 1) | 0;
  return idCounter[0];
}

exports.uniqueId = uniqueId;
/* No side effect */
