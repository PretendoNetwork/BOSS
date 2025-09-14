# Seeding

The CLI of the BOSS server can seed data from this folder. This folder contains some default tasksheets that are expected from the system.

```sh
npm run cli -- import seed
```

## Notes about seeding

1. Only files referenced by tasksheets are processed
2. You can safely run seeding as many times as seeded, it ignores unchanged data.
3. Files must be prefixed with their Data ID - followed by a `.`. For example: `39015.Festival.byaml` (Everything after the first dot is not enforced, name it appropiately)
4. Tasksheets must follow this syntax: `1.<BOSS_APP_ID>.<TASKNAME>.taskheet.xml`
5. Seeding only adds and updates data. Tasksheets or files that are removed are not deleted.
