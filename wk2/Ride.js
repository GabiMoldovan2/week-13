export class Ride {
  constructor(id, user, driver, pickupLocation, destination) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = 0;
  }

  requestRide(pickupLocation, destination) {
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.calculateFare();

    console.log(`Ride requested with ID ${this.id}`);
    console.log(`Pickup Location: ${this.pickupLocation}`);
    console.log(`Destination: ${this.destination}`);
    console.log(`Estimated Fare: ${this.fare}`);
  }

  calculateFare(distance, duration, additionalCharges) {
   
    const distanceRate = 1.5; // Fare rate per kilometer
    const durationRate = 0.1; // Fare rate per minute
    const baseFare = 3.0; // Base fare amount
    
   
    const distanceFare = distance * distanceRate;
    const durationFare = duration * durationRate;
    
    const totalFare = baseFare + distanceFare + durationFare + additionalCharges;
    
    this.fare = totalFare;
    
    console.log(`Fare calculated for ride with ID ${this.id}: ${this.fare}`);
  }
  cancelRide() {
    console.log(`Ride with ID ${this.id} cancelled.`);
  }

  rateDriver(rating, review) {
   
    const driverRatings = JSON.parse(localStorage.getItem("driverRatings")) || {};
  
      if (driverRatings.hasOwnProperty(this.driver.id)) {      
      driverRatings[this.driver.id].rating = rating;
      driverRatings[this.driver.id].review = review;
    } else {
      driverRatings[this.driver.id] = { rating, review };
    }
  
    
    localStorage.setItem("driverRatings", JSON.stringify(driverRatings));
  
    console.log(`Driver ${this.driver.name} rated with rating: ${rating} and review: ${review}`);
  }
}
 