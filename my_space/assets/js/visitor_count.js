document.addEventListener("DOMContentLoaded", function() {
  fetch("/data/visitor_count.json")
    .then(response => response.json())
    .then(data => {
      data.count++;
      document.getElementById("visitorCount").innerText = data.count;

      fetch("/data/visitor_count.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    })
    .catch(error => console.error("Error:", error));
});

