# Part 1: Running a Docker Container with TimescaleDB, populating and querying data directly

## TimescaleDB tutorial series
https://www.youtube.com/watch?v=vm_hcP4CDbA&list=PLsceB9ac9MHScvW5NBuCaYafW87hP-Gi2&index=1&pp=iAQB

## Terms
Hypertable - regular table but with auto time/space partitioning, extra functionality, and TimescaleDB manages it for you.

Chunk - child tables inside hypertable. Organized via time. Set chunk time e.g. one day of data

Time Bucket - creates grouping of time data over specified interval so you can create an aggregate of that data pertaining to that time interval

Continuous Aggregate - uses automatically updated data, like updated time buckets, e.g. Two steps to utilize - 1. Create the continuous aggregate. 2. Set up automatic refresh policy for aggregate. Benefits of using include speedy queries

Refresh Policy - materializes new data into the continuous aggregate for querying

Compression - compresses chunks. default is to use time column unless otherwise specified. Reduces file size and speeds querying of historical data

Retention policy - deletes older data. make sure to offset from continuous aggregate time frame.


## Useful commands
See ports in use
```shell
sudo netstat -tulpn | grep LISTEN
```

Kill service using port
-k <port #>/<type>
```shell
sudo fuser -k 81/udp
```

## Database client
Table plus?

D Beaver
https://dbeaver.io/download/


## Timescale DB container
https://hub.docker.com/r/timescale/timescaledb
V 2.13.1-pg16
timescale/timescaledb:2.13.1-pg16


## Commands for experimenting with timescaledb in docker

```shell
docker pull timescale/timescaledb:2.13.1-pg16
```

May need to add 127.0.0.1:5432 to the -p option? NEED PASSWORD. See below

```shell
docker run -d --name timescaledb -v /timescale-data/:/var/lib/postgresql/data -p 127.0.0.1:5432:5432 timescale/timescaledb:2.13.1-pg16
```

From online text tutorial on timescale.com

```shell
docker run -d --name timescaledb -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:2.13.1-pg16
```


Connect to a container instance
-U is the default postgres user

```shell
psql -p 5432 -h localhost -U postgres
```

Connect through the container itself
```shell
docker exec -it timescaledb psql -U postgres
```

use docker stop and start to apply those actions to container, e.g.
```shell
docker start timescaledb
```