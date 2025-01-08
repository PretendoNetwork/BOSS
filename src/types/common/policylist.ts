type TaskLevel = 'STOPPED' | 'HIGH' | 'EXPEDITE'; // TODO - Find all of these and document their uses

export type PolicyList = {
	MajorVersion: number;
	MinorVersion: number;
	ListId: number;
	DefaultStop: boolean;
	ForceVersionUp: boolean;
	UpdateTime: string;
	Priority: {
		TitleId: string;
		TaskId: string;
		Level: TaskLevel;
		Persistent?: boolean;
		Revive?: boolean;
	}[];
};
