export const delay = async (ms: number) => {
  await new Promise((r) => setTimeout(r, ms));
};
