export const createRemoveFromCart = (setItemCount, itemCount) => async (product) => {
  setItemCount(Math.max(itemCount - 1), 0);
};
