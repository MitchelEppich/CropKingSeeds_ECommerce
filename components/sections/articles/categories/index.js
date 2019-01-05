import React from "react"

const CategoriesList = props => {
    return (
        <div className="w-container mx-auto">
            <div className="w-full p-2"> 
                <h2 className="text-3/5xl font-extrabold p-2 text-center">Article Categories</h2>
            </div>
            <div className="w-full mt-2 text-center">
                <ul className="inline-flex p-2 mx-2">
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>Growing Cannabis</h3></li>
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>Grow Lights</h3></li>
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>Cannabis Strains</h3></li>
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>Grow Boxes</h3></li>
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>How To</h3></li>
                    <li className="p-1 font-bolder mx-4 cursor-pointer step-text"><h3>Products Reviews</h3></li>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesList