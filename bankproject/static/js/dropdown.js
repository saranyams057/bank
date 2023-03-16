
//define the country DropDownList data
var districtData = [
    { district: 'Thiruvananthapuram', districtId: '1' },
    { district: 'Kollam', districtId: '2' },
    { district: 'Ernakulam', districtId: '3' },
    { district: 'Palakkad', districtId: '4' },
    { district: 'Wayanad', districtId: '5' },
    { district: 'Idukki', districtId: '6' },
    { district: 'Kottayam', districtId: '7' },
    { district: 'Pathanamthitta', districtId: '8' },
    { district: 'Kannur', districtId: '9' },
    { district: 'Kozhikode', districtId: '10' },
    { district: 'Alappuzha', districtId: '11' },
    { district: 'Kasaragod', districtId: '12' },
    { district: 'Malappuram', districtId: '13' },
    { district: 'Thrissur', districtId: '14' },
];
//define the state DropDownList data
var branchData = [
    { branch: 'Vizhinjam', districtId: '1', branchId: '101' },
    { branch: 'Neyattinkara', districtId: '1', branchId: '102' },
    { branch: 'Nedumangad', districtId: '1', branchId: '103' },
    { branch: 'Technopark', districtId: '1', branchId: '104' },
    { branch: 'Kottarakkara', districtId: '2', branchId: '105' },
    { branch: 'Karunagappilly', districtId: '2', branchId: '106' },
    { branch: 'Punalur', districtId: '2', branchId: '107' },
    { branch: 'Anchal', districtId: '2', branchId: '108' },
    { branch: 'Kalady', districtId: '3', branchId: '109' },
    { branch: 'Angamaly', districtId: '3', branchId: '110' },
    { branch: 'Piravam', districtId: '3', branchId: '111' },
    { branch: 'Ottapalam', districtId: '4', branchId: '112' },
    { branch: 'Shornur', districtId: '4', branchId: '113' },
    { branch: 'Nemmara', districtId: '4', branchId: '114' },
    { branch: 'Pattambi', districtId: '4', branchId: '115' },
    { branch: 'Kottapadi', districtId: '5', branchId: '116' },
    { branch: 'Kalpetta', districtId: '5', branchId: '117' },
    { branch: 'Sulthan Batheri', districtId: '5', branchId: '118' },
    { branch: 'Adimali', districtId: '6', branchId: '119' },
    { branch: 'Kattappana', districtId: '6', branchId: '120' },
    { branch: 'Vagamon', districtId: '6', branchId: '121' },
    { branch: 'PSBkottayam', districtId: '7', branchId: '122' },
    { branch: 'Vaikam', districtId: '7', branchId: '123' },
    { branch: 'Changanassery', districtId: '7', branchId: '124' },
    { branch: 'Konni', districtId: '8', branchId: '125' },
    { branch: 'Chittar', districtId: '8', branchId: '126' },
    { branch: 'Nellimala', districtId: '8', branchId: '127' },
    { branch: 'Payyannur', districtId: '9', branchId: '128' },
    { branch: 'Irutti', districtId: '9', branchId: '128' },
    { branch: 'Kadachira', districtId: '9', branchId: '130' },
    { branch: '', districtId: '10', branchId: '131' },
    { branch: '', districtId: '10', branchId: '132' },
    { branch: '', districtId: '10', branchId: '133' },
    { branch: '', districtId: '11', branchId: '134' },
    { branch: '', districtId: '11', branchId: '135' },
    { branch: '', districtId: '11', branchId: '136' },
    { branch: '', districtId: '12', branchId: '137' },
    { branch: '', districtId: '12', branchId: '138' },
    { branch: '', districtId: '12', branchId: '139' },
    { branch: '', districtId: '13', branchId: '140' },
    { branch: '', districtId: '13', branchId: '141' },
    { branch: '', districtId: '13', branchId: '142' },
    { branch: '', districtId: '14', branchId: '143' },
    { branch: '', districtId: '14', branchId: '144' },
    { branch: '', districtId: '14', branchId: '145' },
    { branch: '', districtId: '14', branchId: '146' },
];
//define the city DropDownList data
//initiates the country DropDownList
var districtObj = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: districtData,
    fields: { value: 'districtId', text: 'district' },
    //bind the change event handler
    change: () => {
        //Query the data source based on country DropDownList selected value
        branchObj.query = new ej.data.Query().where('districtId', 'equal', districtObj.value);
        // enable the state DropDownList
        branchObj.enabled = true;
        //clear the existing selection.
        branchObj.text = null;
        // bind the property changes to state DropDownList
        branchObj.dataBind();
        //clear the existing selection in city DropDownList
    },
    placeholder: 'Select a district',
});
//render the country DropDownList
districtObj.appendTo('#district');
//initiates the state DropDownList
//initiates the city DropDownList
var branchObj = new ej.dropdowns.DropDownList({
    dataSource: branchData,
    fields: { text: 'branch', value: 'branchId' },
    // disable the DropDownList by default to prevent the user interact.
    enabled: false,
    placeholder: 'Select a branch',
});
//render the city DropDownList
branchObj.appendTo('#branch');