import { User } from "./user.js";

export class Driver extends User{
  constructor(id, name , email, phoneNumber, vehicle, licencePlate){
    super(id, name , email, phoneNumber);
    this.vehicle = vehicle;
    this.licencePlate = licencePlate;
  }

  register(){
    if (this.id) {
      console.log(`Driver ${this.name} is already registered.`);
      return;
    }
  
    
    if (!this.name || !this.email || !this.phoneNumber) {
      console.log("Please provide all the required details for registration.");
      return;
    }
    this.id = generateUniqueId();
    console.log(`Driver ${this.name} with ID ${this.id} registered successfully!`);
  }
  updateProfile(newName) {
    if (!newName) {
      console.log("Please provide a new name for your profile update.");
      return;}

    this.name = newName;
    console.log(`Driver ${this.id}'s profile name updated to ${this.name}`);
  }
  acceptRideRequest(ride) {
  if (!ride || !ride.id || !ride.user) {
    console.log("Invalid ride request. Please provide a valid ride request.");
    return;
  }
  ride.driver = this.name;
  ride.status = "assigned";
}
cancelRideRequest(ride) {
   
   if (!ride || !ride.id || !ride.driver) {
    console.log("Invalid ride object. Please provide a valid ride object.");
    return;
  }

   ride.status = "cancelled";

   console.log(`Ride request with ID ${ride.id} cancelled by driver ${this.name}.`);
}

completeRide(ride) {
    if (!ride || !ride.id || !ride.driver) {
    console.log("Invalid ride object. Please provide a valid ride object.");
    return;
  }

  ride.status = "completed";

  const earnings = ride.amount * 0.8; 

  
  this.viewEarnings(earnings);

  console.log(`Ride with ID ${ride.id} completed by driver ${this.name}.`);
  console.log(`Driver ${this.name} earned ${earnings} units of currency.`);
}
updateRideHistory(ride, earnings) {
 
  const rideHistory = JSON.parse(localStorage.getItem("rideHistory")) || [];

  const completedRideIndex = rideHistory.findIndex((r) => r.id === ride.id);
  
  if (completedRideIndex !== -1) {
    rideHistory[completedRideIndex].earnings = earnings;
}

  localStorage.setItem("rideHistory", JSON.stringify(rideHistory));

  console.log(`Updated ride history with earnings for ride with ID ${ride.id}`);
}

viewEarnings(earnings) {
  
  const driverEarnings = JSON.parse(localStorage.getItem("driverEarnings")) || {};
  

  driverEarnings[this.id] = earnings;
  

  localStorage.setItem("driverEarnings", JSON.stringify(driverEarnings));
  
  console.log(`Driver ${this.name}'s earnings updated: ${earnings} units of currency.`);
}
}