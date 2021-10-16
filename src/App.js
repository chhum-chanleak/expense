import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
