import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe('pk_test_51PCKEWJEBHdgsTP9j4EAXEaCUchDjyuQlydlOjGk39a8qkE0KNV8FDyTHdg9xcObtR7XK2cIxjGv5BvXdMrQOnTh00JrbsT8U7');

export default function Payment() {
  const handleClick = async (event) => {
    event.preventDefault();
    
    const payload = {
      name: "MELKAT",
      price: 30,
      description: "payment for the service"
    };
    
    try {
      const response = await axios.post('http://localhost:8000/api/payment/create', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { data: session } = response;

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error gracefully, e.g., display a friendly error message to the user
    }
  };

  return (
    <section style={{ paddingTop: '8rem' }}>
      <button className="btn btn-primary" onClick={handleClick}>Pay</button>
    </section>
  );
}
