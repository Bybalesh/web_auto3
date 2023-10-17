const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const result = sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(result).toEqual(expected)
  });

  it("Books names should be sorted in descending order", () => {
    const input = [
      "Волшебник изумрудного города",
      "Властелин Колец",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(result).toEqual(expected)
  });

  it("Shouldn't change order if names are already sorted", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    const expected = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    expect(result).toEqual(expected)
  });
  })