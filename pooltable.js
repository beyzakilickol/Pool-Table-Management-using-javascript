let tableInfo1 = document.getElementById("table-info1")
let tableInfo2 = document.getElementById("table-info2")
let tableInfo3 = document.getElementById("table-info3")
let tableInfo4 = document.getElementById("table-info4")
let tableInfo5 = document.getElementById("table-info5")
let tableInfo6 = document.getElementById("table-info6")
let tableInfo7 = document.getElementById("table-info7")
let tableInfo8 = document.getElementById("table-info8")
let tableInfo9 = document.getElementById("table-info9")
let tableInfo10 = document.getElementById("table-info10")
let tableInfo11 = document.getElementById("table-info11")
let tableInfo12 = document.getElementById("table-info12")

//---------Class-----------------------------
function Table(number){
    this.number = number
    this.startTime = 0
    this.endTime = 0
    this.duration = 0
    this.cost = 0
//-----------to assign a table--------------------------
this.assign = function(){
  if(this.startTime != 0 && this.endTime == 0){
    alert("This table was assigned already.Please pick an available table!")
  }
  else{

  let now = new Date() //.toLocaleString()
  this.startTime = now
  let startDiv = `
<li> Start time:${now.toLocaleString()}</li>
  `
  if(this.number == 1){
    tableInfo1.innerHTML = ""
    this.endTime = 0
  tableInfo1.insertAdjacentHTML("beforeend",startDiv)}
  else if (this.number == 2) {
    tableInfo2.innerHTML = ""
    this.endTime = 0
    tableInfo2.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 3) {
    tableInfo3.innerHTML = ""
    this.endTime = 0
    tableInfo3.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 4) {
    tableInfo4.innerHTML = ""
    this.endTime = 0
    tableInfo4.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 5) {
    tableInfo5.innerHTML = ""
    this.endTime = 0
    tableInfo5.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 6) {
    tableInfo6.innerHTML = ""
    this.endTime = 0
    tableInfo6.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 7) {
    tableInfo7.innerHTML = ""
    this.endTime = 0
    tableInfo7.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 8) {
    tableInfo8.innerHTML = ""
    this.endTime = 0
    tableInfo8.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 9) {
    tableInfo9.innerHTML = ""
    this.endTime = 0
    tableInfo9.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 10) {
    tableInfo10.innerHTML = ""
    this.endTime = 0
    tableInfo10.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 11) {
    tableInfo11.innerHTML = ""
    this.endTime = 0
    tableInfo11.insertAdjacentHTML("beforeend",startDiv)
  }
  else if (this.number == 12) {
    tableInfo12.innerHTML = ""
    this.endTime = 0
    tableInfo12.insertAdjacentHTML("beforeend",startDiv)
  }
}
}
//------To close a pool table---------------------------
this.closeTable = function(){
  if(this.endTime != 0 || this.startTime ==0){
    alert("This table is already closed or not assigned yet,no need to close!")
  }
  else{

  this.endTime= new Date() //.toLocaleString()
  let differenceOfTime = Math.abs(this.endTime- this.startTime)
  durationSeconds = differenceOfTime/1000
  durationMin = durationSeconds/60
  durationHour = durationMin/60
  duration = Math.floor(durationHour) + ": " + Math.floor(durationMin) + ": " + Math.floor(durationSeconds)

  this.duration = duration
  this.cost = durationSeconds * 0.0083333


  let endDiv = `
<li> End time:${this.endTime.toLocaleString()}</li>
<li> Game duration: ${this.duration} <br/> <b><u>Cost: $${this.cost.toFixed(2)}<u><b></li>
  `
  if(this.number == 1){
  tableInfo1.insertAdjacentHTML("beforeend",endDiv)}
  else if (this.number == 2) {
    tableInfo2.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 3) {
    tableInfo3.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 4) {
    tableInfo4.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 5) {
    tableInfo5.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 6) {
    tableInfo6.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 7) {
    tableInfo7.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 7) {
    tableInfo7.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 8) {
    tableInfo8.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 9) {
    tableInfo9.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 10) {
    tableInfo10.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 11) {
    tableInfo11.insertAdjacentHTML("beforeend",endDiv)
  }
  else if (this.number == 12) {
    tableInfo12.insertAdjacentHTML("beforeend",endDiv)
  }
}
}

}
//----------------------------------------------------

let table1 = new Table(1)
let table2 = new Table(2)
let table3 = new Table(3)
let table4 = new Table(4)
let table5 = new Table(5)
let table6 = new Table(6)
let table7 = new Table(7)
let table8 = new Table(8)
let table9 = new Table(9)
let table10 = new Table(10)
let table11 = new Table(11)
let table12 = new Table(12)
//--------Assign Button--------------------------
assign1.addEventListener("click", function(){
   table1.assign()
})
assign2.addEventListener("click", function(){
   table2.assign()
})
assign3.addEventListener("click", function(){
   table3.assign()
})
assign4.addEventListener("click", function(){
   table4.assign()
})
assign5.addEventListener("click", function(){
   table5.assign()
})
assign6.addEventListener("click", function(){
   table6.assign()
})
assign7.addEventListener("click", function(){
   table7.assign()
})
assign8.addEventListener("click", function(){
   table8.assign()
})
assign9.addEventListener("click", function(){
   table9.assign()
})
assign10.addEventListener("click", function(){
   table10.assign()
})
assign11.addEventListener("click", function(){
   table11.assign()
})
assign12.addEventListener("click", function(){
   table12.assign()
})
//-----------Close Button--------------------
close1.addEventListener("click", function(){
   table1.closeTable()
})
close2.addEventListener("click", function(){
   table2.closeTable()
})
close3.addEventListener("click", function(){
   table3.closeTable()
})
close4.addEventListener("click", function(){
   table4.closeTable()
})
close5.addEventListener("click", function(){
   table5.closeTable()
})
close6.addEventListener("click", function(){
   table6.closeTable()
})
close7.addEventListener("click", function(){
   table7.closeTable()
})
close8.addEventListener("click", function(){
   table8.closeTable()
})
close9.addEventListener("click", function(){
   table9.closeTable()
})
close10.addEventListener("click", function(){
   table10.closeTable()
})
close11.addEventListener("click", function(){
   table11.closeTable()
})
close12.addEventListener("click", function(){
   table12.closeTable()
})
