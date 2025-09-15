# Seeding

The CLI of the BOSS server can seed data from this folder. This folder contains some default tasksheets that are expected from the system.

```sh
npm run cli -- import seed
```

## Notes about seeding

1. Only files referenced by tasksheets are processed
2. You can safely run seeding as many times as seeded, it ignores unchanged data.
3. Unencrypted task files must follow this syntax: `<DATA_ID>.<FILENAME>` - For example: `39015.Festival.byaml` (The name unused, but good practice to set it appropiately)
4. Encrypted task files must follow this syntax: `<DATA_ID>.enc.<FILENAME>` - For example: `39015.enc.Festival.byaml` (The name unused, but good practice to set it appropiately)
5. Tasksheets must follow this syntax: `1.<BOSS_APP_ID>.<TASKNAME>.taskheet.xml`
6. Seeding only adds and updates data. Tasksheets or files that are removed are not deleted.
