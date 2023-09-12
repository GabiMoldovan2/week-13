import { User } from "./user.js"

export class Customer extends User {
  constructor(id, name, email, phoneNumber, loyaltyPoints) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = loyaltyPoints;
  }

  redeemLoyaltyPoints(points) {
       
       if (points <= 0) {
      console.log("Invalid number of loyalty points.");
      return;
    }
  
       if (points > this.loyaltyPoints) {
      console.log("Insufficient loyalty points.");
      return;
    }
  
     const discountAmount = points * 0.1; 
     const totalAmount = 100; 
     const discountedAmount = totalAmount - discountAmount;
     this.loyaltyPoints -= points;
    
     console.log(`Redeemed ${points} loyalty points successfully!`);
     console.log(`Discount applied: ${discountAmount} units of currency`);
     console.log(`Total amount after discount: ${discountedAmount} units of currency`);
  }
}