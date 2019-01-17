const PartnerCard = props => {
    return (
        <div
            style={{
                // width: "26%"
                
            }}
            className="w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full text-center scale-item">
            
            <div className="shadow-md mx-4 p-3 my-4"><div className="min-h-32 w-full h-64 items-center flex">
                <img src={props.imgUrl} />
            </div>
            <p className="font-extrabold mt-2 text-grey-light sm:text-md md:text-md"> {props.tag}</p>
            <h2 className="text-red-dark px-2 text-2/5xl font-black md:text-xl sm:text-xl">{props.name}</h2>
            <p className="mt-4 text-sm px-8 text-justify mb-6 text-grey-light">{props.description}</p>
            </div>
        </div>
    );
};

export default PartnerCard;
