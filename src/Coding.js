// import DisplayName from "./components/DisplayName";
// import FavBooks from "./components/FavBooks";
// import Greetings from "./components/Greetings";
// import HelloWorld from "./components/HelloWorld";
// import Hobbies from "./components/Hobbies";
// import ImageProp from "./components/ImageProp";
// import ParentMessage from "./components/ParentMessage";
// import UserProfile from "./components/UserProfile";
// import WelcomeMessage from "./components/WelcomeMessage";
import DisplayName from "./codingComponents/DisplayName";
import FavBooks from "./codingComponents/FavBooks";
import Greetings from "./codingComponents/Greetings";
import HelloWorld from "./codingComponents/HelloWorld";
import Hobbies from "./codingComponents/Hobbies";
import ImageProp from "./codingComponents/ImageProp";
import ParentMessage from "./codingComponents/ParentMessage";
import UserProfile from "./codingComponents/UserProfile";
import WelcomeMessage from "./codingComponents/WelcomeMessage";



let hobbies = ["Sports", "Cooking", "Playing PS5"]
function Coding() {
  return (
    <div className="container ">
     <HelloWorld/>
     <WelcomeMessage/>
     <DisplayName/>
     <Greetings name="Suraj Ingole"/>
    <Hobbies hobbies={hobbies}/>
    <FavBooks/>
    <ParentMessage/>
    <ImageProp src="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg" alt="A beautiful galaxy" figcaption="NGC 4414, a unbarred spiral galaxy in the constellation Coma Berenices, imaged by the Hubble Space Telescope."/>
    <UserProfile name="Suraj Ingole" age={28} location="Dehu Road, Pune" />
    </div>
    
  );
}

export default Coding;
