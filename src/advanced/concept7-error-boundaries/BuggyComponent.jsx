import React from "react";

export default function ReviewsSection({ reviews }) {
    // Intentional Bug: Trying to access property of undefined
    const buggyReview = reviews[0].text.toUpperCase(); // This will crash if reviews is empty or undefined
   
    return (
        <div>
            <h3>Customer Reviews</h3>
            <p>First Review: {buggyReview}</p>

            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review.text}</li>
                ))}
            </ul>
        </div>
    )
}

// Component that intentionally throws error.
export const BuggyComponent = () => {
    throw new Error("Intentional crash!");
    return <p>This will not render</p>
}