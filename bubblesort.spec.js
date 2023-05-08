describe("Bubble Sort", function () {
  let arr = [6, 5, 8];
  let arr2 = [15, 100, 25, 1, 8, 12, 7];
  bubbleSort(arr);
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Ordena los array", function () {
    expect(bubbleSort(arr)).toEqual([5, 6, 8]);
  });
  it("Ordena arrays mas complejos ", function () {
    expect(bubbleSort(arr2)).toEqual([1, 7, 8, 12, 15, 25, 100]);
  });
});

describe("Cuantas veces usamo SWAP", function () {
  it("Aplicando Spy", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([2, 1, 3]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
