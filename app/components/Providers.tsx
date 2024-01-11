"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
    console.log(process.env.NEXT_PUBLIC_STRIPE_KEY);
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://ecommerceasier.vercel.app/stripe/success"
      cancelUrl="https://ecommerceasier.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"  
    >
      {children}
    </USCProvider>
  );
}
