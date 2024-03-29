export const CURRENCY_GRID = ['name', 'symbol', 'code', 'created_at', 'updated_at'];
export const ADDRESS_GRID = ['name', 'type', 'location', 'description', 'city', 'phone_number', 'created_at', 'updated_at'];
export const PAYMENT_TERM_GRID = ['type', 'days', 'created_at', 'updated_at'];
export const PAYMENT_METHOD_GRID = ['name', 'description', 'note', 'created_at', 'updated_at'];
export const VAT_GRID = ['name', 'percentage', 'created_at', 'updated_at'];
export const COUNTRY_GRID = ['name', 'iso_code', 'phone_code', 'created_at', 'updated_at'];
export const BANK_ACCOUNT_GRID = ['name', 'ac', 'iban', 'swift_bic', 'note', 'address', 'created_at', 'updated_at'];
export const NUMBER_SEQUENCE_GRID = ['seq_name', 'seq_prx', 'seq_number', 'comment', 'type', 'created_at', 'updated_at'];
export const LANGUAGE_GRID = ['name', 'created_at', 'updated_at'];
export const SLAVE_GRID = ['part_number', 'quantity', 'discount', 'unit_price', 'vat', 'grand_total', 'description', 'created_at', 'updated_at'];
export const CUSTOMER_GRID = ['name', 'email', 'phone_number', 'web', 'cr_number', 'vat_number', 'type', 'payment_terms', 'note', 'address'];
export const SUPPLIER_GRID = ['name', 'email', 'phone_number', 'web', 'cr_number', 'vat_number', 'type', 'payment_terms', 'note', 'address'];
export const PRODUCT_GRID = ['name', 'part_number', 'serialized_item', 'category', 'note', 'description', 'created_at', 'updated_at'];
export const COMPANY_SETTINGS_GRID = ['name', 'part_number', 'serialized_item', 'category', 'note', 'description', 'created_at', 'updated_at'];
export const SALES_ORDER_GRID = ['so_num', 'grand_total', 'created_at'];
export const INVOICE_GRID = ['inv_num', 'part_number', 'item_number', 'vat_total', 'grand_total', 'created_at'];
export const PURCHASE_ORDER_GRID = ['po_num', 'total_with_vat', 'vat_total', 'grand_total', 'created_at'];
export const WARE_HOUSE_GRID = ['name', 'part_number', 'serial', 'quantity', 'location', 'address', 'description', 'created_at'];
export const CASH_RECEIPT_GRID = ['payment_mode', 'amount', 'note', 'created_at'];
export const CONTACT_GRID = ['name', 'phone_number', 'created_at'];
export const DELIVERY_ORDER_GRID = ['grand_total', 'note', 'signature', 'created_at'];
export const RECEIVE_ORDER_GRID = ['signature', 'note', 'created_at'];
export const CATEGORY_GRID = ['name', 'description', 'note', 'created_at'];
export const UNIT_GRID = ['name', 'description', 'created_at'];
export const REQUEST_GRID = ['user_name', 'name', 'date', 'due_date', 'delivery_date', 'description', 'created_at'];
export const REQUEST_DETAIL_GRID = ['quantity','item_delivery_days', 'description', 'created_at'];
export const TERM_APPLIED_GRID = ['created_at'];
export const TERM_CONDITIONS_GRID = ['term_condition','comments', 'created_at'];