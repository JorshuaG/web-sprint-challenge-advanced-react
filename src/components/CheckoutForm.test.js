import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const headerRender = screen.queryByText(/Checkout Form/);
  expect(headerRender).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/First Name:/i);
  userEvent.type(firstNameInput, "Josh");

  const lastNameInput = screen.getByLabelText(/Last Name:/);
  userEvent.type(lastNameInput, "Gearheart");

  const addressInput = screen.getByLabelText(/Address:/i);
  userEvent.type(addressInput, "123 Fake Address St.");

  const stateInput = screen.getByLabelText(/State:/i);
  userEvent.type(stateInput, "HI");

  const zipInput = screen.getByLabelText(/Zip:/i);
  userEvent.type(zipInput, "96740");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  const successMsgCard = screen.getByTestId(/successMessage/);
  expect(successMsgCard).toBeInTheDocument();
});
