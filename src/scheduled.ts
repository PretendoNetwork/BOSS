import { CronJob } from 'cron';
import { logger } from './logger';
import { deleteOldCECData } from './database';
import { config } from './config-manager';
import { bulkDeleteCdnFiles } from './cdn';

async function runCleanSprData(): Promise<void> {
	const maxAgeMs = 14 * 24 * 60 * 60 * 1000; // 14 days
	const timestampInPast = new Date(Date.now() - maxAgeMs);
	const processingLimit = 1000; // S3 only allows 1k objects at a time
	let totalRemoved = 0;

	logger.info('Starting SPR data cleanup');
	let hasDataToDelete = true;
	while (hasDataToDelete) {
		const deletedData = await deleteOldCECData(timestampInPast, processingLimit);
		logger.info(`Deleted one batch of ${deletedData.length} CEC data objects, preparing CDN removal`);

		await bulkDeleteCdnFiles('spr', deletedData.map(v => v.file_key));
		logger.info(`CDN removal processed!`);

		totalRemoved += deletedData.length;
		hasDataToDelete = deletedData.length === processingLimit;
	}

	logger.success(`Completed cleanup of ${totalRemoved}`);
}

function registerSchedule(schedule: string, name: string, fn: () => void | Promise<void>): void {
	CronJob.from({
		cronTime: schedule,
		onTick: async () => {
			try {
				const result = fn();
				await result;
			} catch (err) {
				logger.error(`Error in schedule ${name}: ${err}`);
			}
		},
		start: true
	});
	logger.info(`Added schedule ${name} for ${schedule}`);
}

export async function setupScheduler(): Promise<void> {
	if (config.spr.cleanOldData) {
		registerSchedule('0 2 * * *', 'clean-spr-data', runCleanSprData);
	}
}
