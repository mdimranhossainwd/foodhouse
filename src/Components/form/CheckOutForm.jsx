import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import useCarts from "../../hooks/useCarts";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cart, refetch] = useCarts();
  const [transitionsID, setIsTransitionsID] = useState("");
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = cart.reduce((total, item) => total + item.str_Prize, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axios
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axios, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // if (error) {
    //   console.log("Payment Error", error);
    // } else {
    //   console.log("Payment Method", paymentMethod);
    // }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("payment error");
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("Payment Transitions Id", paymentIntent.id);
        setIsTransitionsID(paymentIntent.id);

        const paymentAll = {
          user: user.email,
          str_Prize: totalPrice,
          date: new Date(),
          transitions: paymentIntent.id,
          singleId: cart.map((item) => item._id),
          menuitemID: cart.map((item) => item.menuID),
          status: "success",
        };

        try {
          const res = await axios.post("/payment", paymentAll);
          console.log("all Payment Info", res.data);

          if (res.data?.result?.insertedId) {
            refetch();
            Swal.fire({
              title: "Successfully you Payment",
              text: "Congrates You choice this Product and Confirmed It",
              icon: "success",
              showConfirmButton: false,
            });
            navigate("/dashboard/paymentHistory");
          }
        } catch (error) {
          console.error("Error while making payment:", error);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-10 mt-12 items-center justify-center">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                border: "1px solid red",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="bg-[#1F2937] px-9 mt-12 w-full mx-auto text-md space-x-2 font-medium py-3 text-[#F42643] border-0 rounded-md"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
