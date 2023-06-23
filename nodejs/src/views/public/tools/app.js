function input_cap() {
    let value = document.getElementById("cap").value;
    return Number(value);
}
function input_r() {
    let value = document.getElementById("risk").value;
    return Number(value);
}
function input_pr() {
    let value = document.getElementById("pr").value;
    return Number(value);
}
function input_sl() {
    let value = document.getElementById("sl").value;
    return Number(value);
}
function cal() {
    let value_r = input_cap() * (input_r() / 100);
    let value_gap = input_pr() - input_sl();
    let result = value_r / (value_gap / input_pr());
    return result;
}
function cal_lot() {
    let value = cal() / input_pr();
    return value;
}
function display(elementID, value) {
    document.getElementById(elementID).innerHTML = value;
}
function act() {
    display("result0","If Loss, You will loss : " + input_cap() * (input_r() / 100).toFixed(2));
    display("result1", "You can buy at the amount of Capitals : " + cal().toFixed(2));
    display("result2", "Amount of assets : " + cal_lot().toFixed(9));
}