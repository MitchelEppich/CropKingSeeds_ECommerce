import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";



const moreInfo = props => {

  return (
    <div className="w-full">
      <h3 className="font-black my-2">Information on {props.viewProduct.currentProduct.name}</h3>
      <p>Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem duis sint excepteur duis dolor. Excepteur irure excepteur eiusmod quis pariatur esse esse deserunt ex ad nostrud proident eu incididunt. In occaecat officia cillum reprehenderit veniam aute deserunt veniam adipisicing proident. Tempor esse est quis non anim veniam aute ipsum aliquip consequat amet elit cillum magna. Voluptate labore incididunt irure nulla elit. Duis Lorem adipisicing mollit culpa laborum anim nisi dolor. Laboris adipisicing eiusmod non occaecat est deserunt sit ex. Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem duis sint excepteur duis dolor.<br /> Excepteur irure excepteur eiusmod quis pariatur esse esse deserunt ex ad nostrud proident eu incididunt. In occaecat officia cillum reprehenderit veniam aute deserunt veniam adipisicing proident. Tempor esse est quis non anim veniam aute ipsum aliquip consequat amet elit cillum magna. Voluptate labore incididunt irure nulla elit. Duis Lorem adipisicing mollit culpa laborum anim nisi dolor. Laboris adipisicing eiusmod non occaecat est deserunt sit ex.</p>
      <video className="mt-8 mb-4 " controls width="600">

        <source src="/media/examples/flower.webm"
          type="video/webm" />

        <source src="/media/examples/flower.mp4"
          type="video/mp4" />

        Sorry, your browser doesn't support embedded videos.
      </video>
      <ul className="list-reset leading-normal mb-4">
        <li className="li--viewProduct">High THC Content</li>
        <li className="li--viewProduct">High Yield Indoors</li>
        <li className="li--viewProduct">Grows to be 5ft</li>
        <li className="li--viewProduct">Perfect for Hydro Setup</li>
        <li className="li--viewProduct">Resistance to Pests</li>
        <li className="li--viewProduct">Some More Info</li>
      </ul>
      <p>Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem duis sint excepteur duis dolor. <br /> Ex voluptate elit nulla ea qui eu esse mollit incididunt est id. Deserunt sint aliquip culpa minim cupidatat ut. Aliqua ex officia mollit labore velit pariatur id reprehenderit aute ad nisi et ad cillum. Aliquip quis Lorem fugiat veniam do et adipisicing nostrud proident elit cillum sit.Id anim in nulla sit. Ullamco est laborum magna sint voluptate eiusmod ea. Cupidatat esse pariatur reprehenderit quis anim sunt commodo excepteur ullamco eu voluptate veniam sit. Cupidatat reprehenderit voluptate Lorem excepteur cillum nisi duis consequat et nisi sit. Eiusmod duis enim excepteur minim sit veniam enim eiusmod ad. <br />Pariatur velit quis laboris exercitation cupidatat excepteur est ex laborum voluptate nostrud.</p>

    </div>
  )
}

export default moreInfo;