import { BOSSServiceImplementation } from '@pretendonetwork/grpc/boss/boss_service';
import { listKnownBOSSApps } from '@/services/grpc/boss/list-known-boss-apps';
import { listTasks } from '@/services/grpc/boss/list-tasks';
import { registerTask } from '@/services/grpc/boss/register-task';
import { updateTask } from '@/services/grpc/boss/update-task';
import { deleteTask } from '@/services/grpc/boss/delete-task';
import { listFiles } from '@/services/grpc/boss/list-files';
import { uploadFile } from '@/services/grpc/boss/upload-file';
import { updateFileMetadata } from '@/services/grpc/boss/update-file-metadata';
import { deleteFile } from '@/services/grpc/boss/delete-file';

export const implementation: BOSSServiceImplementation = {
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
