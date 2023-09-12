import { User } from "./user.js";
import { Driver } from "./driver.js";
import { PaymentMethods } from "./paymentMethods.js";
import { Customer } from "./customer.js";
import { Ride } from "./Ride.js";

const paymentMethod1 = new PaymentMethods("pm1", "credit card", "1234");
const paymentMethod2 = new PaymentMethods("pm2", "debit card", "5678");

const user = new User("u1", "Gabi Moldovan", "moldovangabi778@yahoo.com", "9876543210");
user.register();
user.login();
user.updateProfile("Gabi Leontin moldovan");
user.linkPaymentMethod(paymentMethod1);
user.linkPaymentMethod(paymentMethod2);
user.viewRideHistory();

const customer = new Customer("c1", "Alin", "alin2223@yahoo.com", "1234567890");
customer.register();
customer.redeemLoyaltyPoints(100);
customer.viewRideHistory();

const driver = new Driver("d1", "Darius", "darius_22@yahoo.com", "5432109876", "Sedan", "CJ22CSR");
driver.register();
driver.updateProfile("Darius Coser");
driver.viewEarnings();

const ride = new Ride("r1", user, driver, "A", "B");
ride.requestRide("A", "B");
ride.cancelRide();
ride.rateDriver(4, "Great driver!");



