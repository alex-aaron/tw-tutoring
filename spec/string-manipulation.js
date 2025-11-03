describe("Concatenating and Reassigning Strings", () => {
  it('create a variable called `organization` assigned to the correct value', () => {
    assert.equal(organization, 'Operation Spark');
  });
  it("should correctly reassign `city` variable to 'New Orleans, LA'", () => {
    assert.equal(city, 'New Orleans, LA');
  })
});