const currentDate = new Date();

    // Format the date (e.g., "March 1, 2025")
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',  // Day of the week (e.g., Monday)
      year: 'numeric',  // Full year (e.g., 2025)
      month: 'long',    // Full month name (e.g., March)
      day: 'numeric'    // Day of the month (e.g., 1)
    });

    // Display the current date in the paragraph
    document.getElementById("current-date").textContent = `${formattedDate}`;