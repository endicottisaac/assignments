import React from "react";

export default function Home(){
    return (
        <>
            <section>
            <h2 class="welcome-message">
                <p>Welcome to Your Plumbing Company, where we make your plumbing issues disappear!</p>
            </h2>

            <div class="customer-reviews">
                <div class="review">
                    <p><strong>Customer 1:</strong> The service was excellent! Quick response and professional work.</p>
                </div>
                <div class="review">
                    <p><strong>Customer 2:</strong> I've used Your Plumbing Company multiple times, and they never disappoint. Highly recommended!</p>
                </div>
            </div>

            <div>
                <p>We love helping our customers with their plumbing needs. Our team is dedicated to providing top-notch service and ensuring your satisfaction.</p>
            </div>
            </section>
        </>
    )
}