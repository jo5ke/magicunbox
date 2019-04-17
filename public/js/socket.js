var socket = io.connect('https://magicunbox.com');

let onlineUsers = document.getElementById("onlineUsers")
let dropsRow = document.getElementById("dropsRow")
let dropsCount = document.getElementById("dropsCount")

socket.on('online', function(data){
    onlineUsers.innerHTML = data
});

socket.on('drop', function(data){

    dropsCount.innerText = parseFloat(dropsCount.innerText)+1

    $('.sliderDrops').slick('slickAdd',`
        <div class="col" style="text-align: center;">
            <div style="height: 45px; width: 60px;">
                <img src="/img/items/${data.image}"
                    style="height: auto; width: auto; max-height: 60px; max-width: 60px; margin: auto;"
                >
            </div>
            <br>
            <div style="display: inline;">
                <a href="/profile/${data.username}"
                    style=" font-family: 'Roboto', sans-serif; 
                        background:#20A4F3;
                        border-radius: 18px;
                        font-size: 14px;
                        color: #FFFFFF;
                        padding:4px;
                    ">
                    ${data.username.length > 7 ? data.username.substring(0,7)+"..." : data.username}
                </a>
            </div>
            <br>
        </div>
    `, 0, true)
});