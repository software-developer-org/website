import addElement from './script';

describe('Test basic setup', () => {
  it('addElement(): should return new element', () => {
    const element = addElement();
    expect(element).toBeDefined();
  });
});
