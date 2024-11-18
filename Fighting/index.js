import { cardss } from "./cards.js";
//$("#c1s1").text(cardss[0].power);
//$("#c1s2").text(cardss[0].description);

//Power and description
const ids = ["#c1s1", "#c2s1", "#c3s1", "#c4s1"];
const ids2 = ["#c1s2", "#c2s2", "#c3s2", "#c4s2"];
const idst = ["#c1s1t", "#c2s1t", "#c3s1t", "#c4s1t"];
const ids2t = ["#c1s2t", "#c2s2t", "#c3s2t", "#c4s2t"];
const cs = ["#c1", "#c2", "#c3", "#c4"];
//Attack and use buttons
const idsb = ["#usebutton1", "#usebutton2", "#usebutton3", "#usebutton4"];
const idsb2 = ["#attackbutton1", "#attackbutton2", "#attackbutton3", "#attackbutton4"];

const army = [];
const armypowerdisplay = [0];
const armypowerdisplay2 = [0];
const newArmy = [];

function recruitArmy() {
    for (var i = 0; i <= 3; i++) {
        var a = Math.floor(Math.random() * 4);
        $(ids[i]).text(cardss[a].power);
        console.log(cardss[a].power);
        switch (cardss[a].power) {
            case 5:
                $(ids2[i]).text("Infantry");
                break;
                case 10:
                $(ids2[i]).text("Artillery");
                break;
                case 15:
                $(ids2[i]).text("Tank");
                break;
                case 20:
                $(ids2[i]).text("Airplane");
                break;
                default:
                    console.log("Error");
        }
    }
}

function recruitArmyt() {
    for (var i = 0; i <= 3; i++) {
        var a = Math.floor(Math.random() * 4);
        $(idst[i]).text(cardss[a].power);
        console.log(cardss[a].power);
        switch (cardss[a].power) {
            case 5:
                $(ids2t[i]).text("Infantry");
                break;
                case 10:
                $(ids2t[i]).text("Artillery");
                break;
                case 15:
                $(ids2t[i]).text("Tank");
                break;
                case 20:
                $(ids2t[i]).text("Airplane");
                break;
                default:
                    console.log("Error");
        }
    }
}

var button1clicked = false;
var button2clicked = false;
var button3clicked = false;
var button4clicked = false;

//Use buttons handler
/*for (var i = 0; i < 4; i++) {
    $(idsb[i]).click(function() {
            button1clicked = true;
            console.log(i);
    });
}*/

recruitArmyt();
recruitArmy();

var totalPower = 0;
var clickCount2 = 0;
var remainingPower;
//Use button
var money = 10000;
$(idsb[0]).click(function() {
        button1clicked = true;
        for (var i = 0; i < 4; i++) {
            $(idsb[i]).text("Add");
        }
        console.log("button1");
        console.log(document.getElementById("c1s2").innerHTML);

        var armytext1 = document.getElementById("c1s2").innerHTML;
        var armypower = document.getElementById("c1s1").innerHTML;
        parseInt(armypower);
        console.log(armypower);
        army.push(armytext1);
        armypowerdisplay.push(armypower);
        $("#army2").text(army);
        $("#army3").text(armypowerdisplay);
        /*console.log("armypowerdisplay length ", armypowerdisplay.length);
        for (var i = 0; i < armypowerdisplay.length; i++) {
            console.log("armypowerdisplay ", armypowerdisplay[i]);
            totalPower += armypowerdisplay[i];
        }*/
        for (var i = clickCount2 + 1; i < armypowerdisplay.length; i++) {
            totalPower += parseInt(armypowerdisplay[i]);
        }
        console.log("total power ", totalPower);
        $("#displaypower").text(totalPower);
        clickCount2++;
});

$(idsb[1]).click(function() {
    button2clicked = true;
    for (var i = 0; i < 4; i++) {
        $(idsb[i]).text("Add");
    }
    console.log("button1");
    console.log(document.getElementById("c2s2").innerHTML);

    var armytext1 = document.getElementById("c2s2").innerHTML;
    var armypower = document.getElementById("c2s1").innerHTML;
    parseInt(armypower);
    console.log(armypower);
    army.push(armytext1);
    armypowerdisplay.push(armypower);
    $("#army2").text(army);
    $("#army3").text(armypowerdisplay);
    for (var i = clickCount2 + 1; i < armypowerdisplay.length; i++) {
        totalPower += parseInt(armypowerdisplay[i]);
    }
    console.log("total power ", totalPower);
    $("#displaypower").text(totalPower);
    clickCount2++;
});

$(idsb[2]).click(function() {
    button3clicked = true;
    for (var i = 0; i < 4; i++) {
        $(idsb[i]).text("Add");
    }
    console.log("button1");
    console.log(document.getElementById("c3s2").innerHTML);

    var armytext1 = document.getElementById("c3s2").innerHTML;
    var armypower = document.getElementById("c3s1").innerHTML;
    parseInt(armypower);
    console.log(armypower);
    army.push(armytext1);
    armypowerdisplay.push(armypower);
    $("#army2").text(army);
    $("#army3").text(armypowerdisplay);
    for (var i = clickCount2 + 1; i < armypowerdisplay.length; i++) {
        totalPower += parseInt(armypowerdisplay[i]);
    }
    console.log("total power ", totalPower);
    $("#displaypower").text(totalPower);
    clickCount2++;
});

$(idsb[3]).click(function() {
    button4clicked = true;
    for (var i = 0; i < 4; i++) {
        $(idsb[i]).text("Add");
    }
    console.log("button1");
    console.log(document.getElementById("c4s2").innerHTML);

    var armytext1 = document.getElementById("c4s2").innerHTML;
    var armypower = document.getElementById("c4s1").innerHTML;
    parseInt(armypower);
    console.log(armypower);
    army.push(armytext1);
    armypowerdisplay.push(armypower);
    $("#army2").text(army);
    $("#army3").text(armypowerdisplay);
    for (var i = clickCount2 + 1; i < armypowerdisplay.length; i++) {
        totalPower += parseInt(armypowerdisplay[i]);
    }
    console.log("total power ", totalPower);
    $("#displaypower").text(totalPower);
    clickCount2++;
});

//TODO [Attack Button Functionality]
//After clicking use and adding to army, click "attack" and if power is greater than
//their, delete it. If it's less than, delete our.

var a = 0;
var b = 4;
//Attack button
$(idsb2[0]).click(function() {
    if (totalPower < parseInt($(idst[0]).text())) {
        console.log("total power is not enough");
        console.log("army length ", army.length);
        do {
            a = Math.floor(Math.random() * 4);
            console.log("a ", a);
            if (army.length == 0) {
                console.log("Add to army, error");
                location.reload();
                break;
            }
            
        } while ((a > army.length || a == army.length));
        //var armypower = document.getElementById(ids[a]).innerHTML;
        /*var armypower = $(ids[a]).text();
        parseInt(armypower);
        totalPower -= armypower;*/
        totalPower -= parseInt($(ids[a]).text());
        //var c = parseInt(document.getElementById(ids[a]).innerText);
        //console.log("parse int ", c);
        $(cs[a]).remove();
        //console.log("armypower ", armypower);
        console.log(cs[a], " removed");

        army.splice(army.indexOf(a), 1);
        console.log("army ", army);
        a += 10000;
        if (totalPower < 0) {
            totalPower = 0;
        }
        $("#army2").text(army);
        console.log("total power", totalPower);
    }
    else {
        console.log("button clicked");
        //totalPower = totalPower - parseInt($(idst[0]).text());
        console.log("remaining power: ", totalPower);
        $("#c1t").remove();
        console.log($("#c1t").text(), " removed 1");
        totalPower = 0;
        army.length = 0;
        console.log("Battle is won. Total power ", 0, " Army length ", army.length);
        $("#army2").text(army);
        for (var i = 0; i < armypowerdisplay.length; i++) {
            armypowerdisplay[i] = 0;
        }
        $("#army3").text(armypowerdisplay);
        console.log("total power ", totalPower);
        $("#powerdisplay").text(totalPower);
    }
});

$(idsb2[1]).click(function() {
    if (totalPower < parseInt($(idst[1]).text())) {
        console.log("total power is not enough");
        do {
            a = Math.floor(Math.random() * 4);
            console.log("a ", a);
            if (army.length == 0) {
                console.log("Add to army, error");
                location.reload();
                break;
            }
            
        } while ((a > army.length || a == army.length));
        //var armypower = document.getElementById(ids[a]).innerHTML;
        /*var armypower = $(ids[a]).text();
        parseInt(armypower);
        totalPower -= armypower;*/
        totalPower -= parseInt($(ids[a]).text());
        $(cs[a]).remove();   
        console.log(cs[a], " removed"); 
        //console.log("armypower ", armypower);    
        army.splice(army.indexOf(a), 1);
        if (totalPower < 0) {
            totalPower = 0;
        }
        $("#army2").text(army);
        console.log("total power", totalPower);
    }
    else {
        console.log("button clicked 2");
        console.log($(idst[1]).text());
        //totalPower = totalPower - parseInt($(idst[1]).text());
        console.log("remaining power: ", totalPower);
        $("#c2t").remove();
        console.log($("#c2t").text(), " removed 2");
        army.length = 0;
        totalPower = 0;
        console.log("Battle is won. Total power ", 0, " Army length ", army.length);
        $("#army2").text(army);
        for (var i = 0; i < armypowerdisplay.length; i++) {
            armypowerdisplay[i] = 0;
        }
        $("#army3").text(armypowerdisplay);
        $("#displaypower").text(totalPower);
    }
});

$(idsb2[2]).click(function() {
    if (totalPower < parseInt($(idst[2]).text())) {
        console.log("total power is not enough");
        do {
            a = Math.floor(Math.random() * 4);
            console.log("a ", a);
            if (army.length == 0) {
                console.log("Add to army, error");
                location.reload();
                break;
            }
            
        } while ((a > army.length || a == army.length));
        //var armypower = document.getElementById(ids[a]).innerHTML;
        /*var armypower = $(ids[a]).text();
        parseInt(armypower);
        totalPower -= armypower;*/
        totalPower -= parseInt($(ids[a]).text());
        $(cs[a]).remove();
        console.log(cs[a], " removed");
        //console.log("armypower ", armypower);
        army.splice(army.indexOf(a), 1);
        if (totalPower < 0) {
            totalPower = 0;
        }
        $("#army2").text(army);
        console.log("total power", totalPower);
    }
    else {
        console.log("button clicked 3");
        console.log($(idst[2]).text());
        //totalPower = totalPower - parseInt($(idst[2]).text());
        console.log("remaining power: ", totalPower);
        $("#c3t").remove();
        console.log($("#c3t").text(), " removed 3");
        army.length = 0;
        totalPower = 0;
        console.log("Battle is won. Total power ", 0, " Army length ", army.length);
        $("#army2").text(army);
        for (var i = 0; i < armypowerdisplay.length; i++) {
            armypowerdisplay[i] = 0;
        }
        $("#army3").text(armypowerdisplay);
        $("#displaypower").text(totalPower);
    }
});

$(idsb2[3]).click(function() {
    if (totalPower < parseInt($(idst[3]).text())) {
        console.log("total power is not enough");
        do {
            a = Math.floor(Math.random() * 4);
            console.log("a ", a);
            if (army.length == 0) {
                console.log("Add to army, error");
                location.reload();
                break;
            }
            
        } while ((a > army.length || a == army.length));
        //var armypower = document.getElementById(ids[a]).innerHTML;
        /*var armypower = $(ids[a]).text();
        parseInt(armypower);
        totalPower -= armypower;*/
        totalPower -= parseInt($(ids[a]).text());
        $(cs[a]).remove();
        console.log(cs[a], " removed");
        //console.log("armypower ", armypower);
        army.splice(army.indexOf(a), 1);
        if (totalPower < 0) {
            totalPower = 0;
        }
        $("#army2").text(army);
        console.log("total power", totalPower);
    }
    else {
        console.log("button clicked 4");
        console.log($(idst[3]).text());
        //totalPower = totalPower - parseInt($(idst[3]).text());
        console.log("remaining power: ", totalPower);
        $("#c4t").remove();
        console.log($("#c4t").text(), " removed 4");
        army.length = 0;
        totalPower = 0;
        console.log("Battle is won. Total power ", 0, " Army length ", army.length);
        $("#army2").text(army);
        armypowerdisplay.length = 1;
        for (var i = 0; i < armypowerdisplay.length; i++) {
            armypowerdisplay[i] = 0;
        }
        $("#army3").text(armypowerdisplay);
        $("#displaypower").text(totalPower);
    }
});
