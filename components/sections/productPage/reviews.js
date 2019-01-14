import Review from "./review";
import ReviewForm from "./reviewForm";

const reviews = props => {
    let reviews = props.viewProduct.reviews.map((review, index) => {
        return <Review {...props} {...review} index={index} key={index} />;
    });
    return (
        <div className="w-700 mx-auto pb-8 pt-6">
            <h3 className="font-black text-2xl text-center ">Customer Reviews</h3>

            <ReviewForm {...props} />
            {/* map total reviews here */}
            {reviews}
        </div>
    );
};

export default reviews;