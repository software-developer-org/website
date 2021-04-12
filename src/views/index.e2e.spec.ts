describe('Test playwright setup', () => {
  it('got to website', async () => {
    await page.goto('http://localhost:3000/');
    const title = await page.title();
    expect(title).toBeDefined();
    expect(title).not.toBeNull();
  });
});
