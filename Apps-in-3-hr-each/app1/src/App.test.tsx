import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import InputCountry from "./pages/InputCountry";
import { BrowserRouter } from "react-router-dom";

describe("test on InputCountry", () => {
  test("displaying InputCountry Componemt", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );
    screen.debug();
  });
});
