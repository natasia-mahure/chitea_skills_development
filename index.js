document.addEventListener("DOMContentLoaded", function() {
    // Get the card element
    var card = document.getElementById("pdfDownload");
    
    // Add click event listener to the card
    card.addEventListener("click", function() {
      // Replace with the path to your PDF file
      var pdfPath = "./pdf/Labour Relations Act.pdf";
      
      // Create an anchor element
      var link = document.createElement("a");
      link.href = pdfPath;
      link.download = "Labour Relations Act.pdf"; // Optional: change the downloaded file name
      link.click();
    });
  });
  








  