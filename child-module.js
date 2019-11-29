// const Parent = require('./parent-module.js');
// exports.showChild = function() {
//     console.log('This is child');
//     this.callParent = function() {
//         var parent = Parent;
//         parent.showParent();
//     }
// }

var Tutor=require('./parent-module.js');
exports.NodeTutorial=function()
{
console.log("Node Tutorial")
function pTutor()
{
var PTutor=Tutor
PTutor.tutorial();
}
}