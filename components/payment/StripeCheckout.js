import { Button } from "@mui/material";
import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { postData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

const StripeCheckout = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    customer_state,
    zip,
    country,
    visaApplyID,
    amount,
  } = state.paymentInfo;

  const item = {
    name: `Visa Application No ${visaApplyID}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    firstName,
    lastName,
    address1,
    address2,
    city,
    customer_state,
    zip,
    country,
    visaApplyID,
    method: "card",
    quantity: 1,
    price: amount,
  };

  const createCheckOutSession = async () => {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const stripe = await stripePromise;
    const checkoutSession = await postData(
      "payment/card",
      {
        item: item,
      },
      auth.token
    );
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    dispatch({ type: "NOTIFY", payload: { loading: false } });
  };

  return (
    <>
      <Button variant="contained" onClick={createCheckOutSession}>
        Checkout
      </Button>
    </>
  );
};

export default StripeCheckout;
