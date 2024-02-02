import { logRoles, render, screen } from "@testing-library/react";
import UsersTwo from "./usersTwo";

describe("UsersTwo", () => {
  test("renders UsersTwo component", () => {
    render(<UsersTwo />);
    const listElement = screen.getByText("User List");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of users", async () => {
    render(<UsersTwo />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
