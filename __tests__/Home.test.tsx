import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders correctly", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /Projeto CI\/CD com Next.js/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /Ver Repositório/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/GitHub Actions/i).length).toBeGreaterThan(0);
  });
});