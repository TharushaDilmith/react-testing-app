import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
    test("renders Application component", () => {
        render(<Application />);

        const headingElement = screen.getByRole("heading", {
            level: 1,
        });
        expect(headingElement).toBeInTheDocument();

        const subHeadingElement = screen.getByRole("heading", {
            level: 2,
        });
        expect(subHeadingElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", { name: "Name:" });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", { name: "Bio:" });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const confirmElement = screen.getByRole("button");
        expect(confirmElement).toBeInTheDocument();
    });
});