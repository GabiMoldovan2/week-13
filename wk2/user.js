export class User{
  constructor(id , name, email, phoneNumber){
  this.id = id;
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.paymentMethods = [];


}
register(){
  if (this.id) {
    console.log(`User ${this.name} is already registered.`);
    return;
}
  
  if (!this.name || !this.email || !this.phoneNumber) {
    console.log("Please provide all the required details for registration.");
    return;
  }
  this.id = generateUniqueId();
  console.log(`User ${this.name} with ID ${this.id} registered successfully!`);
}
login(){
  if(this.id){
    console.log(`User ${this.name}is logged in.`)
    return;
  }
}

updateProfile(newName) {
 
  this.name = newName;
  console.log(`User ${this.id}'s profile name updated to ${this.name}`);
}
linkPaymentMethod(paymentMethod) {
  this.paymentMethods.push(paymentMethod);
  console.log(`Payment method linked successfully for user ${this.id}`);
}
viewRideHistory() {
    
  const rideHistory = JSON.parse(localStorage.getItem("rideHistory")) || [];

  if (rideHistory.length === 0) {
    console.log("No ride history found.");
    return;}

  console.log(`Ride history for user ${this.id}:`);
  rideHistory.forEach((ride) => {
    console.log(`Ride ID: ${ride.id}`);
    console.log(`Date: ${ride.date}`);
    console.log(`Origin: ${ride.origin}`);
    console.log(`Destination: ${ride.destination}`);
    console.log(`Payment Method: ${ride.paymentMethod}`);
    console.log(`Amount Paid: ${ride.amount}`);
    console.log("----------------------");
  });
}

}
