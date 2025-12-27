import { listKnownBOSSApps } from '@/services/grpc/boss/v2/list-known-boss-apps';
import { listTasks } from '@/services/grpc/boss/v2/list-tasks';
import { registerTask } from '@/services/grpc/boss/v2/register-task';
import { updateTask } from '@/services/grpc/boss/v2/update-task';
import { deleteTask } from '@/services/grpc/boss/v2/delete-task';
import { deleteFile } from '@/services/grpc/boss/v2/delete-file';
import { listFilesWUP } from '@/services/grpc/boss/v2/list-files-wup';
import { uploadFileWUP } from '@/services/grpc/boss/v2/upload-file-wup';
import { listFilesCTR } from '@/services/grpc/boss/v2/list-files-ctr';
import { uploadFileCTR } from '@/services/grpc/boss/v2/upload-file-ctr';
import { updateFileMetadataCTR } from '@/services/grpc/boss/v2/update-file-metadata-ctr';
import { updateFileMetadataWUP } from '@/services/grpc/boss/v2/update-file-metadata-wup';
import type { BossServiceImplementation } from '@pretendonetwork/grpc/boss/v2/boss_service';

export const bossServiceImplementationV2: BossServiceImplementation = {
	listKnownBOSSApps,
	listTasks,
	registerTask,
	updateTask,
	deleteTask,
	deleteFile,
	listFilesWUP,
	uploadFileWUP,
	listFilesCTR,
	uploadFileCTR,
	updateFileMetadataCTR,
	updateFileMetadataWUP
};
