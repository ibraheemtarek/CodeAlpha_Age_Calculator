const maxInput = document.getElementById('date');
maxInput.max =new Date().toISOString().split("T")[0];

const age_calc = () => {
    const dobInput = document.getElementById('date').value;
    const DOB = new Date(dobInput);
    const today = new Date();

    var DOBd = DOB.getDate();
    var DOBm = DOB.getMonth() + 1;
    var DOBy = DOB.getFullYear();

    var todayD = today.getDate();
    var todayM = today.getMonth() + 1;
    var todayY = today.getFullYear();

    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    console.log(todayD)
    console.log(todayM)
    console.log(todayY)

    if ( DOBd > todayD ){
        todayD = todayD + months[ todayM - 1];
        todayM = todayM - 1;
    }

    console.log(todayD)
    console.log(todayM)
    console.log(todayY)

    if ( DOBm > todayM ){
        todayM = todayM + 12;
        todayY = todayY - 1;
    }
    
    console.log(todayD)
    console.log(todayM)
    console.log(todayY)
    
    let age = todayY - DOBy
    const month = todayM - DOBm;
    const day = todayD - DOBd;
    
    console.log(age)
    console.log(month)
    console.log(day)

    // if (month < 0 || (month === 0 && day < 0)) {
    //     age--;
    // }
    if (isNaN(age) || isNaN(month) || isNaN(day) ){
        document.getElementById("result").innerText = `Please enter valid a date`
        console.log('worked')
    } else{
        document.getElementById("result").innerText = `Your age is ${age} years ${month} month ${day} day`
    }

} 