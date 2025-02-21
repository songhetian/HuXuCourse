import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useAppleStore = create(
	immer(
		devtools(
			persist(
				(set, get) => ({
					price: 7.0,
					count: 9,
					color: 'red',
					increment() {
						set(state => {
							state.count += 1;
						});
					},
					decrement() {
						set(state => {
							state.count -= 1;
						});
					},
					getTotal() {
						return get().count * get().price;
					},
					async doubleCount() {
						const rate = await Promise.resolve(2);
						set(state => ({
							...state,
							count: state.count * rate
						}));
					}
				}),
				{
					name: 'user',
					partialize: (state: any) => ({ count: state.count }),
					storage: createJSONStorage(() => sessionStorage)
				}
			),
			{ enabled: true, name: 'Store' }
		)
	)
);
