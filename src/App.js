import './App.css';
import Footer from './components/Footer';
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
        id="model-s"
        leftText="Custom Order"
        rightText="Existing Inventory"
      />
      <Section title = "Model 3"
        description= "Order Online for Touchless Delivery"
        image= "model-3.jpg"
        id="model-3"
        leftText="Custom Order"
        rightText="Existing Inventory"
        />
      <Section title = "Model X"
        description= "Order Online for Touchless Delivery"
        image= "model-x.jpg"
        id="model-x"
        leftText="Custom Order"
        rightText="Existing Inventory"
        />
        <Section title = "Model Y"
        description= "Order Online for Touchless Delivery"
        image= "model-y.jpg"
        id="model-y"
        leftText="Custom Order"
        rightText="Existing Inventory"
        />
        <Section title = "Solar Panels"
        description= "Lowest Cost Solar Panels in America"
        image= "solar-panel.jpg"
        id="model-y"
        leftText="Order Now"
        rightText="Learn More"
        />
        <Section title = "Solar Roof"
        description= "Produce Clean Energy From Your Roof"
        image= "solar-roof.jpg"
        id="model-y"
        leftText="Order Now"
        rightText="Learn More"
        />
        <Footer />
    </div>
  );
}

export default App;
