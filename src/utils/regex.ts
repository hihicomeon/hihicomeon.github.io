export const PHONE_NUMBER_REGEX = /^1\d{10}$/

export const AT_LEAST_ONE_LETTER = /[A-Za-z]+/

export const AT_LEAST_ONE_NUMBER = /\d+/

export const MONEY_MAX_TWO_POINT_AND_MAX_ELEVEN_INT =
	/(^[0-9](\d{0,9})?(\.\d{0,2})?$)|(^\d{0,10}\.\d{0,2}$)/

export const MAX_THREE_POINT = /(^[0-9](\d+)?(\.\d{0,3})?$)|(^\d\.\d{0,3}$)/

export const UN_ZERO_POSITIVE_INT = /^\+?[1-9]\d*$/

export const BLANK_REGEX = /\s/

export const PERCENTAGE = /^((100)|(\d{0,2}(\.\d{0,2})?))$/

export const VERIFICATION_NUMBER_REGEX = /^\d{0,6}$/

export const IMAGE_REGEX = /.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/

export const NUMBER_REGEX = /^[\d.]+$/
export const ID_CARD_REGEX = /(^\d{17}([0-9]|[xX]))$/

export const PAY_PASSWORD_REGEX = /^[\d]{6}$/

export const PLATE_REGEX =
	/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/

export const MONEY_LENGTH_REGEX = /^\d{1,13}(\.\d{1,2})?$/

export const NEWCHIWAN_MONEY_LENGTH_REGEX = /^\d{1,8}(\.\d{1,2})?$/

export const INT_NUMBER_REGEX = /^\d+$/

export const REMITTANCE_AMOUNT_REGEX = /(^[0-9](\d{0,5})?(\.\d{0,2})?$)/

export const MAX_TEN_POINT_AND_MAX_ELEVEN_INT =
	/(^[0-9](\d{0,9})?(\.\d{0,10})?$)|(^\d{0,10}\.\d{0,10}$)/

export const NUMBER_INTEGER = /^[1-9]\d*$/
