#!/bin/bash

# Configuration variables
source .devcontainer/.env
DB_PATH=".devcontainer/db_config/init.sql"

# Command to connect to the Postgres container server and execute the query
echo "🤝 Connecting to the Postgres container..."


# psql "postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST_NAME/$POSTGRES_DB_NAME"
# psql -h localhost -p 5432 -U sqlroot -W sqlroot
# pg_dump -U sqlroot -h localhost -p 5432 xample_db > tecmintdb.sql
# Consultar si la base de datos ya existe

#pg_dump -U $POSTGRES_USER -d xample_db -f xample_db.sql

#psql "postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST_NAME" -c "CREATE DATABASE IF NOT EXISTS xample_db;"

#pg_dump -U $POSTGRES_USER -h $POSTGRES_HOST_NAME -p 5432 $POSTGRES_DB_NAME > $DB_PATH ---se crea un dump

#psql tecmintdb < tecmintdb.sql

#pg_restore -U $POSTGRES_USER -h $POSTGRES_HOST_NAME -p 5432 $POSTGRES_DB_NAME < $DB_PATH ---se restaura un dump cuando no es texto plano

#psql -U $POSTGRES_USER -h $POSTGRES_HOST_NAME -p 5432 -d $POSTGRES_DB_NAME < $DB_PATH    ---se restaura un dump de testo plano

#psql -U $POSTGRES_USER -h $POSTGRES_HOST_NAME -p 5432 -d $POSTGRES_DB_NAME < $DB_PATH
#pg_restore -U $POSTGRES_USER:$POSTGRES_PASSWORD  -h $POSTGRES_HOST_NAME -p 5432 -d $POSTGRES_DB_NAME < $DB_PATH
#psql -U $POSTGRES_USER -h $POSTGRES_HOST_NAME -p 5432 -d $POSTGRES_DB_NAME < $DB_PATH
