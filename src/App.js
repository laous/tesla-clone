import './App.css';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section 
        title = "Model S"
        description= "Order Online for Touchless Delivery"
        image= "model-s.jpg"
      />
      <Section title = "Model 3"
        description= "Order Online for Touchless Delivery"
        image= "model-3.jpg"/>
      <Section title = "Model X"
        description= "Order Online for Touchless Delivery"
        image= "model-x.jpg"/>
        <Section title = "Model Y"
        description= "Order Online for Touchless Delivery"
        image= "model-y.jpg"/>
    </div>
  );
}

export default App;
