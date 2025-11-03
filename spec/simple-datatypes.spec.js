describe("Concatenating and Reassigning Strings", () => {
  it('create a variable called `organization` assigned to the correct value', () => {
    assert.equal(organization, 'Operation Spark');
  });
  it("should correctly reassign `city` variable to 'New Orleans, LA'", () => {
    assert.equal(city, 'New Orleans, LA');
  })
});

describe("addDescriptor", () => {
  it('should return a string', () => {
    assert.equal(typeof addDescriptor('Stanley Ray', 'jr'), 'string');
  });
  it('should return the correct string', () => {
    assert.equal(addDescriptor('Stanley Ray', 'jr'), 'Stanley Ray, JR');
  });
});