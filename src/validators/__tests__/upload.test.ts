import { RuleObject } from 'antd/lib/form'
import {
	validateUpload,
	uploadUrlType,
	validateUploadRequired
} from '../upload'

describe('validateUpload', () => {
	it('测试正常上传,通过校验', async () => {
		await expect(
			validateUpload(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'done'
					}
				] as uploadUrlType,
				jest.fn
			)
		).resolves.toBe(undefined)
	})

	it('测试上传进行时,不可通过', async () => {
		await expect(
			validateUpload(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'uploading'
					}
				] as uploadUrlType,
				jest.fn
			)
		).rejects.toBe('上传中')
	})

	it('测试上传失败时,不可通过', async () => {
		await expect(
			validateUpload(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'error'
					}
				] as uploadUrlType,
				jest.fn
			)
		).rejects.toBe('上传失败 请重新上传')
	})
})

describe('validateUploadRequired', () => {
	it('测试正常上传,通过校验', async () => {
		await expect(
			validateUploadRequired(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'done'
					}
				] as uploadUrlType,
				jest.fn
			)
		).resolves.toBe(undefined)
	})

	it('测试上传进行时,不可通过', async () => {
		await expect(
			validateUploadRequired(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'uploading'
					}
				] as uploadUrlType,
				jest.fn
			)
		).rejects.toBe('上传中')
	})

	it('测试上传失败时,不可通过', async () => {
		await expect(
			validateUploadRequired(
				{} as RuleObject,
				[
					{
						status: 'done'
					},
					{
						status: 'done'
					},
					{
						status: 'error'
					}
				] as uploadUrlType,
				jest.fn
			)
		).rejects.toBe('上传失败 请重新上传')
	})

	it('测试未上传时,不可通过', async () => {
		await expect(
			validateUploadRequired({} as RuleObject, [] as uploadUrlType, jest.fn)
		).rejects.toBe('请上传附件')
	})
})
