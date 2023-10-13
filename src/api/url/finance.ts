export const finance = {
	getRefundList: '/tenant/bonds/refund/search',
	refundBond: (id: string) => `/tenant/bonds/refund/${id}/audit `,
	getReceivableList: '/tenant/deal/amount/search',
	payment: (id: string) => `/tenant/deal/amount/${id}`,
	paymentRecord: (id: string) => `/tenant/deal/amount/${id}/record`
}
