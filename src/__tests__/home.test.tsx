import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/home";
import Providers from "../app/providers";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
