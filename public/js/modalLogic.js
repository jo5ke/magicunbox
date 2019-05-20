

let login = document.getElementById("login")
let loginModal = M.Modal.init(login);

let register = document.getElementById("register")
let registerModal = M.Modal.init(register);

let payment = document.getElementById("payment")
let paymentModal = M.Modal.init(payment);

let iteminfo = document.getElementById("iteminfo")
let iteminfoModal = M.Modal.init(iteminfo);

let edititem = document.getElementById("edititem")
let edititemModal = M.Modal.init(edititem);

let licenseitem = document.getElementById("licenseitem")
let licenseModal = M.Modal.init(licenseitem);

var fairprov = document.getElementById("fairprov");
var fairModal = M.Modal.init(fairprov);

function openLoginModal() {
    loginModal.open();
}
function closeLoginModal() {
    loginModal.close();
}

function openRegisterModal() {
    registerModal.open();
}
function closeRegisterModal() {
    registerModal.close();
}

function openPaymentModal() {
    paymentModal.open();
}
function closePaymentModal() {
    paymentModal.close();
}

function openiteminfoModal() {
    iteminfoModal.open();
}
function closeiteminfoModal() {
    iteminfoModal.close();
}

function openedititemModal() {
    edititemModal.open();
}
function closeedititemModal() {
    edititemModal.close();
}

function openLicenseModal() {
    licenseModal.open()
}

function closeLicenseModal() {
    licenseModal.close()
}

function openFairModal()
{
 
    fairModal.open();
}

function closeFairModal()
{
    fairModal.close();
}

function showPercentage()
{
    var percentage=document.getElementsByClassName("percentage");
    for(var i=0;i<percentage.length;i++)
    {
        if(percentage[i].style.display == "none")
    {
        percentage[i].style.display="block";

    }
    else
    {
        percentage[i].style.display="none";
    }
    }  
}

function showToast()
{
    var toast = window.location.href.split('?')[1];
    console.log('Toast:'+toast);
    if(toast !== '' && toast !== undefined && toast !== null)
    {
        var x = document.getElementById("snackbar");
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }
    

}
/* async function returnSaleBoxes()
{
    let saleBoxes = await models.box.findAll({
        attributes: ['salesDuration','order']  ,
        where: {
            salesDuration:
            {
                [Op.gt]:0
            }
            
        }
    });

    return saleBoxes;

}

let saleBoxes = returnSaleBoxes(); */





 




