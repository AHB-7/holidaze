export function Stars({ rating }: { rating: number }) {
    const safeRating = Math.max(0, Math.min(Math.floor(rating), 5));

    return (
        <div>
            {[...Array(safeRating)].map((_, index) => (
                <span key={index} className="star">
                    &#9733;
                </span>
            ))}
        </div>
    );
}
