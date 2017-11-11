
var cDealer = { 
    name: 'Enterprize Car Rentals',                                                                             
    eCartype: 'Economy',                                                                             
    eCars: 90,
    mCartype: 'Midsize',                                                                           
    mCars: 75,                                                                                  
  
  updateAvail: function() {
      return cDealer;
    },
  
  rentOutMcar: function() {
      return this.mCars--;

    },
  
  rentOutEcar: function() {
        return this.eCars--;

    }
};
//this shows business name
document.getElementById("bName").innerHTML = cDealer.name;

    function buttonC() {

//displays the total for all functions
//displays the E-type
    document.getElementById("eCars").innerHTML = cDealer.eCartype;
//display economy Cars available
    document.getElementById("eCarAvail").innerHTML = cDealer.eCars;
//displays the M size type
    document.getElementById("mCars").innerHTML = cDealer.mCartype;
//displays the mid-size cars available
    document.getElementById("mCarAvail").innerHTML = cDealer.mCars;
console.log("clickC");  }


function buttonM() {
    
      document.getElementById("mCarAvail").innerHTML = cDealer.rentOutMcar();
      console.log("clickM");
                    }


function buttonE() { 

    
      document.getElementById("eCarAvail").innerHTML = cDealer.rentOutEcar();
      console.log("clickE");
                    }



