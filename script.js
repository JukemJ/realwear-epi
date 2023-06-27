// if(document.getElementById('final-inspection-start')){
//     document.getElementById('final-inspection-start').addEventListener('click',questionOne)
// }

document.getElementById('final-inspection-start').addEventListener('click',questionOne)


function menuSelect(){
    console.log(this.value)
    switch (this.value){
        case '1':
            questionOne()
            break
        case '2':
            questionTwo()
            break
        case '3':
            questionThree()
            break
        case '4':
            questionFour()
            break
        case '5':
            questionFive()
            break
        case '6':
            questionSix()
            break
        case '7':
            questionSeven()
            break
        default: questionEight()
    }
}

function questionOne(){
    const element = document.getElementById('epi-content')
    element.innerHTML = `
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option selected="selected" value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-2"></div>
        <h5 class="col text-start">Perform the following procedures for Final Inspection.</h5>
    </div>
    <div class="row justify-content-end">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionTwo()">Continue</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionTwo(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option selected value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Turn on the headlights, dome light and the four-way flashers.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">✱ Inspect all of the lighting systems for any that do not operate or have broken or cracked lenses.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Repair as needed and remember to report any deficiencies in the Parts/Labor Verification Program.</h5>
    </div>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionThree()">Continue</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionThree(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option selected value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">To prevent from overfilling the transmission, ONLY fill to the COLD mark on the dip stick.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">
            If the transmission is above the middle of the HOT range (hash marks) when at operating temperature, the excess fluid must be removed.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Using the MityVac Fluid Evacuator, remove the excess transmission fluid until it is in the middle of the HOT range (hash marks).</h5>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Verify that ALL of the fluid levels (e.g., oil, transmission fluid, coolant, power steering, brake fluid and windshield-washer fluid) are at the FULL MARKS.</h5>
    </div>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionFour()">Continue</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionFour(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option selected value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">✱ Check the tire pressure.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Using a Tire Pressure Gauge, verify that the air pressure in ALL the tires is 80 psi/552 kPa.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Select one of the following that applies to the tire pressures.</h5>
    </div>
    <div class="row">
        <div class="col-1"></div>
        <select class="col-8">
            <option value="0" selected>Select</option>
            <option value="1">All at 80 psi/552 kPa</option>
            <option value="2">Higher than 80 psi/552 kPa</option>
            <option value="3">Lower than 80 psi/552 kPa</option>
        </select>
    </div>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionFive()">Continue</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionFive(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option selected value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">✱ Torque ALL lug nuts.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Using a calibrated torque wrench, torque all wheel lug nuts to 140 ft.-lbs.(190 Nm), carefully following the sequence on the WHEEL INFORMATION decals.</h5>
    </div>
    <br>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionSix()">Continue</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionSix(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option selected value="6">Verify Engine Cover</option>
            <option value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Verify the engine cover for the following:</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Verify that the seal is sealed tight and not obstructed in any way.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Ensure that all four latches are secured on the engine cover.</h5>
    </div>
    <br>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Are any of the engine cover latches broken?</h5>
    </div>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionSeven()">Yes</button>
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionSeven()">No</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionSeven(){
    const element = document.getElementById('epi-content')
    element.innerHTML =`
    <div class="row justify-content-between">
        <button class="go-button col-1 p-1" id="main-menu-button" onclick="window.location.href='index.html';">Main Menu</button>
        <h3 class="col-3">FINAL INSPECTION</h1>
        <select id="selSubSection" class="col-3 me-3">
            <option value="1">Final Inspection Procedures</option>
            <option value="2">Inspect Lighting Systems</option>
            <option value="3">Inspect All Fluid Levels</option>
            <option value="4">Verify Tire Pressures</option>
            <option value="5">Torque ALL Lugs Nuts</option>
            <option value="6">Verify Engine Cover</option>
            <option selected value="7">Test Drive Procedures</option>
            <option value="8">Scan for Diagnostic Codes</option>
            <option value="9">Barcode Decal</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Hub Heat Decals</option>
            <option value="13">Check Wheels</option>
            <option value="14">Final Recording</option>
            <option value="15">Precautionary Measures</option>
        </select>
    </div>
    <div class="row justify-content-start mt-3">
        <h2 class="col-1">Instructions</h2>
    </div>
    <div class="row justify-content-start">
        <div class="col-1"></div>
        <h5 class="col text-start">Was there any repairs and/or replacements to the brakes, transmission, differential and/or any repairs/replacements that you feel a road test is needed?</h5>
    </div>
    <div class="row justify-content-end mt-3">
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionEight()">Yes</button>
        <button class="col-1 go-button me-5 p-2" id="continue-button" onclick="questionEight()">No</button>
    </div>`
    document.getElementById('selSubSection').addEventListener('change',menuSelect)
}

function questionEight(){
    const element = document.getElementById('epi-content').innerHTML= `<h3>Not finished!</h3>`
}