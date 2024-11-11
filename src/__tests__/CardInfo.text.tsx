import { CardInfos } from "@/components/CardInfos";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const cardInfoMock = {
  description:
    "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to 'fight like a girl.'</p>",
  imageSrc: "https://www.tvmaze.com/s…6771/the-powerpuff-girls",
  title: "The Powerpuff Girls",
};

describe("CardInfos component", () => {
  it("Verify if the title renders correctly", () => {
    render(
      <CardInfos
        description={cardInfoMock.description}
        imageSrc={cardInfoMock.imageSrc}
        title={cardInfoMock.title}
      />
    );

    const titleCardInfo = screen.getByRole("heading", { level: 1 });

    expect(titleCardInfo).toHaveTextContent(cardInfoMock.title);
    expect(titleCardInfo).toBeInTheDocument();
  });

  it("Verify if image alt renders correctly", () => {
    render(
      <CardInfos
        description={cardInfoMock.description}
        imageSrc={cardInfoMock.imageSrc}
        title={cardInfoMock.title}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", `${cardInfoMock.title} - image`);
    expect(image).toBeInTheDocument();
  });

  it("Verify if image alt renders correctly when no image provided", () => {
    render(
      <CardInfos
        description={cardInfoMock.description}
        title={cardInfoMock.title}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", "no image available");
    expect(image).toBeInTheDocument();
  });
});
