import tsPackageStarter from "../src/main";

describe("ts-package-starter", () => {
  describe("when you call it", () => {
    it("should return the proper result", () => {
      const expectedResult = "@thecolvinco";
      const result = tsPackageStarter();

      expect(result).toEqual(expectedResult);
    });
  });
});
