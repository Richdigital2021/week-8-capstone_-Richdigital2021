import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { describe, it, expect, vi } from "vitest";

describe("Login Form", () => {
  it("should render and allow input", () => {
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);

    const emailInput = screen.getByLabelText("email");
    const passwordInput = screen.getByLabelText("password");
    const button = screen.getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(button);

    expect(onLogin).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "123456",
    });
  });
});
