
//alert("It's linked properly");

function show()
{
    document.getElementsByClassName("sym").style.display ="inline-block";
}


function countDonation()
{
    let donors;
    if(typeof(Storage) !== "undefined")
    {
        if(localStorage.donors)
        {
            localStorage.donors = Number(localStorage.donors)+1;
        }
        else
        {
            localStorage.donors = 1;
        }
        console.log(donors);
    }
    
}


