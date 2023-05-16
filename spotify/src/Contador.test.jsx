import React from "react";
import { render, screen } from "@testing-library/react";
import Contador from "./Contador";

describe("Contador", () => {
  test("should display countdown correctly", async () => {
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() + 8);
    render(<Contador fechaLimite={fechaLimite} />);

    const countdownText = await screen.findByText(/La oferta termina en:/i);
    expect(countdownText).toBeInTheDocument();

    const daysText = screen.getByText(/d:/i);
    expect(daysText).toBeInTheDocument();

    const hoursText = screen.getByText(/h:/i);
    expect(hoursText).toBeInTheDocument();

    const minutesText = screen.getByText(/min/i);
    expect(minutesText).toBeInTheDocument();
  });
});
