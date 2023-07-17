// Create Connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

// Connect to methods
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
});

// Invoke Method
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

// Start Connection
function success() {
    console.log("Connection to SignalR successful");
    newWindowLoadedOnClient();
}

function rejected() {
    console.log("Connection to SignalR rejected");
}

connectionUserCount.start().then(success, rejected);