describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    // tu código acá
    expect(split([5, 8, 9, 7, 11])).toEqual([
      [5, 8, 9],
      [7, 11],
    ]);
  });
  it("es capaz de dividir el arreglo ma largos", function () {
    // tu código acá
    expect(split([5, 8, 9, 7, 11, 15, 19, 25, 44, 48])).toEqual([
      [5, 8, 9, 7, 11],
      [15, 19, 25, 44, 48],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([2, 3], [1, 4])).toEqual([1, 2, 3, 4]);
    // testeá el algoritmo
  });
});
describe("mergeSort", function () {
  it("Si le pasas un array con 1 valor lo retorna", function () {
    expect(mergeSort([1])).toEqual([1]);
  });
  it("Si se le pasa un array vacio lo retorna", function () {
    expect(mergeSort([])).toEqual([]);
  });
  it("Devuelve el array ordenado ", function () {
    expect(mergeSort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
  });
  it("Prueba espia", function () {
    spyOn(window, "merge").and.callThrough();
    mergeSort([3, 2, 1, 4]);
    expect(window.merge.calls.count()).toEqual(3);
  });
});
