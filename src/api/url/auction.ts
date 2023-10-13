export const auction = {
	searchAuctionList: '/tenant/auctions/search',
	addAuction: '/tenant/auctions',
	getAuctionDetail: (id: string) => `/tenant/auctions/${id}`,
	updatedAuction: (id: string) => `/tenant/auctions/${id}`,
	createPoster: (id: string) => `/tenant/auctions/${id}/poster`,
	bondsRecords: (id: string) => `/tenant/auctions/${id}/bonds`,
	getBidder: (phone: string) => `/tenant/bidder/${phone}`,
	addBidder: (auctionId: string, bidderId: string) =>
		`/tenant/auctions/${auctionId}/add/bonds/${bidderId}`,
	refundBond: (id: string) => `/tenant/auctions/${id}/bond-offer/batch-refund`,
	confirmInfo: (id: string) => `/tenant/deal/${id}/confirm/info`,
	editBuyerInfo: (id: string) => `/tenant/deal/${id}/buyer`,
	perfectInfo: (id: string) => `/tenant/deal/${id}/perfect`,
	makeDataShowCode: '/im/identity/data-show/make-code',
	toggle: (id: string) => `/tenant/auctions/${id}/toggle`,
	makeScreenUrl: (auctionId: string) => `/tenant/auctions/${auctionId}/screen`
}
