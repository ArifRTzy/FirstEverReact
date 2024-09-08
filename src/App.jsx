import Card from "./Card";
import Button from "./Button/Button.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./list.jsx";
import Buttons from "./Buttons.jsx"
import ImgClickGone from "./ImgClickGone.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ObjectUseState from "./ObjectUseState.jsx";
import AddRemoveArray from "./AddRemoveArray.jsx";
import UpdateArray from "./UpdateArray.jsx";
import ToDoList from "./ToDoList.jsx";
import UseEffect from "./UseEffect.jsx";
import UseEffectWH from "./UseEffectWH.jsx";
import DigitalClock from "./DigitalClock.jsx";
import UseContextA from "./UseContextA.jsx";
import UseRef from "./UseRef.jsx";
import StopWatch from "./StopWatch.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Card />

      <Button />

      <Student name="Gugu" age={18} isStudent={true} />
      <Student name="Gugussy" age={17} isStudent={true} />
      <Student name="Gugick" age={16} isStudent={true} />
      <Student name="Gugass" age={26} isStudent={false} />
      <Student />
      <Student />

      <UserGreeting isLoggedIn={true} username="Third" />
      
      {fruits.length > 0 && <List items={fruits} category="Fruits" />} {/*erase the fruits if there is no content*/}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetabless" />}{/*erase the vegetables if there is no content*/}

      <Buttons/>

      <ImgClickGone/>

      <MyComponent/>

      <Counter/>

      <OnChange/>

      <ColorPicker/>

      <ObjectUseState/>

      <AddRemoveArray/>

      <UpdateArray/>

      <ToDoList/>

      <UseEffect/>

      <UseEffectWH/>

      <DigitalClock/>

      <UseContextA/>

      <UseRef/>

      <StopWatch/>
    </>
  );
}

export default App;
