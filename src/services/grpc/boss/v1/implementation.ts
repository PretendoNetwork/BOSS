import { listKnownBOSSApps } from '@/services/grpc/boss/v1/list-known-boss-apps';
import { listTasks } from '@/services/grpc/boss/v1/list-tasks';
import { registerTask } from '@/services/grpc/boss/v1/register-task';
import { updateTask } from '@/services/grpc/boss/v1/update-task';
import { deleteTask } from '@/services/grpc/boss/v1/delete-task';
import { listFiles } from '@/services/grpc/boss/v1/list-files';
import { uploadFile } from '@/services/grpc/boss/v1/upload-file';
import { updateFileMetadata } from '@/services/grpc/boss/v1/update-file-metadata';
import { deleteFile } from '@/services/grpc/boss/v1/delete-file';
import type { BOSSServiceImplementation } from '@pretendonetwork/grpc/boss/boss_service';

export const bossServiceImplementationV1: BOSSServiceImplementation = {
	listKnownBOSSApps,
	listTasks,
	registerTask,
	updateTask,
	deleteTask,
	listFiles,
	uploadFile,
	updateFileMetadata,
	deleteFile
};
