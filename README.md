# BOSS

Handles all BOSS (Background Online Storage Service) related tasks for the Pretendo network.

## What does BOSS handle?
- SpotPass on 3DS
- Tasksheets and policy files for both WiiU and 3DS
- Streetpass relay

## Configuration

Configurations are loaded through environment variables. `.env` files are supported.

| Environment variable                         | Description                                                       | Default                                       |
| -------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| `PN_BOSS_CONFIG_HTTP_PORT`                   | The HTTP port the server listens on                               | None                                          |
| `PN_BOSS_CONFIG_LOG_FORMAT`                  | What logging format to use, possible options: `pretty` or `json`  | `pretty`                                      |
| `PN_BOSS_CONFIG_LOG_LEVEL`                   | What log level to use                                             | `info`                                        |
| `PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY`           | The BOSS WiiU AES key, needs to be dumped from a console          | None                                          |
| `PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY`          | The BOSS WiiU HMAC key, needs to be dumped from a console         | None                                          |
| `PN_BOSS_CONFIG_BOSS_3DS_AES_KEY`            | The BOSS 3DS AES key, needs to be dumped from a console           | None                                          |
| `PN_BOSS_CONFIG_MONGO_CONNECTION_STRING`     | MongoDB connection string                                         | None                                          |
| `PN_BOSS_CONFIG_GRPC_BOSS_SERVER_ADDRESS`    | Address for the GRPC server to listen on                          | None                                          |
| `PN_BOSS_CONFIG_GRPC_BOSS_SERVER_PORT`       | Port for the GRPC server to listen on                             | None                                          |
| `PN_BOSS_CONFIG_GRPC_BOSS_SERVER_API_KEY`    | API key that services will use to connect to the BOSS GRPC server | None                                          |
| `PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_ADDRESS` | Address of the account GRPC server                                | None                                          |
| `PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_PORT`    | Port of the account GRPC server                                   | None                                          |
| `PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_API_KEY` | API key of the account GRPC server                                | None                                          |
| `PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_ADDRESS` | Address of the friends GRPC server                                | None                                          |
| `PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_PORT`    | Port of the friends GRPC server                                   | None                                          |
| `PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_API_KEY` | API key of the friends GRPC server                                | None                                          |
| `PN_BOSS_CONFIG_S3_ENDPOINT`                 | S3 server endpoint                                                | None                                          |
| `PN_BOSS_CONFIG_S3_REGION`                   | S3 server region                                                  | None                                          |
| `PN_BOSS_CONFIG_S3_BUCKET`                   | S3 server bucket                                                  | None                                          |
| `PN_BOSS_CONFIG_S3_ACCESS_KEY`               | S3 access key                                                     | None                                          |
| `PN_BOSS_CONFIG_S3_ACCESS_SECRET`            | S3 access key secret                                              | None                                          |
| `PN_BOSS_CONFIG_CDN_DISK_PATH`               | Storage path for the CDN, use as alternative for S3               | None                                          |
| `PN_BOSS_CONFIG_STREETPASS_RELAY_ENABLED`    | Should Streetpass Relay be enabled?                               | `false`                                       |
| `PN_BOSS_CONFIG_DOMAINS_NPDI`                | What domain should the NPDI component use?                        | `npdi.cdn.pretendo.cc`                        |
| `PN_BOSS_CONFIG_DOMAINS_NPDL`                | What domain should the NPDL component use?                        | `npdl.cdn.pretendo.cc`                        |
| `PN_BOSS_CONFIG_DOMAINS_NPFL`                | What domain should the NPFL component use?                        | `npfl.c.app.pretendo.cc`                      |
| `PN_BOSS_CONFIG_DOMAINS_NPPL`                | What domain should the NPPL component use?                        | `nppl.app.pretendo.cc,nppl.c.app.pretendo.cc` |
| `PN_BOSS_CONFIG_DOMAINS_NPTS`                | What domain should the NPTS component use?                        | `npts.app.pretendo.cc`                        |
| `PN_BOSS_CONFIG_DOMAINS_SPR`                 | What domain should the SPR component use?                         | `service.spr.app.pretendo.cc`                 |
 
## S3 server
The S3 server is optional, you can set `PN_BOSS_CONFIG_CDN_DISK_PATH` if you want to use a local folder as CDN source instead.
