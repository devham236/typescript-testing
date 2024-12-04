import { render, screen } from "@testing-library/react";
import App from "../App";

test("should have hello world", () => {
  render(<App />);
  const text = screen.queryByText(/Hello World/i);
  expect(text).toBeVisible();
});
