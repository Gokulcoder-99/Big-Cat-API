const button= document.getElementById("bt");
button.addEventListener("click",fetchImage)
async function fetchImage(){
    try{
        const response = await fetch('https://randombig.cat/roar.json');
        if(response.ok){
            const data = await response.json();
            const imageURL = data.url;
            document.getElementById('imageElement').src = imageURL;
        }else{
            console.error("Api does not respond")
        }
    }catch (error){
        cobsole.error("failed due to :",error)
    }
}
