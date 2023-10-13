export enum StorageKey {
	Token = 'TOKEN',

	FundsPreview = 'FUNDS_PREVIEW',

	SystemDict = 'SYSTEM_DICT',

	HistoryMenus = 'HISTORY_MENUS',

	HistoryRouteOpen = 'HISTORY_ROUTE_OPEN',

	CustomerFilterHighlightDict = 'CUSTOMER_FILTER_HIGHLIGHT_DICT',

	ClosedCreateOrderSuccessGuide = 'CLOSED_CREATE_ORDER_SUCCESS_GUIDE',

	ClosedQuickFullTruckSuccessGuide = 'CLOSED_QUICK_FULL_TRUCK_SUCCESS_GUIDE',

	ClosedQuickCarrierSuccessGuide = 'CLOSED_QUICK_CARRIER_SUCCESS_GUIDE',

	ClosedQuickCapacitySuccessGuide = 'CLOSED_QUICK_CAPACITY_SUCCESS_GUIDE',

	PendingOrdersFilter = 'PENDING_ORDERS_FILTER',
	TransitingOrdersFilter = 'TRANSITING_ORDERS_FILTER',
	AllOrdersFilter = 'ALL_ORDERS_FILTER',

	VerifiedReceiptsFilter = 'VERIFIED_RECEIPTS_FILTER',
	AllReceiptsFilter = 'ALL_RECEIPTS_FILTER',

	InProgressWaybillsFilter = 'IN_PROGRESS_WAYBILLS_FILTER',
	AllWaybillsFilter = 'ALL_WAYBILLS_FILTER',

	InProgressCarrierWaybillsFilter = 'IN_PROGRESS_CARRIER_WAYBILLS_FILTER',
	CarrierWaybillsFilter = 'CARRIER_WAYBILLS_FILTER',

	PendingInvoiceFilter = 'PENDING_INVOICE_FILTER',
	CompletedInvoiceFilter = 'COMPLETED_INVOICE_FILTER',

	AllStatementItemsFilter = 'ALL_STATEMENT_ITEMS_FILTER',
	PendingStatementsFilter = 'PENDING_STATEMENTS_FILTER',
	CompletedStatementsFilter = 'COMPLETED_STATEMENTS_FILTER',

	ReviewVerificationsFilter = 'REVIEW_VERIFICATIONS_FILTER',
	DealWithVerificationsFilter = 'DEAL_WITH_VERIFICATIONS_FILTER',
	FinishedVerificationsFilter = 'FINISHED_VERIFICATIONS_FILTER',
	CanceledVerificationsFilter = 'CANCELED_VERIFICATIONS_FILTER',

	DispatchOrdersFilter = 'DISPATCH_ORDERS_FILTER',
	DispatchedOrdersFilter = 'DISPATCHED_ORDERS_FILTER',

	PendingReceivablesFilter = 'PENDING_RECEIVABLES_FILTER',
	ReceivedReceivablesFilter = 'RECEIVED_RECEIVABLES_FILTER',

	AnomaliesFilter = 'ANOMALIES_FILTER',
	ProcessedAnomaliesFilter = 'PROCESSED_ANOMALIES_FILTER',

	CarrierStatementItemsFilter = 'CARRIER_STATEMENT_ITEMS_FILTER',

	OtherFeeDealWithVerificationsFilter = 'OTHER_FEE_DEAL_WITH_VERIFICATIONS_FILTER',
	OtherFeeFinishedVerificationsFilter = 'OTHER_FEE_FINISHED_VERIFICATIONS_FILTER',

	CarriesFilter = 'CARRIES_FILTER',

	InternalInternalWaybillFilter = 'INTERNAL_INTERNAL_WAYBILL_FILTER',
	InternalInProgressInternalWaybillFilter = 'INTERNAL_INPROGRESS_INTERNAL_WAYBILL_FILTER',

	OwnInternalWaybillFilter = 'OWN_INTERNAL_WAYBILL_FILTER',
	OwnInProgressInternalWaybillFilter = 'OWN_INPROGRESS_INTERNAL_WAYBILL_FILTER',

	CarrierPaidPayablesFilter = 'CARRIER_PAID_PAYABLES_FILTER',

	CarrierPendingPayablesFilter = 'CARRIER_PENDING_PAYABLES_FILTER',

	CarrierPendingInvoiceFilter = 'CARRIER_PENDING_INVOICE_FILTER',
	CarrierCompleteInvoiceFilter = 'CARRIER_COMPLETE_INVOICE_FILTER',
	CarrierPendingStatementFilter = 'CARRIER_PENDING_STATEMENT_FILTER',
	CarrierCompletedStatementFilter = 'CARRIER_COMPLETED_STATEMENT_FILTER',
	MyReferReviewFilter = 'MY_REFER_REVIEW_FILTER',
	MyEndReviewFilter = 'MY_END_REVIEW_FILTER',

	PendingTransportPlatformPayablesFilter = 'PENDING_TRANSPORT_PLATFORM_PAYABLES_FILTER',
	PaidTransportPlatformPayablesFilter = 'PAID_TRANSPORT_PLATFORM_PAYABLES_FILTER',

	PendingPlatformInvoiceFilter = 'PENDING_PLATFORM_INVOICE_FILTER',
	RejectedPlatformInvoiceFilter = 'REJECTED_PLATFORM_INVOICE_FILTER',
	TransactionListFilter = 'TRANSACTION_LIST_FILTER',

	CanceledAuditFilter = 'CANCELED_AUDIT_FILTER',

	Dashboard = 'DASHBOARD',

	IndentsPayOrderFilter = 'INDENTS_PAY_ORDER_FILTER'
}

export enum TableStorageKey {
	InprogressWaybillTableFilter = 'INPROGRESS_WAYBILL_TABLE_FILTER',
	CarrierCompleteInvoiceTableFilter = 'CARRIER_COMPLETE_INVOICE_TABLE_FILTER',
	CarrierPendingInvoiceTableFilter = 'CARRIER_PENDING_INVOICE_TABLE_FILTER',
	CarrierPaidPayablesTableFilter = 'CARRIER_PAID_PAYABLES_TABLE_FILTER',
	CarrierPendingPayablesTableFilter = 'CARRIER_PENDING_PAYABLE_TABLE_FILTER',
	CarrierCompletedStatementTableFilter = 'CARRIER_COMPLETED_STATEMENT_TABLE_FILTER',
	CarrierPendingStatementTableFilter = 'CARRIER_PENDING_STATEMENT_ITEMS_TABLE_FILTER',
	CarrierStatementItemsTableFilter = 'CARRIER_STATEMENT_ITEMS_TABLE_FILTER',
	TransitingOrdersTableFilter = 'TRANSITING_ORDERS_TABLE_FILTER',
	DispatchOrdersTableFilter = 'DISPATCH_ORDERS_TABLE_FILTER',
	AllWaybillsTableFilter = 'ALL_WAYBILLS_TABLE_FILTER',
	InternalInternalWaybillTableFilter = 'INTERNAL_INTERNAL_WAYBILL_TABLE_FILTER',
	InternalInProgressInternalWaybillTableFilter = 'INTERNAL_INPROGRESS_INTERNAL_WAYBILL_TABLE_FILTER',
	CarrierWaybillsTableFilter = 'CARRIER_WAYBILLS_TABLE_FILTER',
	InProgressCarrierWaybillsTableFilter = 'IN_PROGRESS_CARRIER_WAYBILLS_TABLE_FILTER',
	AllReceiptsTableFilter = 'ALL_RECEIPTS_TABLE_FILTER',
	VerifiedReceiptsTableFilter = 'VERIFIED_RECEIPTS_TABLE_FILTER',
	AnomaliesTableFilter = 'ANOMALIES_TABLE_FILTER',
	AllStatementItemsTableFilter = 'ALL_STATEMENT_ITEMS_TABLE_FILTER',
	PendingStatementsTableFilter = 'PENDING_STATEMENTS_TABLE_FILTER',
	CompletedStatementsTableFilter = 'COMPLETED_STATEMENTS_TABLE_FILTER',
	PendingInvoiceTableFilter = 'PENDING_INVOICE_TABLE_FILTER',
	CompletedInvoiceTableFilter = 'COMPLETED_INVOICE_TABLE_FILTER',
	PendingReceivablesTableFilter = 'PENDING_RECEIVABLES_TABLE_FILTER',
	ReceivedReceivablesTableFilter = 'RECEIVED_RECEIVABLES_TABLE_FILTER',

	FinishedVerificationsTableFilter = 'FINISHED_VERIFICATIONS_TABLE_FILTER',
	DealWithVerificationsTableFilter = 'DEAL_WITH_VERIFICATIONS_TABLE_FILTER',
	ReviewVerificationsTableFilter = 'REVIEW_VERIFICATIONS_TABLE_FILTER',
	CanceledVerificationsTableFilter = 'CANCELED_VERIFICATIONS_TABLE_FILTER',

	OtherFeeDealWithVerificationsTableFilter = 'OTHER_FEE_DEAL_WITH_VERIFICATIONS_TABLE_FILTER',
	OtherFeeFinishedVerificationsTableFilter = 'OTHER_FEE_FINISHED_VERIFICATIONS_TABLE_FILTER',
	OtherFeeCancellationVerificationsTableFilter = 'OTHER_FEE_CANCELLATION_VERIFICATIONS_TABLE_FILTER',

	PendingTransportPlatformPayableTableFilter = 'PENDING_TRANSPORT_PLATFORM_PAYABLE_TABLE_FILTER',
	PaidTransportPlatformPayableTableFilter = 'PAID_TRANSPORT_PLATFORM_PAYABLE_TABLE_FILTER',
	TransportPlatformCompleteTableFilter = 'TRANSPORT_PLATFORM_COMPLETE_TABLE_FILTER',

	RejectedTransportPlatformInvoiceTableFilter = 'REJECTED_TRANSPORT_PLATFORM_INVOICE_TABLE_FILTER',

	TransactionTableFilter = 'TRANSACTION_TABLE_FILTER',

	CanceledAuditTableFilter = 'CANCELED_AUDIT_TABLE_FILTER'
}
