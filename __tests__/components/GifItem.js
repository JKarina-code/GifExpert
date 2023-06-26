import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("test in <GifItem/>", () => {
  const title = "Pokemon";
  const url ="https://user-images.githubusercontent.com/29663094/234428463-bc23cfcb-c5fb-4b77-82b4-e56e6f8fa9fc.png";

  test("must do match with snapshot", () => {
    const { container } = render(<GifItem title={title} src={url} />);

    expect(container).toMatchSnapshot();
  });

  test("must show the image with src and alt", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("must  show the title", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
