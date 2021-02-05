import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard compoenent</div>
);

const AddExpensePage = () => <div>This is from my add expense compoenent</div>;
const EditExpensePage = () => (
  <div>This is from my edit expense compoenent</div>
);
const HelpPage = () => <div>This is from my help compoenent</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={ExpenseDashboardPage}></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
    </div>
  </BrowserRouter>
);

const root = document.getElementById("app");
Modal.setAppElement(root);

ReactDOM.render(routes, root);
