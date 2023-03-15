
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
    { branch: 'Vizhinjam', districtId: '1', branchId: '' },
    { branch: 'Neyattinkara', districtId: '1', branchId: '' },
    { branch: 'Nedumangad', districtId: '1', branchId: '' },
    { branch: 'Technopark', districtId: '1', branchId: '' },
    { branch: 'Kottarakkara', districtId: '2', branchId: '' },
    { branch: 'Karunagappilly', districtId: '2', branchId: '' },
    { branch: 'Punalur', districtId: '2', branchId: '' },
    { branch: 'Anchal', districtId: '2', branchId: '' },
    { branch: 'Kalady', districtId: '3', branchId: '' },
    { branch: 'Angamaly', districtId: '3', branchId: '' },
    { branch: 'Piravam', districtId: '3', branchId: '' },
    { branch: 'Ottapalam', districtId: '4', branchId: '' },
    { branch: 'Shornur', districtId: '4', branchId: '' },
    { branch: 'Nemmara', districtId: '4', branchId: '' },
    { branch: 'Pattambi', districtId: '4', branchId: '' },
    { branch: '', districtId: '5', branchId: '' },
    { branch: '', districtId: '5', branchId: '' },
    { branch: '', districtId: '5', branchId: '' },
    { branch: '', districtId: '6', branchId: '' },
    { branch: '', districtId: '6', branchId: '' },
    { branch: '', districtId: '6', branchId: '' },
    { branch: '', districtId: '7', branchId: '' },
    { branch: '', districtId: '7', branchId: '' },
    { branch: '', districtId: '7', branchId: '' },
    { branch: '', districtId: '8', branchId: '' },
    { branch: '', districtId: '8', branchId: '' },
    { branch: '', districtId: '8', branchId: '' },
    { branch: '', districtId: '9', branchId: '' },
    { branch: '', districtId: '9', branchId: '' },
    { branch: '', districtId: '9', branchId: '' },
    { branch: '', districtId: '10', branchId: '' },
    { branch: '', districtId: '10', branchId: '' },
    { branch: '', districtId: '10', branchId: '' },
    { branch: '', districtId: '11', branchId: '' },
    { branch: '', districtId: '11', branchId: '' },
    { branch: '', districtId: '11', branchId: '' },
    { branch: '', districtId: '12', branchId: '' },
    { branch: '', districtId: '12', branchId: '' },
    { branch: '', districtId: '12', branchId: '' },
    { branch: '', districtId: '13', branchId: '' },
    { branch: '', districtId: '13', branchId: '' },
    { branch: '', districtId: '13', branchId: '' },
    { branch: '', districtId: '14', branchId: '' },
    { branch: '', districtId: '14', branchId: '' },
    { branch: '', districtId: '14', branchId: '' },
    { branch: '', districtId: '14', branchId: '' },
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
districtObj.appendTo('#districts');
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
branchObj.appendTo('#branches');