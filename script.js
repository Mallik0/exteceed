const flightData = [
    {
      airline: 'Emirates',
      departure: 'Hyderabad',
      arrival: 'Delhi',
      price: '$200',
      departureTime: '08:00 AM',
      arrivalTime: '10:00 AM',
      discount: '10% off',
      date: '2023-11-10'
    },
    {
      airline: 'Qatar Airways',
      departure: 'Mumbai',
      arrival: 'Chennai',
      price: '$250',
      departureTime: '09:00 AM',
      arrivalTime: '11:00 AM',
      discount: '5% off',
      date: '2023-11-11'
    },
    {
      airline: "AirIndia",
      departure: "Chennai",
      arrival: "Kolkata",
      price: "$180",
      departureTime: "10:30 AM",
      arrivalTime: "12:30 PM",
      discount: "15% off",
      date: "2023-12-12"
    },
    {
      airline: "Etihad Airways",
      departure: "Kolkata",
      arrival: "Delhi",
      price: "$300",
      departureTime: "02:00 PM",
      arrivalTime: "04:00 PM",
      discount: "No discount",
      date: "2023-12-10"
    },
    {
      airline: "AirIndia",
      departure: "Hyderabad",
      arrival: "Delhi",
      price: "$220",
      departureTime: "01:30 PM",
      arrivalTime: "03:30 PM",
      discount: "20% off",
      date: "2023-12-11"
    },
    {
      airline: "Qatar Airways",
      departure: "Hyderabad",
      arrival: "Delhi",
      price: "$190",
      departureTime: "12:00 PM",
      arrivalTime: "02:00 PM",
      discount: "No discount",
      date: "2023-10-12"
    },
    // new data startes from here
    {
      airline: 'AirIndia',
      departure: 'Hyderabad',
      arrival: 'Delhi',
      price: '$100',
      departureTime: '08:00 AM',
      arrivalTime: '10:00 AM',
      discount: '10% off',
      date: '2023-11-10'
    },
    {
      airline: 'Emirates',
      departure: 'Mumbai',
      arrival: 'Chennai',
      price: '$150',
      departureTime: '09:00 AM',
      arrivalTime: '11:00 AM',
      discount: '5% off',
      date: '2023-12-11'
    },
    {
      airline: "Qatar Airways",
      departure: "Chennai",
      arrival: "Kolkata",
      price: "$150",
      departureTime: "10:30 AM",
      arrivalTime: "12:30 PM",
      discount: "15% off",
      date: "2023-10-12"
    },
    {
      airline: "Emirates",
      departure: "Kolkata",
      arrival: "Delhi",
      price: "$150",
      departureTime: "02:00 PM",
      arrivalTime: "04:00 PM",
      discount: "No discount",
      date: "2023-10-10"
    },
    {
      airline: "Etihad Airways",
      departure: "Hyderabad",
      arrival: "Delhi",
      price: "$170",
      departureTime: "01:30 PM",
      arrivalTime: "03:30 PM",
      discount: "20% off",
      date: "2023-10-11"
    },
    {
      airline: "AirIndia",
      departure: "Hyderabad",
      arrival: "Delhi",
      price: "$70",
      departureTime: "12:00 PM",
      arrivalTime: "02:00 PM",
      discount: "No discount",
      date: "2023-11-12"
    }
    // Add more flight data here...
  ];
  
  function createFlightCard(flight) {
    const flightCard = document.createElement('div');
    flightCard.classList.add('flight-card');
    flightCard.addEventListener('click', () => openFlightModal(flight));
  
    flightCard.innerHTML = `
      <h2>${flight.airline}</h2>
      <p>Departure: ${flight.departure}</p>
      <p>Arrival: ${flight.arrival}</p>
      <p>Price: ${flight.price}</p>
      <p>Departure Time: ${flight.departureTime}</p>
      <p>Arrival Time: ${flight.arrivalTime}</p>
      <p>Discount: ${flight.discount}</p>
      <p>Date: ${flight.date}</p>
    `;
  
    return flightCard;
  }
  
  function displayFlights(flights) {
    const flightsContainer = document.getElementById('flightResults');
    flightsContainer.innerHTML = '';
  
    flights.forEach((flight) => {
      const flightCard = createFlightCard(flight);
      flightsContainer.appendChild(flightCard);
    });
  }
  
  function formatDateForComparison(date) {
    // Input date format: dd-mm-yyyy
    // Output date format: yyyy-mm-dd
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  }
  
  function searchFlights() {
    const departure = document.getElementById('departureInput').value.toLowerCase();
    const arrival = document.getElementById('arrivalInput').value.toLowerCase();
    const date = formatDateForComparison(document.getElementById('dateInput').value);
  
    const filteredFlights = flightData.filter((flight) => {
      return (
        flight.departure.toLowerCase().includes(departure) &&
        flight.arrival.toLowerCase().includes(arrival) &&
        flight.date === date
      );
    });
  
    displayFlights(filteredFlights);
  }

  function searchFlights(departure, arrival, date) {
    // Create an empty array to store matching flights
    const matchingFlights = [];
  
    // Loop through the flightData array to find matching flights
    for (const flight of flightData) {
      if (
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.arrival.toLowerCase() === arrival.toLowerCase() &&
        flight.date === date
      ) {
        // If the flight matches the search criteria, add it to the result array
        matchingFlights.push(flight);
      }
    }
  
    // Return the list of matching flights
    return matchingFlights;
  }  
  
  function sortFlightsByPrice() {
    const sortedFlights = flightData.slice().sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    displayFlights(sortedFlights);
  }
  
  function sortFlightsByDepartureTime() {
    const sortedFlights = flightData.slice().sort((a, b) => a.departureTime.localeCompare(b.departureTime));
    displayFlights(sortedFlights);
  }
  
  function sortFlightsByArrivalTime() {
    const sortedFlights = flightData.slice().sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
    displayFlights(sortedFlights);
  }
  
  function openFlightModal(flight) {
    const modal = document.getElementById('flightModal');
    const modalAirline = document.getElementById('modalAirline');
    const modalDeparture = document.getElementById('modalDeparture');
    const modalArrival = document.getElementById('modalArrival');
    const modalPrice = document.getElementById('modalPrice');
    const modalDepartureTime = document.getElementById('modalDepartureTime');
    const modalArrivalTime = document.getElementById('modalArrivalTime');
    const modalDiscount = document.getElementById('modalDiscount');
  
    modalAirline.textContent = flight.airline;
    modalDeparture.textContent = `Departure: ${flight.departure}`;
    modalArrival.textContent = `Arrival: ${flight.arrival}`;
    modalPrice.textContent = `Price: ${flight.price}`;
    modalDepartureTime.textContent = `Departure Time: ${flight.departureTime}`;
    modalArrivalTime.textContent = `Arrival Time: ${flight.arrivalTime}`;
    modalDiscount.textContent = `Discount: ${flight.discount}`;
  
    modal.style.display = 'block';
  }
  
  function closeFlightModal() {
    const modal = document.getElementById('flightModal');
    modal.style.display = 'none';
  }
  
  function init() {
    displayFlights(flightData);
  
    // Add event listeners for the search and sorting buttons
    document.getElementById('searchBtn').addEventListener('click', function () {
      // Get the user's input for departure, arrival, and date
      const departureInput = document.getElementById('departureInput').value;
      const arrivalInput = document.getElementById('arrivalInput').value;
      const dateInput = document.getElementById('dateInput').value;
    
      // Call the searchFlights function with the user's input
      const matchingFlights = searchFlights(departureInput, arrivalInput, dateInput);
    
      // Display the matching flights on your website (e.g., update the UI)
      displayFlights(matchingFlights);
    });
        document.getElementById('sortPriceBtn').addEventListener('click', sortFlightsByPrice);
    document.getElementById('sortDepartureTimeBtn').addEventListener('click', sortFlightsByDepartureTime);
    document.getElementById('sortArrivalTimeBtn').addEventListener('click', sortFlightsByArrivalTime);
  }
  
  // Initialize the page
  init();
  